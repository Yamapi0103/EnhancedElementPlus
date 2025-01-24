---
map:
  path: /form
realPath: src/__docs__/form/editable.md
---

## 編輯/檢視 表單

由於編輯/檢視頁的組件其實差別只在於編輯頁的表單項可編輯，檢視頁的表單項不可編輯（（廢話
也因為如此，其實只需要編輯頁可。
我們讓第一次進頁面時的操作人可以只看到檢視頁，若需要編輯表單項則點擊表單項即可進行編輯

### 實作方式

enhancedElForm 裡其實就是遍歷 schema 中的 type，並渲染對應的 el-[type]
，如果不傳 type 則表示純顯示內容。故切換顯示與編輯模式就只是在toggle schema 的 type 罷了。
並且我們讓使用者點擊表單項欲編輯時，input 欄位可以自動focus，失焦時恢復檢視模式。

不過slot的表單項由於控制權在外面，需從scoped-slot 解構出isEditing自行判斷呈現方式



### 基本範例

<demo 
  src="../components/form/editableForm.vue"
  title="editable form"
  desc="點擊進入輸入模式的表單">
</demo>

<API src="../components/EnhancedElForm.vue" lang="zh"></API>
