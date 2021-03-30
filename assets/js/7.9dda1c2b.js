(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(t,a,s){},358:function(t,a,s){"use strict";s(328)},406:function(t,a,s){"use strict";s.r(a);s(358);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("h3",{attrs:{id:"原始值转boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始值转boolean"}},[t._v("#")]),t._v(" 原始值转Boolean")]),t._v(" "),s("p",[t._v("除去下面情况都为true")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])])]),s("h3",{attrs:{id:"原始值转数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始值转数字"}},[t._v("#")]),t._v(" 原始值转数字")]),t._v(" "),s("p",[t._v("可以使用Number函数将类型转为数字类型，如果无法转换为数字，就返回NaN")]),t._v(" "),s("p",[t._v("不传参数，返回+0 有参数 调用ToNumber\n"),s("table",[s("tr",[s("td",[t._v("参数类型")]),t._v(" "),s("td",[t._v("结果")])]),t._v(" "),s("tr",[s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true为1，false为+0")])]),t._v(" "),s("tr",[s("td",[t._v("Null")]),t._v(" "),s("td",[t._v("+0")])]),t._v(" "),s("tr",[s("td",[t._v("Undefined")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("String")]),t._v(" "),s("td",[t._v("前缀是0x 转为16进制，忽略前导0，如果其中有一个不是数字，则返回NaN")])])])]),t._v(" "),s("h3",{attrs:{id:"原始值转字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始值转字符"}},[t._v("#")]),t._v(" 原始值转字符")]),t._v(" "),s("p",[t._v("无参数，返回“” 有参数，返回ToString\n"),s("table",[s("tr",[s("td",[t._v("参数类型")]),t._v(" "),s("td",[t._v("结果")])]),t._v(" "),s("tr",[s("td",[t._v("Number")]),t._v(" "),s("td",[t._v('NaN："NaN" Infinity: "Infinity" -Infinity: "-Infinity"')])]),t._v(" "),s("tr",[s("td",[t._v("Undefined")]),t._v(" "),s("td",[t._v('"undefined"')])]),t._v(" "),s("tr",[s("td",[t._v("Null")]),t._v(" "),s("td",[t._v('"null"')])]),t._v(" "),s("tr",[s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("如果是true,则返回“true” 如果是false,返回“false”")])])])]),t._v(" "),s("h3",{attrs:{id:"原始值转对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始值转对象"}},[t._v("#")]),t._v(" 原始值转对象")]),t._v(" "),s("p",[t._v(".操作会进行装箱转换\n")]),s("p",{staticClass:"error"},[t._v("12.toString() 为什么会报错")]),s("p"),t._v(" "),s("h3",{attrs:{id:"对象转boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象转boolean"}},[t._v("#")]),t._v(" 对象转Boolean")]),t._v(" "),s("p",[t._v("所有对象都为true")]),t._v(" "),s("h3",{attrs:{id:"对象转字符串或者数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象转字符串或者数字"}},[t._v("#")]),t._v(" 对象转字符串或者数字")]),t._v(" "),s("ul",[s("li",[t._v("当我们用String方法转换一个值的时候，如果这个值是基本类型，则参照上表，如果不是基本类型，将会调用一个ToPrimitive(input, string)方法，使其转换为基本类型，再参考上表")]),t._v(" "),s("li",[t._v("当我们用Number方法转换一个值的时候，如果这个值是基本类型，则参照上表，如果不是基本类型，将会调用一个ToPrimitive(input, number)方法，使其转换为基本类型，再参考上表")])]),t._v(" "),s("p",[t._v("ToPrimitive(input, type)：当type没有指定时，input是日期，则默认string，否则默认number")]),t._v(" "),s("p",[t._v("ToPrimitive(input, string)")]),t._v(" "),s("ol",[s("li",[t._v("如果input是基本类型，直接返回")]),t._v(" "),s("li",[t._v("调用toString() 如果是基本类型，则返回")]),t._v(" "),s("li",[t._v("调用valueOf() 如果是基本类型，则返回")]),t._v(" "),s("li",[t._v("抛错")])]),t._v(" "),s("p",[t._v("ToPrimitive(input, number)")]),t._v(" "),s("ol",[s("li",[t._v("如果input是基本类型，直接返回")]),t._v(" "),s("li",[t._v("调用valueOf() 如果是基本类型，则返回")]),t._v(" "),s("li",[t._v("调用toString() 如果是基本类型，则返回")]),t._v(" "),s("li",[t._v("抛错")])]),t._v(" "),s("ul",[s("li",[t._v("toString")])]),t._v(" "),s("ol",[s("li",[t._v("数组的toString返回一个一个字符串，元素之间添加都好")]),t._v(" "),s("li",[t._v("函数的toString，返回源代码")]),t._v(" "),s("li",[t._v("日期的toString，返回一个可读的日期")]),t._v(" "),s("li",[t._v("正则返回直接量的字符串")])]),t._v(" "),s("ul",[s("li",[t._v("valueOf\n返回对象本身，date会返回毫秒数")])]),t._v(" "),s("h3",{attrs:{id:"一元操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元操作符"}},[t._v("#")]),t._v(" 一元操作符")]),t._v(" "),s("p",[t._v("当+作为一元操作符，会调用ToNumber，当成Number()处理该值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"二元操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二元操作符"}},[t._v("#")]),t._v(" 二元操作符 +")]),t._v(" "),s("p",[t._v("当计算value1+value2")]),t._v(" "),s("ol",[s("li",[t._v("lprim = ToPrimitive(value1)")]),t._v(" "),s("li",[t._v("rprim = ToPrimitive(value2)")]),t._v(" "),s("li",[t._v("lprim是字符串或者rprim是字符串，则返回toString(lprim)和toString(rprim)拼接")]),t._v(" "),s("li",[t._v("否则ToNumber(lprim) 和 ToNumber(rprim)的运算结果")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"相等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相等"}},[t._v("#")]),t._v(" 相等")]),t._v(" "),s("h4",{attrs:{id:"null和undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null和undefined"}},[t._v("#")]),t._v(" null和undefined")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n")])])]),s("h4",{attrs:{id:"字符串与数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串与数字"}},[t._v("#")]),t._v(" 字符串与数字")]),t._v(" "),s("p",[t._v("转换成数字")]),t._v(" "),s("h4",{attrs:{id:"布尔值和其他类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔值和其他类型"}},[t._v("#")]),t._v(" 布尔值和其他类型")]),t._v(" "),s("p",[t._v("布尔值会先转换为数字")]),t._v(" "),s("h3",{attrs:{id:"对象与非对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象与非对象"}},[t._v("#")]),t._v(" 对象与非对象")]),t._v(" "),s("p",[t._v("toPrimitive(obj)")])])}),[],!1,null,null,null);a.default=e.exports}}]);