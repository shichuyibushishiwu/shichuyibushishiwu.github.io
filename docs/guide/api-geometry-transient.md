# 临时图元

::: tip Introduction
本章节主要介绍金枪鱼对临时图元 `API` 的支持；
:::

## 创建临时图元

临时图元的创建允许传入一个或者一系列的图形对象，扩展方法将会把图形对象转换为一个整体的图元，并返回图元对应的 `ElementId`

```csharp
//传入一个图形对象
document.TransientDisplay(Point.Create(new XYZ(10,10,10)));

//或者传入一个图形对象的集合
document.TransientDisplay(new List<GeometryObject>()
{
    Point.Create(new XYZ(10,10,10)),
    Point.Create(new XYZ(20,20,20)),
});

//允许添加对图形外观的设置
var gs = document.GetElements<GraphicsStyle>().FirstOrDefault(g => g.Name == "red");
document.TransientDisplay(Line.CreateBound(XYZ.Zero, XYZ.Zero + new XYZ(20, 20, 20)), gs.Id);
```

## 修改临时图元

通过返回的临时图元 `ElementId`,可以对其外观或者图形样式进行二次修改。

```csharp
//修改临时图元
ElementId id = document.TransientDisplay(Point.Create(new XYZ(10,10,10)));
document.ResetTransientElementGeometry(id, Line.CreateBound(new XYZ(), new XYZ(10,10,0)));
```

## 删除临时图元

对于创建好的临时图元，仅是保存在内存中，所以当文档关闭后，文档内的临时图元将被删除，如果希望主动删除临时图元，仅需要和往常一样，保存对图元的引用`ElementId` 并通过 `Document` 提供的[方法](https://www.revitapidocs.com/2020/a0461dd1-71d9-4581-1604-2ef8c211dd60.htm)删除即可。

```csharp
//清理所有临时图元
ElementId id = document.TransientDisplay(Point.Create(new XYZ(10,10,10)));
document.NewTransaction(()=>document.Delete(id));
```

当然，扩展包也提供对所有临时图元清除的功能。

```csharp
//清理所有临时图元
document.CleanTransientElements();
```
