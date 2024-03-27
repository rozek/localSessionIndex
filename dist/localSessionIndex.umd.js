!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).localSessionIndex={})}(this,function(e){function n(e){var n=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);if(null==n)throw new Error(e);var t=new Error(n[2]);throw t.name=n[1],t}function t(e){return"string"==typeof e||e instanceof String}var r=/^\s*$/;function i(e){return("string"==typeof e||e instanceof String)&&!r.test(e.valueOf())}var o=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function s(e){return function(e,n){return("string"==typeof e||e instanceof String)&&n.test(e.valueOf())}(e,o)}var a=!1;function u(e,t,r){var i=function(i,o){return function(e,t,r,i,o){if(null==t){if(i)return t;n("MissingArgument: no ".concat(g(e)," given"))}else if(r(t))switch(!0){case t instanceof Boolean:case t instanceof Number:case t instanceof String:return t.valueOf();default:return t}else n("InvalidArgument: the given ".concat(g(e)," is no valid ").concat(g(o)))}(i,o,e,t,r)},o=e.name;return null!=o&&/^ValueIs/.test(o)?function(e,t){if(null==e&&n("MissingArgument: no function given"),"function"!=typeof e&&n("InvalidArgument: the given 1st Argument is not a JavaScript function"),null==t&&n("MissingArgument: no desired name given"),"string"==typeof t||t instanceof String||n("InvalidArgument: the given desired name is not a string"),e.name===t)return e;try{if(Object.defineProperty(e,"name",{value:t}),e.name===t)return e}catch(e){}return new Function("originalFunction","return function "+t+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(e)}(i,o.replace(/^ValueIs/,t?"allow":"expect")):i}var c=/*#__PURE__*/u(t,a,"literal string"),l=/*#__PURE__*/u(i,a,"non-empty literal string"),f=/*#__PURE__*/u(s,a,"single line of text");function g(e){return e.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,function(e){return"\\"===e?"\\\\":e}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var n=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}})}function m(e){return window.automerge.isValidAutomergeUrl(e)}var d=u(m,!0,"automerge session URL"),v=d,p=u(m,a,"automerge session URL"),x=p,h=/*#__PURE__*/function(){function e(){this._Index=Object.create(null)}var t=e.prototype;return t.get=function(e){f("session name",e),l("session name",e);var n=this._Index[e];return null==n?void 0:"automerge:"+n},t.set=function(e,t){f("session name",e),l("session name",e),p("session URL",t),""===e.trim()&&n("Invalidargument: the given session name is empty"),this._Index[e]=t.replace("automerge:","")},t.delete=function(e){f("session name",e),l("session name",e),delete this._Index[e]},t.NameList=function(){var e=[];for(var n in this._Index)e.push(n);return e},t.import=function(e){if(c("index serialization",e),""!==(e=e.trim())){var t;try{t=JSON.parse(e)}catch(e){return void n("InvalidArgument: the given index serialization is no valid JSON string")}for(var r in t){var i=t[r];m(r)&&s(i)&&""!==i.trim()&&(this._Index[r]=i)}}},t.export=function(){return JSON.stringify(this._Index)},t.preserve=function(){localStorage.setItem("Automerge Session Index",JSON.stringify(this._Index))},t.restore=function(){this._Index=Object.create(null);var e=localStorage.getItem("Automerge Session Index");if(null!=e){var n;try{n=JSON.parse(e)}catch(e){return void console.warn('localStorage["Automerge Session Index"] is broken')}for(var t in n){var r=n[t];m(t)&&s(r)&&""!==r.trim()&&(this._Index[t]=r)}}},e}();e.ValueIsAutomergeURL=m,e.allowAutomergeURL=d,e.allowedAutomergeURL=v,e.expectAutomergeURL=p,e.expectedAutomergeURL=x,e.localSessionIndex=h});
//# sourceMappingURL=localSessionIndex.umd.js.map
