!function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}}(),$modal=function(t){var e,n,o,a=!1,d=!1;function l(){a=!0,e.classList.remove("modal__show"),e.classList.add("modal__hiding"),setTimeout((function(){e.classList.remove("modal__hiding"),a=!1}),200),document.dispatchEvent(o)}function s(t){"modal"===t.target.dataset.dismiss&&l()}return e=function(t){var e,n=document.createElement("div"),o="";if(n.classList.add("modal"),e=(e='<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>'.replace("{{title}}",t.title||"Новое окно")).replace("{{content}}",t.content||""),t.footerButtons){for(var a=0,d=t.footerButtons.length;a<d;a++){var l='<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>'.replace("{{button_class}}",t.footerButtons[a].class);o+=l=(l=l.replace("{{button_handler}}",t.footerButtons[a].handler)).replace("{{button_text}}",t.footerButtons[a].text)}o='<div class="modal__footer">{{buttons}}</div>'.replace("{{buttons}}",o)}return e=e.replace("{{footer}}",o),n.innerHTML=e,document.body.appendChild(n),n}(t||{}),e.addEventListener("click",s),n=new CustomEvent("show.modal",{detail:e}),o=new CustomEvent("hide.modal",{detail:e}),{show:function(){d||a||(e.classList.add("modal__show"),document.dispatchEvent(n))},hide:l,destroy:function(){e.parentElement.removeChild(e),e.removeEventListener("click",s),d=!0},setContent:function(t){e.querySelector('[data-modal="content"]').innerHTML=t},setTitle:function(t){e.querySelector('[data-modal="title"]').innerHTML=t}}};