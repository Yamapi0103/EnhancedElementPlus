<template>
  <EnhancedElTable :data="data" :columns="columns">
    <template #col-hobby="{ row }">
      {{ row.hobby.join('、') }}
    </template>
    <template #col-work="{ row }">
      {{ row.work ? '是' : '否' }}
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
      ],
    };
  },
  computed: {
    columns() {
      return [
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
          minWidth: 100,
          type: 'slot',
        },
        {
          prop: 'remark',
          label: '興趣',
        },
      ];
    },
  },
};
</script>
