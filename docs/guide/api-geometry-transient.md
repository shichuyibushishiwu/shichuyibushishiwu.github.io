# 临时图元

> 本章节主要介绍金枪鱼对临时图元的支持

> 用于创建临时图元

> Creates geometry of transient (temporary) element for application display which will not be saved with the model.

```csharp
//展示一个临时显示的点
document.TransientDisplay(Point.Create(new XYZ(10,10,10)));

//展示一根临时显示的线，并通过Id指定线样式
var gs = document.GetElements<GraphicsStyle>().FirstOrDefault(g => g.Name == "Test");
document.TransientDisplay(Line.CreateBound(XYZ.Zero, XYZ.Zero + new XYZ(20, 20, 20)), gs.Id);

//修改临时图元
ElementId id = document.TransientDisplay(Point.Create(new XYZ(10,10,10)));
document.ResetTransientElementGeometry(id, Line.CreateBound(new XYZ(), new XYZ(10,10,0)));

//清理所有临时图元
document.CleanTransientElements();
```
