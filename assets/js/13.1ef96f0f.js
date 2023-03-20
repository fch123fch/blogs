(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{437:function(s,a,t){"use strict";t.r(a);var n=t(2),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",[s._v("\n1.浮动导致后续元素错位\n")]),s._v(" "),a("p",[s._v("如果出现元素卡住 没有到应该出现的位置 检查上一排的元素是否都是等高  高度不一致会导致这个问题")]),s._v(" "),a("p",[s._v("如果整个盒子高度都一致 查看文字  文字垂直居中 可以使用弹性盒 保证文字高度一致")]),s._v(" "),a("p",[s._v("2.多行文本框 使用innerText获取不到内容")]),s._v(" "),a("p",[s._v("可以改为 value 或者 innerHtml")]),s._v(" "),a("p",[s._v("3.使用一个变量时 需要判断当前变量是否为null或undefined 否则可能出现 is not a function 的报错")]),s._v(" "),a("p",[s._v("4.删除变量 delete")]),s._v(" "),a("p",[s._v("5.this.$data")]),s._v(" "),a("p",[s._v("一下可用于初始化数据即重置数据、")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("objec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。")]),s._v(" "),a("p",[s._v("如果需要，可以通过将 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。")]),s._v(" "),a("p",[s._v("data()中若使用了this来访问props或methods，在重置$data时，注意this.$options.data()的this指向，最好使用this.$options.data.call(this)。")]),s._v(" "),a("p",[s._v("6.注意数组方法 是否返回一个新数组 返回新数组 需要对之前的变量重新赋值")]),s._v(" "),a("p",[s._v("7.遮罩层，绝对定位元素导致无法触发点击事件的解决办法")]),s._v(" "),a("p",[s._v("问题：\n在没有背景和图片填充的情况下，Firefox 和Chrome 下不能直接点击绝对定位层下的元素（比如连接，按钮），下面的元素会被上面的绝对定位层挡住。IE下可以直接点击绝对定位层下面的元素。")]),s._v(" "),a("p",[s._v('解决方法：\n对于这种问题需要用到一个CSS3的属性，可以通过给绝对定位的层多加一个样式：" pointer-events:none; " 这样绝对定位层下的元素就可以点击了。')]),s._v(" "),a("p",[s._v('这其中有一个需要注意的地方，如果在绝对定位层上存在能够点击的元素，在添加" pointer-events:none; " 后将同样不起作用。')]),s._v(" "),a("p",[s._v('为了避免此情况，可以给需要操作的元素设置" pointer-events:auto" 即可。')]),s._v(" "),a("p",[s._v("9."),a("a",{attrs:{href:"https://www.cnblogs.com/cblx/p/12272729.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex布局之flex-shrink"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("当指定view为flex布局后，给子元素定义width是不起效果的。")]),s._v(" "),a("p",[s._v("原因：定义为flex布局元素的子元素，自动获得了flex-shrink的属性，这个属性是什么意思呢？就是告诉子元素当父元素宽度不够用时，自己调整自己所占的宽度比，这个flex-shrink设置为1时，表示所有子元素大家同时缩小来适应总宽度。当flex-shrink设置为0时，表示大家都不缩小适应。")]),s._v(" "),a("p",[s._v("所以，倘若给父元素设置了flex布局后，若要其子元素的width有效果，必须给子元素设置flex-shrink为0。")]),s._v(" "),a("p",[s._v("当然，还有一种办法，就是给需要设置width元素的外面再嵌套一层view。这样一来，设置width的元素就变成了子子元素，自然，也就不用受这种规矩的约束了。")]),s._v(" "),a("p",[s._v("10.元素换行")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("word"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("wrap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" normal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("word\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("normal")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("默认值 当 一行剩余空间无法容纳下一个字（英文是指单词）时，会换行\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("word：针对英文的文本，这个值可以让一个单词拆分开来换行\n\nword"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("normal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all\nnormal：不拆分单词\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all：拆分单词\nkeep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all：英文单词不拆分，中文文本不换行\n\ntext"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("overflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" clip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" ellipsis\nclip：不显示省略符（…）\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ellipsis：显示省略标记（…），但是要跟overflow")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("hidden搭配起来使用\n\nwhite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("space"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" normal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" nowrap\nnormal：默认值，空白会被忽略\npre：空白符，换行符等会被保留\nnowrap：文本不会换行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ol",{attrs:{start:"11"}},[a("li",[s._v("判断变量为空 避免产生不必要的报错\n使用变量赋值的数组的数组方法时 需要注意判断当前变量是否为数组、\n例如：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 或者 arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在vue的template中使用数组时同样也需要注意当前变量是否为数组 当通过判断数组的长度控制元素显示隐藏时 会因为当前变量还并未赋值为数组而产生报错\n例如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当使用某一个变量时 如果当前变量的数据结构复杂 层级较深 需要注意 其中的某一层是否存在为空的情况 可以通过 ?. 的写法判断\n例如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("obj1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("obj2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);