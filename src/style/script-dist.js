const modalController=({modal:e,btnOpen:t,btnClose:o,time:n=300})=>{const l=document.querySelectorAll(t),i=document.querySelector(e);i.style.cssText=`\n    display: flex;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity ${n}ms ease-in-out;\n  `;const s=e=>{const t=e.target;(t===i||o&&t.closest(o)||"Escape"===e.code)&&(i.style.opacity=0,setTimeout((()=>{i.style.visibility="hidden"}),n),window.removeEventListener("keydown",s))},d=()=>{i.style.visibility="visible",i.style.opacity=1,window.addEventListener("keydown",s)};l.forEach((e=>{e.addEventListener("click",d)})),i.addEventListener("click",s)};modalController({modal:".modal1",btnOpen:".section__button1",btnClose:".modal__close"}),modalController({modal:".modal2",btnOpen:".section__button2",btnClose:".modal__close"});