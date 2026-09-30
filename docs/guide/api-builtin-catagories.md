# 内置类别

::: tip Introduction
扩展库支持引用所有 `Revit` 中的内置类别的`ElementId`
:::

### 内置类别`ElementId`

通过类 `BuiltInCategories` 我们可以直接访问内置类别的`ElementId`,如下：

```csharp
//无效类：返回BuiltInCategory枚举类下的INVALID的Id
BuiltInCategories.Invaild

//门类：OST_Doors
BuiltInCategories.Door

//电缆桥架类：OST_CableTray
BuiltInCategories.CableTray

//电缆桥架配件：OST_CableTrayFitting
BuiltInCategories.CableTrayFitting
....
```

### 按视图规程获取

请注意这是`Revit API` 没有的功能，但是许多开发者在工作中都碰到这个需求，所以我们在扩展包支持了按视图规程`ViewDiscipline`获取内置类别的方法，但是这个方法在多版本中可能存在缺漏，所以如果发现缺少了什么，请及时提`Issues`给我们

```csharp
//传入视图规程
List<ElementId> elementIds = BuiltInCategories.GetCategoryIdsByViewDiscipline(ViewDiscipline viewDiscipline);
```
