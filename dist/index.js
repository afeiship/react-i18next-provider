!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("prop-types"),require("i18next"),require("react"),require("@feizheng/noop"),require("object-assign"),require("classnames")):"function"==typeof define&&define.amd?define(["prop-types","i18next","react","@feizheng/noop","object-assign","classnames"],n):"object"==typeof exports?exports.ReactI18nextProvider=n(require("prop-types"),require("i18next"),require("react"),require("@feizheng/noop"),require("object-assign"),require("classnames")):e.ReactI18nextProvider=n(e["prop-types"],e.i18next,e.react,e["@feizheng/noop"],e["object-assign"],e.classnames)}(window,(function(e,n,t,r,o,i){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n){e.exports=o},function(e,n){e.exports=i},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(0),i=t.n(o),u=(t(5),t(3)),a=t.n(u),c=t(4),s=t.n(c),f=t(1),l=t.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,g(n).call(this,e))).onI18nInitialized=function(){t.setState({loaded:!0})},t.onI18nLanguageChanged=function(e){(0,t.props.onChange)({target:{value:e}})},t.state={loaded:!1},t}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,e),t=n,(r=[{key:"shouldComponentUpdate",value:function(e){var n=e.value;return n!==this.props.value&&l.a.changeLanguage(n),!0}},{key:"componentDidMount",value:function(){var e=this.props,n=e.resources,t=e.value,r=e.i18nOptions,o=s()({lng:t,debug:!1,fallbackLng:"en",resources:n},r);l.a.on("initialized",this.onI18nInitialized),l.a.on("languageChanged",this.onI18nLanguageChanged),l.a.init(o)}},{key:"render",value:function(){var e=this.props,n=(e.className,e.resources,e.children);return e.value,y(e,["className","resources","children","value"]),this.state.loaded&&n()}}])&&d(t.prototype,r),o&&d(t,o),n}(r.Component);h.displayName="react-i18next-provider",h.propTypes={className:i.a.string,value:i.a.string,onChange:i.a.func,children:i.a.func,resources:i.a.object.isRequired,i18nOptions:i.a.object},h.defaultProps={value:"en",onChange:a.a};n.default=h}])}));