# 选择图元

## 选择单个构件

> 选取获取单个图元,此处返回自定义选择结果 `SectionResult<T>`；

> 当用户取消选择时（按下 ESC），此方法会拦截错误，返回 SectionResult，且其 Value 属性结果为空，且 Succeeded 属性结果为 false；

```csharp
//Prompts the user to select one object , if the user cancels the operation (for example, through ESC), the method will return null.
SelectionResult<Reference> result=uiDocument.SelectObject(Autodesk.Revit.UI.Selection.ObjectType.Element);
if(result.Successed)
{
    Reference reference = result.Value;
}
```

```csharp
Element element=uiDocument.SelectElement();
```

## 选择多个构件

> 选取获取多个图元，并如上述单个选择扩展，拦截错误，返回指定结果；

```csharp
//Prompts the user to select multiple objects which pass a customer filter.
SelectionResult<IList<Reference>> result=uiDocument.SelectObjects(Autodesk.Revit.UI.Selection.ObjectType.Element);
if(result.Successed)
{
    IList<Reference> references = result.Value;
}
```
