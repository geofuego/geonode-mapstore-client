(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514],{57676:(e,t,n)=>{"use strict";n.d(t,{qx:()=>r,HM:()=>o,Lv:()=>i,y3:()=>c,iv:()=>u,cO:()=>a,br:()=>s,aA:()=>l,Xe:()=>p,Nb:()=>f,_V:()=>d,kq:()=>y,JU:()=>b,PQ:()=>g,cb:()=>v,KI:()=>O,M5:()=>h,w2:()=>m,w:()=>w,Z7:()=>P,p:()=>E,_e:()=>j});var r="TIMELINE:SELECT_TIME",o=function(e,t,n,o){return{type:r,time:e,group:t,what:n,item:o}},i="TIMELINE:RANGE_CHANGE",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end;return{type:i,start:t,end:n}},u="TIMELINE:RANGE_DATA_LOADED",a=function(e,t,n,r){return{type:u,layerId:e,range:t,histogram:n,domain:r}},s="TIMELINE:LOADING",l=function(e,t){return{type:s,layerId:e,loading:t}},p="TIMELINE:INIT_SELECT_LAYER",f=function(e){return{type:p,layerId:e}},d="TIMELINE:SELECT_LAYER",y=function(e){return{type:d,layerId:e}},b="TIMELINE:ENABLE_OFFSET",g=function(e){return{type:b,enabled:e}},v="TIMELINE:AUTOSELECT",O=function(){return{type:v}},h="TIMELINE:SET_COLLAPSED",m=function(e){return{type:h,collapsed:e}},w="TIMELINE:SET_MAP_SYNC",P=function(e){return{type:w,mapSync:e}},E="TIMELINE:INIT_TIMELINE",j=function(e){return{type:E,showHiddenLayers:e}}},69901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var r=n(24852),o=n.n(r),i=n(45697),c=n.n(i),u=n(71703),a=n(67076),s=n(22222),l=n(15135),p=n(57588),f=n(1757),d=n(57579),y=n(13311),b=n.n(y),g=n(30998),v=n.n(g),O=n(89734),h=n.n(O);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){return!e.dataGrid||!e.dataGrid.static},j=(0,s.P1)(f.zm,f.YR,f.yZ,f.lF,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return h()(e.filter(E).map((function(e){return v()(t,(function(t){return t===e.id}))>=0?w(w({},e),{},{collapsed:!0}):e})),(function(e){var t=r[e.id]&&r[e.id].layout,o=b()(n,{i:e.id})||t||{},i=o.x,c=void 0===i?0:i,u=o.y;return 100*(void 0===u?0:u)+c}))})),I=n(10473),T=(0,a.compose)((0,a.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,I.Z)("toolsOptions",{asObject:!0}),(0,a.withProps)((function(e){var t=e.widgets,n=e.toolsOptions;return{widgets:(void 0===n?{seeHidden:!1}:n).seeHidden?t:t.filter((function(e){return!e.hide}))}}))),S=n(65539),k=n(80717);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType,n=e.type,r=t&&"chart"!==t?t:n;switch(r){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"line":return"1-line";case"map":return"1-map";case"counter":return"counter";default:return"stats"}};const N=(0,a.compose)((0,a.withPropsOnChange)(["btnGroupProps"],(function(e){var t=e.btnGroupProps;return{btnGroupProps:D(D({},t),{},{className:"widgets-bar"+(t&&t.className?" ".concat(t.className):"")})}})),(0,a.withPropsOnChange)(["widgets","onClick"],(function(e){var t=e.widgets,n=void 0===t?[]:t,r=e.onClick,o=void 0===r?function(){}:r;return{buttons:n.map((function(e){return{glyph:_(e),tooltip:e.title,className:e.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(e)}}}))}})))(k.Z);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=(0,a.compose)((0,u.connect)((0,s.P1)(j,(function(e){return{widgets:e}})),{onClick:d.f}),(0,a.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),T,(0,a.withProps)((function(e){var t=e.btnGroupProps,n=void 0===t?{}:t,r=e.btnDefaultProps,o=void 0===r?{}:r;return{btnGroupProps:M({bsSize:"xsmall"},n),btnDefaultProps:M({bsSize:"xsmall"},o||{})}})))(N);var R=n(38560);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=(0,l.Z)(R.Z),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expanded,n=e.onClick,r=void 0===n?function(){}:n;return o().createElement(Y,{tooltipId:t?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:r},o().createElement(p.Glyphicon,{glyph:t?"chevron-right":"chevron-left"}))},B=(0,a.compose)((0,u.connect)((0,s.P1)(f.E5,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{onClick:function(){return(0,d.Ff)()}}),T,(0,a.withProps)((function(e){var t=e.widgets;return{shouldExpand:0===(void 0===t?[]:t).length}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,n=void 0===t?function(){}:t,r=e.shouldExpand,i=void 0!==r&&r;return o().createElement(Y,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:n},o().createElement(p.Glyphicon,{glyph:"list"}))})),$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(i){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(){return V(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e,t=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:80,bottom:0,right:0,position:"absolute"}},o().createElement(S.Z,{columns:[o().createElement(q,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return t.props.setExpanded(!t.props.expanded)}}),o().createElement(B,{key:"collapse-all",toolsOptions:this.props.toolsOptions})].concat((e=this.props.items.map((function(e){return e.tool}))||[],function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},this.props.expanded?o().createElement(G,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&W(t.prototype,n),u}(o().Component);U($,"propTypes",{enabled:c().bool,toolsOptions:c().object,items:c().array,expanded:c().bool,setExpanded:c().func}),U($,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){}});const K=(0,a.compose)((0,a.withState)("expanded","setExpanded",!1),(0,u.connect)((0,s.P1)(j,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{toggleTray:d.ep}),T,(0,a.withProps)((function(e){var t=e.widgets,n=void 0===t?[]:t;return{hasCollapsedWidgets:n.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapsed;return t})).length>0,hasTrayWidgets:n.length>0}})),(0,a.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,a.mapPropsStream)((function(e){return e.merge(e.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(e){var t=e.setExpanded;return(void 0===t?function(){}:t)(e.hasCollapsedWidgets)})).ignoreElements())})),(0,a.withProps)((function(e){var t=e.enabled,n=e.hasTrayWidgets;return{enabled:t&&n}})))($);var Q=n(54414),X=n(49977),ee=n.n(X),te=n(27361),ne=n.n(te),re=n(57676),oe=n(81808),ie=n(97395),ce=n(80416),ue=n(97291);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=function(e){return((0,f.E5)(e)||[]).filter((function(e){return!ne()(e,"dataGrid.static")})).length>0},fe=function(e){return function(t){return t.take(1).switchMap((function(){return ee().Observable.of((0,ie.um)(se(se({},e),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(t)}};const de={collapseTimelineOnWidgetsEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return ee().Observable.merge(e.ofType(d.Ym,d.uU,oe.ok,d.$A,d.Jm).filter((function(){return pe(r())&&(0,ue.pn)(r())}))).switchMap((function(){return ee().Observable.of((0,re.w2)(!0))})).let(fe({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return ee().Observable.merge(e.ofType(re.M5).filter((function(e){return!e.collapsed})),e.ofType(ce.yS).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.newProperties,n=void 0===t?{}:t;return n.dimensions}))).filter((function(){return pe(r())&&(0,ue.qJ)(r())&&(0,ue.pn)(r())})).switchMap((function(){return ee().Observable.of((0,d.Ff)())})).let(fe({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(d.yY,d.$A,oe.ok).filter((function(){return!(0,ue.pn)(r())&&(0,ue.qJ)(r())})).filter((function(){return!pe(r())})).switchMap((function(){return ee().Observable.of((0,re.w2)(!1))}))}},ye={WidgetsTrayPlugin:(0,Q.Z)(K),epics:de}},54414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(22222),o=n(71703),i=n(55105),c=n(93152);const u=(0,o.connect)((0,r.P1)(i.Jz,i.VM,c.c0,(function(e,t,n){return{enabled:!e&&!t&&!n}})))},10473:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(67076),o=n(71703),i=n(22222),c=n(827),u=n(74621),a=n(27361),s=n.n(a),l=n(84596),p=n.n(l),f=n(66604),d=n.n(f),y=n(47037),b=n.n(y),g=n(1469),v=n.n(g);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function e(t){var n=t.accessInfo,r=t.postProcessValue,o=t.reduceFun;return function(t){var i=p()(t),c=o;return i.length>1&&"__OR__"===i[0]&&(c=function(e,t){return e||t},i=i.slice(1)),i.map((function(t){var i=t;if(v()(i))return e({accessInfo:n,postProcessValue:r,reduceFun:o})(i);var c=!1;i&&b()(i)&&i.startsWith("!")&&(c=!0,i=i.substr(1));var u=function(e){return c?!e:e},a=b()(i)&&i.split(":");if(a&&a[0]){var l=a[0].split(/\!\=\=?/),p=a[0].split(/\=\=?\=?/);return l.length>1?u(r(s()(n,l[0]),i)!==l[1]):p.length>1?u(r(s()(n,p[0]),i)===p[1]):u(r(s()(n,a[0]),i))}return i})).reduce(c||function(e,t){return e&&t})}};const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.asObject,o=void 0!==n&&n,i=t.postProcessValue,c=void 0===i?function(e){return e}:i,u=t.reduceFun,a=t.accessInfo,s=void 0===a?"accessInfo":a;return(0,r.withPropsOnChange)([e,s],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O({},e,o?d()(t[e],h({accessInfo:t[s],postProcessValue:c,reduceFun:u})):h({accessInfo:t[s],postProcessValue:c,reduceFun:u})(t[e]))}))},w=function(){return(0,r.compose)((0,o.connect)((0,i.P1)(c.J9,c._H,u.np,(function(e,t,n){return{accessInfo:{mapId:e,mapInfo:t,user:n}}}))),m.apply(void 0,arguments))}},55105:(e,t,n)=>{"use strict";n.d(t,{Nr:()=>p,ic:()=>f,Jz:()=>y,VM:()=>b,CF:()=>g});var r=n(91175),o=n.n(r),i=n(827),c=n(52259);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return a(a({},e),{},s({},t,n[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=l(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},g=function(e){var t=(0,i.Od)(e),n=p(e);return n&&t&&t.size&&{left:(0,c.parseLayoutValue)(n.left,t.size.width),bottom:(0,c.parseLayoutValue)(n.bottom,t.size.height),right:(0,c.parseLayoutValue)(n.right,t.size.width),top:(0,c.parseLayoutValue)(n.top,t.size.height)}}},24684:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,y:()=>c});var r=n(27361),o=n.n(r),i=function(e){return o()(e,"router.location.pathname")||"/"},c=function(e){return o()(e,"router.location.search")||""}},74621:(e,t,n)=>{"use strict";n.d(t,{np:()=>r,L3:()=>o,jl:()=>i,y8:()=>c,qg:()=>u}),n(27418),n(27361);var r=function(e){return e&&e.security&&e.security.user},o=function(e){return r(e)&&r(e).role},i=function(e){return e&&e.security&&e.security.user},c=function(e){return e.security&&e.security.token},u=function(e){return"ADMIN"===o(e)}},19081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);