# 内置类别

> 扩展库支持引用所有 `Revit` 中的内置类别的`ElementId`

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

扩展包支持按视图规程`ViewDiscipline`获取内置类别

```csharp
//传入视图规程
List<ElementId> elementIds = BuiltInCategories.GetCategoryIdsByViewDiscipline(ViewDiscipline viewDiscipline);
```
