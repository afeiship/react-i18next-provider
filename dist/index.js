!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("i18next"),require("classnames"),require("react-dom"),require("@feizheng/noop"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","prop-types","i18next","classnames","react-dom","@feizheng/noop","object-assign"],t):"object"==typeof exports?exports.ReactI18nextProvider=t(require("react"),require("prop-types"),require("i18next"),require("classnames"),require("react-dom"),require("@feizheng/noop"),require("object-assign")):e.ReactI18nextProvider=t(e.react,e["prop-types"],e.i18next,e.classnames,e["react-dom"],e["@feizheng/noop"],e["object-assign"])}(window,(function(e,t,r,n,o,i,u){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=(r(4),r(1)),u=r.n(i),c=r(3),a=r.n(c),s=(r(5),r(6),r(2)),f=r.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g="react-i18next-provider",h=o.a.createContext(),j=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=d(this,m(t).call(this,e))).state={loaded:!1},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.resources,n=t.value;f.a.init({lng:n,debug:!0,fallbackLng:"en",resources:r},(function(){e.setState({loaded:!0})}))}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.resources,e.children),n=(e.value,y(e,["className","resources","children","value"])),i=this.state.loaded;return o.a.createElement("div",p({"data-component":g,className:a()(g,t)},n),i&&o.a.createElement(h.Provider,{value:{i18next:f.a}},r(f.a)))}}])&&b(r.prototype,n),i&&b(r,i),t}(n.Component);j.displayName=g,j.propTypes={className:u.a.string,value:u.a.string,children:u.a.func,resources:u.a.object.isRequired},j.defaultProps={value:"en"};t.default=j}])}));