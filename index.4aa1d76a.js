var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequireb9d4;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequireb9d4=o);var a=o("krGWQ"),r=o("1Ea6K");const i=[],l=[];function d(){JSON.parse(localStorage.getItem("list")).forEach((e=>{(0,r.renderTrandFilms)(e)}))}function c(){JSON.parse(localStorage.getItem("list")).forEach((e=>{(0,r.renderTrandFilms)(e)}))}a.modalWatchBtn.addEventListener("click",(function(e){const t="remove from watched";if(a.modalWatchBtn.textContent===t)return a.modalWatchBtn.textContent="add to watched",function(e){const t=i.indexOf(e),n=i.splice(t,1);localStorage.setItem("watched films",JSON.stringify(n))}(),void d();a.modalWatchBtn.textContent=t,i.push({data:e}),localStorage.setItem("watched films",JSON.stringify(i)),d()})),a.modalQueueBtn.addEventListener("click",(function(e){const t="remove from queue";if(a.modalQueueBtn.textContent===t)return a.modalQueueBtn.textContent="add to queue",function(e){const t=l.indexOf(e),n=l.splice(t,1);localStorage.setItem("queue",JSON.stringify(n))}(),void c();a.modalQueueBtn.textContent=t,l.push({data:e}),localStorage.setItem("queue",JSON.stringify(l)),c()}));
//# sourceMappingURL=index.4aa1d76a.js.map