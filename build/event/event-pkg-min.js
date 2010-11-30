/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Nov 30 14:19
*/
KISSY.add("event",function(d,l){function k(a,c,e,g,j){if(d.isString(c))c=d.query(c);if(d.isArray(c)){d.each(c,function(h){s[a](h,e,g,j)});return true}if((e=d.trim(e))&&e.indexOf(y)>0){d.each(e.split(y),function(h){s[a](c,h,g,j)});return true}}function i(a,c){m(a)&&f.data(a,w,c)}function m(a){return a&&a.nodeType!==3&&a.nodeType!==8}var b=document,f=d.DOM,t=b.addEventListener?function(a,c,e,g){a.addEventListener&&a.addEventListener(c,e,!!g)}:function(a,c,e){a.attachEvent&&a.attachEvent("on"+c,e)},
p=b.removeEventListener?function(a,c,e,g){a.removeEventListener&&a.removeEventListener(c,e,!!g)}:function(a,c,e){a.detachEvent&&a.detachEvent("on"+c,e)},w="ksEventTargetId",y=" ",z=d.now(),x={},s={EVENT_GUID:w,special:{},add:function(a,c,e,g){if(!k("add",a,c,e,g)){var j=m(a)?f.data(a,w):-1,h,n,q,r,v;if(!(j===-1||!c||!d.isFunction(e))){if(!j){i(a,j=z++);x[j]={target:a,events:{}}}n=x[j].events;if(!n[c]){h=((j=!a.isCustomEventTarget)||a._supportSpecialEvent)&&s.special[c]||{};q=function(o,u){if(!o||
!o.fixed){o=new d.EventObject(a,o,c,this);d.isPlainObject(u)&&d.mix(o,u)}h.setup&&h.setup(o);return(h.handle||s._handle).call(this,a,o,n[c].listeners)};n[c]={handle:q,listeners:[]};r=h.fix||c;v=h.capture;if(j)t(a,r,q,v);else a._addEvent&&a._addEvent(r,q,v)}n[c].listeners.push({fn:e,scope:g||a})}}},remove:function(a,c,e,g){if(!k("remove",a,c,e,g)){var j=m(a)?f.data(a,w):-1,h,n,q,r,v,o,u;if(j!==-1)if(j&&(h=x[j]))if(h.target===a){g=g||a;h=h.events||{};if(n=h[c]){q=n.listeners;o=q.length;if(d.isFunction(e)&&
o){v=r=0;for(u=[];r<o;++r)if(e!==q[r].fn||g!==q[r].scope)u[v++]=q[r];n.listeners=u;o=u.length}if(e===l||o===0){if(a.isCustomEventTarget)a._removeEvent&&a._removeEvent(c,n.handle);else{e=s.special[c]||{};p(a,e.fix||c,n.handle)}delete h[c]}}if(c===l||d.isEmptyObject(h)){for(c in h)s.remove(a,c);delete x[j];f.removeData(a,w)}}}},_handle:function(a,c,e){e=e.slice(0);var g,j=0,h=e.length,n;if(a.isCustomEventTarget&&a.item)n=a.item(this);for(;j<h;++j){g=e[j];g=g.fn.call(n||g.scope,c);if(g===false&&a.isCustomEventTarget||
c.isImmediatePropagationStopped)break}return g},_getCache:function(a){return x[a]},_simpleAdd:t,_simpleRemove:p};s.on=s.add;d.Event=s});
KISSY.add("event-object",function(d,l){function k(b,f,t,p){this.currentTarget=b;this.originalEvent=f||{};if(f){this.type=f.type;this._fix()}else{this.type=t;this.target=b}this.currentTarget=b;this.fixed=true;if(b.isCustomEventTarget){if(b.item)b=b.item(p);if(d.DOM._isKSNode(b))this.target=new d.Node(this.target)}}var i=document,m="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");d.augment(k,
{_fix:function(){var b=this.originalEvent,f=m.length,t,p=this.currentTarget;for(p=p.nodeType===9?p:p.ownerDocument||i;f;){t=m[--f];this[t]=b[t]}if(!this.target)this.target=this.srcElement||i;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===l&&this.clientX!==l){b=p.documentElement;f=p.body;this.pageX=this.clientX+(b&&b.scrollLeft||f&&f.scrollLeft||
0)-(b&&b.clientLeft||f&&f.clientLeft||0);this.pageY=this.clientY+(b&&b.scrollTop||f&&f.scrollTop||0)-(b&&b.clientTop||f&&f.clientTop||0)}if(this.which===l)this.which=this.charCode!==l?this.charCode:this.keyCode;if(this.metaKey===l)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==l)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var b=this.originalEvent;if(b.preventDefault)b.preventDefault();else b.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var b=
this.originalEvent;if(b.stopPropagation)b.stopPropagation();else b.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var b=this.originalEvent;b.stopImmediatePropagation?b.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(b){b?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});d.EventObject=k});
KISSY.add("event-target",function(d,l){var k=d.Event;d.EventTarget={isCustomEventTarget:true,fire:function(i,m){var b=d.DOM.data(this,k.EVENT_GUID)||-1;if((b=((k._getCache(b)||{}).events||{})[i])&&d.isFunction(b.handle))return b.handle(l,m);return this},on:function(i,m,b){k.add(this,i,m,b);return this},detach:function(i,m,b){k.remove(this,i,m,b);return this}}});
KISSY.add("event-mouseenter",function(d){var l=d.Event;d.UA.ie||d.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(k){l.special[k.name]={fix:k.fix,setup:function(i){i.type=k.name},handle:function(i,m,b){if(d.DOM._isKSNode(i))i=i[0];var f=m.relatedTarget;try{for(;f&&f!==i;)f=f.parentNode;f!==i&&l._handle(i,m,b)}catch(t){}}}})});
KISSY.add("event-focusin",function(d){var l=d.Event;document.addEventListener&&d.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(k){l.special[k.name]={fix:k.fix,capture:true,setup:function(i){i.type=k.name}}})});
