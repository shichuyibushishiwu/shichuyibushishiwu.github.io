# 参数（Parameter）

### 获取参数

```csharp
Parameter parameter = element.GetParameter(new ElementId(-122344));
```

当然也可以使用[BuiltinCategories](./api-builtin-catagories.md)进行获取

```csharp
Parameter parameter = element.GetParameter(Constants.BuiltInParameters.View.Name);
```

### 参数读写

金枪鱼提供了两个方法进行参数的读写，但是并不是最建议的方式，因为内部实现会导致装箱和拆箱；

读取参数

```csharp
int value = element.GetParameterValue<int>("Width");
```

写入参数

```csharp
element.SetParameterValue<int>("Width",10);
```
