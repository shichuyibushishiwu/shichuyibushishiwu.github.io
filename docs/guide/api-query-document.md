# 文档内的查询

::: tip Introduction
文档内的查询，可以把查询的范围锁定在文档内的所有相关的图元，扩展包提供多种 `快速查询` 的方式
:::

## 按类型查询

按类型查询大概是我们最常用，最直接的方式之一，我们可以通过图元的对象类型，查询文档内对应的结果。

比如我们最常用的方式：

```csharp
FilteredElementCollector elements = document.GetElements(typeof(Wall));
```

又或者是指定泛型：

```csharp
IEnumerable<Wall> walls=document.GetElements<Wall>();

IEnumerable<Wall> walls=document.GetElements<Wall>(w => w.Name == "100");
```

这两者的差异从主要表现为结果不同，[FilteredElementCollector](https://www.revitapidocs.com/2020/163d1fae-e9d8-e4de-7452-c3b140b6daad.htm) 包含了一系列的方法可以给我们使用，所以扩展包保留了这个类的返回值。

::: warning Remarks
要注意的是，不是所有 `Element` 的子类都可以 `快速查询`，比如一些描述空间的类型就不被允许；

为了方便使用，扩展包在按类型查询的时候，会额外支持这部分类并进行 `慢速查询` ；

::: details 具体类型如下:

- Autodesk.Revit.DB.Architecture.Room
- Autodesk.Revit.DB.Architecture.RoomTag
- Autodesk.Revit.DB.Area
- Autodesk.Revit.DB.AreaTag
- Autodesk.Revit.DB.Mechanical.Space
- Autodesk.Revit.DB.Mechanical.SpaceTag

```csharp
IEnumerable<Room> elements = document.GetElements<Room>();

IEnumerable<RoomTag> elements = document.GetElements<RoomTag>();
```

:::
金枪鱼也支持多类型查询的方法：

```csharp
IEnumerable<Room> elements = document.GetElements(typeof(Wall), typeof(Floor));
```

## 按类别查询

按类型查询从结果上范围比较大（比如 `FamilyInstance` 就描述了所有的可载入对象），所以我们也可以选择按类别查询。按类别查询有两种方式：

- 通过 `BuiltInCategory` 内置的类别：

```csharp
FilteredElementCollector elements=document.GetElements(BuiltInCategory.OST_Walls);
```

- 通过内置类别的 `ElementId` :

在参数条件合适的情况，我们也会传入类别的 `ElementId` 进行查询，我们可以通过 [BuiltInCategories](/docs/guide/api-builtin-catagories.md) 访问内置类别的 `ElementId`

```csharp
FilteredElementCollector elements=document.GetElements(BuiltInCategories.Door);
```

以上两种方式都支持多个参数的查询方式。

## 按标高查询

根据标高过滤出文档中约束为当前标高的实例对象

```csharp
FilteredElementCollector elements=document.GetElements(level);
```

## 按族类型查询

根据族类型过滤出文档中的族实例对象

```csharp
FilteredElementCollector elements=document.GetElements(familySymbol);
```

## 按模型行为的材质查询

::: tip 模型行为的材质
具备 `模型行为的材质` 参数的对象，一般都是结构对象。所以我们研究的对象如果是结构专业，用这种方式查询也是一个不错的选择。
:::
金枪鱼提供了两个关于 `模型行为的材质` 的查询方式，分别是：

- 过滤族：根据结构族参数 <b>「用于模型行为的材质」</b> 过滤出文档中的结构族对象

```csharp
IEnumberable<Family> families=document.GetStructualFamilies(StructuralMaterialType.Wood);
```

- 过滤结构图元：根据结构族参数 <b>「用于模型行为的材质」</b> 过滤出文档中的结构图元对象

```csharp
FilteredElementCollector elements=document.GetElements(StructuralMaterialType.Wood);
```

## 按结构类型查询

这种查询方式主要是针对结构对象。

```csharp
FilteredElementCollector elements = document.GetElements(StructuralType.Column);
```

## 按结构用途查询

这种查询方式主要也是针对结构对象，它是对结构对象在行为上做了更细致的划分，比如结构梁在用途上除了可以是梁也可以是檩条

```csharp
FilteredElementCollector elements = document.GetElements(StructuralInstanceUsage.Column);
```

## 按线类型查询

这种查询方式主要查询线性的图元

```csharp
FilteredElementCollector elements = document.GetElements(CurveElementType.ModelCurve);
```

## 按墙体用途查询

这种查询方式主要墙体对象。

```csharp
FilteredElementCollector elements = document.GetElements(StructuralWallUsage.Bearing);
```

## 按过滤器查询

这是金枪鱼最基础的查询方式，如果扩展包提供的过滤方式不能满足需求，您还可以自己实例化过滤器进行过滤

```csharp
FilteredElementCollector elements=document.GetElements(new ElementClassFilter(typeof(Wall)));
```

## 查询图元类型

上面介绍的方法主要都是查询图元，在文档这个查询范围内，除了查询图元，我们还可以查询图元类型。

当然，金枪鱼也提供了许多种方式查询图元类型：

- 按类型查询：

```csharp
IEnumerable<WallType> wallTypes = document.GetElementTypes<WallType>();
```

- 按类别查询：

```csharp
FilteredElementCollector elementTypes = document.GetElementTypes(BuiltInCategories.Door);
```

又或者是

```csharp
FilteredElementCollector elementTypes = document.GetElementTypes(BuiltInCategory.OST_Walls);
```

同样的，这两种方式都支持多参数的输入。

- 按族查询：这种查询方式可以根据族的 `ElementId` 过滤出文档中的族类别

```csharp
IEnumberable<FamilySymbol> familySymbols = document.GetFamilySymbols(familyId);
```

## 查询三维图元

金枪鱼封装了对文档中所有三维图形的查询

```csharp
IEnumberable<Element> elements = document.GetGraphicElements();
```
