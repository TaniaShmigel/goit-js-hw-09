!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc");function u(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,r=t.delay,o=t.step,c=t.amount,a=Number(r.value),f=1;f<=c.value;f++)u(f,a).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)})),a+=Number(o.value);n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.3f432b7c.js.map
