webpackJsonp([1,6],{132:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(3),u=i(l),c=n(48),h=i(c),p=n(154),f=i(p),d=function(t){function e(t){r(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t));return n.state={isShow:!1},n}return s(e,t),a(e,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter()}},{key:"componentWillReceiveProps",value:function(t){!this.props.visible&&t.visible?this.enter():this.props.visible&&!t.visible&&this.leave()}},{key:"enter",value:function(){this.setState({isShow:!0})}},{key:"leave",value:function(){this.setState({isShow:!1})}},{key:"render",value:function(){var t=this.state.isShow?u["default"].createElement("div",{className:f["default"].dyy,onClick:this.props.onClose}," "):null,e=u["default"].createElement("h2",{className:f["default"].title},this.props.title),n=this.state.isShow?u["default"].createElement("div",null,u["default"].createElement("div",{className:f["default"].box},u["default"].createElement("div",{className:f["default"].closeicon,onClick:this.props.onClose}),e,this.props.children)):null;return u["default"].createElement("div",null,u["default"].createElement(h["default"],{transitionName:"fade"},t),u["default"].createElement(h["default"],{transitionName:"slideTop"},n))}}]),e}(l.Component);d.propTypes={onClose:l.PropTypes.func.isRequired,visible:l.PropTypes.bool,title:u["default"].PropTypes.node,children:u["default"].PropTypes.node},d.defaultProps={visible:!1,title:null,children:null},e["default"]=d},138:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(3),u=i(l),c=n(21),h=n(163),p=i(h),f=n(132),d=i(f),v=n(159),m=i(v),g=function(t){function e(t){r(this,e);var n=o(this,Object.getPrototypeOf(e).call(this,t));return n.state={DialogVisible:!1},n}return s(e,t),a(e,[{key:"showDialog",value:function(){this.setState({DialogVisible:!0})}},{key:"hideDialog",value:function(){this.setState({DialogVisible:!1})}},{key:"render",value:function(){return u["default"].createElement("div",{className:m["default"].homePage},u["default"].createElement(d["default"],{visible:this.state.DialogVisible,onClose:this.hideDialog.bind(this),title:"I'm Dialog"},u["default"].createElement("div",{className:"content"},"here are some tips!"),u["default"].createElement("a",{href:"javscript:;",className:"btn-dialog",onClick:this.hideDialog.bind(this)},"OK")),u["default"].createElement("div",{className:m["default"].wrapper},u["default"].createElement("h1",null,this.props.title),u["default"].createElement("article",null,"this demo includes following parts:",u["default"].createElement("ul",null,u["default"].createElement("li",null,"React"),u["default"].createElement("li",null,"React-Router"),u["default"].createElement("li",null,"Redux"),u["default"].createElement("li",null,"ES6"),u["default"].createElement("li",null,"Webpack"),u["default"].createElement("li",null,"CssModule"))),u["default"].createElement(p["default"],{onTap:this.props.onChangeTitle},u["default"].createElement("a",{href:"javascript:;",className:"btn-primary"},"change title (by redux)")),u["default"].createElement("a",{href:"javascript:;",className:"btn-primary",onClick:this.showDialog.bind(this)},"open a dialog"),u["default"].createElement(c.Link,{to:"about",className:"btn-primary",activeClassName:"btn.positive"},"About Page"),u["default"].createElement(c.Link,{to:"contact",className:"btn-primary"},"Contact Page"),u["default"].createElement(c.Link,{to:"fundlist",className:"btn-primary"},"fundlist Page"),u["default"].createElement("form",{onSubmit:this.props.handleSubmit,className:m["default"].form},u["default"].createElement("input",{type:"text",placeholder:"Enter page name"}),u["default"].createElement("button",{type:"submit"},"Go"))))}}]),e}(l.Component);g.propTypes={onChangeTitle:l.PropTypes.func.isRequired,handleSubmit:l.PropTypes.func.isRequired,title:l.PropTypes.string.isRequired},e["default"]=g},139:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(49),o=n(21),s=n(138),a=i(s),l=function(t){return{onChangeTitle:function(e){e.preventDefault(),t({type:"sayHi",text:"Look Here"})},handleSubmit:function(t){t.preventDefault();var e=t.target.elements[0].value,n="/"+e+"/";o.browserHistory.push(n)}}},u=function(t){return{title:t.changeText.HELLO_TEXT}},c=(0,r.connect)(u,l)(a["default"]);e["default"]=c},144:function(t,e,n){e=t.exports=n(19)(),e.push([t.id,".dialog---dyy---2EXwn{position:fixed;top:0;box-sizing:border-box;width:100%;height:100%;background:rgba(0,0,0,.8)}.dialog---box---2fSUo{position:fixed;top:50px;left:50%;width:80%;box-sizing:border-box;margin-left:-40%;padding:10px;background-color:#fff;border:2px solid #f40;border-radius:6px}.dialog---title---26NUM{font-size:20px;font-weight:700;text-align:center}.dialog---closeicon---3veEK{position:absolute;top:0;right:0;background:url("+n(292)+") no-repeat,#f40;width:32px;height:32px}",""]),e.locals={dyy:"dialog---dyy---2EXwn",box:"dialog---box---2fSUo",title:"dialog---title---26NUM",closeicon:"dialog---closeicon---3veEK"}},149:function(t,e,n){e=t.exports=n(19)(),e.push([t.id,"body{font-size:14px}.style---homePage---3osF7{box-sizing:border-box;padding-bottom:50px;line-height:1.5;color:red}.style---homePage---3osF7 h1{font-size:36px}.style---homePage---3osF7 article{font-size:18px}.style---homePage---3osF7 li{list-style-type:disc;margin-left:40px}.style---wrapper---30vRo{padding:0 10px}.style---form---2yrFC{width:230px;margin:0 auto;line-height:2.5;font-size:18px;font-weight:700;text-align:center}.style---form---2yrFC input{width:70%;line-height:inherit;background-color:#eee;border-radius:3px 0 0 3px;text-align:center}.style---form---2yrFC button{width:30%;line-height:inherit;color:#fff;border-radius:0 3px 3px 0;background-color:#49a0ff}",""]),e.locals={homePage:"style---homePage---3osF7",wrapper:"style---wrapper---30vRo",form:"style---form---2yrFC"}},154:function(t,e,n){var i=n(144);"string"==typeof i&&(i=[[t.id,i,""]]),n(25)(i,{}),i.locals&&(t.exports=i.locals)},159:function(t,e,n){var i=n(149);"string"==typeof i&&(i=[[t.id,i,""]]),n(25)(i,{}),i.locals&&(t.exports=i.locals)},162:function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
!function(r,o,s,a){"use strict";function l(t,e,n){return setTimeout(f(t,n),e)}function u(t,e,n){return Array.isArray(t)?(c(t,n[e],n),!0):!1}function c(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function h(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&vt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,n){c(E(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){c(E(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function T(t,e){return t.indexOf(e)>-1}function E(t){return t.trim().split(/\s+/g)}function b(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function w(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];b(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function A(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<mt.length;){if(n=mt[o],i=n?n+r:e,i in t)return i;o++}return a}function x(){return At++}function C(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function S(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function O(t){var e,n=t.options.inputClass;return new(e=n?n:St?X:Ot?q:Ct?B:L)(t,I)}function I(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&kt&&i-r===0,s=e&(Mt|Yt)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,D(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function D(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=R(e)),r>1&&!n.firstMultiple?n.firstMultiple=R(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,l=e.center=k(i);e.timeStamp=bt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=j(a,l),e.distance=Y(a,l),_(n,e),e.offsetDirection=M(e.deltaX,e.deltaY);var u=z(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=Et(u.x)>Et(u.y)?u.x:u.y,e.scale=s?F(s.pointers,i):1,e.rotation=s?W(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,N(n,e);var c=t.element;y(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function _(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==kt&&o.eventType!==Mt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function N(t,e){var n,i,r,o,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=Yt&&(l>Rt||s.velocity===a)){var u=e.deltaX-s.deltaX,c=e.deltaY-s.deltaY,h=z(l,u,c);i=h.x,r=h.y,n=Et(h.x)>Et(h.y)?h.x:h.y,o=M(u,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function R(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:Tt(t.pointers[n].clientX),clientY:Tt(t.pointers[n].clientY)},n++;return{timeStamp:bt(),pointers:e,center:k(e),deltaX:t.deltaX,deltaY:t.deltaY}}function k(t){var e=t.length;if(1===e)return{x:Tt(t[0].clientX),y:Tt(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:Tt(n/e),y:Tt(i/e)}}function z(t,e,n){return{x:e/t||0,y:n/t||0}}function M(t,e){return t===e?jt:Et(t)>=Et(e)?0>t?Wt:Ft:0>e?Lt:Xt}function Y(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function j(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function W(t,e){return j(e[1],e[0],Bt)+j(t[1],t[0],Bt)}function F(t,e){return Y(e[0],e[1],Bt)/Y(t[0],t[1],Bt)}function L(){this.evEl=Qt,this.evWin=Gt,this.pressed=!1,S.apply(this,arguments)}function X(){this.evEl=$t,this.evWin=te,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function H(){this.evTarget=ne,this.evWin=ie,this.started=!1,S.apply(this,arguments)}function U(t,e){var n=P(t.touches),i=P(t.changedTouches);return e&(Mt|Yt)&&(n=w(n.concat(i),"identifier",!0)),[n,i]}function q(){this.evTarget=oe,this.targetIds={},S.apply(this,arguments)}function V(t,e){var n=P(t.touches),i=this.targetIds;if(e&(kt|zt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=P(t.changedTouches),a=[],l=this.target;if(o=n.filter(function(t){return y(t.target,l)}),e===kt)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(Mt|Yt)&&delete i[s[r].identifier],r++;return a.length?[w(o.concat(a),"identifier",!0),a]:void 0}function B(){S.apply(this,arguments);var t=f(this.handler,this);this.touch=new q(this.manager,t),this.mouse=new L(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function K(t,e){t&kt?(this.primaryTouch=e.changedPointers[0].identifier,Q.call(this,e)):t&(Mt|Yt)&&Q.call(this,e)}function Q(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,se)}}function G(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(ae>=o&&ae>=s)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function Z(t){if(T(t,fe))return fe;var e=T(t,de),n=T(t,ve);return e&&n?fe:e||n?e?de:ve:T(t,pe)?pe:he}function $(){if(!ue)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=e?r.CSS.supports("touch-action",n):!0}),t}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=x(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=ge,this.simultaneous={},this.requireFail=[]}function et(t){return t&Pe?"cancel":t&Ee?"end":t&Te?"move":t&ye?"start":""}function nt(t){return t==Xt?"down":t==Lt?"up":t==Wt?"left":t==Ft?"right":""}function it(t,e){var n=e.manager;return n?n.get(t):t}function rt(){tt.apply(this,arguments)}function ot(){rt.apply(this,arguments),this.pX=null,this.pY=null}function st(){rt.apply(this,arguments)}function at(){tt.apply(this,arguments),this._timer=null,this._input=null}function lt(){rt.apply(this,arguments)}function ut(){rt.apply(this,arguments)}function ct(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ht(t,e){return e=e||{},e.recognizers=v(e.recognizers,ht.defaults.preset),new pt(t,e)}function pt(t,e){this.options=vt({},ht.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=O(this),this.touchAction=new J(this,this.options.touchAction),ft(this,!0),c(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var n=t.element;if(n.style){var i;c(t.options.cssProps,function(r,o){i=A(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function dt(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var vt,mt=["","webkit","Moz","MS","ms","o"],gt=o.createElement("div"),yt="function",Tt=Math.round,Et=Math.abs,bt=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var Pt=h(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),wt=h(function(t,e){return Pt(t,e,!0)},"merge","Use `assign`."),At=1,xt=/mobile|tablet|ip(ad|hone|od)|android/i,Ct="ontouchstart"in r,St=A(r,"PointerEvent")!==a,Ot=Ct&&xt.test(navigator.userAgent),It="touch",Dt="pen",_t="mouse",Nt="kinect",Rt=25,kt=1,zt=2,Mt=4,Yt=8,jt=1,Wt=2,Ft=4,Lt=8,Xt=16,Ht=Wt|Ft,Ut=Lt|Xt,qt=Ht|Ut,Vt=["x","y"],Bt=["clientX","clientY"];S.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(C(this.element),this.evWin,this.domHandler)}};var Kt={mousedown:kt,mousemove:zt,mouseup:Mt},Qt="mousedown",Gt="mousemove mouseup";p(L,S,{handler:function(t){var e=Kt[t.type];e&kt&&0===t.button&&(this.pressed=!0),e&zt&&1!==t.which&&(e=Mt),this.pressed&&(e&Mt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:_t,srcEvent:t}))}});var Jt={pointerdown:kt,pointermove:zt,pointerup:Mt,pointercancel:Yt,pointerout:Yt},Zt={2:It,3:Dt,4:_t,5:Nt},$t="pointerdown",te="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&($t="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel"),p(X,S,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Jt[i],o=Zt[t.pointerType]||t.pointerType,s=o==It,a=b(e,t.pointerId,"pointerId");r&kt&&(0===t.button||s)?0>a&&(e.push(t),a=e.length-1):r&(Mt|Yt)&&(n=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var ee={touchstart:kt,touchmove:zt,touchend:Mt,touchcancel:Yt},ne="touchstart",ie="touchstart touchmove touchend touchcancel";p(H,S,{handler:function(t){var e=ee[t.type];if(e===kt&&(this.started=!0),this.started){var n=U.call(this,t,e);e&(Mt|Yt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}}});var re={touchstart:kt,touchmove:zt,touchend:Mt,touchcancel:Yt},oe="touchstart touchmove touchend touchcancel";p(q,S,{handler:function(t){var e=re[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}});var se=2500,ae=25;p(B,S,{handler:function(t,e,n){var i=n.pointerType==It,r=n.pointerType==_t;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)K.call(this,e,n);else if(r&&G.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var le=A(gt.style,"touchAction"),ue=le!==a,ce="compute",he="auto",pe="manipulation",fe="none",de="pan-x",ve="pan-y",me=$();J.prototype={set:function(t){t==ce&&(t=this.compute()),ue&&this.manager.element.style&&me[t]&&(this.manager.element.style[le]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return c(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Z(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=T(i,fe)&&!me[fe],o=T(i,ve)&&!me[ve],s=T(i,de)&&!me[de];if(r){var a=1===t.pointers.length,l=t.distance<2,u=t.deltaTime<250;if(a&&l&&u)return}return s&&o?void 0:r||o&&n&Ht||s&&n&Ut?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ge=1,ye=2,Te=4,Ee=8,be=Ee,Pe=16,we=32;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(u(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return u(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(u(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),-1===b(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(u(t,"dropRequireFailure",this))return this;t=it(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;Ee>i&&e(n.options.event+et(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=Ee&&e(n.options.event+et(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=we)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(we|ge)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return d(this.options.enable,[this,e])?(this.state&(be|Pe|we)&&(this.state=ge),this.state=this.process(e),void(this.state&(ye|Te|Ee|Pe)&&this.tryEmit(e))):(this.reset(),void(this.state=we))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(rt,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ye|Te),r=this.attrTest(t);return i&&(n&Yt||!r)?e|Pe:i||r?n&Mt?e|Ee:e&ye?e|Te:ye:we}}),p(ot,rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:qt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ht&&e.push(ve),t&Ut&&e.push(de),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Ht?(r=0===o?jt:0>o?Wt:Ft,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?jt:0>s?Lt:Xt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return rt.prototype.attrTest.call(this,t)&&(this.state&ye||!(this.state&ye)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(st,rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ye)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(at,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[he]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Mt|Yt)&&!r)this.reset();else if(t.eventType&kt)this.reset(),this._timer=l(function(){this.state=be,this.tryEmit()},e.time,this);else if(t.eventType&Mt)return be;return we},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===be&&(t&&t.eventType&Mt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=bt(),this.manager.emit(this.options.event,this._input)))}}),p(lt,rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ye)}}),p(ut,rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ht|Ut,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ht|Ut)?e=t.overallVelocity:n&Ht?e=t.overallVelocityX:n&Ut&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&Mt},emit:function(t){var e=nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ct,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&kt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Mt)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,s=!this.pCenter||Y(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=l(function(){this.state=be,this.tryEmit()},e.interval,this),ye):be}return we},failTimeout:function(){return this._timer=l(function(){this.state=we},this.options.interval,this),we},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==be&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ht.VERSION="2.0.7",ht.defaults={domEvents:!1,touchAction:ce,enable:!0,inputTarget:null,inputClass:null,preset:[[lt,{enable:!1}],[st,{enable:!1},["rotate"]],[ut,{direction:Ht}],[ot,{direction:Ht},["swipe"]],[ct],[ct,{event:"doubletap",taps:2},["tap"]],[at]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ae=1,xe=2;pt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?xe:Ae},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&be)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],e.stopped===xe||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(ye|Te|Ee)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(u(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(u(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=b(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return c(E(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return c(E(t),function(t){e?n[t]&&n[t].splice(b(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(ht,{INPUT_START:kt,INPUT_MOVE:zt,INPUT_END:Mt,INPUT_CANCEL:Yt,STATE_POSSIBLE:ge,STATE_BEGAN:ye,STATE_CHANGED:Te,STATE_ENDED:Ee,STATE_RECOGNIZED:be,STATE_CANCELLED:Pe,STATE_FAILED:we,DIRECTION_NONE:jt,DIRECTION_LEFT:Wt,DIRECTION_RIGHT:Ft,DIRECTION_UP:Lt,DIRECTION_DOWN:Xt,DIRECTION_HORIZONTAL:Ht,DIRECTION_VERTICAL:Ut,DIRECTION_ALL:qt,Manager:pt,Input:S,TouchAction:J,TouchInput:q,MouseInput:L,PointerEventInput:X,TouchMouseInput:B,SingleTouchInput:H,Recognizer:tt,AttrRecognizer:rt,Tap:ct,Pan:ot,Swipe:ut,Pinch:st,Rotate:lt,Press:at,on:m,off:g,each:c,merge:wt,extend:Pt,assign:vt,inherit:p,bindFn:f,prefixed:A});var Ce="undefined"!=typeof r?r:"undefined"!=typeof self?self:{};Ce.Hammer=ht,i=function(){return ht}.call(e,n,e,t),!(i!==a&&(t.exports=i))}(window,document,"Hammer")},163:function(t,e,n){function i(t,e){e.vertical?(t.get("pan").set({direction:s.DIRECTION_ALL}),t.get("swipe").set({direction:s.DIRECTION_ALL})):(t.get("pan").set({direction:s.DIRECTION_HORIZONTAL}),t.get("swipe").set({direction:s.DIRECTION_HORIZONTAL})),e.options&&Object.keys(e.options).forEach(function(n){if("recognizers"===n)Object.keys(e.options.recognizers).forEach(function(n){var i=t.get(n);i.set(e.options.recognizers[n])},this);else{var i=n,r={};r[i]=e.options[n],t.set(r)}},this),e.recognizeWith&&Object.keys(e.recognizeWith).forEach(function(n){var i=t.get(n);i.recognizeWith(e.recognizeWith[n])},this),Object.keys(e).forEach(function(n){var i=l[n];i&&(t.off(i),t.on(i,e[n]))})}var r=n(3),o=n(77),s="undefined"!=typeof window?n(162):void 0,a={children:!0,action:!0,onTap:!0,onDoubleTap:!0,onPan:!0,onPanStart:!0,onPanEnd:!0,onPanCancel:!0,onSwipe:!0,onPress:!0,onPressUp:!0,onPinch:!0,onPinchIn:!0,onPinchOut:!0,onPinchStart:!0,onPinchEnd:!0,onPinchCancel:!0,onRotate:!0},l={action:"tap press",onTap:"tap",onDoubleTap:"doubletap",onPanStart:"panstart",onPan:"pan",onPanEnd:"panend",onPanCancel:"pancancel",onSwipe:"swipe",onPress:"press",onPressUp:"pressup",onPinch:"pinch",onPinchIn:"pinchin",onPinchOut:"pinchout",onPinchStart:"pinchstart",onPinchEnd:"pinchend",onRotate:"rotate"},u=r.createClass({displayName:"Hammer",propTypes:{className:r.PropTypes.string},componentDidMount:function(){this.hammer=new s(o.findDOMNode(this)),i(this.hammer,this.props)},componentDidUpdate:function(){this.hammer&&i(this.hammer,this.props)},componentWillUnmount:function(){this.hammer&&(this.hammer.stop(),this.hammer.destroy()),this.hammer=null},render:function(){var t={};return Object.keys(this.props).forEach(function(e){a[e]||(t[e]=this.props[e])},this),r.cloneElement(r.Children.only(this.props.children),t)}});t.exports=u},292:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABcUlEQVRYR+2W0VGDQBCGdxOfyd0MvltCOpBUoB2olWgn0kHSgdoBKSHPYeYg+iiuAwwxMnfc3pKZvMArcN/HsvvfIVz4wgvzYRKYKmCtwN6UL4jwDIRPsY7SMY1qzNeywu83AMhipVb9tYYF6qdHSPzBURHRx7VWCUugfig3ZQoID80LAokefHsFi0RrLNgCYyS48JrhnYLQSoTAWQIhlQiFswU4EhJ4kMCQhBQeLGCTmMMsa+e8GTVnt7uyxNuEthf/NSZQIYWLKtAJ5abcAMJdmxO0m8NiaZtzX4qKKrA3nwlita6//AgQhJWoArk5PALSa/vhtEXAbExiBlWgD+/iNTSsTn8LW8AFP+kJ0d7BEvDBx0h4BbhwqcSgQChcIuEUkMJDJawCuTncA9K6GzXXYcIXMpzpcBzJindEvJVke1/qKEG0i7W6YZ2I6t3tB6pkBlEqidc+pDnkAmaxjjYsAV9pz3nfO4bnhNnWmgR+AUqiQzC2wWHjAAAAAElFTkSuQmCC"}});