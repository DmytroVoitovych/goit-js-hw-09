var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequire7bc7;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=l);var i=l("iQIUW");const n=document.querySelector('[type="submit"]'),r=document.querySelector('[name="step"]'),a=document.querySelector('[name="delay"]'),u=document.querySelector('[name="amount"]');n.addEventListener("click",(()=>{n.setAttribute("disabled","disabled"),setTimeout((()=>n.removeAttribute("disabled")),""!=a.value&&""!=r.value?+a.value+(+r.value*+u.value+2600):+u.value+2600+400);for(let e=0;e<u.value;e+=1)setTimeout((()=>{var t,o;(t=e,o=a.value,new Promise(((e,l)=>{setTimeout((()=>{Math.random()>.3?e({position:t,delay:o}):l({position:t,delay:o})}),+o)}))).then((({position:t,delay:o})=>{const l=+o+e*+r.value,n=+t+1;console.log(`✅ Fulfilled promise ${n} in ${l}ms`),i.Notify.success(`✅ Fulfilled promise ${n} in ${l}ms`)})).catch((({position:t,delay:o})=>{const l=+o+e*+r.value,n=+t+1;console.log(`❌ Rejected promise ${n} in ${l}ms`),i.Notify.failure(`❌ Rejected promise ${n} in ${l}ms`)}))}),e*+r.value)}));n.addEventListener("click",(e=>e.preventDefault()));
//# sourceMappingURL=03-promises.0a43d665.js.map
