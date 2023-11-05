# 查询图元

# 文档内的查询

> 使用文档内的查询，可以查询输入的文档内的所有相关的图元，扩展包提供多种 **_快速查询_** 的方式，分别如下：

## 按类型查询

```csharp
//get elements
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(typeof(Wall));

//generic type to get elements
IEnumerable<Wall> walls=document.GetElements<Wall>();

//get element types
IEnumerable<WallType> wallTypes=document.GetElementTypes<WallType>();

//add predicate
IEnumerable<Wall> walls=document.GetElements<Wall>(w=>w.Name=="100");
```

> Tip: 为了方便使用，扩展包在按类型查询的时候，支持了部分 **_慢速查询_** 的类型，具体类型如下:

- Autodesk.Revit.DB.Architecture.Room
- Autodesk.Revit.DB.Architecture.RoomTag
- Autodesk.Revit.DB.Area
- Autodesk.Revit.DB.AreaTag
- Autodesk.Revit.DB.Mechanical.Space
- Autodesk.Revit.DB.Mechanical.SpaceTag

```csharp
//Of course , the method support spatial element and spatial element tag ,such as following
IEnumerable<Room> elements=document.GetElements<Room>();

IEnumerable<RoomTag> elements=document.GetElements<RoomTag>();
```

## 按类别查询

> 按类别查询有两种方式：

### 方式一：传入内置的类别

```csharp
//get elements
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(BuiltInCategory.OST_Walls);

//get elementTypes
Autodesk.Revit.DB.FilteredElementCollector elementTypes=document.GetElementTypes(BuiltInCategory.OST_Walls);
```

### 方式二：传入类别元素的 Id

In current package , you can used constants like [BuiltInCategories](https://github.com/shichuyibushishiwu/Tuna.Revit.Extensions/wiki/BuiltInCategories)

```csharp
//get elements
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(Tuna.Revit.Extension.Constants.BuiltInCategories.Door);

//get element types
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElementTypes(Tuna.Revit.Extension.Constants.BuiltInCategories.Door);
```

## 按族类型

> 根据族类型过滤出文档中的族实例对象

```csharp
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(familySymbol);
```

## 按标高

> 根据标高过滤出文档中约束为当前标高的对象

```csharp
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(level);
```

## 按模型行为的材质

### 过滤族（Get Families）

> 根据结构族参数 <b>「用于模型行为的材质」</b> 过滤出文档中的结构族对象

```csharp
IEnumberable<FamilySymbol> familySymbols=document.GetStructualFamilies(StructuralMaterialType.Wood);
```

### 过滤结构图元（Get Elements）

> 根据结构族参数 <b>「用于模型行为的材质」</b> 过滤出文档中的结构图元对象

```csharp
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(StructuralMaterialType.Wood);
```

## 按族 Id 过滤族类型

> 根据族的`Autodesk.Revit.DB.ElementId`过滤出文档中的族类

```csharp
IEnumberable<FamilySymbol> familySymbols=document.GetFamilySymbols(familyId);
```

## 按过滤器查询

> 如果扩展包提供的过滤方式不能满足需求，您还可以自己实例化过滤器进行过滤

```csharp
Autodesk.Revit.DB.FilteredElementCollector elements=document.GetElements(new ElementClassFilter(typeof(Wall)));
```
