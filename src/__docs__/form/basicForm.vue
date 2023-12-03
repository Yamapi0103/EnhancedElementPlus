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
        name: '',
        code: '',
        parent: '',
        remark: '',
        isDeleted: false,
        group: '',
      },
    };
  },
  computed: {
    schema() {
      return [
        {
          label: '名稱',
          prop: 'name',
          rules: { required: true, message: '請輸入代碼名稱', trigger: 'blur' },
          type: 'input',
        },
        {
          label: '姓名',
          prop: 'select',
          rules: { required: true, message: '請輸入群組名稱', trigger: 'blur' },
          type: 'select',
          props: {
            options: [5, 4, 3, 2, 1],
          },
          style: 'width: 240px;',
        },
        {
          label: '代碼編號',
          prop: 'code',
          rules: { required: true, message: '請輸入代碼編號', trigger: 'blur' },
          type: 'input',
        },
        {
          label: '上層',
          prop: 'parent',
          type: 'select',
          attrs: {
            clearable: true,
            filterable: true,
          },
          props: {
            options: [1, 2, 3, 4, 5],
          },
        },
        {
          label: '停用',
          prop: 'isDeleted',
          type: 'checkbox',
        },
        {
          label: '備註',
          prop: 'remark',
          type: 'input',
        },
      ];
    },
  },
};
</script>
