<template>
  <el-table
    ref="elTableRef"
    class="enhanced-el-table"
    v-loading="loading"
    :data="data"
    :stripe="stripe"
    :border="border"
    style="width: 100%"
    :cell-style="{ padding: '16px 0' }"
    :height="height"
    :default-expand-all="defaultExpandAll"
    :row-class-name="rowClassName"
    :span-method="spanMethod"
    :header-cell-class-name="headerClassName"
  >
    <el-table-column v-if="showIndex" type="index" width="50">
    </el-table-column>
    <template v-for="(column, index) in columns" :key="index">
      <!-- checkbox -->
      <template v-if="column.type === 'selection'">
        <el-table-column
          v-if="handleColumnVisible(column.show)"
          :key="index"
          :selectable="row => handleSelectable(column.selectable, row)"
          :width="column.width || '50'"
          :min-width="column.minWidth || '100px'"
          type="selection"
        />
      </template>
      <!-- expand row -->
      <template v-else-if="column.type === 'expand'">
        <el-table-column type="expand">
          <template #default="scope">
            <LbRender :scope="scope" :render="column.render" />
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-else-if="handleColumnVisible(column.show)"
        :key="index"
        :class-name="column.className || ''"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth || '100px'"
        :resizable="column.resizable || true"
        :render-header="column.renderHeader"
      >
        <template #default="scope">
          <template v-if="column.type === 'slot'">
            <!-- solt 自定義列-->
            <slot
              :$index="scope.$index"
              :data="scope.row[column.prop]"
              :name="`col-${column.prop}`"
              :row="scope.row"
              :column="column"
            />
          </template>
          <!-- solt Default -->
          <template v-else-if="column.type === 'default'">
            <slot
              :$index="scope.$index"
              :data="scope.row[column.prop]"
              :row="scope.row"
              :column="column"
              name="default"
            />
          </template>
          <template v-else-if="column.type === 'timeLineBreak'">
            <span
              v-if="scope.row[column.prop]"
              v-html="
                scope.row[column.prop]
                  .split(' ')
                  .join('<br/>')
                  .replace('+0800', '')
              "
            ></span>
          </template>
          <span v-else>
            {{ scope.row[column.prop] }}
          </span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script setup lang="ts">
import { ElTable } from 'element-plus';
import { ref, VNode } from 'vue';

interface LbRenderProps {
  scope: any;
  render: (scope: any) => VNode;
}

defineProps<{
  columns: Array<any>;
  data: Array<any>;
  loading?: boolean;
  stripe?: boolean;
  showIndex?: boolean;
  border?: boolean;
  height?: number | string;
  rowClassName?: ({ row, rowIndex }) => string;
  defaultExpandAll?: boolean;
  spanMethod?: ({ row, column, rowIndex, columnIndex }) => {
    rowspan: number;
    colspan: number;
  };
}>();

const elTableRef = ref<HTMLDivElement | null>(null);
const LbRender = (ctx: LbRenderProps) =>
  ctx.render ? ctx.render(ctx.scope) : '';

const handleColumnVisible = (show: Function) => {
  return typeof show === 'function' ? show?.() : true;
};

const handleSelectable = (enable: Function, row: any) => {
  // 讓外部selectable function可接參數row
  return typeof enable === 'function' ? enable?.(row) : () => true;
};
const headerClassName = ({ column }) => {
  return 'column-' + column.property;
};

defineExpose({
  elTableRef,
});
</script>
