<template>
  <EnhancedElForm :model="model" :schema="schema" />
</template>

<script>
import { EnhancedElForm } from '@src';
export default {
  name: 'basic form',
  components: {
    EnhancedElForm,
  },
  data() {
    return {
      model: {
        date: '',
        dateRange: [],
        dateTimeRange: [],
      },
    };
  },
  computed: {
    schema() {
      return [
        {
          label: 'Date',
          type: 'date',
          prop: 'date',
          placeholder: '請選擇日期',
          attrs: {
            format: 'YYYY/MM/DD',
          },
        },
        {
          label: 'Date range',
          type: 'daterange',
          prop: 'dateRange',
        },
        {
          label: 'Datetime range',
          type: 'datetimerange',
          prop: 'dateTimeRange',
          attrs: {
            rangeSeparator: '到',
            startPlaceholder: '開始日期',
            endPlaceholder: '結束日期',
            valueFormat: 'YYYY-MM-DD HH:mm:ss',
          },
        },
      ];
    },
  },
};
</script>
