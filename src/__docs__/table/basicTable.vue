<template>
  <EnhancedElTable :data="data" :columns="columns">
    <template #col-code="{ row }">
      <a :href="`/codes/${row.id}/edit`"> {{ row.code }} </a>
    </template>
    <template #col-isDelete="{ row }">
      {{ row.isDelete ? '是' : '否' }}
    </template>
  </EnhancedElTable>
</template>

<script>
import { EnhancedElTable } from '@src';
export default {
  name: 'basic form',
  components: {
    EnhancedElTable,
  },
  data() {
    return {
      data: [
        {
          id: 501,
          code: '420001',
          name: '420001 官網維護費及手續費收入',
          is_deleted: false,
          remark: '如：改單',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 502,
          code: '420001-1',
          name: '420001-1 PLUS維護費收入',
          is_deleted: false,
          remark: 'Plus 版改單...',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 503,
          code: '420002',
          name: '420002 廣告收入',
          is_deleted: false,
          remark: 'Line, Facebook, Line, 聯盟網等',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 504,
          code: '420003',
          name: '420003 倉儲&運費收入',
          is_deleted: false,
          remark: null,
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 505,
          code: '420004',
          name: '420004 平台系統收入',
          is_deleted: false,
          remark: '如：報價單系統方案年費',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 506,
          code: '420004-1',
          name: '420004-1 平台系統收入-中華電信',
          is_deleted: false,
          remark: null,
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 507,
          code: '420005',
          name: '420005 點數儲值收入',
          is_deleted: false,
          remark: null,
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 508,
          code: '420006',
          name: '420006 設計收入',
          is_deleted: false,
          remark: '客製',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 509,
          code: '420007',
          name: '420007 POS軟體收入',
          is_deleted: false,
          remark: 'POS硬體相關：如POS主機、發票機等等',
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
        {
          id: 510,
          code: '420008',
          name: '420008 POS硬體收入',
          is_deleted: false,
          remark: null,
          parent: '420000 parent (420000)',
          group: '會計科目 (AccountingSubject)',
        },
      ],
    };
  },
  computed: {
    columns() {
      return [
        { prop: 'code', label: '代碼', minWidth: '180', type: 'slot' },
        { prop: 'name', label: '名稱', minWidth: '250' },
        { prop: 'group', label: '類別', minWidth: '230' },
        { prop: 'parent', label: '上層', minWidth: '200' },
        { prop: 'isDelete', label: '停用', minWidth: '50', type: 'slot' },
        { prop: 'remark', label: '備註' },
      ];
    },
  },
};
</script>
