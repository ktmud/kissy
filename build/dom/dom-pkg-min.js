/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Nov 30 14:19
*/
KISSY.add("dom",function(a,x){function p(g,q){return g&&g.nodeType===q}a.DOM={_isElementNode:function(g){return p(g,1)},_isKSNode:function(g){return a.Node&&p(g,a.Node.TYPE)},_getWin:function(g){return g&&"scrollTo"in g&&g.document?g:p(g,9)?g.defaultView||g.parentWindow:g===x?window:false},_nodeTypeIs:p}});
KISSY.add("selector",function(a,x){function p(e,f){var c,b,d=[],m;f=g(f);if(a.isString(e)){e=a.trim(e);if(w.test(e)){if(b=q(e.slice(1),f))d=[b]}else if(c=n.exec(e)){b=c[1];m=c[2];c=c[3];if(f=b?q(b,f):f)if(c)if(!b||e.indexOf(k)!==-1)d=h(c,m,f);else{if((b=q(b,f))&&v.hasClass(b,c))d=[b]}else if(m)d=z(m,f)}else if(a.ExternalSelector)return a.ExternalSelector(e,f);else j(e)}else if(e&&(e[r]||e[s]))d=e[r]?[e[r]()]:e[s]();else if(e&&(a.isArray(e)||e&&!e.nodeType&&e.item&&e!=window))d=e;else if(e)d=[e];if(d&&
!d.nodeType&&d.item&&d!=window)d=a.makeArray(d);d.each=function(y,i){return a.each(d,y,i)};return d}function g(e){if(e===x)e=l;else if(a.isString(e)&&w.test(e))e=q(e.slice(1),l);else if(e&&e.nodeType!==1&&e.nodeType!==9)e=null;return e}function q(e,f){if(f.nodeType!==9)f=f.ownerDocument;return f.getElementById(e)}function z(e,f){return f.getElementsByTagName(e)}function h(e,f,c){c=e=c.getElementsByClassName(e);var b=0,d=0,m=e.length,y;if(f&&f!==o){c=[];for(f=f.toUpperCase();b<m;++b){y=e[b];if(y.tagName===
f)c[d++]=y}}return c}function j(e){a.error("Unsupported selector: "+e)}var l=document,v=a.DOM,k=" ",o="*",r="getDOMNode",s=r+"s",w=/^#[\w-]+$/,n=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var e=l.createElement("div");e.appendChild(l.createComment(""));if(e.getElementsByTagName(o).length>0)z=function(f,c){var b=c.getElementsByTagName(f);if(f===o){for(var d=[],m=0,y=0,i;i=b[m++];)if(i.nodeType===1)d[y++]=i;b=d}return b}})();l.getElementsByClassName||(h=l.querySelectorAll?function(e,f,
c){return c.querySelectorAll((f?f:"")+"."+e)}:function(e,f,c){f=c.getElementsByTagName(f||o);c=[];var b=0,d=0,m=f.length,y,i;for(e=k+e+k;b<m;++b){y=f[b];if((i=y.className)&&(k+i+k).indexOf(e)>-1)c[d++]=y}return c});a.query=p;a.get=function(e,f){return p(e,f)[0]||null};a.mix(v,{query:p,get:a.get,filter:function(e,f){var c=p(e),b,d,m,y=[];if(a.isString(f)&&(b=n.exec(f))&&!b[1]){d=b[2];m=b[3];f=function(i){return!(d&&i.tagName!==d.toUpperCase()||m&&!v.hasClass(i,m))}}if(a.isFunction(f))y=a.filter(c,
f);else if(f&&a.ExternalSelector)y=a.ExternalSelector._filter(e,f+"");else j(f);return y},test:function(e,f){var c=p(e);return c.length&&v.filter(c,f).length===c.length}})});
KISSY.add("dom-data",function(a,x){var p=window,g=a.DOM,q="_ks_data_"+a.now(),z={},h={},j={EMBED:1,OBJECT:1,APPLET:1};a.mix(g,{data:function(l,v,k){if(a.isPlainObject(v))for(var o in v)g.data(l,o,v[o]);else if(k===x){l=a.get(l);var r;if(!(!l||j[l.nodeName])){if(l==p)l=h;r=(o=l&&l.nodeType)?z:l;l=r[o?l[q]:q];if(a.isString(v)&&l)return l[v];return l}}else a.query(l).each(function(s){if(!(!s||j[s.nodeName])){if(s==p)s=h;var w=z,n;if(s&&s.nodeType){if(!(n=s[q]))n=s[q]=a.guid()}else{n=q;w=s}if(v&&k!==
x){w[n]||(w[n]={});w[n][v]=k}}})},removeData:function(l,v){a.query(l).each(function(k){if(k){if(k==p)k=h;var o,r=z,s,w=k&&k.nodeType;if(w)o=k[q];else{r=k;o=q}if(o){s=r[o];if(v){if(s){delete s[v];a.isEmptyObject(s)&&g.removeData(k)}}else{if(w)k.removeAttribute&&k.removeAttribute(q);else try{delete k[q]}catch(n){}w&&delete r[o]}}}})}})});
KISSY.add("dom-class",function(a,x){function p(h,j,l,v){if(!(j=a.trim(j)))return v?false:x;h=a.query(h);var k=0,o=h.length;j=j.split(q);for(var r;k<o;k++){r=h[k];if(g._isElementNode(r)){r=l(r,j,j.length);if(r!==x)return r}}if(v)return false}var g=a.DOM,q=/[\.\s]\s*\.?/,z=/[\n\t]/g;a.mix(g,{hasClass:function(h,j){return p(h,j,function(l,v,k){if(l=l.className){l=" "+l+" ";for(var o=0,r=true;o<k;o++)if(l.indexOf(" "+v[o]+" ")<0){r=false;break}if(r)return true}},true)},addClass:function(h,j){p(h,j,function(l,
v,k){var o=l.className;if(o){var r=" "+o+" ";o=o;for(var s=0;s<k;s++)if(r.indexOf(" "+v[s]+" ")<0)o+=" "+v[s];l.className=a.trim(o)}else l.className=j})},removeClass:function(h,j){p(h,j,function(l,v,k){var o=l.className;if(o)if(k){o=(" "+o+" ").replace(z," ");for(var r=0,s;r<k;r++)for(s=" "+v[r]+" ";o.indexOf(s)>=0;)o=o.replace(s," ");l.className=a.trim(o)}else l.className=""})},replaceClass:function(h,j,l){g.removeClass(h,j);g.addClass(h,l)},toggleClass:function(h,j,l){var v=a.isBoolean(l),k;p(h,
j,function(o,r,s){for(var w=0,n;w<s;w++){n=r[w];k=v?!l:g.hasClass(o,n);g[k?"removeClass":"addClass"](o,n)}})}})});
KISSY.add("dom-attr",function(a,x){var p=a.UA,g=document.documentElement,q=!g.hasAttribute,z=g.textContent!==x?"textContent":"innerText",h=a.DOM,j=h._isElementNode,l=/^(?:href|src|style)/,v=/^(?:href|src|colspan|rowspan)/,k=/\r/g,o=/^(?:radio|checkbox)/,r={readonly:"readOnly"},s={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};q&&a.mix(r,{"for":"htmlFor","class":"className"});a.mix(h,{attr:function(w,n,e,f){if(a.isPlainObject(n)){f=e;for(var c in n)h.attr(w,c,n[c],f)}else if(n=a.trim(n)){n=
n.toLowerCase();if(f&&s[n])return h[n](w,e);n=r[n]||n;if(e===x){w=a.get(w);if(!j(w))return x;var b;l.test(n)||(b=w[n]);if(b===x)b=w.getAttribute(n);if(q)if(v.test(n))b=w.getAttribute(n,2);else if(n==="style")b=w.style.cssText;return b===null?x:b}a.each(a.query(w),function(d){if(j(d))if(n==="style")d.style.cssText=e;else{if(n==="checked")d[n]=!!e;d.setAttribute(n,""+e)}})}},removeAttr:function(w,n){a.each(a.query(w),function(e){if(j(e)){h.attr(e,n,"");e.removeAttribute(n)}})},val:function(w,n){if(n===
x){var e=a.get(w);if(!j(e))return x;if(e&&e.nodeName.toUpperCase()==="option".toUpperCase())return(e.attributes.value||{}).specified?e.value:e.text;if(e&&e.nodeName.toUpperCase()==="select".toUpperCase()){var f=e.selectedIndex,c=e.options;if(f<0)return null;else if(e.type==="select-one")return h.val(c[f]);e=[];for(var b=0,d=c.length;b<d;++b)c[b].selected&&e.push(h.val(c[b]));return e}if(p.webkit&&o.test(e.type))return e.getAttribute("value")===null?"on":e.value;return(e.value||"").replace(k,"")}a.each(a.query(w),
function(m){if(m&&m.nodeName.toUpperCase()==="select".toUpperCase()){if(a.isNumber(n))n+="";var y=a.makeArray(n),i=m.options,t;b=0;for(d=i.length;b<d;++b){t=i[b];t.selected=a.inArray(h.val(t),y)}if(!y.length)m.selectedIndex=-1}else if(j(m))m.value=n})},text:function(w,n){if(n===x){var e=a.get(w);if(j(e))return e[z]||"";else if(h._nodeTypeIs(e,3))return e.nodeValue}else a.each(a.query(w),function(f){if(j(f))f[z]=n;else if(h._nodeTypeIs(f,3))f.nodeValue=n})}})});
KISSY.add("dom-style",function(a,x){function p(f,c){var b=a.get(f),d=c===l?b.offsetWidth:b.offsetHeight;a.each(c===l?["Left","Right"]:["Top","Bottom"],function(m){d-=parseFloat(q._getComputedStyle(b,"padding"+m))||0;d-=parseFloat(q._getComputedStyle(b,"border"+m+"Width"))||0});return d}function g(f,c,b){var d=b;if(b===v&&o.test(c)){d=0;if(q.css(f,"position")==="absolute"){b=f[c==="left"?"offsetLeft":"offsetTop"];if(z.ie===8||z.opera)b-=k(q.css(f.offsetParent,"border-"+c+"-width"))||0;d=b-(k(q.css(f,
"margin-"+c))||0)}}return d}var q=a.DOM,z=a.UA,h=document,j=h.documentElement,l="width",v="auto",k=parseInt,o=/^(?:left|top)/,r=/^(?:width|height|top|left|right|bottom|margin|padding)/i,s=/-([a-z])/ig,w=function(f,c){return c.toUpperCase()},n={},e={};a.mix(q,{_CUSTOM_STYLES:n,_getComputedStyle:function(f,c){var b="",d=f.ownerDocument;if(f.style)b=d.defaultView.getComputedStyle(f,null)[c];return b},css:function(f,c,b){if(a.isPlainObject(c))for(var d in c)q.css(f,d,c[d]);else{if(c.indexOf("-")>0)c=
c.replace(s,w);c=n[c]||c;if(b===x){f=a.get(f);d="";if(f&&f.style){d=c.get?c.get(f):f.style[c];if(d===""&&!c.get)d=g(f,c,q._getComputedStyle(f,c))}return d===x?"":d}else{if(b===null||b==="")b="";else if(!isNaN(new Number(b))&&r.test(c))b+="px";(c===l||c==="height")&&parseFloat(b)<0||a.each(a.query(f),function(m){if(m&&m.style){c.set?c.set(m,b):m.style[c]=b;if(b==="")m.style.cssText||m.removeAttribute("style")}})}}},width:function(f,c){if(c===x)return p(f,l);else q.css(f,l,c)},height:function(f,c){if(c===
x)return p(f,"height");else q.css(f,"height",c)},show:function(f){a.query(f).each(function(c){if(c){c.style.display=q.data(c,"display")||"";if(q.css(c,"display")==="none"){var b=c.tagName,d=e[b],m;if(!d){m=h.createElement(b);h.body.appendChild(m);d=q.css(m,"display");q.remove(m);e[b]=d}q.data(c,"display",d);c.style.display=d}}})},hide:function(f){a.query(f).each(function(c){if(c){var b=c.style,d=b.display;if(d!=="none"){d&&q.data(c,"display",d);b.display="none"}}})},toggle:function(f){a.query(f).each(function(c){if(c)c.style.display===
"none"?q.show(c):q.hide(c)})},addStyleSheet:function(f,c){var b;if(c&&(c=c.replace("#","")))b=a.get("#"+c);if(!b){b=q.create("<style>",{id:c});a.get("head").appendChild(b);if(b.styleSheet)b.styleSheet.cssText=f;else b.appendChild(h.createTextNode(f))}}});if(j.style.cssFloat!==x)n["float"]="cssFloat";else if(j.style.styleFloat!==x)n["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(a,x){if(a.UA.ie){var p=a.DOM,g=document,q=g.documentElement,z=p._CUSTOM_STYLES,h=/^-?\d+(?:px)?$/i,j=/^-?\d/,l=/^(?:width|height)$/;try{if(q.style.opacity===x&&q.filters)z.opacity={get:function(k){var o=100;try{o=k.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{o=k.filters("alpha").opacity}catch(s){}}return o/100+""},set:function(k,o){var r=k.style,s=(k.currentStyle||0).filter||"";r.zoom=1;if(s)if(s=s.replace(/alpha\(opacity=.+\)/ig,""))s+=", ";
r.filter=s+"alpha(opacity="+o*100+")"}}}catch(v){}if(!(g.defaultView||{}).getComputedStyle&&q.currentStyle)p._getComputedStyle=function(k,o){var r=k.style,s=k.currentStyle[o];if(l.test(o))s=p[o](k)+"px";else if(!h.test(s)&&j.test(s)){var w=r.left,n=k.runtimeStyle.left;k.runtimeStyle.left=k.currentStyle.left;r.left=o==="fontSize"?"1em":s||0;s=r.pixelLeft+"px";r.left=w;k.runtimeStyle.left=n}return s}}});
KISSY.add("dom-offset",function(a,x){function p(b){var d=0,m=0,y=v(b[s]);if(b[c]){b=b[c]();d=b[w];m=b[n];if(q.mobile!=="apple"){d+=g[e](y);m+=g[f](y)}}return{left:d,top:m}}var g=a.DOM,q=a.UA,z=window,h=document,j=g._isElementNode,l=g._nodeTypeIs,v=g._getWin,k=h.compatMode==="CSS1Compat",o=Math.max,r=parseInt,s="ownerDocument",w="left",n="top",e="scrollLeft",f="scrollTop",c="getBoundingClientRect";a.mix(g,{offset:function(b,d){if(!(b=a.get(b))||!b[s])return null;if(d===x)return p(b);var m=b;if(g.css(m,
"position")==="static")m.style.position="relative";var y=p(m),i={},t,u;for(u in d){t=r(g.css(m,u),10)||0;i[u]=t+d[u]-y[u]}g.css(m,i)},scrollIntoView:function(b,d,m,y){if((b=a.get(b))&&b[s]){y=y===x?true:!!y;m=m===x?true:!!m;if(!d||d===z)return b.scrollIntoView(m);d=a.get(d);if(l(d,9))d=v(d);var i=d&&"scrollTo"in d&&d.document,t=g.offset(b),u=i?{left:g.scrollLeft(d),top:g.scrollTop(d)}:g.offset(d),A={left:t[w]-u[w],top:t[n]-u[n]};t=i?g.viewportHeight(d):d.clientHeight;u=i?g.viewportWidth(d):d.clientWidth;
var C=g[e](d),F=g[f](d),B=C+u,D=F+t,H=b.offsetHeight;b=b.offsetWidth;var G=A.left+C-(r(g.css(d,"borderLeftWidth"))||0);A=A.top+F-(r(g.css(d,"borderTopWidth"))||0);var I=G+b,K=A+H,E,J;if(H>t||A<F||m)E=A;else if(K>D)E=K-t;if(y)if(b>u||G<C||m)J=G;else if(I>B)J=I-u;if(i){if(E!==x||J!==x)d.scrollTo(J,E)}else{if(E!==x)d[f]=E;if(J!==x)d[e]=J}}}});a.each(["Left","Top"],function(b,d){var m="scroll"+b;g[m]=function(y){var i=0,t=v(y),u;if(t&&(u=t.document))i=t[d?"pageYOffset":"pageXOffset"]||u.documentElement[m]||
u.body[m];else if(j(y=a.get(y)))i=y[m];return i}});a.each(["Width","Height"],function(b){g["doc"+b]=function(d){d=d||h;return o(k?d.documentElement["scroll"+b]:d.body["scroll"+b],g["viewport"+b](d))};g["viewport"+b]=function(d){var m="inner"+b;d=v(d);var y=d.document;return m in d?d[m]:k?y.documentElement["client"+b]:y.body["client"+b]}})});
KISSY.add("dom-traversal",function(a,x){function p(h,j,l,v){if(!(h=a.get(h)))return null;if(j===x)j=1;var k=null,o,r;if(a.isNumber(j)&&j>=0){if(j===0)return h;o=0;r=j;j=function(){return++o===r}}for(;h=h[l];)if(z(h)&&(!j||q.test(h,j))&&(!v||v(h))){k=h;break}return k}function g(h,j,l){var v=[];var k=h=a.get(h);if(h&&l)k=h.parentNode;if(k){l=0;for(k=k.firstChild;k;k=k.nextSibling)if(z(k)&&k!==h&&(!j||q.test(k,j)))v[l++]=k}return v}var q=a.DOM,z=q._isElementNode;a.mix(q,{parent:function(h,j){return p(h,
j,"parentNode",function(l){return l.nodeType!=11})},next:function(h,j){return p(h,j,"nextSibling")},prev:function(h,j){return p(h,j,"previousSibling")},siblings:function(h,j){return g(h,j,true)},children:function(h,j){return g(h,j)},contains:function(h,j){var l=false;if((h=a.get(h))&&(j=a.get(j)))if(h.contains){if(j.nodeType===3){j=j.parentNode;if(j===h)return true}if(j)return h.contains(j)}else if(h.compareDocumentPosition)return!!(h.compareDocumentPosition(j)&16);else for(;!l&&(j=j.parentNode);)l=
j==h;return l}})});
KISSY.add("dom-create",function(a,x){function p(i){var t=i.cloneNode(true);if(j.ie<8)t.innerHTML=i.innerHTML;return t}function g(i,t,u,A){if(u){var C=a.guid("ks-tmp-"),F=RegExp(w);t+='<span id="'+C+'"></span>';a.available(C,function(){var B=a.get("head"),D,H,G,I,K,E;for(F.lastIndex=0;D=F.exec(t);)if((G=(H=D[1])?H.match(e):false)&&G[2]){D=z.createElement("script");D.src=G[2];if((I=H.match(f))&&I[2])D.charset=I[2];D.async=true;B.appendChild(D)}else if((E=D[2])&&E.length>0)a.globalEval(E);(K=z.getElementById(C))&&
h.remove(K);a.isFunction(A)&&A()});q(i,t)}else{q(i,t);a.isFunction(A)&&A()}}function q(i,t){t=(t+"").replace(w,"");try{i.innerHTML=t}catch(u){for(;i.firstChild;)i.removeChild(i.firstChild);t&&i.appendChild(h.create(t))}}var z=document,h=a.DOM,j=a.UA,l=j.ie,v=h._nodeTypeIs,k=h._isElementNode,o=h._isKSNode,r=z.createElement("div"),s=/<(\w+)/,w=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,e=/\ssrc=(['"])(.*?)\1/i,f=/\scharset=(['"])(.*?)\1/i;a.mix(h,{create:function(i,
t,u){if(v(i,1)||v(i,3))return p(i);if(o(i))return p(i[0]);if(!(i=a.trim(i)))return null;var A=null;A=h._creators;var C,F="div",B;if(C=n.exec(i))A=(u||z).createElement(C[1]);else{if((C=s.exec(i))&&(B=C[1])&&a.isFunction(A[B=B.toLowerCase()]))F=B;i=A[F](i,u).childNodes;if(i.length===1)u=i[0].parentNode.removeChild(i[0]);else{i=i;B=u||z;u=null;if(i&&(i.push||i.item)&&i[0]){B=B||i[0].ownerDocument;u=B.createDocumentFragment();if(i.item)i=a.makeArray(i);B=0;for(A=i.length;B<A;B++)u.appendChild(i[B])}u=
u}A=u}u=A;k(u)&&a.isPlainObject(t)&&h.attr(u,t,true);return u},_creators:{div:function(i,t){var u=t?t.createElement("div"):r;u.innerHTML=i;return u}},html:function(i,t,u,A){if(t===x){i=a.get(i);if(k(i))return i.innerHTML}else a.each(a.query(i),function(C){k(C)&&g(C,t,u,A)})},remove:function(i){a.each(a.query(i),function(t){k(t)&&t.parentNode&&t.parentNode.removeChild(t)})}});if(l||j.gecko||j.webkit){var c=h._creators,b=h.create,d=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,m={option:"select",
td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},y;for(y in m)(function(i){c[y]=function(t,u){return b("<"+i+">"+t+"</"+i+">",null,u)}})(m[y]);if(l){c.script=function(i,t){var u=t?t.createElement("div"):r;u.innerHTML="-"+i;u.removeChild(u.firstChild);return u};if(l<8)c.tbody=function(i,t){var u=b("<table>"+i+"</table>",null,t),A=u.children.tags("tbody")[0];u.children.length>1&&A&&!d.test(i)&&A.parentNode.removeChild(A);return u}}a.mix(c,{optgroup:c.option,th:c.td,thead:c.tbody,tfoot:c.tbody,
caption:c.tbody,colgroup:c.tbody})}});
KISSY.add("dom-insertion",function(a){var x=a.DOM;a.mix(x,{insertBefore:function(p,g){if((p=a.get(p))&&(g=a.get(g))&&g.parentNode)g.parentNode.insertBefore(p,g);return p},insertAfter:function(p,g){if((p=a.get(p))&&(g=a.get(g))&&g.parentNode)g.nextSibling?g.parentNode.insertBefore(p,g.nextSibling):g.parentNode.appendChild(p);return p},append:function(p,g){if((p=a.get(p))&&(g=a.get(g)))g.appendChild&&g.appendChild(p)},prepend:function(p,g){if((p=a.get(p))&&(g=a.get(g)))g.firstChild?x.insertBefore(p,
g.firstChild):g.appendChild(p)}})});
