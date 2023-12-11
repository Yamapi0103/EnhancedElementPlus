---
map:
  path: /form
---

## 自動初始化表單資料

於schema裡定義defaultValue可自動初始化 model data，
即model可傳入空物件就會自動生成每項form item的鍵值對。
想像一個場景需要動態切換多個表單，每個表單所定義的form-item prop都不一樣
那model data 豈不是要定義好幾份初始值？
但model key 其實就是depend on schema prop。
（defaultValue 不傳則預設為空字串，即如果form-item為el-input 可不傳）
<demo
  src="../components/form/autoInitial.vue"
  title="enhanced el-form"
  desc="於schema中定義defaultValue即可自動將prop綁定到data上，便不需定義data model的初始值">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
