!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},t=e.parcelRequireb9d4;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){l[e]=i},e.parcelRequireb9d4=t);var n=t("3nKWv"),r=t("4Nugj"),s=t("1lbol"),o=t("6f6o8");t("1xRtO");let a=JSON.parse(localStorage.getItem(s.WATCHSTORAGE_KEY))||[],c=JSON.parse(localStorage.getItem(s.QUEUESTORAGE_KEY))||[];function d(){if(0===a.length)return r.gallery.innerHTML="",void r.emptyGallery.classList.remove("disguise");r.gallery.innerHTML="",r.watchedChoice.classList.add("chosen"),r.queueChoice.classList.remove("chosen"),r.emptyGallery.classList.add("disguise"),u(a)}function u(e){try{e.map((e=>{const i=parseInt(e);return(0,n.fetchSearchFilmById)(i).then(o.renderWachLib)}))}catch(e){console.log(e)}}0===a.length?r.emptyGallery.classList.remove("disguise"):(r.gallery.innerHTML="",d()),r.watchedChoice.addEventListener("click",d),r.queueChoice.addEventListener("click",(function(){if(0===c.length)return r.gallery.innerHTML="",void r.emptyGallery.classList.remove("disguise");r.gallery.innerHTML="",r.queueChoice.classList.add("chosen"),r.watchedChoice.classList.remove("chosen"),r.emptyGallery.classList.add("disguise"),u(c)}))}();
//# sourceMappingURL=myLib.8e92d75b.js.map