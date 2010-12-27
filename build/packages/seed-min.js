/*
Copyright 2010, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
(function(f,n,u){var v={mix:function(j,l,o,p){if(!l||!j)return j;if(o===u)o=true;var d,i,k;if(p&&(k=p.length))for(d=0;d<k;d++){i=p[d];if(i in l)if(o||!(i in j))j[i]=l[i]}else for(i in l)if(o||!(i in j))j[i]=l[i];return j}},r=f&&f[n]||{},s=0;f=r.__HOST||(r.__HOST=f||{});n=f[n]=v.mix(r,v,false);n.mix(n,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.7dev",merge:function(){var j={},l,o=arguments.length;for(l=0;l<o;l++)n.mix(j,arguments[l]);return j},augment:function(){var j=arguments,
l=j.length-2,o=j[0],p=j[l],d=j[l+1],i=1;if(!n.isArray(d)){p=d;d=u;l++}if(!n.isBoolean(p)){p=u;l++}for(;i<l;i++)n.mix(o.prototype,j[i].prototype||j[i],p,d);return o},extend:function(j,l,o,p){if(!l||!j)return j;var d=Object.create?function(a,h){return Object.create(a,{constructor:{value:h}})}:function(a,h){function b(){}b.prototype=a;var c=new b;c.constructor=h;return c},i=l.prototype,k;k=d(i,j);j.prototype=n.mix(k,j.prototype);j.superclass=d(i,l);o&&n.mix(k,o);p&&n.mix(j,p);return j},__init:function(){this.Config=
this.Config||{};this.Env=this.Env||{};this.Config.debug=""},namespace:function(){var j=arguments,l=j.length,o=null,p,d,i,k=j[l-1]===true&&l--;for(p=0;p<l;p++){i=(""+j[p]).split(".");o=k?f:this;for(d=f[i[0]]===o?1:0;d<i.length;++d)o=o[i[d]]=o[i[d]]||{}}return o},app:function(j,l){var o=n.isString(j),p=o?f[j]||{}:j,d=0,i=n.__APP_INIT_METHODS.length;for(n.mix(p,this,true,n.__APP_MEMBERS);d<i;d++)n[n.__APP_INIT_METHODS[d]].call(p);n.mix(p,n.isFunction(l)?l():l);o&&(f[j]=p);return p},log:function(j,
l,o){if(n.Config.debug){if(o)j=o+": "+j;if(f.console!==u&&console.log)console[l&&console[l]?l:"log"](j)}},error:function(j){if(n.Config.debug)throw j;},guid:function(j){return(j||"")+s++}});n.__init();return n})(this,"KISSY");
(function(f,n){var u=f.__HOST,v=Object.prototype.toString,r=Array.prototype.indexOf,s=Array.prototype.lastIndexOf,j=Array.prototype.filter,l=String.prototype.trim,o=/^\s+|\s+$/g,p={};f.mix(f,{type:function(d){return d==null?String(d):p[v.call(d)]||"object"},isNull:function(d){return d===null},isUndefined:function(d){return d===n},isEmptyObject:function(d){for(var i in d)return false;return true},isPlainObject:function(d){return d&&v.call(d)==="[object Object]"&&"isPrototypeOf"in d},clone:function(d,
i,k){var a=d,h,b,c=k||{};if(d&&((h=f.isArray(d))||f.isPlainObject(d))){if(d["__~ks_cloned"])return c[d["__~ks_cloned"]];d["__~ks_cloned"]=a=f.guid();c[a]=d;if(h)a=i?f.filter(d,i):d.concat();else{a={};for(b in d)if(b!=="__~ks_cloned"&&d.hasOwnProperty(b)&&(!i||i.call(d,d[b],b,d)!==false))a[b]=f.clone(d[b],i,c)}}if(!k){f.each(c,function(e){if(e["__~ks_cloned"])try{delete e["__~ks_cloned"]}catch(g){e["__~ks_cloned"]=n}});c=n}return a},trim:l?function(d){return d==n?"":l.call(d)}:function(d){return d==
n?"":d.toString().replace(o,"")},substitute:function(d,i,k){if(!f.isString(d)||!f.isPlainObject(i))return d;return d.replace(k||/\\?\{([^{}]+)\}/g,function(a,h){if(a.charAt(0)==="\\")return a.slice(1);return i[h]!==n?i[h]:""})},each:function(d,i,k){var a,h=0,b=d.length,c=b===n||f.type(d)==="function";k=k||u;if(c)for(a in d){if(i.call(k,d[a],a,d)===false)break}else for(a=d[0];h<b&&i.call(k,a,h,d)!==false;a=d[++h]);return d},indexOf:r?function(d,i){return r.call(i,d)}:function(d,i){for(var k=0,a=i.length;k<
a;++k)if(i[k]===d)return k;return-1},lastIndexOf:s?function(d,i){return s.call(i,d)}:function(d,i){for(var k=i.length-1;k>=0;k--)if(i[k]===d)break;return k},unique:function(d,i){i&&d.reverse();for(var k=d.slice(),a=0,h,b;a<k.length;){for(b=k[a];(h=f.lastIndexOf(b,k))!==a;)k.splice(h,1);a+=1}i&&k.reverse();return k},inArray:function(d,i){return f.indexOf(d,i)>-1},filter:j?function(d,i,k){return j.call(d,i,k||this)}:function(d,i,k){var a=[];f.each(d,function(h,b,c){if(i.call(k||this,h,b,c))a.push(h)});
return a},now:function(){return(new Date).getTime()}});f.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(d,i){p["[object "+d+"]"]=i=d.toLowerCase();f["is"+d]=function(k){return f.type(k)==i}})})(KISSY);
(function(f,n){function u(b){var c=typeof b;return b===null||c!=="object"&&c!=="function"}function v(b){return Array.prototype.slice.call(b)}var r=f.__HOST,s=r.document,j=s.documentElement,l=encodeURIComponent("[]"),o=false,p=[],d=false,i=/^#?([\w-]+)$/,k=/^(\w+)\[\]$/,a=/\S/;f.mix(f,{isWindow:function(b){return f.type(b)==="object"&&"setInterval"in b},makeArray:function(b){if(b===null||b===n)return[];if(f.isArray(b))return b;if(typeof b.length!=="number"||f.isString(b)||f.isFunction(b))return[b];
return v(b)},param:function(b,c){if(!f.isPlainObject(b))return"";c=c||"&";var e=[],g,m;for(g in b){m=b[g];g=encodeURIComponent(g);if(u(m))e.push(g,"=",encodeURIComponent(m+""),c);else if(f.isArray(m)&&m.length)for(var q=0,t=m.length;q<t;++q)u(m[q])&&e.push(g,l+"=",encodeURIComponent(m[q]+""),c)}e.pop();return e.join("")},unparam:function(b,c){if(typeof b!=="string"||(b=f.trim(b)).length===0)return{};for(var e={},g=b.split(c||"&"),m,q,t,w,x=0,y=g.length;x<y;++x){m=g[x].split("=");q=decodeURIComponent(m[0]);
try{t=decodeURIComponent(m[1]||"")}catch(z){t=m[1]||""}if((w=q.match(k))&&w[1]){e[w[1]]=e[w[1]]||[];e[w[1]].push(t)}else e[q]=t}return e},globalEval:function(b){if(b&&a.test(b)){var c=s.getElementsByTagName("head")[0]||j,e=s.createElement("script");e.text=b;c.insertBefore(e,c.firstChild);c.removeChild(e)}},later:function(b,c,e,g,m){c=c||0;g=g||{};var q=b,t=f.makeArray(m),w;if(f.isString(b))q=g[b];q||f.error("method undefined");b=function(){q.apply(g,t)};w=e?setInterval(b,c):setTimeout(b,c);return{id:w,
interval:e,cancel:function(){this.interval?clearInterval(w):clearTimeout(w)}}},ready:function(b){d||this._bindReady();o?b.call(r,this):p.push(b);return this},_bindReady:function(){var b=this,c=s.documentElement.doScroll,e=c?"onreadystatechange":"DOMContentLoaded",g=function(){b._fireReady()};d=true;if(s.readyState==="complete")return g();if(s.addEventListener){var m=function(){s.removeEventListener(e,m,false);g()};s.addEventListener(e,m,false);r.addEventListener("load",g,false)}else{var q=function(){if(s.readyState===
"complete"){s.detachEvent(e,q);g()}};s.attachEvent(e,q);r.attachEvent("onload",g);var t=false;try{t=r.frameElement==null}catch(w){}if(c&&t){var x=function(){try{c("left");g()}catch(y){setTimeout(x,1)}};x()}}},_fireReady:function(){if(!o){o=true;if(p){for(var b,c=0;b=p[c++];)b.call(r,this);p=null}}},available:function(b,c){if((b=(b+"").match(i)[1])&&f.isFunction(c))var e=1,g=f.later(function(){if(s.getElementById(b)&&(c()||1)||++e>500)g.cancel()},40,true)}});try{v(j.childNodes)}catch(h){v=function(b){for(var c=
[],e=b.length-1;e>=0;e--)c[e]=b[e];return c}}if(location&&(location.search||"").indexOf("ks-debug")!==-1)f.Config.debug=true})(KISSY);
(function(f,n){var u=f.__HOST.document,v=u.getElementsByTagName("head")[0]||u.documentElement,r=2,s=3,j=4,l=f.mix,o=u.createElement("script").readyState?function(a,h){var b=a.onreadystatechange;a.onreadystatechange=function(){var c=a.readyState;if(c==="loaded"||c==="complete"){a.onreadystatechange=null;b&&b();h.call(this)}}}:function(a,h){a.addEventListener("load",h,false)},p=/\.css(?:\?|$)/i,d;d={add:function(a,h,b){var c=this.Env.mods,e;if(f.isString(a)&&!b&&f.isPlainObject(h)){e={};e[a]=h;a=e}if(f.isPlainObject(a)){f.each(a,
function(g,m){g.name=m;c[m]&&l(g,c[m],false)});l(c,a)}else{b=b||{};e=c[a]||{};a=b.host||e.host||a;e=c[a]||{};l(e,{name:a,status:r});if(!e.fns)e.fns=[];h&&e.fns.push(h);l(c[a]=e,b);e.attach!==false&&this.__isAttached(e.requires)&&this.__attachMod(e)}return this},use:function(a,h,b){a=a.replace(/\s+/g,"").split(",");b=b||{};var c=this,e;b=(b||0).global;var g,m=a.length,q;b&&c.__mixMods(b);if(c.__isAttached(a))h&&h(c);else{for(g=0;g<m&&(e=a[g]);g++)c.__attachModByName(e,function(){if(!q&&c.__isAttached(a)){q=
true;h&&h(c)}},b);return c}},__attachModByName:function(a,h,b){var c=this.Env.mods,e=a.indexOf("+css")!=-1;a=e?a.replace(/\+css/g,""):a;var g=c[a];if(!g){g=this.Config.componentJsName||function(m){return m+"-pkg-min.js?t=20101227125317"};g=f.isFunction(g)?g(a):g;g={path:a+"/"+g,charset:"utf-8"};c[a]=g}if(e){c=this.Config.componentCssName||function(m){return m+"-min.css?t=20101227125317"};c=f.isFunction(c)?c(a):c;g.csspath=a+"/"+c}g.name=a;g&&g.status===j||this.__attach(g,h,b)},__attach:function(a,h,b){function c(){if(!x&&
e.__isAttached(a.requires)){a.status===r&&e.__attachMod(a);if(a.status===j){x=true;h()}}}for(var e=this,g=e.Env.mods,m=(a.requires||[]).concat(),q=0,t=m.length;q<t;q++){var w=g[m[q]];w&&w.status===j||e.__attachModByName(m[q],c,b)}e.__buildPath(a);e.__load(a,function(){for(var y=a.requires||[],z=[],B=y.length-1;B>=0;B--){var A=y[B],C=g[A],D=f.inArray(A,m);C&&C.status===j||D||e.__attachModByName(A,c,b);D||z.push(A)}z.length!=0&&z.unshift(a.name);c()},b);var x=false},__mixMods:function(a){var h=this.Env.mods,
b=a.Env.mods,c;for(c in b)this.__mixMod(h,b,c,a)},__mixMod:function(a,h,b,c){var e=a[b]||{},g=e.status;f.mix(e,f.clone(h[b]));if(g)e.status=g;c&&this.__buildPath(e,c.Config.base);a[b]=e},__attachMod:function(a){var h=this;if(a.fns){f.each(a.fns,function(b){b&&b(h)});a.fns=n}a.status=j},__isAttached:function(a){for(var h=this.Env.mods,b,c=(a=f.makeArray(a)).length-1;c>=0;c--){b=a[c].replace(/\+css/,"");b=h[b]||{};if(b.status!==j)return false}return true},__load:function(a,h,b){function c(){m[g]=r;
if(a.status!==s){b&&e.__mixMod(e.Env.mods,b.Env.mods,a.name,b);if(a.status!==j)a.status=r;h()}}var e=this,g=a.fullpath,m=f.Env._loadQueue,q=m[g];a.status=a.status||0;if(a.status<1&&q)a.status=q.nodeName?1:r;if(f.isString(a.cssfullpath)){e.getScript(a.cssfullpath);a.cssfullpath=r}if(a.status<1&&g){a.status=1;q=e.getScript(g,{success:function(){KISSY.log(a.name+" is loaded.","info");c()},error:function(){a.status=s;m[g]=r},charset:a.charset});p.test(g)||(m[g]=q)}else a.status===1?o(q,c):h()},__buildPath:function(a,
h){function b(e,g){if(!a[g]&&a[e])a[g]=(h||c.base)+a[e];if(a[g]&&c.debug)a[g]=a[g].replace(/-min/g,"")}var c=this.Config;b("path","fullpath");a.cssfullpath!==r&&b("csspath","cssfullpath")},getScript:function(a,h,b){var c=p.test(a),e=u.createElement(c?"link":"script"),g=h,m,q,t;if(f.isPlainObject(g)){h=g.success;m=g.error;q=g.timeout;b=g.charset}if(c){e.href=a;e.rel="stylesheet"}else{e.src=a;e.async=true}if(b)e.charset=b;if(c)f.isFunction(h)&&h.call(e);else o(e,function(){if(t){t.cancel();t=n}f.isFunction(h)&&
h.call(e);v&&e.parentNode&&v.removeChild(e)});if(f.isFunction(m))t=f.later(function(){t=n;m()},(q||this.Config.timeout)*1E3);v.insertBefore(e,v.firstChild);return e}};l(f,d);var i=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,k=/(seed|kissy)(-min)?\.js/;f.__initLoader=function(){var a=u.getElementsByTagName("script");a=a[a.length-1];var h=a.src,b=a.getAttribute("data-combo-prefix")||"??";a=a.getAttribute("data-combo-sep")||",";a=h.split(a);var c=a[0];b=c.indexOf(b);if(b==-1)h=h.replace(i,"$1");else{h=c.substring(0,
b);b=c.substring(b+2,c.length);if(b.match(k))h+=b.replace(i,"$1");else for(b=1;b<a.length;b++){c=a[b];if(c.match(k)){h+=c.replace(i,"$1");break}}}a=h;this.Env.mods={};this.Env._loadQueue={};if(!this.Config.base)this.Config.base=a;if(!this.Config.timeout)this.Config.timeout=10};f.__initLoader();f.each(d,function(a,h){f.__APP_MEMBERS.push(h)});f.__APP_INIT_METHODS.push("__initLoader")})(KISSY);
