_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(t,n,e){"use strict";n.__esModule=!0,n.isInAmpMode=i,n.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=e("q1tI"))&&o.__esModule?o:{default:o},a=e("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,o=t.hybrid,r=void 0!==o&&o,a=t.hasQuery,i=void 0!==a&&a;return e||r&&i}},0:function(t,n,e){e("74v/"),t.exports=e("nOHt")},"5fIB":function(t,n,e){var o=e("7eYB");t.exports=function(t){if(Array.isArray(t))return o(t)}},"74v/":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("cha2")}])},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},"8Kt/":function(t,n,e){"use strict";e("oI91");n.__esModule=!0,n.defaultHead=c,n.default=void 0;var o,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=u();if(n&&n.has(t))return n.get(t);var e={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=o?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(e,r,a):e[r]=t[r]}e.default=t,n&&n.set(t,e);return e}(e("q1tI")),a=(o=e("Xuae"))&&o.__esModule?o:{default:o},i=e("lwAK"),s=e("FYa8"),f=e("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[r.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function l(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===r.default.Fragment?t.concat(r.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,n){return t.reduce((function(t,n){var e=r.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(l,[]).reverse().concat(c(n.inAmpMode)).filter(function(){var t=new Set,n=new Set,e=new Set,o={};return function(r){var a=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var s=r.key.slice(r.key.indexOf("$")+1);t.has(s)?a=!1:t.add(s)}switch(r.type){case"title":case"base":n.has(r.type)?a=!1:n.add(r.type);break;case"meta":for(var f=0,u=p.length;f<u;f++){var c=p[f];if(r.props.hasOwnProperty(c))if("charSet"===c)e.has(c)?a=!1:e.add(c);else{var l=r.props[c],d=o[c]||new Set;"name"===c&&i||!d.has(l)?(d.add(l),o[c]=d):a=!1}}}return a}}()).reverse().map((function(t,n){var e=t.key||n;return r.default.cloneElement(t,{key:e})}))}function y(t){var n=t.children,e=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:d,headManager:o,inAmpMode:(0,f.isInAmpMode)(e)},n)}y.rewind=function(){};var m=y;n.default=m},B5Ud:function(t,n,e){"use strict";var o=e("vJKn"),r=e("/GRZ"),a=e("i2R6"),i=e("48fX"),s=e("tCBg"),f=e("T0f4"),u=e("qVT1");function c(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=f(t);if(n){var r=f(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)}}var l=e("AroE");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=w,n.default=void 0;var p=l(e("q1tI")),d=e("g/15");function y(t){return m.apply(this,arguments)}function m(){return(m=u(o.mark((function t(n){var e,r,a;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,r=n.ctx,t.next=3,(0,d.loadGetInitialProps)(e,r);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n.AppInitialProps=d.AppInitialProps,n.NextWebVitalsMetric=d.NextWebVitalsMetric;var h=function(t){i(e,t);var n=c(e);function e(){return r(this,e),n.apply(this,arguments)}return a(e,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,o=t.pageProps,r=t.__N_SSG,a=t.__N_SSP;return p.default.createElement(e,Object.assign({},o,r||a?{}:{url:w(n)}))}}]),e}(p.default.Component);function w(t){var n=t.pathname,e=t.asPath,o=t.query;return{get query(){return o},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var o=e?n:"",r=e||n;return t.push(o,r)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var o=e?n:"",r=e||n;return t.replace(o,r)}}}n.default=h,h.origGetInitialProps=y,h.getInitialProps=y},OxOB:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=!1,r={title:"\ud6c4\uc988: \ub204\uac00 \ub0a0 \uc120\ud0dd\ud588\uc744\uae4c?",sub_title:"\uc9c8\ubb38\uc5d0 \ub9de\ub294 \uce5c\uad6c\ub97c \uc120\ud0dd\ud558\uace0 \ub0a0 \uc120\ud0dd\ud55c \uce5c\uad6c\ub97c \ucc3e\uc544\ubcf4\uc138\uc694",android_url:"https://play.google.com/store/apps/details?id=com.jh.whoz",ios_url:"https://apps.apple.com/app/id6451431773",copyright:"COPYRIGHT \xa9J.H. 2023. ALL RIGHTS RESERVED.",contact:"info@imjihun.com",share_image_url:"https://whoz.imjihun.com/images/app_icon.png",share_domain:"https://whoz.imjihun.com",canonical:"https://whoz.imjihun.com",header_logo_image_path:"/images/header_logo.png",header_logo_sub_title:"",main_landing_image_path:"/images/main_landing.jpeg",screenshot_sub_title_2:"",screenshot_sub_title_1:"\ub204\uac00 \ub0a0 \uc120\ud0dd\ud588\uc744\uae4c?",screenshot_sub_title_1_mobile:"\ub204\uac00\n\ub0a0\n\uc120\ud0dd\ud588\uc744\uae4c?",screenshot_config_list:[{image_path:"/images/screenshot_ko_1.png",description:"\uce5c\uad6c\ub4e4\uc744\n\ucd08\ub300\ud558\uc138\uc694",subDescription:""},{image_path:"/images/screenshot_ko_2.png",description:"\uc9c8\ubb38\uc758 \ub2f5\uc740\n\ub204\uad6c?",subDescription:""},{image_path:"/images/screenshot_ko_3.png",description:"\uc774 \uc9c8\ubb38\uc740\n\ub204\uac00 \ubcf4\ub0c8\uc744\uae4c?",subDescription:""},{image_path:"/images/screenshot_ko_4.png",description:"\ub0b4\uac00 \ubc1b\uc740 \uc9c8\ubb38\uc744\n\uacf5\uc720\ud558\uc138\uc694",subDescription:""},{image_path:"/images/screenshot_ko_5.png",description:"\ub0b4\uac00 \ubcf4\ub0b8 \uc9c8\ubb38\uc5d0\n\ub2f5\uc7a5\uc744 \ud655\uc778\ud558\uc138\uc694",subDescription:""},{image_path:"/images/screenshot_ko_6.png",description:"\uc8fc\ubcc0\uc758 \ud6c4\uc988",subDescription:""},{image_path:"/images/screenshot_ko_7.png",description:"\ub610 \ub2e4\ub978 \uce5c\uad6c\ub4e4\uc744\n\ucd08\ub300\ud558\uc138\uc694",subDescription:""},{image_path:"/images/screenshot_ko_8.png",description:"\ub0b4\uac00 \ubc1b\uc740 \ud6c4\uc988",subDescription:""},{image_path:"/images/screenshot_ko_9.png",description:"\uce5c\uad6c\uac00 \ubc1b\uc740 \ud6c4\uc988",subDescription:""}]}},Xuae:function(t,n,e){"use strict";var o=e("mPvQ"),r=e("/GRZ"),a=e("i2R6"),i=(e("qXWd"),e("48fX")),s=e("tCBg"),f=e("T0f4");function u(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=f(t);if(n){var r=f(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)}}n.__esModule=!0,n.default=void 0;var c=e("q1tI"),l=function(t){i(e,t);var n=u(e);function e(t){var a;return r(this,e),(a=n.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(e,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),e}(c.Component);n.default=l},ar19:function(t,n,e){"use strict";function o(t){try{return y.insertRule(t,y.cssRules.length)}catch(t){console.warn("react-reveal - animation failed")}}function r(){c||(n.globalHide=c=!0,window.removeEventListener("scroll",r,!0),o("."+a+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(n,"__esModule",{value:!0}),n.insertRule=o,n.cascade=function(t,n,e,o,r){var a=Math.log(o),i=(Math.log(r)-a)/(e-n);return Math.exp(a+i*(t-n))},n.animation=function(t){if(!y)return"";var n="@keyframes "+(m+p)+"{"+t+"}",e=d[t];return e?""+m+e:(y.insertRule(n,y.cssRules.length),d[t]=p,""+m+p++)},n.hideAll=r,n.default=function(t){var e=t.ssrFadeout;n.fadeOutEnabled=e};var a=n.namespace="react-reveal",i=(n.defaults={duration:1e3,delay:0,count:1},n.ssr=!0),s=n.observerMode=!1,f=n.raf=function(t){return window.setTimeout(t,66)},u=n.disableSsr=function(){return n.ssr=i=!1},c=(n.fadeOutEnabled=!1,n.ssrFadeout=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return n.fadeOutEnabled=t},n.globalHide=!1),l=(n.ie10=!1,n.collapseend=void 0),p=1,d={},y=!1,m=a+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){n.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),n.raf=f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f,n.ssr=i=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(n.ie10=!0),i&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(n.ssr=i=!1),i&&window.setTimeout(u,1500),s||(n.collapseend=l=document.createEvent("Event"),l.initEvent("collapseend",!0,!0));var h=document.createElement("style");document.head.appendChild(h),h.sheet&&h.sheet.cssRules&&h.sheet.insertRule&&(y=h.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},cha2:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return(s="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function f(t,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.r(n);var c=e("q1tI"),l=e.n(c),p=e("8Bbg"),d=e.n(p),y=(e("tyWD"),e("K7k0"),e("ar19")),m=e.n(y),h=e("vOnD"),w=e("g4pe"),g=e.n(w),v=e("OxOB"),_=l.a.createElement;function b(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=u(t);if(n){var r=u(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return f(this,e)}}function S(){var t,n,e=(t=["\n  @font-face {\n  font-family: Raleway-Black;\n  src: url('/fonts/Raleway/Raleway-Black.ttf') format('truetype');\n  font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-Bold;\n    font-weight: 200;\n    src: url('/fonts/Raleway/Raleway-Bold.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-ExtraBold;\n    src: url('/fonts/Raleway/Raleway-ExtraBold.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-ExtraLight;\n    src: url('/fonts/Raleway/Raleway-ExtraLight.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-Light;\n    src: url('/fonts/Raleway/Raleway-Light.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-Medium;\n    src: url('/fonts/Raleway/Raleway-Medium.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-Regular;\n    src: url('/fonts/Raleway/Raleway-Regular.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-SemiBold;\n    src: url('/fonts/Raleway/Raleway-SemiBold.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: Raleway-Thin;\n    src: url('/fonts/Raleway/Raleway-Thin.ttf') format('truetype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: BMHANNA11yrsoldOTF;\n    src: url('/fonts/BMHANNA11yrsoldOTF/BMHANNA_11yrs_otf.otf')format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Black;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Black.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Bold;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Bold.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-DemiLight;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-DemiLight.otf')\n    font-display: swap;\n      format('opentype');\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Light;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Light.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Medium;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Medium.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Regular;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Regular.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansCJKkr-Thin;\n    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Thin.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansMonoCJKkr-Bold;\n    src: url('/fonts/NotoSansCJKkr/NotoSansMonoCJKkr-Bold.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n    font-family: NotoSansMonoCJKkr-Regular;\n    src: url('/fonts/NotoSansCJKkr/NotoSansMonoCJKkr-Regular.otf') format('opentype');\n    font-display: swap;\n  }\n  @font-face {\n  font-family: JalnanOTF;\n  src: url('/fonts/JalnanOTF/JalnanOTF.otf') format('opentype');\n  font-display: swap;\n}\n  @font-face {\n  font-family: YANGJIN;\n  src: url('/fonts/YangjinTTF/YANGJIN.ttf') format('truetype');\n  font-display: swap;\n}\n\n  @font-face {\n  font-family: AppleSDGothicNeo;\n  font-weight:bold;\n  src: url('/fonts/AppleSDGothicNeoTTF/AppleSDGothicNeoB.ttf') format('truetype');\n  font-display: swap;\n}\n  @font-face {\n  font-family: AppleSDGothicNeo;\n  font-weight:500;\n  src: url('/fonts/AppleSDGothicNeoTTF/AppleSDGothicNeoM.ttf') format('truetype');\n  font-display: swap;\n}\n  @font-face {\n  font-family: BMDOHYEON;\n  src: url('/fonts/BMDOHYEON/BMDOHYEON.otf') format('opentype');\n  font-display: swap;\n}\n\nbody { margin: 0; }\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));return S=function(){return e},e}var k=Object(h.a)(S()),R=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(f,t);var n,e,i,s=b(f);function f(){return o(this,f),s.apply(this,arguments)}return n=f,(e=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){m()({ssrFadeout:!0});var t=this.props,n=t.Component,e=t.pageProps;return _(l.a.Fragment,null,_(g.a,null,_("title",null,v.b.title),_("meta",{name:"description",content:v.b.sub_title})),_(k,null),_(n,e))}}])&&r(n.prototype,e),i&&r(n,i),f}(d.a);n.default=R},g4pe:function(t,n,e){t.exports=e("8Kt/")},kG2m:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,n,e){"use strict";var o;n.__esModule=!0,n.AmpStateContext=void 0;var r=((o=e("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});n.AmpStateContext=r},mPvQ:function(t,n,e){var o=e("5fIB"),r=e("rlHP"),a=e("KckH"),i=e("kG2m");t.exports=function(t){return o(t)||r(t)||a(t)||i()}},oI91:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},rlHP:function(t,n){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}}},[[0,0,2,1,3]]]);