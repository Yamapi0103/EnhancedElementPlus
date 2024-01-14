<template>
  <div class="basic-form">
    <EnhancedElForm class="my-form" v-model="model" :schema="schema">
      <template #form-submit>
        <el-button class="submit" type="primary" @click="submit">
          提交表單
        </el-button>
      </template>
    </EnhancedElForm>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { EnhancedElForm } from '@src';

const model = ref({
  name: '',
  sex: '',
  hobby: [],
  work: false,
  remark: '',
  isOpen: false,
  birthDate: '',
  experience: ['', ''],
});

const schema = computed(() => [
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
  },
  {
    label: '性別',
    prop: 'sex',
    type: 'radio',
    options: [
      {
        label: '男',
        value: 'male',
      },
      {
        label: '女',
        value: 'female',
      },
    ],
  },
  {
    label: '興趣',
    prop: 'hobby',
    type: 'select',
    attrs: {
      multiple: true,
    },
    options: [
      {
        label: '籃球',
        value: 'basketball',
      },
      {
        label: '桌球',
        value: 'billiards',
      },
      {
        label: '網球',
        value: 'table_tennise',
      },
      {
        label: '羽球',
        value: 'badminton',
      },
    ],
  },
  {
    label: '在職中',
    prop: 'work',
    type: 'checkbox',
  },
  {
    label: '開放履歷',
    prop: 'isOpen',
    type: 'switch',
  },
  {
    label: '生日',
    type: 'datepicker',
    prop: 'birthDate',
    attrs: {
      placeholder: '請選擇日期',
      type: 'date',
      format: 'YYYY/MM/DD',
    },
  },
  {
    label: '年資',
    type: 'datepicker',
    prop: 'experience',
    attrs: {
      type: 'datetimerange',
      rangeSeparator: '到',
      startPlaceholder: '開始日期',
      endPlaceholder: '結束日期',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    label: '備註',
    prop: 'remark',
    type: 'input',
    attrs: {
      type: 'textarea',
    },
  },
  {
    type: 'slot',
    prop: 'submit',
  },
]);

const submit = () => {
  ElMessage({
    message: '送出成功',
    type: 'success',
  });
};
</script>

<style lang="scss" scoped>
.basic-form {
  :deep(.clazz-submit) {
    .el-form-item__content {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
</style>
