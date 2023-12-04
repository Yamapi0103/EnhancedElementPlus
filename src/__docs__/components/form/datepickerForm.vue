<template>
  <EnhancedElForm :model="model" :schema="schema" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { EnhancedElForm } from '@src';

const model = ref({
  date: '',
  dateRange: [],
  dateTimeRange: [],
});

const schema = computed(() => [
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
]);
</script>
