/*
Copyright 2010, KISSY UI Library v1.0.4
MIT Licensed
build: 493 Mar 17 14:02
*/
(function(m,s,r){if(m[s]===r)m[s]={};s=m[s];var t=m.document,l=Array.prototype,o=l.forEach,k=l.indexOf,i=/^\s+|\s+$/g,d=function(a,b,c,f){if(!b||!a)return a;if(c===r)c=true;var p,e,q;if(f&&(q=f.length))for(p=0;p<q;p++){e=f[p];if(e in b)if(c||!(e in a))a[e]=b[e]}else for(e in b)if(c||!(e in a))a[e]=b[e];return a},g=false,j=[],h=false;d(s,{version:"1.0.4",_init:function(){this.Env={mods:{}};this.Config={debug:true}},add:function(a,b){var c=this;c.Env.mods[a]={name:a,fn:b};b(c);return c},ready:function(a){h||
this._bindReady();g?a.call(m,this):j.push(a);return this},_bindReady:function(){var a=this,b=t.documentElement.doScroll,c=b?"onreadystatechange":"DOMContentLoaded";h=true;if(t.attachEvent){if(m!=m.top){function f(){if(t.readyState==="complete"){t.detachEvent(c,f);a._fireReady()}}t.attachEvent(c,f)}else{function p(){try{b("left");a._fireReady()}catch(q){setTimeout(p,1)}}p()}m.attachEvent("onload",function(){a._fireReady()})}else{function e(){t.removeEventListener(c,e,false);a._fireReady()}t.addEventListener(c,
e,false)}},_fireReady:function(){if(!g){g=true;if(j){for(var a,b=0;a=j[b++];)a.call(m,this);j=null}}},mix:d,merge:function(){var a=arguments,b={},c,f=a.length;for(c=0;c<f;++c)d(b,a[c]);return b},extend:function(a,b,c,f){if(!b||!a)return a;var p=Object.prototype,e=b.prototype,q=function(n){function v(){}v.prototype=n;return new v}(e);a.prototype=q;q.constructor=a;a.superclass=e;if(b!==Object&&e.constructor===p.constructor)e.constructor=b;c&&d(q,c);f&&d(a,f);return a},augment:function(a,b,c,f){return d(a.prototype,
b.prototype,c,f)},weave:function(a,b,c,f){var p=[c[f],a];b==="before"&&p.reverse();c[f]=function(){for(var e=0,q;e<2;++e)q=p[e].apply(this,arguments);return q};return this},cloneTo:function(a){var b=m[a]||{};d(b,this);b._init();d(b.Env.mods,this.Env.mods);return m[a]=b},namespace:function(){var a=arguments,b=a.length,c=null,f,p,e;for(f=0;f<b;++f){e=(""+a[f]).split(".");c=this;for(p=m[e[0]]===c?1:0;p<e.length;++p)c=c[e[p]]=c[e[p]]||{}}return c},each:o?function(a,b,c){o.call(a,b,c);return this}:function(a,
b,c){var f=a&&a.length||0,p;for(p=0;p<f;++p)b.call(c||this,a[p],p,a);return this},indexOf:k?function(a,b){return k.call(b,a)}:function(a,b){for(var c=0,f=b.length;c<f;++c)if(b[c]===a)return c;return-1},trim:String.prototype.trim?function(a){return(a||"").trim()}:function(a){return(a||"").replace(i,"")},log:function(a,b,c){if(this.Config.debug){c&&(a=c+": "+a);if(m.console!==r&&console.log)console[b&&console[b]?b:"log"](a)}return this}});s._init()})(window,"KISSY");
KISSY.add("selector",function(m,s){function r(e,q,n){var v,u=[],w,x;if(typeof e===h){e=m.trim(e);if(c.test(e)){if(q=l(e.slice(1)))u=[q]}else if(v=f.exec(e)){w=v[1];x=v[2];v=v[3];if(q=w?l(w):t(q))if(v){if(!w||e.indexOf(a)!==-1)u=k(v,x,q)}else if(x)u=o(q,x)}else if(e.indexOf(",")>-1)if(j.querySelectorAll)u=j.querySelectorAll(e);else{w=e.split(",");x=[];u=0;for(e=w.length;u<e;++u)x=x.concat(r(w[u],q));u=d(x)}}else if(e&&e.nodeType)u=[e];else if(e&&e.item)u=e;if(u.item)u=i(u);n||g(u);return u}function t(e){if(e===
s)e=j;else if(typeof e===h&&c.test(e))e=l(e.slice(1));else if(e&&e.nodeType!==1&&e.nodeType!==9)e=null;return e}function l(e){return j.getElementById(e)}function o(e,q){return e.getElementsByTagName(q)}function k(e,q,n){n=e=n.getElementsByClassName(e);var v=0,u=0,w=e.length,x;if(q&&q!==b){n=[];for(q=q.toUpperCase();v<w;++v){x=e[v];if(x.tagName===q)n[u++]=x}}return n}function i(e){return Array.prototype.slice.call(e)}function d(e){var q=false;e.sort(function(v,u){v=v.sourceIndex-u.sourceIndex;if(v===
0)q=true;return v});if(q)for(var n=1;n<e.length;n++)e[n]===e[n-1]&&e.splice(n--,1);return e}function g(e){e.each=function(q,n){m.each(e,q,n)}}var j=document,h="string",a=" ",b="*",c=/^#[\w-]+$/,f=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var e=j.createElement("div");e.appendChild(j.createComment(""));if(e.getElementsByTagName(b).length>0)o=function(q,n){q=q.getElementsByTagName(n);if(n===b){n=[];for(var v=0,u=0,w;w=q[v++];)if(w.nodeType===1)n[u++]=w;q=n}return q}})();j.getElementsByClassName||
(k=j.querySelectorAll?function(e,q,n){return n.querySelectorAll((q?q:"")+"."+e)}:function(e,q,n){q=n.getElementsByTagName(q||b);n=[];var v=0,u=0,w=q.length,x,y;for(e=a+e+a;v<w;++v){x=q[v];if((y=x.className)&&(a+y+a).indexOf(e)>-1)n[u++]=x}return n});try{i(j.documentElement.childNodes)}catch(p){i=function(e){for(var q=[],n=0,v=e.length;n<v;++n)q[n]=e[n];return q}}m.query=r;m.get=function(e,q){return r(e,q,true)[0]||null}});
KISSY.add("dom-base",function(m,s){var r=document.documentElement.textContent!==s?"textContent":"innerText";m.Dom={query:m.query,get:m.get,attr:function(k,i,d){if(k&&k.getAttribute){if(d===s)return k.getAttribute(attr)||"";k.setAttribute(attr,d)}},removeAttr:function(k,i){k&k.removeAttribute&&k.removeAttribute(i)},hasClass:function(k,i){if(!i||!k.className)return false;return(" "+k.className+" ").indexOf(" "+i+" ")>-1},addClass:function(k,i){if(i)t(k,i)||(k.className+=" "+i)},removeClass:function(k,
i){if(t(k,i)){k.className=(" "+k.className+" ").replace(" "+i+" "," ");t(k,i)&&o(k,i)}},replaceClass:function(k,i,d){o(k,i);l(k,d)},toggleClass:function(k,i,d){(d!==s?d:!t(k,i))?l(k,i):o(k,i)},css:function(){},text:function(k,i){if(i===s)return(k||{})[r]||"";if(k)k[r]=i},html:function(){},val:function(){},create:function(){}};var t=m.Dom.hasClass,l=m.Dom.addClass,o=m.Dom.removeClass});
KISSY.add("datalazyload",function(m,s){function r(h,a){var b=this;if(!(b instanceof r))return new r(h,a);if(a===s){a=h;h=[d]}k.isArray(h)||(h=[l.get(h)||d]);b.containers=h;b.config=m.merge(j,a||{});b.callbacks={els:[],fns:[]};b._init()}var t=YAHOO.util,l=t.Dom,o=t.Event,k=YAHOO.lang,i=window,d=document,g={AUTO:"auto",MANUAL:"manual"},j={mod:g.MANUAL,diff:"default",placeholder:"http://a.tbcdn.cn/kissy/1.0.4/build/datalazyload/dot.gif"};m.mix(r.prototype,{_init:function(){var h=this;h.threshold=h._getThreshold();
h._filterItems();h._getItemsLength()&&h._initLoadEvent()},_initLoadEvent:function(){function h(){b||(b=setTimeout(function(){a();b=null},100))}function a(){c._loadItems();if(c._getItemsLength()===0){o.removeListener(i,"scroll",h);o.removeListener(i,"resize",h)}}var b,c=this;o.on(i,"scroll",h);o.on(i,"resize",function(){c.threshold=c._getThreshold();h()});c._getItemsLength()&&o.onDOMReady(function(){a()})},_filterItems:function(){var h=this,a=h.containers,b=h.threshold,c=h.config.placeholder,f=h.config.mod===
g.MANUAL,p,e,q,n,v,u,w,x=[],y=[];p=0;for(e=a.length;p<e;++p){q=a[p].getElementsByTagName("img");n=0;for(v=q.length;n<v;++n){u=q[n];w=u.getAttribute("data-lazyload-src");if(f){if(w){u.src=c;x.push(u)}}else if(l.getY(u)>b&&!w){u.setAttribute("data-lazyload-src",u.src);u.src=c;x.push(u)}}q=a[p].getElementsByTagName("textarea");n=0;for(v=q.length;n<v;++n){u=q[n];l.hasClass(u,"ks-datalazyload")&&y.push(u)}}h.images=x;h.areaes=y},_loadItems:function(){var h=this;h._loadImgs();h._loadAreaes();h._fireCallbacks()},
_loadImgs:function(){var h=this,a=h.images,b=l.getDocumentScrollTop();b=h.threshold+b;var c,f,p=[];for(c=0;f=a[c++];)l.getY(f)<=b?h._loadImgSrc(f):p.push(f);h.images=p},_loadImgSrc:function(h,a){a=a||"data-lazyload-src";var b=h.getAttribute(a);if(b&&h.src!=b){h.src=b;h.removeAttribute(a)}},_loadAreaes:function(){var h=this,a=h.areaes,b=l.getDocumentScrollTop();b=h.threshold+b;var c,f,p,e=[];for(c=0;f=a[c++];){p=f.parentNode;l.getY(p)<=b?h._loadDataFromArea(p,f):e.push(f)}h.areaes=e},_loadDataFromArea:function(h,
a){var b=document.createElement("DIV");b.innerHTML=a.value;a.style.display="none";a.className="";h.appendChild(b)},_fireCallbacks:function(){var h=this,a=h.callbacks,b=a.els,c=a.fns,f=l.getDocumentScrollTop();h=h.threshold+f;var p,e,q=[],n=[];for(f=0;(p=b[f])&&(e=c[f++]);)if(l.getY(p)<=h)e.call(p);else{q.push(p);n.push(e)}a.els=q;a.fns=n},addCallback:function(h,a){if((h=l.get(h))&&typeof a==="function"){this.callbacks.els.push(h);this.callbacks.fns.push(a)}},_getThreshold:function(){var h=this.config.diff,
a=l.getViewportHeight();return h==="default"?2*a:a+h},_getItemsLength:function(){var h=this;return h.images.length+h.areaes.length+h.callbacks.els.length},loadCustomLazyData:function(h,a,b){var c=this,f,p;k.isArray(h)||(h=[l.get(h)]);m.each(h,function(e){switch(a){case "textarea-data":if((f=e.getElementsByTagName("textarea")[0])&&l.hasClass(f,b||"ks-datalazyload-custom"))c._loadDataFromArea(e,f);break;default:p=e.nodeName==="IMG"?[e]:e.getElementsByTagName("img");e=0;for(var q=p.length;e<q;e++)c._loadImgSrc(p[e],
b||"data-lazyload-src-custom")}})}});m.mix(r,r.prototype,true,["loadCustomLazyData","_loadImgSrc","_loadDataFromArea"]);m.DataLazyload=r});
KISSY.add("suggest",function(m,s){function r(a,b,c){var f=this;if(!(f instanceof r))return new r(a,b,c);f.textInput=l.get(a);f.dataSource=b;f.JSONDataSource=k.isObject(b)?b:null;f.returnedData=null;f.config=k.merge(h,c||{});f.container=null;f.query="";f.queryParams="";f._timer=null;f._isRunning=false;f.dataScript=null;f._dataCache={};f._latestScriptTime="";f._scriptDataIsOut=false;f._onKeyboardSelecting=false;f.selectedItem=null;f._init()}var t=YAHOO.util,l=t.Dom,o=t.Event,k=YAHOO.lang,i=window,d=
document,g=d.getElementsByTagName("head")[0],j=YAHOO.env.ua.ie,h={containerClass:"",containerWidth:"auto",resultFormat:"约%result%条结果",showCloseBtn:false,closeBtnText:"关闭",useShim:j===6,timerDelay:200,autoFocus:false,submitFormOnClickSelect:true};m.mix(r.prototype,{_init:function(){var a=this;a._initTextInput();a._initContainer();a.config.useShim&&a._initShim();a._initStyle();a.createEvent("beforeDataRequest");a.createEvent("onDataReturn");a.createEvent("beforeShow");a.createEvent("onItemSelect");
a._initResizeEvent()},_initTextInput:function(){var a=this;a.textInput.setAttribute("autocomplete","off");o.on(a.textInput,"blur",function(){a.stop();a.hide()});a.config.autoFocus&&a.textInput.focus();var b=0;o.on(a.textInput,"keydown",function(c){c=c.keyCode;switch(c){case 27:a.hide();a.textInput.value=a.query;break;case 13:a.textInput.blur();a._onKeyboardSelecting&&a.textInput.value==a._getSelectedItemKey()&&a.fireEvent("onItemSelect",a.textInput.value);a._submitForm();break;case 40:case 38:if(b++==
0){a._isRunning&&a.stop();a._onKeyboardSelecting=true;a.selectItem(c==40)}else if(b==3)b=0;break}if(c!=40&&c!=38){a._isRunning||a.start();a._onKeyboardSelecting=false}});o.on(a.textInput,"keyup",function(){b=0})},_initContainer:function(){var a=d.createElement("div"),b=this.config.containerClass;a.className="suggest-container";if(b)a.className+=" "+b;a.style.position="absolute";a.style.visibility="hidden";this.container=a;this._setContainerRegion();this._initContainerEvent();d.body.insertBefore(a,
d.body.firstChild)},_setContainerRegion:function(){var a=this,b=l.getRegion(a.textInput),c=b.left,f=b.right-c-2;f=f>0?f:0;if(d.documentMode===7&&(j===7||j===8))c-=2;else YAHOO.env.ua.gecko&&c++;a.container.style.left=c+"px";a.container.style.top=b.bottom+"px";a.container.style.width=a.config.containerWidth=="auto"?f+"px":a.config.containerWidth},_initContainerEvent:function(){var a=this;o.on(a.container,"mousemove",function(c){c=o.getTarget(c);if(c.nodeName!="LI")c=l.getAncestorByTagName(c,"li");
if(l.isAncestor(a.container,c))if(c!=a.selectedItem){a._removeSelectedItem();a._setSelectedItem(c)}});var b=null;a.container.onmousedown=function(c){c=c||i.event;b=c.target||c.srcElement;a.textInput.onbeforedeactivate=function(){i.event.returnValue=false;a.textInput.onbeforedeactivate=null};return false};o.on(a.container,"mouseup",function(c){if(a._isInContainer(o.getXY(c))){c=o.getTarget(c);if(c==b)if(c.className=="suggest-close-btn")a.hide();else{if(c.nodeName!="LI")c=l.getAncestorByTagName(c,"li");
if(l.isAncestor(a.container,c)){a._updateInputFromSelectItem(c);a.fireEvent("onItemSelect",a.textInput.value);a.textInput.blur();a._submitForm()}}}})},_submitForm:function(){if(this.config.submitFormOnClickSelect){var a=this.textInput.form;if(a){if(d.createEvent){var b=d.createEvent("MouseEvents");b.initEvent("submit",true,false);a.dispatchEvent(b)}else d.createEventObject&&a.fireEvent("onsubmit");a.submit()}}},_isInContainer:function(a){var b=l.getRegion(this.container);return a[0]>=b.left&&a[0]<=
b.right&&a[1]>=b.top&&a[1]<=b.bottom},_initShim:function(){var a=d.createElement("iframe");a.src="about:blank";a.className="suggest-shim";a.style.position="absolute";a.style.visibility="hidden";a.style.border="none";this.container.shim=a;this._setShimRegion();d.body.insertBefore(a,d.body.firstChild)},_setShimRegion:function(){var a=this.container,b=a.shim;if(b){b.style.left=parseInt(a.style.left)-2+"px";b.style.top=a.style.top;b.style.width=parseInt(a.style.width)+2+"px"}},_initStyle:function(){var a=
l.get("suggest-style");if(!a){a=d.createElement("style");a.id="suggest-style";g.appendChild(a);if(a.styleSheet)a.styleSheet.cssText=".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}";
else a.appendChild(d.createTextNode(".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}"))}},
_initResizeEvent:function(){var a=this,b;o.on(i,"resize",function(){b&&clearTimeout(b);b=setTimeout(function(){a._setContainerRegion();a._setShimRegion()},50)})},start:function(){var a=this;r.focusInstance=a;a._timer=setTimeout(function(){a.updateContent();a._timer=setTimeout(arguments.callee,a.config.timerDelay)},a.config.timerDelay);a._isRunning=true},stop:function(){r.focusInstance=null;clearTimeout(this._timer);this._isRunning=false},show:function(){if(!this.isVisible()){var a=this.container,
b=a.shim;a.style.visibility="";if(b){if(!b.style.height){a=l.getRegion(a);b.style.height=a.bottom-a.top-2+"px"}b.style.visibility=""}}},hide:function(){if(this.isVisible()){var a=this.container,b=a.shim;if(b)b.style.visibility="hidden";a.style.visibility="hidden"}},isVisible:function(){return this.container.style.visibility!="hidden"},updateContent:function(){var a=this;if(a._needUpdate()){a._updateQueryValueFromInput();var b=a.query;if(k.trim(b).length)if(a._dataCache[b]!==s){a.returnedData="using cache";
a._fillContainer(a._dataCache[b]);a._displayContainer()}else a.JSONDataSource?a.handleResponse(a.JSONDataSource[b]):a.requestData();else{a._fillContainer("");a.hide()}}},_needUpdate:function(){return this.textInput.value!=this.query},requestData:function(){var a=this;if(!j)a.dataScript=null;if(!a.dataScript){var b=d.createElement("script");b.type="text/javascript";b.charset="utf-8";g.insertBefore(b,g.firstChild);a.dataScript=b;if(!j){var c=(new Date).getTime();a._latestScriptTime=c;b.setAttribute("time",
c);o.on(b,"load",function(){a._scriptDataIsOut=b.getAttribute("time")!=a._latestScriptTime})}}a.queryParams="q="+encodeURIComponent(a.query)+"&code=utf-8&callback=g_ks_suggest_callback";a.fireEvent("beforeDataRequest",a.query);a.dataScript.src=a.dataSource+"?"+a.queryParams},handleResponse:function(a){var b=this;if(!b._scriptDataIsOut){b.returnedData=a;b.fireEvent("onDataReturn",a);b.returnedData=b.formatData(b.returnedData);var c="";a=b.returnedData.length;if(a>0){c=d.createElement("ol");for(var f=
0;f<a;++f){var p=b.returnedData[f],e=b.formatItem(p.key,p.result);e.setAttribute("key",p.key);c.appendChild(e)}c=c}b._fillContainer(c);a>0&&b.appendBottom();k.trim(b.container.innerHTML)&&b.fireEvent("beforeShow",b.container);b._dataCache[b.query]=b.container.innerHTML;b._displayContainer()}},formatData:function(a){var b=[];if(!a)return b;if(k.isArray(a.result))a=a.result;var c=a.length;if(!c)return b;for(var f,p=0;p<c;++p){f=a[p];b[p]=k.isString(f)?{key:f}:k.isArray(f)&&f.length>=2?{key:f[0],result:f[1]}:
f}return b},formatItem:function(a,b){var c=d.createElement("li"),f=d.createElement("span");f.className="suggest-key";f.appendChild(d.createTextNode(a));c.appendChild(f);if(b!==s){a=this.config.resultFormat.replace("%result%",b);if(k.trim(a)){b=d.createElement("span");b.className="suggest-result";b.appendChild(d.createTextNode(a));c.appendChild(b)}}return c},appendBottom:function(){var a=d.createElement("div");a.className="suggest-bottom";if(this.config.showCloseBtn){var b=d.createElement("a");b.href=
"javascript: void(0)";b.setAttribute("target","_self");b.className="suggest-close-btn";b.appendChild(d.createTextNode(this.config.closeBtnText));a.appendChild(b)}k.trim(a.innerHTML)&&this.container.appendChild(a)},_fillContainer:function(a){if(a.nodeType==1){this.container.innerHTML="";this.container.appendChild(a)}else this.container.innerHTML=a;this.selectedItem=null},_displayContainer:function(){m.trim(this.container.innerHTML)?this.show():this.hide()},selectItem:function(a){var b=this,c=b.container.getElementsByTagName("li");
if(c.length!=0)if(b.isVisible()){if(b.selectedItem){a=l[a?"getNextSibling":"getPreviousSibling"](b.selectedItem);if(!a)b.textInput.value=b.query}else a=c[a?0:c.length-1];b._removeSelectedItem();if(a){b._setSelectedItem(a);b._updateInputFromSelectItem()}}else b.show()},_removeSelectedItem:function(){l.removeClass(this.selectedItem,"selected");this.selectedItem=null},_setSelectedItem:function(a){l.addClass(a,"selected");this.selectedItem=a},_getSelectedItemKey:function(){if(!this.selectedItem)return"";
return this.selectedItem.getAttribute("key")},_updateQueryValueFromInput:function(){this.query=this.textInput.value},_updateInputFromSelectItem:function(){this.textInput.value=this._getSelectedItemKey(this.selectedItem)}});m.augment(r,t.EventProvider);i.g_ks_suggest_callback=function(a){r.focusInstance&&setTimeout(function(){r.focusInstance.handleResponse(a)},0)};m.Suggest=r});
KISSY.add("switchable",function(m,s){function r(d,g){var j=this;g=g||{};if(!("mackupType"in g))if(g.panelCls)g.mackupType=1;else if(g.panels)g.mackupType=2;g=m.merge(r.Config,g);j.container=m.get(d);j.config=g;j.triggers=j.triggers||[];j.panels=j.panels||[];if(j.activeIndex===s)j.activeIndex=g.activeIndex;j._init()}var t=YAHOO.util,l=t.Dom,o=t.Event,k=YAHOO.lang,i=document;r.Config={mackupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",
triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,activeTriggerCls:"active",steps:1,viewSize:[]};r.Plugins=[];m.mix(r.prototype,{_init:function(){var d=this,g=d.config;d.panels.length===0&&d._parseMackup();d.createEvent("beforeSwitch");d.createEvent("onSwitch");g.hasTriggers&&d._bindTriggers();m.each(r.Plugins,function(j){j.init&&j.init(d)})},_parseMackup:function(){var d=this,g=d.container,j=d.config,h=j.hasTriggers,a,b=[],c=[];switch(j.mackupType){case 0:if(a=m.get("."+
j.navCls,g))b=l.getChildren(a);a=m.get("."+j.contentCls,g);c=l.getChildren(a);break;case 1:b=m.query("."+j.triggerCls,g);c=m.query("."+j.panelCls,g);break;case 2:b=j.triggers;c=j.panels;break}g=c.length;d.length=g/j.steps;if(h&&g>0&&b.length===0)b=d._generateTriggersMackup(d.length);if(h){j=0;for(h=b.length;j<h;j++)d.triggers.push(b[j])}for(j=0;j<g;j++)d.panels.push(c[j]);d.content=a||c[0].parentNode},_generateTriggersMackup:function(d){var g=this,j=g.config,h=i.createElement("UL"),a,b;h.className=
j.navCls;for(b=0;b<d;b++){a=i.createElement("LI");if(b===g.activeIndex)a.className=j.activeTriggerCls;a.innerHTML=b+1;h.appendChild(a)}g.container.appendChild(h);return l.getChildren(h)},_bindTriggers:function(){var d=this,g=d.config,j=d.triggers,h,a,b=j.length;for(a=0;a<b;a++)(function(c){h=j[c];o.on(h,"click",function(){d._onFocusTrigger(c)});o.on(h,"focus",function(){d._onFocusTrigger(c)});if(g.triggerType==="mouse"){o.on(h,"mouseenter",function(){d._onMouseEnterTrigger(c)});o.on(h,"mouseleave",
function(){d._onMouseLeaveTrigger(c)})}})(a)},_onFocusTrigger:function(d){var g=this;if(g.activeIndex!==d){g.switchTimer&&g.switchTimer.cancel();g.switchTo(d)}},_onMouseEnterTrigger:function(d){var g=this;if(g.activeIndex!==d)g.switchTimer=k.later(g.config.delay*1E3,g,function(){g.switchTo(d)})},_onMouseLeaveTrigger:function(){var d=this;d.switchTimer&&d.switchTimer.cancel()},switchTo:function(d,g){var j=this,h=j.config,a=j.triggers,b=j.panels,c=j.activeIndex,f=h.steps,p=c*f,e=d*f;if(d===c)return j;
if(!j.fireEvent("beforeSwitch",d))return j;if(h.hasTriggers)j._switchTrigger(c>-1?a[c]:null,a[d]);if(g===s)g=d>c?"forward":"forward";j._switchView(b.slice(p,p+f),b.slice(e,e+f),d,g);j.activeIndex=d;return j},_switchTrigger:function(d,g){var j=this.config.activeTriggerCls;d&&l.removeClass(d,j);l.addClass(g,j)},_switchView:function(d,g,j){l.setStyle(d,"display","none");l.setStyle(g,"display","block");this.fireEvent("onSwitch",j)},prev:function(){var d=this,g=d.activeIndex;d.switchTo(g>0?g-1:d.length-
1,"backward")},next:function(){var d=this,g=d.activeIndex;d.switchTo(g<d.length-1?g+1:0,"forward")}});m.augment(r,t.EventProvider);m.Switchable=r});
KISSY.add("switchable-autoplay",function(m){var s=YAHOO.util.Event,r=YAHOO.lang,t=m.Switchable;m.mix(t.Config,{autoplay:false,interval:5,pauseOnHover:true});t.Plugins.push({name:"autoplay",init:function(l){var o=l.config;if(o.autoplay){if(o.pauseOnHover){s.on(l.container,"mouseenter",function(){l.paused=true});s.on(l.container,"mouseleave",function(){setTimeout(function(){l.paused=false},o.interval*1E3)})}l.autoplayTimer=r.later(o.interval*1E3,l,function(){l.paused||l.switchTo(l.activeIndex<l.length-
1?l.activeIndex+1:0)},null,true)}}})});
KISSY.add("switchable-effect",function(m){var s=YAHOO.util,r=s.Dom,t=m.Switchable,l;m.mix(t.Config,{effect:"none",duration:0.5,easing:s.Easing.easeNone});t.Effects={none:function(o,k,i){r.setStyle(o,"display","none");r.setStyle(k,"display","block");i()},fade:function(o,k,i){if(o.length!==1)throw new Error("fade effect only supports steps == 1.");var d=this,g=d.config,j=o[0],h=k[0];d.anim&&d.anim.stop();r.setStyle(h,"opacity",1);d.anim=new s.Anim(j,{opacity:{to:0}},g.duration,g.easing);d.anim.onComplete.subscribe(function(){d.anim=
null;r.setStyle(h,"z-index",9);r.setStyle(j,"z-index",1);i()});d.anim.animate()},scroll:function(o,k,i,d){var g=this;o=g.config;k=o.effect==="scrollx";var j={};j[k?"left":"top"]={to:-(g.viewSize[k?0:1]*d)};g.anim&&g.anim.stop();g.anim=new s.Anim(g.content,j,o.duration,o.easing);g.anim.onComplete.subscribe(function(){g.anim=null;i()});g.anim.animate()}};l=t.Effects;l.scrollx=l.scrolly=l.scroll;t.Plugins.push({name:"effect",init:function(o){var k=o.config,i=k.effect,d=o.panels,g=k.steps,j=o.activeIndex*
g,h=j+g-1,a=d.length;o.viewSize=[k.viewSize[0]||d[0].offsetWidth*g,k.viewSize[0]||d[0].offsetHeight*g];if(i!=="none"){for(k=0;k<a;k++)d[k].style.display="block";switch(i){case "scrollx":case "scrolly":o.content.style.position="absolute";o.content.parentNode.style.position="relative";if(i==="scrollx"){r.setStyle(d,"float","left");o.content.style.width=o.viewSize[0]*(a/g)+"px"}break;case "fade":for(k=0;k<a;k++){r.setStyle(d[k],"opacity",k>=j&&k<=h?1:0);d[k].style.position="absolute";d[k].style.zIndex=
k>=j&&k<=h?9:1}break}}}});m.mix(t.prototype,{_switchView:function(o,k,i,d){var g=this,j=g.config.effect;(typeof j==="function"?j:l[j]).call(g,o,k,function(){g.fireEvent("onSwitch",i)},i,d)}})});
KISSY.add("switchable-circular",function(m){function s(c,f,p,e,q){var n=this;c=n.config;f=n.length;var v=n.activeIndex,u=c.scrollType===a,w=u?k:i,x=n.viewSize[u?0:1];u=-x*e;var y={},A,z=q===h;if(A=z&&v===0&&e===f-1||q===j&&v===f-1&&e===0)u=r.call(n,n.panels,e,z,w,x);y[w]={to:u};n.anim&&n.anim.stop();n.anim=new l.Anim(n.content,y,c.duration,c.easing);n.anim.onComplete.subscribe(function(){A&&t.call(n,n.panels,e,z,w,x);n.anim=null;p()});n.anim.animate()}function r(c,f,p,e,q){var n=this;f=n.config.steps;
n=n.length;var v=p?n-1:0,u=(v+1)*f;for(f=v*f;f<u;f++){c[f].style.position=o;c[f].style[e]=(p?"-":g)+q*n+d}return p?q:-q*n}function t(c,f,p,e,q){f=this;var n=f.config.steps,v=f.length,u=p?v-1:0,w=(u+1)*n;for(n=u*n;n<w;n++){c[n].style.position=g;c[n].style[e]=g}f.content.style[e]=p?-q*(v-1)+d:g}var l=YAHOO.util,o="relative",k="left",i="top",d="px",g="",j="forward",h="backward",a="scrollx",b=m.Switchable;m.mix(b.Config,{circular:false});b.Plugins.push({name:"circular",init:function(c){c=c.config;if(c.circular&&
(c.effect===a||c.effect==="scrolly")){c.scrollType=c.effect;c.effect=s}}})});
KISSY.add("switchable-lazyload",function(m){var s=YAHOO.util.Dom,r="beforeSwitch",t="img-src",l="textarea-data",o={},k=m.Switchable,i=m.DataLazyload;o[t]="data-lazyload-src-custom";o[l]="ks-datalazyload-custom";m.mix(k.Config,{lazyDataType:"",lazyDataFlag:""});k.Plugins.push({name:"autoplay",init:function(d){function g(c){var f=h.steps;c=c*f;i.loadCustomLazyData(d.panels.slice(c,c+f),a,b);j()&&d.unsubscribe(r,g)}function j(){var c,f,p;if(a===t){c=d.container.getElementsByTagName("img");f=0;for(p=
c.length;f<p;f++)if(c[f].getAttribute(b))return false}else if(a===l){c=d.container.getElementsByTagName("textarea");f=0;for(p=c.length;f<p;f++)if(s.hasClass(c[f],b))return false}return true}var h=d.config,a=h.lazyDataType,b=h.lazyDataFlag||o[a];!i||!a||!b||d.subscribe(r,g)}})});KISSY.add("tabs",function(m){function s(r,t){var l=this;if(!(l instanceof s))return new s(r,t);s.superclass.constructor.call(l,r,t)}m.extend(s,m.Switchable);m.Tabs=s});
KISSY.add("slide",function(m){function s(t,l){var o=this;if(!(o instanceof s))return new s(t,l);l=m.merge(r,l||{});s.superclass.constructor.call(o,t,l)}var r={autoplay:true,circular:true};m.extend(s,m.Switchable);m.Slide=s});KISSY.add("carousel",function(m){function s(t,l){var o=this;if(!(o instanceof s))return new s(t,l);l=m.merge(r,l||{});s.superclass.constructor.call(o,t,l)}var r={circular:true};m.extend(s,m.Switchable);m.Carousel=s});
KISSY.add("megamenu",function(m){function s(i,d){var g=this;if(!(g instanceof s))return new s(i,d);d=m.merge(k,d||{});s.superclass.constructor.call(g,i,d);g._initView();g.config.showCloseBtn&&g._initCloseBtn()}var r=YAHOO.util,t=r.Dom,l=r.Event,o=YAHOO.lang,k={hideDelay:0.5,viewCls:"ks-megamenu-view",closeBtnCls:"ks-megamenu-closebtn",showCloseBtn:true,activeIndex:-1};m.extend(s,m.Switchable);m.mix(s.prototype,{_onFocusTrigger:function(i){var d=this;if(d.activeIndex!==i){d.switchTimer&&d.switchTimer.cancel();
d.hideTimer&&d.hideTimer.cancel();d.switchTo(i)}},_onMouseEnterTrigger:function(i){var d=this;d.hideTimer&&d.hideTimer.cancel();d.switchTimer=o.later(d.config.delay*1E3,d,function(){d.switchTo(i)})},_onMouseLeaveTrigger:function(){var i=this;i.switchTimer&&i.switchTimer.cancel();i.hideTimer=o.later(i.config.hideDelay*1E3,i,function(){i.hide()})},_initView:function(){var i=this,d=i.config,g=t.getElementsByClassName(d.viewCls,"*",i.container)[0];if(!g){g=document.createElement("DIV");g.className=d.viewCls;
i.container.appendChild(g)}l.on(g,"mouseenter",function(){i.hideTimer&&i.hideTimer.cancel()});l.on(g,"mouseleave",function(){i.hideTimer=o.later(d.hideDelay*1E3,i,"hide")});i.viewContent=g;i.view=g},_initCloseBtn:function(){var i=this,d,g=i.view;g.innerHTML="<span class='{hook_cls}'></span>".replace("{hook_cls}",i.config.closeBtnCls);l.on(g.firstChild,"click",function(){i.hide()});d=document.createElement("div");g.appendChild(d);i.viewContent=d},_switchView:function(i,d,g){i=this;i.view.style.display=
"block";i.viewContent.innerHTML=d[0].innerHTML;i.fireEvent("onSwitch",g)},hide:function(){var i=this;t.removeClass(i.triggers[i.activeIndex],i.config.activeTriggerCls);i.view.style.display="none";i.activeIndex=-1}});m.MegaMenu=s});
