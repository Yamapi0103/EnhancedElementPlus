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
        sex: '',
        hobby: [],
        work: false,
        remark: '',
      },
    };
  },
  computed: {
    schema() {
      return [
        {
          label: '姓名',
          prop: 'name',
          rules: { required: true, message: '請輸入名稱', trigger: 'blur' },
          type: 'input',
        },
        {
          label: '性別',
          prop: 'sex',
          rules: { required: true, message: '請選擇性別', trigger: 'blur' },
          type: 'radio',
          props: {
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
        },
        {
          label: '興趣',
          prop: 'hobby',
          type: 'select',
          attrs: {
            multiple: true,
          },
          props: {
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
                value: 'table tennise',
              },
              {
                label: '羽球',
                value: 'badminton',
              },
            ],
          },
        },
        {
          label: '在職中',
          prop: 'work',
          type: 'checkbox',
        },
        {
          label: '備註',
          prop: 'remark',
          type: 'input',
          attrs: {
            type: 'textarea',
          },
        },
      ];
    },
  },
};
</script>
