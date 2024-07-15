(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{333:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"文档内的查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档内的查询"}},[t._v("#")]),t._v(" 文档内的查询")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Introduction")]),t._v(" "),s("p",[t._v("文档内的查询，可以把查询的范围锁定在文档内的所有相关的图元，扩展包提供多种 "),s("code",[t._v("快速查询")]),t._v(" 的方式")])]),t._v(" "),s("h2",{attrs:{id:"按类型查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按类型查询"}},[t._v("#")]),t._v(" 按类型查询")]),t._v(" "),s("p",[t._v("按类型查询大概是我们最常用，最直接的方式之一，我们可以通过图元的对象类型，查询文档内对应的结果。")]),t._v(" "),s("p",[t._v("比如我们最常用的方式：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("Wall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("又或者是指定泛型：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Wall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" walls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Wall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Wall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" walls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Wall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这两者的差异从主要表现为结果不同，"),s("a",{attrs:{href:"https://www.revitapidocs.com/2020/163d1fae-e9d8-e4de-7452-c3b140b6daad.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FilteredElementCollector"),s("OutboundLink")],1),t._v(" 包含了一系列的方法可以给我们使用，所以扩展包保留了这个类的返回值。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Remarks")]),t._v(" "),s("p",[t._v("要注意的是，不是所有 "),s("code",[t._v("Element")]),t._v(" 的子类都可以 "),s("code",[t._v("快速查询")]),t._v("，比如一些描述空间的类型就不被允许；")]),t._v(" "),s("p",[t._v("为了方便使用，扩展包在按类型查询的时候，会额外支持这部分类并进行 "),s("code",[t._v("慢速查询")]),t._v(" ；")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("具体类型如下:")]),t._v(" "),s("ul",[s("li",[t._v("Autodesk.Revit.DB.Architecture.Room")]),t._v(" "),s("li",[t._v("Autodesk.Revit.DB.Architecture.RoomTag")]),t._v(" "),s("li",[t._v("Autodesk.Revit.DB.Area")]),t._v(" "),s("li",[t._v("Autodesk.Revit.DB.AreaTag")]),t._v(" "),s("li",[t._v("Autodesk.Revit.DB.Mechanical.Space")]),t._v(" "),s("li",[t._v("Autodesk.Revit.DB.Mechanical.SpaceTag")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Room"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Room"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RoomTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RoomTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("金枪鱼也支持多类型查询的方法：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Room"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("Wall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("Floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按类别查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按类别查询"}},[t._v("#")]),t._v(" 按类别查询")]),t._v(" "),s("p",[t._v("按类型查询从结果上范围比较大（比如 "),s("code",[t._v("FamilyInstance")]),t._v(" 就描述了所有的可载入对象），所以我们也可以选择按类别查询。按类别查询有两种方式：")]),t._v(" "),s("ul",[s("li",[t._v("通过 "),s("code",[t._v("BuiltInCategory")]),t._v(" 内置的类别：")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuiltInCategory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OST_Walls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("通过内置类别的 "),s("code",[t._v("ElementId")]),t._v(" :")])]),t._v(" "),s("p",[t._v("在参数条件合适的情况，我们也会传入类别的 "),s("code",[t._v("ElementId")]),t._v(" 进行查询，我们可以通过 "),s("RouterLink",{attrs:{to:"/docs/guide/api-builtin-catagories.html"}},[t._v("BuiltInCategories")]),t._v(" 访问内置类别的 "),s("code",[t._v("ElementId")])],1),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuiltInCategories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Door"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上两种方式都支持多个参数的查询方式。")]),t._v(" "),s("h2",{attrs:{id:"按标高查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按标高查询"}},[t._v("#")]),t._v(" 按标高查询")]),t._v(" "),s("p",[t._v("根据标高过滤出文档中约束为当前标高的实例对象")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按族类型查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按族类型查询"}},[t._v("#")]),t._v(" 按族类型查询")]),t._v(" "),s("p",[t._v("根据族类型过滤出文档中的族实例对象")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("familySymbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按模型行为的材质查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按模型行为的材质查询"}},[t._v("#")]),t._v(" 按模型行为的材质查询")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("模型行为的材质")]),t._v(" "),s("p",[t._v("具备 "),s("code",[t._v("模型行为的材质")]),t._v(" 参数的对象，一般都是结构对象。所以我们研究的对象如果是结构专业，用这种方式查询也是一个不错的选择。")])]),t._v(" "),s("p",[t._v("金枪鱼提供了两个关于 "),s("code",[t._v("模型行为的材质")]),t._v(" 的查询方式，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("过滤族：根据结构族参数 "),s("b",[t._v("「用于模型行为的材质」")]),t._v(" 过滤出文档中的结构族对象")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumberable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Family"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" families"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetStructualFamilies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuralMaterialType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("过滤结构图元：根据结构族参数 "),s("b",[t._v("「用于模型行为的材质」")]),t._v(" 过滤出文档中的结构图元对象")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuralMaterialType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按结构类型查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按结构类型查询"}},[t._v("#")]),t._v(" 按结构类型查询")]),t._v(" "),s("p",[t._v("这种查询方式主要是针对结构对象。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuralType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按结构用途查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按结构用途查询"}},[t._v("#")]),t._v(" 按结构用途查询")]),t._v(" "),s("p",[t._v("这种查询方式主要也是针对结构对象，它是对结构对象在行为上做了更细致的划分，比如结构梁在用途上除了可以是梁也可以是檩条")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuralInstanceUsage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按线类型查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按线类型查询"}},[t._v("#")]),t._v(" 按线类型查询")]),t._v(" "),s("p",[t._v("这种查询方式主要查询线性的图元")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CurveElementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelCurve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按墙体用途查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按墙体用途查询"}},[t._v("#")]),t._v(" 按墙体用途查询")]),t._v(" "),s("p",[t._v("这种查询方式主要墙体对象。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuralWallUsage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bearing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"按过滤器查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按过滤器查询"}},[t._v("#")]),t._v(" 按过滤器查询")]),t._v(" "),s("p",[t._v("这是金枪鱼最基础的查询方式，如果扩展包提供的过滤方式不能满足需求，您还可以自己实例化过滤器进行过滤")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ElementClassFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("Wall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"查询图元类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询图元类型"}},[t._v("#")]),t._v(" 查询图元类型")]),t._v(" "),s("p",[t._v("上面介绍的方法主要都是查询图元，在文档这个查询范围内，除了查询图元，我们还可以查询图元类型。")]),t._v(" "),s("p",[t._v("当然，金枪鱼也提供了许多种方式查询图元类型：")]),t._v(" "),s("ul",[s("li",[t._v("按类型查询：")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("WallType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" wallTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElementTypes")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("WallType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("按类别查询：")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elementTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElementTypes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuiltInCategories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Door"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("又或者是")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilteredElementCollector")]),t._v(" elementTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElementTypes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuiltInCategory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OST_Walls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("同样的，这两种方式都支持多参数的输入。")]),t._v(" "),s("ul",[s("li",[t._v("按族查询：这种查询方式可以根据族的 "),s("code",[t._v("ElementId")]),t._v(" 过滤出文档中的族类别")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumberable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FamilySymbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" familySymbols "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFamilySymbols")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("familyId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"查询三维图元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询三维图元"}},[t._v("#")]),t._v(" 查询三维图元")]),t._v(" "),s("p",[t._v("金枪鱼封装了对文档中所有三维图形的查询")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumberable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetGraphicElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);