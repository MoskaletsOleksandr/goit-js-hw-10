!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,s=a||f||Function("return this")(),d=Object.prototype.toString,y=Math.max,p=Math.min,g=function(){return s.Date.now()};function m(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var a=c.test(n);return a||u.test(n)?l(n.slice(2),a?2:8):r.test(n)?NaN:+n}n=function(t,n,e){var o,i,r,c,u,l,a=0,f=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,r=i;return o=i=void 0,a=n,c=t.apply(r,e)}function b(t){return a=t,u=setTimeout(j,n),f?h(t):c}function _(t){var e=t-l;return void 0===l||e>=n||e<0||s&&t-a>=r}function j(){var t=g();if(_(t))return w(t);u=setTimeout(j,function(t){var e=n-(t-l);return s?p(e,r-(t-a)):e}(t))}function w(t){return u=void 0,d&&o?h(t):(o=i=void 0,c)}function T(){var t=g(),e=_(t);if(o=arguments,i=this,l=t,e){if(void 0===u)return b(l);if(s)return u=setTimeout(j,n),h(l)}return void 0===u&&(u=setTimeout(j,n)),c}return n=v(n)||0,m(e)&&(f=!!e.leading,r=(s="maxWait"in e)?y(v(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),a=0,o=l=i=u=void 0},T.flush=function(){return void 0===u?c:w(g())},T};var h={inputEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};h.inputEl.addEventListener("input",t(n)((function(t){var n,e=t.target.value.trim();""!==e?(n=e,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(t){if(404===t.status)throw new Error(t.status);return t.json()}))).then((function(t){console.log(t),t.length>10&&console.log("Too many matches found. Please enter a more specific name."),t.length>=2&&t.length<=10&&(console.log("change list"),function(t){var n=t[0];n.name.official,n.flags.svg,h.countryListEl.innerHTML='<li class="country-list__item"></li>\n        <li class="country-list__item"></li>'}(t)),1===t.length&&(console.log("ok"),function(t){var n=t[0],e=n.name.official,o=n.flags.svg,i=n.capital[0],r=n.population,c=Object.values(n.languages).join(", ");h.countryListEl.innerHTML="<img src='".concat(o,"' width=30px alt='' class='country-info__img' />\n  <h2 class=\"country-info__title\">").concat(e,'</h2>    \n  <ul class="country-info__list">\n        <li class="country-info__item">Capital: ').concat(i,'</li>\n        <li class="country-info__item">Population: ').concat(r,'</li>\n        <li class="country-info__item">Languages: ').concat(c,"</li>\n    </ul>")}(t))})).catch((function(t){console.log("Oops, there is no country with that name"),console.log(t)})):console.log("empty")}),300))}();
//# sourceMappingURL=index.b7afeca4.js.map
