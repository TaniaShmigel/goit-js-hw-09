!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function r(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}t.addEventListener("click",(function(){setInterval(r,1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){var a=setInterval(r,1e3);clearInterval(a),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),console.log(a)})),t.removeAttribute("disabled"),e.removeAttribute("disabled")}();
//# sourceMappingURL=01-color-switcher.fe5bf57d.js.map