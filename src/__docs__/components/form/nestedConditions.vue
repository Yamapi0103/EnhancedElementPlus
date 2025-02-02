<template>
  <div class="basic-form">
    <EnhancedElForm v-model="model" :schema="schema"></EnhancedElForm>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { EnhancedElForm } from '@src';

const model = ref({
  name: '',
  sex: '',
});

const schema = computed(() => [
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
    nestedSchema: () => [
      {
        label: '外號',
        prop: 'nickname',
        type: 'input',
      },
    ],
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
    nestedSchema: (value: 'male' | 'female') => {
      if (value === 'female') {
        return [
          {
            label: '三圍',
            prop: 'bwh',
            type: 'input',
          },
        ];
      }
    },
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
]);
</script>

<style lang="scss" scoped></style>
