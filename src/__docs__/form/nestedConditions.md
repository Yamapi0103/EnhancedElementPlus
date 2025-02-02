---
map:
  path: /form
---

## 巢狀條件是渲染表單

支援nested schema: **nestedSchema**，eg. 姓名底下的外號欄位

也可根據當前的 form item 值決定是否進行條件選染
eg: 性別選女可填寫三圍

(to do: 切換需清除上一個值)


<demo
  src="../components/form/nestedConditions.vue"
  title="enhanced el-form"
  desc="於schema中定義defaultValue即可自動將prop綁定到data上，便不需定義data model的初始值">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
