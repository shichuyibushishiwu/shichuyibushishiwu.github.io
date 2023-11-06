# 颜色（Color）

## Revit 颜色转 HTML 颜色（Revit Color To HTML）

> 讲颜色转换为 Html 字符串颜色表现形式

```csharp
//Convert to html
string color = color.ConvertToHTML();
```

## 系统颜色转 Revit 颜色（Drawing Color To Revit Color）

> 将系统颜色类转换为 Revit 的颜色类

```csharp
// System drawing color convet to revit color
Autodesk.Revit.DB.Color color = color.ConvertToRevitColor();
```

## Revit 颜色比较（Revit Color Equality）

> 确认两个 Revit 颜色是否相同，相同则返回 true，反之返回 false

```csharp
//Check value is equal between two Revit Color
color.EqualTo(color);
```
