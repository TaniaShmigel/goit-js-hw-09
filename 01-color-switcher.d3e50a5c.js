const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");function d(){let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}e.addEventListener("click",(function(){setInterval(d,1e3),e.setAttribute("disabled","disabled")})),t.addEventListener("click",(function(){let o=setInterval(d,1e3);clearInterval(o),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),console.log(o)})),e.removeAttribute("disabled"),t.removeAttribute("disabled");
//# sourceMappingURL=01-color-switcher.d3e50a5c.js.map