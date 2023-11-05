# 参数（Parameter）

> 扩展库封装对参数的一系列操作

## 通过 Id 获取参数(Get parameter by parameter element id )

```csharp
Parameter parameter = element.GetParameter(new ElementId(-122344));

```

当然也可以使用扩展库内置对象进行获取

```csharp
Parameter parameter = element.GetParameter(Constants.BuiltInParameters.View.Name);

```

## 获取参数的值(Get parameter value)

```csharp
//Obtain parameter value based on StorageType
int value= element.GetParameterValue<int>("Width");

```

## 设置参数的值(Set Parameter Value)

```csharp
//Set parameter value based on StorageType
element.SetParameterValue<int>("Width",10);
```
