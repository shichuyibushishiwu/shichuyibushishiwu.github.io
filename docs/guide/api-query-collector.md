# 集合内的查询

::: Tip Introduction
`集合内的查询`将查询范围锁定在列表中，所以我们需要已知的图元集合
:::

### 按类型查询

```csharp
FilteredElementCollector elements = document.GetElementsInCollector(typeof(Wall),elements);
```
