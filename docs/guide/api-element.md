# 图元（Element）

:::tip Notes
这一篇章主要是对图元或者图元类型的一些操作
:::

### 获取参数

```csharp
Parameter parameter = element.GetParameter(new ElementId(-122344));
```

当然也可以使用[BuiltinCategories](./api-builtin-catagories.md)进行获取

```csharp
Parameter parameter = element.GetParameter(Constants.BuiltInParameters.View.Name);
```

### 获取元素类型的数量

将传入的元素类型分类，并传回键值对结果，键对应各类元素类型，值对应各类元素的数目：

```csharp
IDictionary<ElementType, int> countResult = GetElementTypeInstancesCount<T>(this IEnumerable<ElementType> types);
```

### 获取实例类型

筛选出在项目中存在有实例的元素类型：

```csharp
IEnumerable<ElementType> instancesTypes = HasInstances<T>(this IEnumerable<ElementType> types);
```

### 图元碰撞

获取视图中与目标图元发生碰撞的对象

```csharp
FilterElementCollector elements = element.TryGetIntersectElements(view);
```
