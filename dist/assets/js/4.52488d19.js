(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{347:function(e,t,n){var i=n(1),r=n(348);i({global:!0,forced:parseFloat!=r},{parseFloat:r})},348:function(e,t,n){var i=n(3),r=n(84).trim,o=n(86),a=i.parseFloat,l=1/a(o+"-0")!=-1/0;e.exports=l?function(e){var t=r(String(e)),n=a(t);return 0===n&&"-"==t.charAt(0)?-0:n}:a},518:function(e,t,n){var i,r;n(23),n(39),n(59),n(34),n(81),n(87),n(5),n(347),n(32),n(124),n(40),n(195);var o=n(82);!function(a,l){"object"==o(t)&&void 0!==e?e.exports=l():void 0===(r="function"==typeof(i=l)?i.call(t,n,t,e):i)||(e.exports=r)}(0,(function(){"use strict";var e="style_fit__36Irr";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(":root{--fittyPadding:1rem}.style_fitty__2IKDn{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box;overflow:hidden;padding:var(--fittyPadding);font-family:var(--fontHeading)}.style_prestyle__qyIzP{box-sizing:border-box;text-align:center}.style_fit__36Irr{display:inline-block;white-space:nowrap;color:var(--colorFore);box-sizing:border-box}.style_fit__36Irr b,.style_fit__36Irr strong{color:var(--colorAccent)}");var t=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(function(e,t,n){return function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){if(e){var t=function(e){return[].slice.call(e)},i=3,r=[],o=null,a="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(o),o=e.requestAnimationFrame((function(){return c(r.filter((function(e){return e.dirty&&e.active})))}))}:function(){},l=function(e){return function(){r.forEach((function(t){return t.dirty=e})),a()}},c=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=f(e)})),e.filter(p).forEach(y);var t=e.filter(d);t.forEach(s),t.forEach((function(e){y(e),u(e)})),t.forEach(m)},u=function(e){return e.dirty=0},s=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},d=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},f=function(t){var n=e.getComputedStyle(t.element,null);t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space")},p=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},y=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},m=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},v=function(e,t){return function(){e.dirty=t,e.active&&a()}},h=function(e){return function(){r=r.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},w=function(e){return function(){e.active||(e.active=!0,a())}},b=function(e){return function(){return e.active=!1}},S=function(e){e.observeMutations&&(e.observer=new MutationObserver(v(e,1)),e.observer.observe(e.element,e.observeMutations))},g={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},z=null,_=function(){e.clearTimeout(z),z=e.setTimeout(l(2),F.observeWindowDelay)},x=["resize","orientationchange"];return Object.defineProperty(F,"observeWindow",{set:function(t){var n=(t?"add":"remove")+"EventListener";x.forEach((function(t){e[n](t,_)}))}}),F.observeWindow=!0,F.observeWindowDelay=100,F.fitAll=l(i),F}function E(e,t){var o=n({},g,t),l=e.map((function(e){var t=n({},o,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},S(e),e.newbie=!0,e.dirty=!0,r.push(e)}(t),{element:e,fit:v(t,i),unfreeze:w(t),freeze:b(t),unsubscribe:h(t)}}));return a(),l}function F(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?E(t(document.querySelectorAll(e)),n):E([e],n)[0]}}("undefined"==typeof window?null:window)}(n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}()),n=function(n,i){var r=this;return new Promise((function(o,a){var l="sandfit"+(Math.random()+"").split(".")[1],c=document.createElement("div");c.classList.add(l,"style_fitty__2IKDn");var u=i.linefactor||.8,s=i.width||100,d=document.createElement("div");d.classList.add("style_prestyle__qyIzP"),d.style.width=s+"%",i.text.split("\n").forEach((function(t){var n=document.createElement("div");n.classList.add(e);var i=document.createElement("span");i.innerHTML=t,n.appendChild(i),d.appendChild(n)})),c.appendChild(d),n.appendChild(c),d.style.transform="scale(1)";var f=0;setTimeout((function(){var n=t("."+l+" ."+e);n.forEach((function(e){var t=e.element;t.addEventListener("fit",(function(i){if(t.style.lineHeight=i.detail.newValue*u+"px",e.freeze(),f++,console.log(f),f>=n.length){var a=d.getBoundingClientRect(),l=d.parentNode.getBoundingClientRect().height/(a.height+40);l<1&&(d.style.transform="scale(".concat(l,")")),o(r)}}))}))}),150)}))};return n.install=function(e){e.addBlock("fitty",n),e.addProp("fittyPadding")},"undefined"!=typeof window&&window.Presenta&&window.Presenta.use(n),n}))}}]);