(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{326:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"图元-element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图元-element"}},[t._v("#")]),t._v(" 图元（Element）")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Notes")]),t._v(" "),s("p",[t._v("这一篇章主要是对图元或者图元类型的一些操作")])]),t._v(" "),s("h3",{attrs:{id:"获取参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取参数"}},[t._v("#")]),t._v(" 获取参数")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parameter")]),t._v(" parameter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ElementId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122344")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当然也可以使用"),s("RouterLink",{attrs:{to:"/guide/api-builtin-catagories.html"}},[t._v("BuiltinCategories")]),t._v("进行获取")],1),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parameter")]),t._v(" parameter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Constants"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuiltInParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取元素类型的数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取元素类型的数量"}},[t._v("#")]),t._v(" 获取元素类型的数量")]),t._v(" "),s("p",[t._v("将传入的元素类型分类，并传回键值对结果，键对应各类元素类型，值对应各类元素的数目：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ElementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" countResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetElementTypeInstancesCount")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ElementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取实例类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取实例类型"}},[t._v("#")]),t._v(" 获取实例类型")]),t._v(" "),s("p",[t._v("筛选出在项目中存在有实例的元素类型：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ElementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" instancesTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HasInstances")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ElementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"图元碰撞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图元碰撞"}},[t._v("#")]),t._v(" 图元碰撞")]),t._v(" "),s("p",[t._v("获取视图中与目标图元发生碰撞的对象")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterElementCollector")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TryGetIntersectElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);