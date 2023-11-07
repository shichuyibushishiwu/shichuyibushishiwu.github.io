# 视图内的查询

::: tip Introduction
`视图内的查询`几乎拥有`跟文档内的查询`一样的功能，不一样的是，二者的查询范围不一样，视图内查询的范围仅限制于查询的视图内的图元，所以视图内的查询不存在查询类别的功能
:::

### 按类型查询

```csharp
FilteredElementCollector elements = view.GetElement<Wall>();
```
