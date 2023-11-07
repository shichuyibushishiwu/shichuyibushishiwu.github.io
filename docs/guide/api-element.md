# 图元（Element）

### 获取元素类型的数量（Get Element Type Instances Count）

将传入的元素类型分类，并传回键值对结果，键对应各类元素类型，值对应各类元素的数目：

```C#
IDictionary<ElementType, int> countResult = GetElementTypeInstancesCount<T>(this IEnumerable<ElementType> types);
```

### 获取实例类型（Has Instances）

筛选出在项目中存在有实例的元素类型：

```C#
IEnumerable<ElementType> instancesTypes = HasInstances<T>(this IEnumerable<ElementType> types);
```
