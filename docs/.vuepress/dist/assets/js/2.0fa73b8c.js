(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_abused_GITHUB_PRESENTA_presenta_doc_presenta_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41),vue2_ace_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(354),vue2_ace_editor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(vue2_ace_editor__WEBPACK_IMPORTED_MODULE_1__),_presenta_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(357),_presenta_lib__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_presenta_lib__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__.a={components:{Ace:vue2_ace_editor__WEBPACK_IMPORTED_MODULE_1___default.a},props:{code:String},data:function(){return{icode:"",invalid:!1}},watch:{icode:function(n){this.createPreso()},code:function(n){this.icode=this.code,this.createPreso()}},mounted:function(){var n=this.$refs.editor.editor;n.session.setTabSize(2),n.setOptions({showPrintMargin:!1}),n.setOptions({showGutter:!1}),this.icode=this.code,this.createPreso()},methods:{editorInit:function(){__webpack_require__(366),__webpack_require__(367),__webpack_require__(369)},createPreso:function createPreso(){this.invalid=!0;var ob=null;try{if(ob=eval("(() => {return ".concat(this.icode,"})()")),ob){var _preso$classList,preso=this.$refs.preso;preso.innerHTML="",(_preso$classList=preso.classList).remove.apply(_preso$classList,Object(_Users_abused_GITHUB_PRESENTA_presenta_doc_presenta_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.$refs.preso.classList)),preso.classList.add("preso"),new _presenta_lib__WEBPACK_IMPORTED_MODULE_2__(this.$refs.preso,ob),this.$emit("update",ob),this.invalid=!1}}catch(n){this.$refs.preso.innerHTML="Invalid data"}}}}},327:function(n,t,e){},328:function(n,t,e){},357:function(n,t,e){var o,i;e(173),e(97),e(170),e(175),e(358),e(310),e(308),e(44),e(92),e(304),e(65),e(306),e(307),e(99),e(359);var r,s=e(360),a=e(365);r=function(){"use strict";function n(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}n('.presenta * {\n  box-sizing: border-box;\n}\n\n\n.presenta {\n  position: relative;\n  /* width: 100%;\n    height: 100%; */\n  --fontHeading: Georgia, "Times New Roman", Times, serif;\n  --fontText: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n\n  --pw: 960;\n  --w: 960px;\n  --h: 540px;\n  --vp: 960;\n  --fz: 1;\n  --p: calc(var(--pw) / var(--vp));\n  /* --sw: calc(var(--w) / var(--p) / var(--fz));\n  --sh: calc(var(--h) / var(--p) / var(--fz));\n  --scal: calc(var(--pw) / var(--p) / var(--pw) / var(--fz)); */\n\n  /* PUBLIC VARS */\n  --slidepadding: 0;\n  --blockweight: 1;\n  --blockpadding: 0;\n}\n\n.presenta,\n.presenta .colorvar__a {\n  --backcolor: #fff;\n  --forecolor: #000;\n  --accentcolor: #444;\n  --otheraccentcolor: #ddd;\n  --overlaycolor: var(--backcolor);\n}\n.presenta .colorvar__b {\n  --backcolor: #000;\n  --forecolor: #fff;\n  --accentcolor: #999;\n  --otheraccentcolor: #ccc;\n  --overlaycolor: var(--backcolor);\n}\n.presenta .colorvar__c {\n  --backcolor: #444;\n  --forecolor: #ffffff;\n  --accentcolor: #fff;\n  --otheraccentcolor: #ccc;\n  --overlaycolor: var(--backcolor);\n}\n\n\n\n\n\n.layout__block .blocksContainer {\n  display: block;\n}\n.layout__block .blocksContainer > div {\n  height: initial;\n}\n\n.layout__rows .blocksContainer {\n  display: flex;\n  flex-direction: column;\n}\n.layout__rows .blocksContainer > div {\n  width: 100%;\n}\n\n.layout__stacked .blocksContainer {\n  position: relative;\n}\n.layout__stacked .blocksContainer > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n\n\n'),n("@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap');\n.theme__original{\n  --fontHeading: 'Roboto Mono', monospace;\n  --fontText: 'Montserrat', sans-serif;\n}\n\n.theme__original,\n.theme__original.colorvar__a,\n.theme__original .colorvar__a {\n  --backcolor: #ebded1;\n  --forecolor: #0a47d1;\n  --accentcolor: #fb4138;\n  --otheraccentcolor: #ffffff;\n}\n.theme__original.colorvar__b,\n.theme__original .colorvar__b {\n  --backcolor: #0a47d1;\n  --forecolor: #ebded1;\n  --accentcolor: #ffffff;\n  --otheraccentcolor: #fb4138;\n}\n.theme__original.colorvar__c,\n.theme__original .colorvar__c {\n  --backcolor: #fb4138;\n  --forecolor: #ffffff;\n  --accentcolor: #ebded1;\n  --otheraccentcolor: #0a47d1;\n}\n  "),n("@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap');\n.theme__vibrant{\n  --fontHeading: 'Work Sans', sans-serif;\n  --fontText: 'Playfair Display', serif;\n}\n\n\n.theme__vibrant,\n.theme__vibrant.colorvar__a,\n.theme__vibrant .colorvar__a {\n  --backcolor: #ffe600;\n  --forecolor: #000;\n  --accentcolor: #ff6400;\n  --otheraccentcolor: #fff;\n}\n.theme__vibrant.colorvar__b,\n.theme__vibrant .colorvar__b {\n  --backcolor: #000;\n  --forecolor: rgb(255, 230, 0);\n  --accentcolor: #fff;\n  --otheraccentcolor: rgb(255, 100, 0);\n}\n.theme__vibrant.colorvar__c,\n.theme__vibrant .colorvar__c {\n  --backcolor: rgb(255, 100, 0);\n  --forecolor: #fff;\n  --accentcolor: rgb(255, 230, 0);\n  --otheraccentcolor: #000;\n}\n"),n(":root {\n  --textsize:1.5rem;\n  --textpadding: 1rem;\n  --textalign: center; }\n\n.p-scene-enter-transition .textContent > * {\n  transition: opacity .5s ease-in-out;\n  transition-delay: .25s; }\n\n.p-scene-enter-start .textContent > * {\n  opacity: 0; }\n\n.p-scene-enter-end .textContent > * {\n  opacity: 1; }\n\n.p-scene-leave-transition .textContent > * {\n  transition: opacity .25s; }\n\n.p-scene-leave-start .textContent > * {\n  opacity: 1; }\n\n.p-scene-leave-end .textContent > * {\n  opacity: 0; }\n\n.p.textposition__topleft .pretext,\n.p.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.p.textposition__topcenter .pretext,\n.p.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.p.textposition__topright .pretext,\n.p.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.p.textposition__centerleft .pretext,\n.p.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.p.textposition__center .pretext,\n.p.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.p.textposition__centerright .pretext,\n.p.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.p.textposition__bottomleft .pretext,\n.p.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.p.textposition__bottomcenter .pretext,\n.p.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.p.textposition__bottomright .pretext,\n.p.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.s.textposition__topleft .pretext,\n.s.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.s.textposition__topcenter .pretext,\n.s.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.s.textposition__topright .pretext,\n.s.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.s.textposition__centerleft .pretext,\n.s.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.s.textposition__center .pretext,\n.s.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.s.textposition__centerright .pretext,\n.s.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.s.textposition__bottomleft .pretext,\n.s.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.s.textposition__bottomcenter .pretext,\n.s.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.s.textposition__bottomright .pretext,\n.s.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.b.textposition__topleft .pretext,\n.b.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.b.textposition__topcenter .pretext,\n.b.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.b.textposition__topright .pretext,\n.b.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.b.textposition__centerleft .pretext,\n.b.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.b.textposition__center .pretext,\n.b.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.b.textposition__centerright .pretext,\n.b.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.b.textposition__bottomleft .pretext,\n.b.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.b.textposition__bottomcenter .pretext,\n.b.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.b.textposition__bottomright .pretext,\n.b.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.g.textposition__topleft .pretext,\n.g.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.g.textposition__topcenter .pretext,\n.g.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.g.textposition__topright .pretext,\n.g.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.g.textposition__centerleft .pretext,\n.g.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.g.textposition__center .pretext,\n.g.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.g.textposition__centerright .pretext,\n.g.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.g.textposition__bottomleft .pretext,\n.g.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.g.textposition__bottomcenter .pretext,\n.g.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.g.textposition__bottomright .pretext,\n.g.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n");var t={text:"style_text__3T1cl",inner:"style_inner__11UJC",pretext:"style_pretext__cLjqD",textbox:"style_textbox__1Vb-V",itext:"style_itext__jz90o"};n('.style_text__3T1cl{\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    background-color: var(--backcolor);\n    position: relative;\n    \n}\n\n.style_inner__11UJC{\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.style_pretext__cLjqD{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n.style_textbox__1Vb-V{\n    padding: var(--textboxpadding);\n    text-align: var(--textalign);\n    /*overflow: hidden; */ /* removed for shadow, maybe neccessary */\n    font-size: var(--textsize);\n    color: var(--forecolor);\n    --backmark: var(--accentcolor);\n    --foremark: var(--backcolor);\n    --textaccentcolor: var(--accentcolor);\n    font-family: var(--fontHeading);\n}\n\n.style_itext__jz90o{\n    border: var(--textborder) solid var(--forecolor);\n    padding: var(--textpadding);\n    border-radius: var(--textboxradius);\n    box-shadow: var(--textboxshadow);\n    background-color: var(--textboxbackcolor);\n}\n\n.style_itext__jz90o img{\n    object-fit: contain;\n    height: 4em;\n    vertical-align: middle;\n}\n\n\n.style_itext__jz90o mark {\n  background-color: var(--backmark);\n  color: var(--foremark);\n  padding: 0 0.5rem;\n}\n.style_itext__jz90o high {\n  color: var(--textaccentcolor);\n}\n.style_itext__jz90o bord {\n  border: 8px solid var(--backmark);\n  padding: 0 0.5rem;\n}\n.style_itext__jz90o a {\n  color: var(--textaccentcolor);\n}\n\n.style_itext__jz90o blockquote {\n  font-size: 2em;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.style_itext__jz90o h1,\n.style_itext__jz90o h2,\n.style_itext__jz90o h3,\n.style_itext__jz90o h4,\n.style_itext__jz90o h5,\n.style_itext__jz90o h6,\n.style_itext__jz90o p,\n.style_itext__jz90o ul,\n.style_itext__jz90o blockquote {\n  margin: 0;\n}\n\n.style_itext__jz90o ul,\n.style_itext__jz90o ol {\n  font-size: 1.5em;\n  line-height: 1.1em;\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  counter-reset: li;\n  padding: 0.5rem 0;\n}\n\n.style_itext__jz90o li{\n  padding: 0.25rem 0;\n  list-style-position:inside;\n  margin-bottom: 2px;\n  padding: .25em;\n  padding-left: 0.8em;\n}\n.style_itext__jz90o ul li::before {\n  content: "\\2013"; \n  display: inline-block; \n  width: 0.8em;\n  margin-left: -0.8em;\n}\n.style_itext__jz90o ol li::before {\n  counter-increment: li;  \n  content:  "." counter(li); \n  display: inline-block; \n  width: 1.1em; \n  margin-left: -1.3em;\n  margin-right: 0.2em; \n  text-align: right; \n  direction: rtl;\n}\n\n.style_itext__jz90o li p{\n  display: inline;\n}\n\n\n.style_itext__jz90o h1,\n.style_itext__jz90o h2,\n.style_itext__jz90o h3,\n.style_itext__jz90o h4,\n.style_itext__jz90o h5,\n.style_itext__jz90o h6 {\n  font-family: var(--fontText);\n  padding: .5rem 0;\n}\n\n.style_itext__jz90o h1{\n  font-size: 2em;\n}\n.style_itext__jz90o h2{\n  font-size: 1.5em;\n}\n.style_itext__jz90o h3{\n  font-size: 1.17em;\n}\n.style_itext__jz90o h4{\n  font-size: 1em;\n}\n.style_itext__jz90o h5{\n  font-size: 0.83em;\n}\n.style_itext__jz90o h6{\n  font-size: 0.67em;\n}\n\n.style_itext__jz90o p{\n  padding: .5rem 0;\n}\n\n.style_itext__jz90o hr{\n  border: 1px solid var(--foremark);\n  margin: .5rem 0;\n}\n\n.style_itext__jz90o h1:first-child,\n.style_itext__jz90o h2:first-child,\n.style_itext__jz90o h3:first-child,\n.style_itext__jz90o h1:last-child,\n.style_itext__jz90o h2:last-child,\n.style_itext__jz90o h3:last-child{\n    padding: 0;\n}\n\n.style_itext__jz90o table{\n    width: 100%;\n}\n.style_itext__jz90o tr{\n    padding: 0;\n}\n\n.style_itext__jz90o td, .style_itext__jz90o th{\n    padding:.5rem;\n    border-bottom:1px solid var(--forecolor);\n}\n\n');var e=function(n){return"uid"+JSON.stringify(n).split("").reduce((function(n,t){return(n=(n<<5)-n+t.charCodeAt(0))&n}),0)},o=function(n){return"string"==typeof n?document.querySelector(n):n},i=function(n,t){var e=t?t+"__":"",o={classes:"",styles:""};if(!n)return o;for(var i in n){var r=n[i]+"";if("."===r.substr(0,1)){var s=r.substr(1);o.classes+=e+i+"__"+s+" "}}for(var a in n)"."===(n[a]+"").substr(0,1)||(o.styles+="--"+e+a+":"+n[a]+";");return o},r=function(n){return(new DOMParser).parseFromString(n,"text/html").body.childNodes[0]},c=function(n,t,e){var o=t.columns||1,i=t.padding||0,r=getComputedStyle(n),s=+r.width.split("px")[0],a=+r.height.split("px")[0],c=t.aspect||1.6;t.adapt&&(c=s/a),e.style.setProperty("--h",parseInt(960/c)+"px");var l=i*o,_=100*(960+l)/s,d=100*(960/c+l)/a,p=Math.max(_,d);o>1&&(p=100*(960+l)/s),e.style.setProperty("--fz",1/(100/p)*o)},l=function(n,e){var i=o(n),a=e.text||"",c=e.scale||2,l=r('<div class="c '.concat(t.text,'">\n    <div class="').concat(t.inner,'">\n      <div class="pretext ').concat(t.pretext,'">\n        <div class="').concat(t.textbox,'">\n          <div class="textContent ').concat(t.itext," ").concat(t.fadein,'">\n            ').concat(a,"\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"));this.beforeDestroy=function(){},this.stepForward=function(){console.log("stepForward")},i.appendChild(l);var _=l.querySelectorAll("img");_&&(_=s(_).forEach((function(n){var t=n.getAttribute("alt");if(t){var e=+t;e>0&&(n.style.height=4*e+"em")}}))),l.querySelector("."+t.inner).style.visibility="hidden",setTimeout((function n(){l.style.setProperty("--textsize","".concat(c,"rem"));var e=l.querySelector("."+t.inner).getBoundingClientRect(),o=l.querySelector("."+t.textbox).getBoundingClientRect();if(parseInt(e.width)<parseInt(o.width)||parseInt(e.height)<parseInt(o.height))return c-=.1,n();setTimeout((function(){l.querySelector("."+t.inner).style.visibility="visible"}))}))};n(".presenta{\n    --embedpadding: 0;\n    --embedbackcolor: none;\n}");var _="style_embed__2Pre2",d="style_inner__3WOWs",p="style_frame__28PUh",f="style_loading__1w7wc",h="style_blockmouse__3bXSl";n(".style_embed__2Pre2{\n    background-color: var(--backcolor);\n}\n\n.style_inner__3WOWs{\n    padding: var(--embedpadding);\n    position: relative;\n}\n\n.style_frame__28PUh{\n    background-color: var(--embedbackcolor);\n    position: relative;\n}\n\n.style_embed__2Pre2, .style_inner__3WOWs, .style_frame__28PUh{\n    width: 100%;\n    height: 100%;\n}\n\niframe{\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n.style_loading__1w7wc{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:var(--forecolor);\n    font-family: var(--fontText);\n    background-color: var(--backcolor);\n}\n\n.style_blockmouse__3bXSl{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n}");var u=function(n,t){var e=o(n),i=null;t.url&&(i='<iframe src="'.concat(t.url,'"></iframe>')),t.code&&(i=t.code);var s=function(n){if(!n)return"";var t=new RegExp('src="(.*)',"gim").exec(n)[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim);return t.length>0?t[0]:null}(i),a=r('<div class="c '.concat(_,'">\n    <div class="').concat(d,'">\n        <div class="').concat(p,'">').concat(i,'</div>\n        <div class="cover ').concat(f,'">\n            <h1>Loading from <mark>').concat(s,'</mark></h1>\n        </div>\n        <div class="').concat(h,'"></div>\n    </div>\n  </div>'));this.beforeDestroy=function(){},e.appendChild(a),i&&a.querySelector("iframe").addEventListener("load",(function(){a.querySelector(".cover").style.display="none"}))},x="style_images__26AtP",v="style_inner__181qE",y="style_preimg__2_wv2";n(".style_images__26AtP{\n    width: 100%;\n    height: 100%;\n}\n\n.style_inner__181qE{\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.style_preimg__2_wv2{\n    overflow: hidden;\n    flex:1;\n}\n.style_preimg__2_wv2 img{\n    width: 100%;\n    height:100%;\n    object-fit: cover;\n}");var b=function(n,t){var e=o(n),i="";t.images.forEach((function(n){i+='<div class="'.concat(y,'"><img src="').concat(n.url,'" /></div>')}));var s=r('<div class="'.concat(x,'">\n    <div class="imagesContainer ').concat(v,'">\n        ').concat(i,"\n    </div>\n  </div>"));this.beforeDestroy=function(){},this.stepForward=function(n){},e.appendChild(s)},g="style_debug__1-XHT";n(".style_debug__1-XHT{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}");var m=function(n,t){var e=o(n),i=r('<div class="'.concat(g,'">\n    <h1>DEBUG <div class="step">0</div></h1> \n  </div>'));this.beforeDestroy=function(){},this.stepForward=function(n){i.querySelector(".step").innerHTML=n},e.appendChild(i)},w="block_block__BWbaZ",k="block_inner__3LS6s";n("\n.block_block__BWbaZ {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  flex: var(--blockweight);\n  overflow: hidden;\n}\n\n.block_inner__3LS6s {\n  width: 100%;\n  height: 100%;\n  padding: var(--blockpadding);\n}\n");var j={debug:m,text:l,embed:u,images:b},z=function(n,t){var o=this;if(this.uid=e(t),this.type=t.type,this.index=t.index,this.block=null,!this.type)return console.warn("No `type` field found in block "+this.index);var s=0,a=i(t.props),c=r('<div class="'.concat(w," b b").concat(this.index," ").concat(a.classes,'" style="').concat(a.styles,'">\n    <div class="blockContainer ').concat(k,'"></div>\n  </div>')),l=c.querySelector(".blockContainer");j[this.type]?this.block=new j[this.type](l,t):console.log('block "'.concat(this.type,'" not found')),this.beforeDestroy=function(){o.block.beforeDestroy&&o.block.beforeDestroy()},this.stepForward=function(){s++,o.block.stepForward?o.block.stepForward(s):console.warn('The block "'.concat(o.type,'" doesn\'t implement the method "stepForward" but this scene tried to use it'))},n.appendChild(c)},C="scene_sceneContainer__IgSpB",S="scene_scene__3uvTl",E="scene_wrapper__3yr1k",L="scene_content__1rJf0",P="scene_bcontainer__3MFBK",T="scene_fcontainer__1E_0g",I="scene_viewport__3uNLS";n(".scene_sceneContainer__IgSpB, .scene_test__3LYpD{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n.scene_scene__3uvTl{\n    --sw: calc(var(--w) / var(--p) / var(--fz));\n    --sh: calc(var(--h) / var(--p) / var(--fz));\n    --scal: calc(var(--pw) / var(--p) / var(--pw) / var(--fz));\n    \n    width: var(--sw);\n    height: var(--sh);\n    font-family: serif;\n    user-select: none;\n}\n\n.scene_wrapper__3yr1k{\n    width: var(--w);\n    height: var(--h);\n    transform: scale(1);\n    transform: scale(var(--scal));\n    transform-origin: top left;\n    overflow: hidden;\n\n    padding: var(--slidepadding);\n    /* background-color: var(--backcolor); */\n}\n.scene_content__1rJf0{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.scene_bcontainer__3MFBK,\n.scene_fcontainer__1E_0g{\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n\n.scene_viewport__3uNLS{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    flex:1;\n    overflow: hidden;\n    \n    display: flex;\n    flex-direction: row;\n}\n.scene_viewport__3uNLS > div{\n    height: 100%;\n}\n\n\n"),n(".presenta{\n    --pagenumber__padding:.5rem; \n    --pagenumber__textalign:right; \n}\n\n.pagenumberContent{\n    color:var(--forecolor);\n    font-family: var(--fontText);\n}\n\n.pagenumber__style__inverted .pagenumberContent{\n    background-color: var(--forecolor);\n    color:var(--backcolor);\n}");var O="style_pagenumber__2BX53";n(".style_pagenumber__2BX53{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-end;   \n}\n\n.style_pagenumber__2BX53 > div{\n    width: 100%;\n    text-align: var(--pagenumber__textalign);\n    padding: var(--pagenumber__padding);\n}\n");var A={pagenumber:function(n,t,e,o){var i=e.index+1,s=o.scenes.length,a="".concat(i," / ").concat(s);t.template&&(a=t.template.replace(/%s/gm,i).replace(/%S/gm,s));var c=r('<div class="'.concat(O,'">\n    <div class="pagenumberContent">').concat(a,"</div> \n  </div>"));n.appendChild(c)}};n(".horizontalSlide .p-scene-enter-transition {\n  transition: transform 1s cubic-bezier(0.2, 0.8, 0.05, 0.95); }\n\n.horizontalSlide .to-right.p-scene-enter-start {\n  transform: translateX(100%); }\n\n.horizontalSlide .to-right.p-scene-enter-end {\n  transform: translateX(0); }\n\n.horizontalSlide .to-left.p-scene-enter-start {\n  transform: translateX(-100%); }\n\n.horizontalSlide .to-left.p-scene-enter-end {\n  transform: translateX(0); }\n\n.horizontalSlide .p-scene-leave-transition {\n  transition: transform 1s cubic-bezier(0.2, 0.8, 0.05, 0.95); }\n\n.horizontalSlide .to-right.p-scene-leave-start {\n  transform: translateX(0); }\n\n.horizontalSlide .to-right.p-scene-leave-end {\n  transform: translateX(-100%); }\n\n.horizontalSlide .to-left.p-scene-leave-start {\n  transform: translateX(0); }\n\n.horizontalSlide .to-left.p-scene-leave-end {\n  transform: translateX(100%); }\n"),n(".verticalIn .p-scene-enter-transition {\n  transition: all 1s cubic-bezier(0.95, 0.05, 0.05, 0.95); }\n\n.verticalIn .p-scene-enter-start {\n  transform: translateY(150%); }\n\n.verticalIn .p-scene-enter-end {\n  transform: translateY(0); }\n\n.verticalIn .p-scene-leave-transition {\n  transition: all 1s cubic-bezier(0.95, 0.05, 0.05, 0.95); }\n\n.verticalIn .p-scene-leave-start {\n  transform: scale(1); }\n\n.verticalIn .p-scene-leave-end {\n  transform: scale(0.5); }\n");var D=function(n){return new function(n){var t=this;this.clear=function(e){return n.classList.remove(e),t},this.start=function(e){return n.classList.add(e,"p-scene-enter-transition","p-scene-enter-start"),setTimeout((function(){n.classList.add("p-scene-enter-end"),n.classList.remove("p-scene-enter-start")})),t},this.end=function(e){return n.classList.remove("p-scene-enter-transition","p-scene-enter-end"),n.classList.add(e,"p-scene-leave-transition","p-scene-leave-start"),setTimeout((function(){n.classList.add("p-scene-leave-end"),n.classList.remove("p-scene-leave-start")})),t}}(n)},q=function(n,t,o){var s=this;if(this.blocks=[],!t.blocks)return console.warn("No `blocks` array found in scene "+t.index);if(0===t.blocks.length)return console.warn("`blocks` is empty in scene "+t.index);var a=o&&o.transition||t.transition,c=i(t.props),l={classes:"",styles:""};if(t.modules)for(var _ in t.modules){var d=t.modules[_];if(d.props){var p=i(d.props,_);l.classes+=p.classes,l.styles+=p.styles}}var f=0,h=t.steps||[],u=r('<div \n      class="s '.concat(C," ").concat(c.classes,'"\n      style="').concat(c.styles,'">\n      <div class="sceneObject ').concat(S,'">\n        <div class="').concat(E,'">\n            <div class="').concat(L," ").concat(l.classes,'" style="').concat(l.styles,'">\n                <div class="backContainer ').concat(P,'"></div>\n                <div class="blocksContainer ').concat(I,'"></div>\n                <div class="frontContainer ').concat(T,'"></div>\n            </div>\n        </div>\n      </div>\n  </div>'));if(n.appendChild(u),this.el=u,t.modules){var x=u.querySelector(".backContainer"),v=u.querySelector(".frontContainer");for(var y in t.modules){var b=t.modules[y],g=A[y];new g(g.BACK?x:v,b,t,o)}}if(t.blocks.forEach((function(n,t){n.index=t;var e=new z(u.querySelector(".blocksContainer"),n);s.blocks.push(e)})),t.transition&&this.el.classList.add(t.transition),t.theme&&this.el.classList.add("theme__"+t.theme),a){var m=this.el.querySelector(".sceneObject");D(m).start("to-right")}this.destroyAfter=function(t){if(a){var e=s.el.querySelector(".sceneObject");D(e).clear("to-left").end("to-right")}var o=t||0;s.blocks.forEach((function(n){return n.beforeDestroy()})),setTimeout((function(){n.removeChild(u)}),o)},this.stepForward=function(){if(f<h.length){var n=h[f];s.blocks[n].stepForward(),f++}},this.uid=e(t)},M={grid:"style_grid__1AGYU",col1:"style_col1__2sfnY",col2:"style_col2__3yP-h",col3:"style_col3__32U3b",col4:"style_col4__1vNJ5"};n(".style_grid__1AGYU {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: 100%;\n}\n.style_grid__1AGYU > div {\n  height: initial;\n  margin-bottom: 0.5rem;\n}\n.style_col1__2sfnY > div {\n  width: 100%;\n}\n.style_col2__3yP-h > div {\n  width: 50%;\n}\n.style_col3__32U3b > div {\n  width: 33.3333333333%;\n}\n.style_col4__1vNJ5 > div {\n  width: 25%;\n}\n");var B=function(n,t){var e=t.columns||1,o=r('<div class="a '.concat(M.grid," ").concat(M["col"+e],'"></div>'));t.scenes.forEach((function(n,e){new q(o,n,t)})),n.appendChild(o),c(o,t,n)},R="style_show__keV71";n(".style_show__keV71 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.style_show__keV71 > div{\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n}\n\n.style_focused__lSH54{\n  outline: 3px solid green;\n}");var U="style_arrows__2HgOY",W="style_left__3_kwS",H="style_right__RERAa",N="style_hide__3B8Al";n(".style_arrows__2HgOY{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: opacity .35s;\n}\n\n.style_left__3_kwS, .style_right__RERAa{\n    width: 50px;\n    height: 50px;\n    background-color: var(--forecolor);\n    transition: background-color .3s;\n    cursor: pointer;\n}\n\n\n.style_arrows__2HgOY.style_hide__3B8Al{\n    opacity: 0;\n}");var X="style_black__27h0m";n(".style_black__27h0m{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0;\n    left:0;\n\n    background-color: black;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity .5s cubic-bezier(0.8, 0.2, 0.2, 0.8);\n}");var F={autoplay:function(n,t,e){var o=null,i=!e.noloop,r=e.delay||2e3,s=0,a=function(n){s=n,clearTimeout(o),o=setTimeout((function(){t.next()}),n)};a(r),t.on("end",(function(n){i&&(t.goto(0),t.notify("nextIndex"))})),t.on("indexChanged",(function(n){var e=t.projectConfig.scenes[n.currentIndex].duration||r;a(e)})),this.pause=function(){clearTimeout(o)},this.resume=function(){a(s)}},keyboard:function(n,t,e){n.addEventListener("keyup",(function(n){"ArrowRight"!==n.key&&"ArrowDown"!==n.key||t.next(),"ArrowLeft"!==n.key&&"ArrowUp"!==n.key||t.prev()}))},arrows:function(n,t,e){var o=null,i=r('<div class="'.concat(U,'">\n    <div class="handleL ').concat(W,'"></div>\n    <div class="handleR ').concat(H,'"></div>\n  </div>'));n.appendChild(i),i.querySelector(".handleL").addEventListener("click",(function(n){t.prev(),s()})),i.querySelector(".handleR").addEventListener("click",(function(n){t.next(),s()})),i.addEventListener("mousemove",(function(n){s()}));var s=function(){clearTimeout(o),i.classList.remove(N),o=setTimeout((function(){i.classList.add(N)}),1500)};s()},black:function(n,t,e){var o=!1,i=r('<div class="'.concat(X,'"></div>'));n.appendChild(i),n.addEventListener("keyup",(function(n){"b"===n.key&&(o=!o,i.style.opacity=o?1:0)}))}},K="router_router__2R2qw";n(".router_router__2R2qw{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0;\n    left:0;\n}");var Y=function(n,t){var e=this,o=r('<div class="'.concat(K,'"></div>'));n.appendChild(o),o.setAttribute("tabindex","0"),this.projectConfig=t;var a=t.scenes,c=a.length-1,l={},_={},d=0,p=0,f=0,h=function(){f=a[d]&&a[d].steps?a[d].steps.length:0};if(h(),this.next=function(){p===f?e.nextIndex():(p++,e.notify("stepChanged"))},this.prev=function(){e.prevIndex()},this.nextIndex=function(){d<c?(d++,p=0,h(),e.notify("nextIndex"),e.notify("indexChanged")):(d=c,p=0,e.notify("end"))},this.prevIndex=function(){d>0?(d--,p=0,h(),e.notify("prevIndex"),e.notify("indexChanged")):(d=0,p=0,e.notify("begin"))},this.goto=function(n){d=n<c?n:c,p=0,e.notify("indexChanged")},this.notify=function(n){var t,e=a[d],r=i(e.props);(t=o.classList).remove.apply(t,s(o.classList)),o.classList.add(K),r.classes&&r.classes.split(" ").forEach((function(n){var t=n.trim();t&&o.classList.add(t)})),l[n]&&l[n].forEach((function(n){n({currentIndex:d,currentStep:p})}))},this.on=function(n,t){l[n]||(l[n]=[]),l[n].push(t)},this.off=function(n,t){var e=l[n].indexOf(t);e>=0&&l[n].splice(e,1)},this.totalScenes=function(){return c},this.totalSteps=function(){return f},this.currentIndex=function(){return d},this.currentStep=function(){return p},t.router)for(var u in t.router){var x=t.router[u];x&&(_[u]=new F[u](o,this,x))}},G=function(n,t){var e=r('<div class="a '.concat(R,'"></div>')),o=t.scenes,i=new q(e,o[0],t);n.appendChild(e),this.router=new Y(n,t),this.router.on("nextIndex",(function(n){i&&i.destroyAfter(1e3),i=new q(e,o[n.currentIndex],t)})),this.router.on("prevIndex",(function(n){i&&i.destroyAfter(1e3),i=new q(e,o[n.currentIndex],t)})),this.router.on("stepChanged",(function(n){i.stepForward()})),this.currentScene=function(){return i},t.columns=1,c(e,t,n),new ResizeObserver((function(o){c(e,t,n)})).observe(e)},$={grid:B,show:G},J=function(n,t){this.el=o(n),this.config=t;var i=getComputedStyle(this.el),r=+i.width.split("px")[0],s=+i.height.split("px")[0];if(r<=0&&(this.el.style.width="360px"),s<=0&&(this.el.style.height="200px"),!t.scenes)return console.warn("No `scenes` array found");if(0===t.scenes.length)return console.warn("`scenes` is empty");if(t.modules){var a=function(n){t.scenes.forEach((function(e){e.hasOwnProperty("modules")||(e.modules={}),e.modules.hasOwnProperty(n)||(e.modules[n]=t.modules[n])}))};for(var c in t.modules)a(c)}t.transition&&this.el.classList.add(t.transition),t.theme&&this.el.classList.add("theme__"+t.theme),t.scenes.forEach((function(n,t){n.index=t,n.blocks.forEach((function(n,t){n.index=t}))}));var l=t.container||"show";$[l]?(this.el.classList.add("presenta"),this.container=new $[l](this.el,t),this.uid=e(t)):console.warn('container "'.concat(l,'" not found'))},V=function(n,t){return function(n){var t={adapt:!0,router:{keyboard:!0,arrows:!0,black:!0},modules:{pagenumber:!0},theme:"original",transition:"horizontalSlide"};for(var e in t)if(n.hasOwnProperty(e)){if("object"===a(t[e]))for(var o in t[e])n[e].hasOwnProperty(o)||(n[e][o]=t[e][o])}else n[e]=t[e]}(t),new J(n,t)};return V.version="0.0.0",V.Text=l,V.Embed=u,V.Images=b,V.Debug=m,V.Show=G,V.Grid=B,V.Block=z,V.Scene=q,V.Container=J,V.addBlock=function(n,t){if(j[n])return console.warn("module type ".concat(n," already defined"));j[n]=t},V.addRouterController=function(n,t){if(F[n])return console.warn("router io ".concat(n," already defined"));F[n]=t},V.addModule=function(n,t){if(A[n])return console.warn("module type ".concat(n," already defined"));A[n]=t},V},"object"===a(t)&&void 0!==n?n.exports=r():void 0===(i="function"==typeof(o=r)?o.call(t,e,t,n):o)||(n.exports=i)},370:function(n,t,e){"use strict";var o=e(327);e.n(o).a},371:function(n,t,e){"use strict";var o=e(328);e.n(o).a},377:function(n,t,e){"use strict";e.r(t);var o=e(326).a,i=(e(370),e(371),e(43)),r=Object(i.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cont"},[e("div",{staticClass:"edit",class:{invalid:n.invalid}},[e("Ace",{ref:"editor",attrs:{lang:"javascript",theme:"chrome"},on:{init:n.editorInit},model:{value:n.icode,callback:function(t){n.icode=t},expression:"icode"}})],1),n._v(" "),e("div",{staticClass:"prev"},[e("div",{ref:"preso",staticClass:"preso"})])])}),[],!1,null,"155394b5",null);t.default=r.exports}}]);