# 单位转换（Unit）

::: tip
在 `Revit Api` 的数学计算逻辑中，通常是以英制的形式进行，但是往往我们在代码中以公制的形式进行表达，所以对于从 `API` 中的数据读取，需要进行单位的转换
:::

### 转换为公制

将数值单位转换为公制

```csharp
double result = element.LookupParameter("length")?.AsDouble().ConvertToMillimeters();
```

### 转换为英制

将数值单位转换为英制

```csharp
element.LookupParameter("length")?.Set(1000.ConvertToFeet());
```
