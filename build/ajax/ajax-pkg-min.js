/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Nov 30 14:19
*/
KISSY.add("ajax",function(d,B){function i(a){a=d.merge(J,a);if(a.url){if(a.data&&!d.isString(a.data))a.data=d.param(a.data);a.context=a.context||a;var c,e=n,g,f=a.type.toUpperCase();if(a.dataType===w){c=a.jsonpCallback||w+d.now();a.url=a.url+(a.url.indexOf("?")===-1?"?":"&")+(a.jsonp+"="+c);a.dataType=C;var o=j[c];j[c]=function(k){if(d.isFunction(o))o(k);else{j[c]=B;try{delete j[c]}catch(h){}}p([n,q],k,e,b,a)}}if(a.data&&f===x)a.url=a.url+(a.url.indexOf("?")===-1?"?":"&")+a.data;if(a.dataType===C){l(D,
a);f=d.getScript(a.url,c?null:function(){p([n,q],t,e,b,a)});l(E,a);return f}var r=false,b=a.xhr();l(D,a);b.open(f,a.url,a.async);try{if(a.data||a.contentType)b.setRequestHeader(F,a.contentType);b.setRequestHeader("Accept",a.dataType&&a.accepts[a.dataType]?a.accepts[a.dataType]+", */*; q=0.01":a.accepts._default)}catch(L){}b.onreadystatechange=function(k){if(!b||b.readyState===0||k==="abort"){r||p(q,null,s,b,a);r=true;if(b)b.onreadystatechange=G}else if(!r&&b&&(b.readyState===4||k===u)){r=true;b.onreadystatechange=
G;var h;if(k===u)h=u;else{a:{try{h=b.status>=200&&b.status<300||b.status===304||b.status===1223;break a}catch(M){}h=false}h=h?n:s}e=h;try{h=b;var v=a.dataType,y=t,H,m=h;if(!d.isString(m)){y=h.getResponseHeader(F)||t;m=(H=v==="xml"||!v&&y.indexOf("xml")>=0)?h.responseXML:h.responseText;if(H&&m.documentElement.nodeName===z)throw z;}if(d.isString(m))if(v===A||!v&&y.indexOf(A)>=0)m=d.JSON.parse(m);g=m}catch(N){e=z}p([e===n?n:s,q],g,e,b,a);if(k===u){b.abort();l(K,a)}if(a.async)b=null}};l(E,a);try{b.send(f===
I?a.data:null)}catch(O){p([s,q],g,s,b,a)}a.async||l(q,a);return b}}function p(a,c,e,g,f){if(d.isArray(a))d.each(a,function(o){p(o,c,e,g,f)});else{e===a&&f[a]&&f[a].call(f.context,c,e,g);l(a,f)}}function l(a,c){i.fire(a,{ajaxConfig:c})}var j=window,G=function(){},x="GET",I="POST",F="Content-Type",A="json",w=A+"p",C="script",t="",D="start",E="send",K="stop",n="success",q="complete",s="error",u="timeout",z="parsererror",J={type:x,url:t,contentType:"application/x-www-form-urlencoded",async:true,data:null,
xhr:j.XMLHttpRequest?function(){return new j.XMLHttpRequest}:function(){try{return new j.ActiveXObject(d.UA.ie==6?"Msxml2.XMLHTTP.5.0":"Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"},jsonp:"callback"};d.mix(i,d.EventTarget);d.mix(i,{get:function(a,c,e,g,f){if(d.isFunction(c)){g=e;e=c}return i({type:f||x,url:a,data:c,success:function(o,
r,b){e&&e.call(this,o,r,b)},dataType:g})},post:function(a,c,e,g){if(d.isFunction(c)){g=e;e=c;c=B}return i.get(a,c,e,g,I)},jsonp:function(a,c,e){if(d.isFunction(c)){e=c;c=null}return i.get(a,c,e,w)}});i.getScript=d.getScript;d.io=d.ajax=i.ajax=i;d.jsonp=i.jsonp;d.IO=i});
