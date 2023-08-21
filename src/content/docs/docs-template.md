---
title: 文章模板
description: 文章模板
next: false
pre: false
---

## 内容

### 文件头信息

```markdown
---
title: <标题>
description: <简洁>
next: <上一篇文章路径>
pre: <下一篇文章路径>
---
```

### 外部文章引用必须在文章顶部标记出处

```markdown
> 原文章: <文章链接>
```

## 格式

### 文件夹以及文件名必须使用英文以及英文分隔符

错误示例：

:::danger[错误]
```text
- 文件夹1
    - 文件1.md
    - 文件2——其他.md
- 文件夹2
    - 文件3.md
```
:::

正确示例：

```text
- dir1
    - file1.md
    - file2-other.md
- dir2
    - file3.md
```

### 禁止在标题后添加无意义的分割线

错误示例：

:::danger[错误]
```markdown
## 标题

---
```
:::

正确示例：

```markdown
## 标题
```

```markdown
## 标题

这是一段文本

---
```

### 中文和数字以及拉丁字母之间保留一个空格

错误示例：

:::danger[错误]
```markdown
---
中文123abc中文
---
```
:::

正确示例：

```markdown
---
中文 123abc 中文
---
```

### 段落之间只保留一个空行表示换行

错误示例：

:::danger[错误]
```markdown
段落1
段落2
```

```markdown
段落1
<大于一个空行>
段落2
```
:::

正确示例：

```markdown
段落1

段落2
```
