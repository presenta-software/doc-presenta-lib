(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{373:function(t,e,n){},444:function(t,e,n){"use strict";var o=n(373);n.n(o).a},478:function(t,e,n){"use strict";n.r(e);var o=n(42),s={data:function(){return{currentLayout:"",doc:{layout:"",colors:"hedy",fonts:"goose",colorVar:"sec",scenes:[{blocks:[{type:"image",url:"/3.jpg"},{type:"text",scale:3,text:"<h1>Title</h1> <h3>This is a <b>text</b> block</h3>"}]}]}}},mounted:function(){this.onChange()},computed:{layouts:function(){return o.layouts}},methods:{onChange:function(){this.$refs.preso.innerHTML="",this.doc.layout=this.currentLayout,new o(this.$refs.preso,this.doc)}}},a=(n(444),n(61)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prev"},[n("div",{staticClass:"bar"},[n("div",{staticClass:"toolbar"},[t._v("\n          Layouts:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentLayout,expression:"currentLayout"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentLayout=e.target.multiple?n:n[0]},t.onChange]}},[n("option",[t._v("default")]),t._v(" "),t._l(t.layouts,(function(e){return n("option",{key:e},[t._v(t._s(e))])}))],2)])]),t._v(" "),n("div",{ref:"preso",staticClass:"preso"})])}),[],!1,null,"265038ad",null);e.default=r.exports}}]);