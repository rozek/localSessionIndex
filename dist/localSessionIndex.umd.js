!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).localSessionIndex={})}(this,function(e){function n(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:n+""}function t(e){var n=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);if(null==n)throw new Error(e);var t=new Error(n[2]);throw t.name=n[1],t}function r(e){return"string"==typeof e||e instanceof String}var i=/^\s*$/;function o(e){return("string"==typeof e||e instanceof String)&&!i.test(e.valueOf())}var a=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function s(e){return function(e,n){return("string"==typeof e||e instanceof String)&&n.test(e.valueOf())}(e,a)}var u=!1;function c(e,n,r){var i=function(i,o){return function(e,n,r,i,o){if(null==n){if(i)return n;t("MissingArgument: no ".concat(m(e)," given"))}else if(r(n))switch(!0){case n instanceof Boolean:case n instanceof Number:case n instanceof String:return n.valueOf();default:return n}else t("InvalidArgument: the given ".concat(m(e)," is no valid ").concat(m(o)))}(i,o,e,n,r)},o=e.name;return null!=o&&/^ValueIs/.test(o)?function(e,n){if(null==e&&t("MissingArgument: no function given"),"function"!=typeof e&&t("InvalidArgument: the given 1st Argument is not a JavaScript function"),null==n&&t("MissingArgument: no desired name given"),"string"==typeof n||n instanceof String||t("InvalidArgument: the given desired name is not a string"),e.name===n)return e;try{if(Object.defineProperty(e,"name",{value:n}),e.name===n)return e}catch(e){}return new Function("originalFunction","return function "+n+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(e)}(i,o.replace(/^ValueIs/,n?"allow":"expect")):i}var l=/*#__PURE__*/c(r,u,"literal string"),f=/*#__PURE__*/c(o,u,"non-empty literal string"),g=/*#__PURE__*/c(s,u,"single line of text");function m(e){return e.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,function(e){return"\\"===e?"\\\\":e}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var n=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}})}function v(e){return window.automerge.isValidAutomergeUrl(e)}var d=c(v,!0,"automerge session URL"),p=d,x=c(v,u,"automerge session URL"),y=x,h=/*#__PURE__*/function(){function e(){this._Index=Object.create(null)}var r,i,o=e.prototype;return o.get=function(e){g("session name",e),f("session name",e);var n=this._Index[e];return null==n?void 0:"automerge:"+n},o.set=function(e,n){g("session name",e),f("session name",e),x("session URL",n),""===e.trim()&&t("Invalidargument: the given session name is empty"),this._Index[e]=n.replace("automerge:","")},o.delete=function(e){g("session name",e),f("session name",e),delete this._Index[e]},o.import=function(e){if(l("index serialization",e),""!==(e=e.trim())){var n;try{n=JSON.parse(e)}catch(e){return void t("InvalidArgument: the given index serialization is no valid JSON string")}for(var r in n){var i=n[r];s(r)&&""!==r.trim()&&v("automerge:"+i)&&(this._Index[r]=i)}}},o.export=function(){return JSON.stringify(this._Index)},o.preserve=function(){localStorage.setItem("Automerge Session Index",JSON.stringify(this._Index))},o.restore=function(){this._Index=Object.create(null);var e=localStorage.getItem("Automerge Session Index");if(null!=e){var n;try{n=JSON.parse(e)}catch(e){return void console.warn('localStorage["Automerge Session Index"] is broken')}for(var t in n){var r=n[t];s(t)&&""!==t.trim()&&v("automerge:"+r)&&(this._Index[t]=r)}}},r=e,(i=[{key:"NameList",get:function(){var e=[];for(var n in this._Index)e.push(n);return e},set:function(e){t('ReadOnly: the "NameList" must not be set, it will be calculated')}}])&&function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),r}();e.ValueIsAutomergeURL=v,e.allowAutomergeURL=d,e.allowedAutomergeURL=p,e.expectAutomergeURL=x,e.expectedAutomergeURL=y,e.localSessionIndex=h});
//# sourceMappingURL=localSessionIndex.umd.js.map
