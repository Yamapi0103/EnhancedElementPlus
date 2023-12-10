<template>
  <el-form
    ref="enhancedElFormRef"
    class="enhanced-el-form"
    :inline="isInline"
    :model="model"
    :label-width="labelWidth"
    :disabled="disabled"
    :label-position="labelPosition"
    @keyup.enter="typeof enterSearch === 'function' ? formSubmit() : () => {}"
    @compositionstart="compositionStart = true"
    @compositionend="compositionStart = false"
  >
    <el-form-item
      v-for="config in processedSchema"
      :key="config.prop"
      :rules="config.rules"
      :label="config.label || ''"
      :prop="config.prop"
      :class="`clazz-${config.prop} ${
        canEditing && !config.type ? 'curosr-pointer' : ''
      }`"
      @click="canEditing && clickFormItem(config.prop)"
    >
      <!-- slot 自定義列-->
      <template v-if="config.type === 'slot'">
        <slot :name="`form-${config.prop}`" :config="config" :model="model" />
      </template>
      <!-- render VNode -->
      <template v-else-if="typeof config.render === 'function'">
        <LbRender :scope="model" :render="config.render" />
      </template>
      <template v-else-if="config.type === 'select'">
        <el-select
          v-bind="config.attrs ? config.attrs : {}"
          :style="config.style"
          :size="config.size ? config.size : 'large'"
          v-model="model[config.prop]"
          :disabled="handleDisabled(config.disabled)"
          :placeholder="config.placeholder"
          @change="config.change ? config.change($event, model) : () => {}"
        >
          <el-option
            v-for="(item, index) in config.props.options"
            :key="index"
            :value="typeof item === 'object' ? item.value : item"
            :label="typeof item === 'object' ? item.label : item"
          />
        </el-select>
      </template>
      <template v-else-if="config.type === 'radio'">
        <el-radio-group v-model="model[config.prop]">
          <el-radio
            v-for="(item, index) in config.props.options"
            :key="index"
            :label="item.value"
            >{{ item.label }}</el-radio
          >
        </el-radio-group>
      </template>
      <template v-else-if="config.type?.includes('date')">
        <el-date-picker
          v-model="model[config.prop]"
          :type="config.type"
          value-format="YYYY-MM-DD"
          :size="config.size ? config.size : 'large'"
          :placeholder="config.placeholder"
          :disabled="handleDisabled(config.disabled)"
          v-bind="config.attrs"
        />
      </template>
      <component
        v-else-if="config.type"
        :is="`el-${config.type}`"
        v-model="model[config.prop]"
        :disabled="handleDisabled(config.disabled)"
        v-bind="config.attrs"
      >
      </component>
      <!-- config沒給type則純顯示label -->
      <template v-else>
        {{ model[config.prop] }}
      </template>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { ref, defineEmits, defineExpose, reactive, computed, watch } from 'vue';
import _ from 'lodash';

const props = defineProps({
  model: Object,
  schema: Array,
  labelWidth: String,
  canEditing: Boolean,
  isInline: { type: Boolean },
  enterSearch: Function,
  labelPosition: {
    type: String,
    default: 'right',
    validator: value => ['right', 'left', 'top'].includes(value),
  },
  disabled: Boolean,
});
const emit = defineEmits(['update:model']);
const {
  labelWidth,
  canEditing,
  isInline,
  enterSearch,
  labelPosition,
  disabled,
} = props;

const editingColumn = reactive(new Set([]));
const compositionStart = ref(false);
const enhancedElFormRef = ref(null);
const LbRender = props => (props.render ? props.render(props.scope) : '');

watch(
  () => props.schema,
  list => {
    // model 若帶著入空物件，可依據schema defaultValue給預設值
    if (!list) return;
    for (let i = 0; i < list.length; i++) {
      const formitem = list[i];
      const { prop, defaultValue = '' } = formitem;
      if (!props.model.hasOwnProperty(prop)) {
        props.model[prop] = defaultValue;
      }
    }
  },
  {
    immediate: true,
  },
);

const processedSchema = computed(() => {
  if (!canEditing) return props.schema;
  const newSchema = props.schema.map(config => {
    const { prop, type } = config;
    if (!type) return config; // 本來就沒定義type表示純顯示
    if (!editingColumn.has(prop)) {
      // 獨立處理number 非編輯模式下加上千分位 反之變回數字

      return _.omit(config, 'type');
    }
    return config;
  });
  return newSchema;
});

const formSubmit = () => {
  if (compositionStart) return;
  enterSearch();
};
const clickFormItem = prop => {
  editingColumn.add(prop);
};
const clearEditingColumn = prop => {
  if (!prop) {
    editingColumn.clear();
  } else {
    editingColumn.delete(prop);
  }
};

const handleDisabled = (disabled = false) => {
  return typeof disabled === 'function' ? disabled() : disabled;
};

defineExpose({
  enhancedElFormRef,
  editingColumn,
  clearEditingColumn,
});
</script>

<style lang="scss" scoped>
:deep(.el-form-item) {
  &.curosr-pointer {
    cursor: pointer;
  }
}
</style>
