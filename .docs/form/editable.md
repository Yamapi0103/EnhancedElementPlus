---
map:
  path: /form
realPath: src/__docs__/form/editable.md
---

## 編輯/檢視切換表單

點擊表單區進行編輯模式

enhancedElForm 裡其實就是遍歷schema中的type，並渲染對應的el-xxx

如果不傳type 則表示純顯示內容

切換顯示與編輯模式就只是在於是否過濾schema的type key罷了

<demo 
  src="../components/form/editableForm.vue"
  title="editable form"
  desc="點擊進入輸入模式的表單">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
