# 选择图元

::: Tip 介绍
在 Revit 开发过程中，选择对象是我们最常用的交互方式之一，通过提示用户选择对象，并在程序中对成功选择的对象进行处理，或者读取对应的信息，以达到我们程序的目的。

选择对象的方式有很多种，包括：

- 单选
- 多选
- 框选

扩展包对选择后的结果进行封装，统一返回值为 `SectionResult<T>` 的泛型，如果成功，则返回值的属性 `Successed` 将为 `true` ；反之，如果用户取消选择时（如按下 `ESC`），此方法会拦截错误（ `Revit API` 会在用户取消选择时抛出异常），此时 `Succeeded` 属性结果为 `false`。
:::

## 单选对象

用户通过鼠标点选的形式进行交互；

```csharp
//提示用户选择对象
SelectionResult<Reference> result = uiDocument.SelectObject(Autodesk.Revit.UI.Selection.ObjectType.Face,prompt:"请选择一个要操作面");

if(result.Successed)
{
    Reference reference = result.Value;
}
```

如果选择的对象是图形，可以选择以下的方式

```csharp
//提示用户选择图元
Element element = uiDocument.SelectElement("请选择一个要操作的图元");

//提示公户选择某个类别的图元
Element element = uiDocument.SelectElement(BuiltinCategory.OST_Walls , "请选择一个要操作的图元");

//较为复杂的过滤条件，也可以通过回调函数进行过滤
Element element = uiDocument.SelectElement((element)=>
    element is FamilyInstan instance && instance.Name = "Test"
 , "请选择一个要操作的图元");
```

## 多选对象

用户通过鼠标多选的形式进行交互，并在结束后点击完成按钮；

```csharp
SelectionResult<IList<Reference>> result = uiDocument.SelectObjects(Autodesk.Revit.UI.Selection.ObjectType.Element);
if(result.Successed)
{
    IList<Reference> references = result.Value;
}
```

## 框选图元

用户通过鼠标框选的形式进行交互；

```csharp
SelectionResult<IList<Element>> result = uiDocument.SelectElementsByRectangle(BuiltinCategory.OST_Walls);
if(result.Successed)
{
    IList<Element> elements = result.Value;
}
```

## 选择点

除了上面介绍的几种获取对象的方式外，`API` 还单独提供了一个获取点的方法

```csharp
SelectionResult<XYZ> result = uiDocument.param("请选择一个点");
if(result.Successed)
{
    IList<Reference> references = result.Value;
}
```
