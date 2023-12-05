---
map:
  path: /form
---

## 自動初始化 model data

定義 defaultValue於每一項schema裡，自動初始化 model data綁好key
想像假如可以動態切換多個表單，每個表單須填的的key都不一樣
那model data 豈不是要定義好幾份？
但model key 其實就是depend on schema prop
此範例示範定義好config裡的default value，就能自動將prop綁上model
（default value 預設為空字串，即如果值為字串可不用給default value）
<demo
  src="../components/form/autoInitial.vue"
  title="enhanced el-form"
  desc="於schema中定義defaultValue即可自動將prop綁定到data上，便不需定義data model的初始值">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
