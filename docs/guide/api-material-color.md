# 颜色（Color）

### Revit 颜色转 HTML 颜色

讲颜色转换为 Html 字符串颜色表现形式

```csharp
string color = color.ConvertToHTML();
```

### 系统颜色转 Revit 颜色

将系统颜色类转换为 Revit 的颜色类

```csharp
Autodesk.Revit.DB.Color color = color.ConvertToRevitColor();
```

### Revit 颜色比较

确认两个 Revit 颜色是否相同，相同则返回 true，反之返回 false

```csharp
color.EqualTo(color);
```
