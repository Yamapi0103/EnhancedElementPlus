<template>
  <EnhancedElForm v-model="model" :schema="schema" />
</template>

<script setup lang="ts">
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
    type: 'datepicker',
    prop: 'date',
    attrs: {
      placeholder: '請選擇日期',
      type: 'date',
      format: 'YYYY/MM/DD',
    },
  },
  {
    label: 'Date range',
    type: 'datepicker',
    prop: 'dateRange',
    attrs: {
      type: 'daterange',
    },
  },
  {
    label: 'Datetime range',
    type: 'datepicker',
    prop: 'dateTimeRange',
    attrs: {
      type: 'datetimerange',
      rangeSeparator: '到',
      startPlaceholder: '開始日期',
      endPlaceholder: '結束日期',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
]);
</script>
