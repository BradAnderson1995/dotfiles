/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function SelectWithLabel(a){"use strict";function b(a){f[a.id]=a;var b=document.createElement("div");b.classList.add("swl_option"),b.textContent=a.name,b.dataset.id=a.id,b.addEventListener("click",function(){e(Array.prototype.indexOf.call(j.children,this)),h.classList.remove("open")}),j.appendChild(b)}function c(){return f[i.dataset.id]}function d(a){g.textContent=a}function e(a){var b=j.children[a].dataset.id;i.textContent=f[b].name,i.dataset.id=b}var f={},g=document.createElement("div");g.classList.add("swl_label");var h=document.createElement("div");h.classList.add("swl_select");var i=document.createElement("div");i.classList.add("swl_selected"),i.addEventListener("click",function(){h.classList.toggle("open")});var j=document.createElement("div");j.classList.add("swl_allOptions"),h.appendChild(i),h.appendChild(j),a.appendChild(h),a.appendChild(g),window.addEventListener("click",function(a){h.contains(a.srcElement)||h.classList.remove("open")}),this.addSelectOption=b,this.getSelected=c,this.setLabelName=d,this.setSelected=e,Object.preventExtensions(this)}Object.preventExtensions(SelectWithLabel);