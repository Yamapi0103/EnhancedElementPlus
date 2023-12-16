---
map:
  path: /form
---

## 編輯/檢視 表單

點擊表單區進行編輯模式

enhancedElForm 裡其實就是遍歷 schema 中的 type，並渲染對應的 el-xxx

如果不傳 type 則表示純顯示內容

切換顯示與編輯模式就只是在於是否過濾 schema 的 type key 罷了

不過slot的表單項由於控制權在外面，需從scoped-slot 解構出isEditing自行判斷呈現方式

### 基本範例

<demo 
  src="../components/form/editableForm.vue"
  title="editable form"
  desc="點擊進入輸入模式的表單">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
