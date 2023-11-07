# 参数（Parameter）

金枪鱼提供了两个方法进行参数的读写，但是并不是最建议的方式，因为内部实现会导致装箱和拆箱；

### 参数读写

读取参数

```csharp
int value = element.GetParameter(BuiltInParameters.View.Description).GetParameterValue<string>("hello revit");
```

写入参数

```csharp
element.GetParameter(BuiltInParameters.View.Description).SetParameterValue<string>("hello revit");
```
