<template>
  <EnhancedElTable :data="data" :columns="columns">
    <template #col-hobby="{ row }">
      {{ row.hobby.join('、') }}
    </template>
  </EnhancedElTable>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { EnhancedElTable } from '@src';

const data = ref([
  {
    name: '小明',
    sex: '男',
    hobby: ['籃球'],
    work: false,
    remark: '我喜歡打籃球',
  },
  {
    name: '小每',
    sex: '女',
    hobby: ['羽球', '桌球'],
    work: true,
    remark: '我喜歡打羽球和桌球',
  },
  {
    name: '小王',
    sex: '男',
    hobby: ['桌球'],
    work: false,
    remark: '',
  },
  {
    name: '小玉',
    sex: '男',
    hobby: [''],
    work: false,
    remark: '我喜歡幫別人換臉',
  },
]);

const columns = computed(() => [
  {
    prop: 'name',
    label: '姓名',
    minWidth: 70,
  },
  {
    prop: 'sex',
    label: '性別',
    minWidth: 50,
  },
  {
    prop: 'hobby',
    label: '興趣',
    minWidth: 100,
    type: 'slot',
  },
  {
    prop: 'work',
    label: '在職中',
    minWidth: 50,
    formatter: (value: boolean) => (value ? '是' : '否'),
  },
  {
    prop: 'remark',
    label: '興趣',
  },
]);
</script>
