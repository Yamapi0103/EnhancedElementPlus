<template>
  <EnhancedElForm ref="formRef" :model="model" :schema="schema" canEditing />
  <el-button @click="submit">送出</el-button>
</template>

<script>
import { ElMessage } from 'element-plus';
import { EnhancedElForm } from '@src';
export default {
  name: 'basic form',
  components: {
    EnhancedElForm,
  },
  data() {
    return {
      model: {
        name: 'Joshua Yeh',
        phone: '0900123456',
        email: '',
        password: '',
      },
    };
  },
  computed: {
    schema() {
      return [
        {
          label: '姓名',
          prop: 'name',
          type: 'input',
          rules: {
            required: true,
            message: '請輸入姓名',
            trigger: 'blur',
          },
        },
        {
          label: '電話',
          prop: 'phone',
          type: 'input',
          attrs: {
            type: 'number',
          },
          rules: [
            {
              required: true,
              message: '請輸入手機',
              trigger: ['blur'],
            },
          ],
        },
        {
          label: '信箱',
          prop: 'email',
          type: 'input',
          rules: [
            {
              required: true,
              message: '請輸入email',
              trigger: ['blur'],
            },
            {
              type: 'email',
              message: '請輸入正確的email',
              trigger: ['blur', 'change'],
            },
          ],
        },
        {
          label: '密碼',
          prop: 'password',
          type: 'input',
          attrs: {
            type: 'password',
            showPassword: true,
          },
        },
      ];
    },
  },
  methods: {
    submit() {
      this.$refs['formRef'].validate((isPass, errorField) => {
        if (isPass) {
          ElMessage({
            message: '提交成功',
            type: 'success',
          });
          return;
        }
        const errKeys = Object.keys(errorField);
        errKeys.forEach(key => {
          this.$refs['formRef'].editingColumn.add(key);
        });
      });
    },
  },
};
</script>
