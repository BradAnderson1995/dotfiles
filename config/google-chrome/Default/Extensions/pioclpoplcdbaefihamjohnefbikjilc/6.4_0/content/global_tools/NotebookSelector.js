/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function NotebookSelector(a,b,c){"use strict";function d(a){var c=document.createElement("div");c.classList.add("nbNotebook");var d=document.createElement("span");d.innerText=a.name;for(var e=a.name.split(/\s+/),f=0;f<e.length;f++)w.insert(e[f],c),CommonSelector.SPECIAL_CHAR_REGEX.test(e[f])&&w.insert(e[f].replace(CommonSelector.SPECIAL_CHAR_REGEX,""),c);if(c.appendChild(d),a.owner){var g=document.createElement("span");g.classList.add("nbNotebookOwner"),g.innerText=" ("+a.owner+")",c.appendChild(g)}return a.type===GlobalUtils.NOTEBOOK_TYPE_LINKED?(c.classList.add("nbLinkedNotebook"),c.setAttribute("globalId",a.globalId),c.setAttribute("shardId",a.shardId)):a.type===GlobalUtils.NOTEBOOK_TYPE_BUSINESS&&c.classList.add("nbBusinessNotebook"),u(c),n(c)||c.classList.add("nbHidden"),a.noShareNotes&&c.setAttribute("noShareNotes",""),c.addEventListener("click",function(){s(this),b({userSelected:!0}),t()}),c.addEventListener("mouseover",function(){for(var a=C.querySelectorAll(".nbHover"),b=0;b<a.length;b++)a[b].classList.remove("nbHover");this.classList.add("nbHover")}),c.title=c.innerText,c.setAttribute("guid",a.guid),a.visibleToOthers&&c.setAttribute("visibleToOthers",""),a.defaultNotebook&&c.setAttribute("default",""),l(c,a.stack),c}function e(a){var b=document.createElement("div");b.classList.add("nbStack");var c=document.createElement("h3");return c.innerText=a,c.title=c.innerText,b.appendChild(c),l(b),b}function f(a,b,c,d,e){for(var f=e-1,g=a.toLowerCase();f>=d;){for(var h=d+Math.floor((f-d)/2),i=c[h],j=0;j<(b?b.length:0);j++)i=i[b[j]];if(g<i.innerText.toLowerCase())f=h-1;else{if(!(g>i.innerText.toLowerCase()))return h;d=h+1}}return-1}function g(){var b=a.classList.contains("nbOpen");return a.classList.remove("nbOpen"),B.value="",r(),c(),b}function h(b){return a.contains(b)}function i(a){for(var b=0;b<C.children.length;b++)if(C.children[b].classList.contains("nbNotebook")){if(C.children[b].getAttribute("guid")===a)return C.children[b]}else if(C.children[b].classList.contains("nbStack"))for(var c=0;c<C.children[b].children.length;c++)if(C.children[b].children[c].getAttribute("guid")===a)return C.children[b].children[c];return null}function j(){var a=GlobalUtils.NOTEBOOK_TYPE_PERSONAL;return y.classList.contains("nbSelectedLinked")?a=GlobalUtils.NOTEBOOK_TYPE_LINKED:y.classList.contains("nbSelectedBusiness")&&(a=GlobalUtils.NOTEBOOK_TYPE_BUSINESS),{defaultNotebook:y.hasAttribute("default"),globalId:y.getAttribute("globalId"),guid:y.getAttribute("guid"),name:y.innerText,noShareNotes:y.hasAttribute("noShareNotes"),shardId:y.getAttribute("shardId"),type:a}}function k(a){if("Enter"===a.keyIdentifier){var c=C.querySelector(".nbHover");c&&(s(c),b({userSelected:!0}),t())}}function l(a,b){function c(a){return a.classList.contains("nbStack")?a.firstElementChild.innerText:a.classList.contains("nbNotebook")?a.innerText:void 0}var d=C;if(b){var g=C.querySelectorAll(".nbStack");d=g[f(b,["firstElementChild"],g,0,g.length)]||C,d===C&&(d=e(b))}b?CommonSelector.binaryInsert(d,c,a,1):CommonSelector.binaryInsert(d,c,a)}function m(a){a?y.classList.remove("nbLoading"):y.classList.add("nbLoading")}function n(a){for(var b=0;b<x.length;b++)if(x[b].indexOf(a)<0)return!1;return!0}function o(a){function b(a,c){var d=a[c];return d&&d.classList.contains("nbStack")?d="nextElementSibling"===c?d.children[1]:d.lastElementChild:d&&d.parentNode.classList.contains("nbStack")&&d===d.parentNode.children[0]?d=b(d.parentNode,c):!d&&a.parentNode.classList.contains("nbStack")&&(d=b(a.parentNode,c)),d}if(["Up","Down"].indexOf(a.keyIdentifier)>=0){var c="Up"===a.keyIdentifier?"previousElementSibling":"nextElementSibling",d=C.querySelector(".nbHover")||v;if(d){for(var e=b(d,c);e&&e.classList.contains("nbHidden");)e=b(e,c);e&&!e.classList.contains("nbHidden")&&(d.classList.remove("nbHover"),e.classList.add("nbHover"),e.scrollIntoViewIfNeeded())}a.preventDefault()}}function p(){a.classList.add("nbOpen"),B.focus(),setTimeout(function(){v.scrollIntoViewIfNeeded()},50),c()}function q(){v=null,w=new Trie,x=[],B.value="",C.innerHTML=""}function r(){for(var a=C.querySelectorAll(".nbNotebook.nbHover"),b=0;b<a.length;b++)a[b].classList.remove("nbHover");var c=B.value.trim();if(c){c=c.split(/\s+/),x=[];for(var b=0;b<c.length;b++){for(var d=w.getMatching(c[b]),e=[],f=0;f<d.length;f++)e=e.concat(d[f][1]);x.push(e)}for(var g=C.querySelectorAll(".nbNotebook"),b=0;b<g.length;b++)n(g[b])?g[b].classList.remove("nbHidden"):g[b].classList.add("nbHidden");C.classList.add("nbSearchOn");var h=C.querySelector(".nbNotebook:not(.nbHidden)");h&&h.classList.add("nbHover")}else{for(var i=C.querySelectorAll(".nbHidden"),b=0;b<i.length;b++)i[b].classList.remove("nbHidden");C.classList.remove("nbSearchOn")}}function s(a){v&&v.classList.remove("nbSelectedNotebook"),a.classList.add("nbSelectedNotebook"),v=a,y.innerText=a.innerText,y.title=y.innerText,y.setAttribute("guid",v.getAttribute("guid")),v.classList.contains("nbBusinessNotebook")?(y.classList.remove("nbSelectedLinked"),y.classList.add("nbSelectedBusiness"),y.removeAttribute("globalId"),y.removeAttribute("shardId"),b({notebookType:GlobalUtils.NOTEBOOK_TYPE_BUSINESS})):v.classList.contains("nbLinkedNotebook")?(y.classList.remove("nbSelectedBusiness"),y.classList.add("nbSelectedLinked"),y.setAttribute("globalId",v.getAttribute("globalId")),y.setAttribute("shardId",v.getAttribute("shardId")),b({notebookType:GlobalUtils.NOTEBOOK_TYPE_LINKED})):(y.classList.remove("nbSelectedBusiness"),y.classList.remove("nbSelectedLinked"),y.removeAttribute("globalId"),y.removeAttribute("shardId"),b({notebookType:GlobalUtils.NOTEBOOK_TYPE_PERSONAL})),v.hasAttribute("noShareNotes")?y.setAttribute("noShareNotes",""):y.removeAttribute("noShareNotes"),v.hasAttribute("default")?y.setAttribute("default",""):y.removeAttribute("default")}function t(){a.classList.contains("nbOpen")?g():p()}function u(a){var b=B.value.trim();if(b){b=b.split(/\s+/);for(var c=0;c<b.length;c++)new RegExp("(?:\\s|^)"+b[c],"i").test(a.firstElementChild.innerText)&&(x[c]||x.push([]),x[c].push(a))}}var v,w=new Trie,x=[],y=document.createElement("div"),z=document.createElement("div"),A=document.createElement("div"),B=document.createElement("input"),C=document.createElement("div"),D=document.createElement("div");a.classList.add("nbContainer"),y.classList.add("nbSelected"),z.classList.add("nbDropdown"),B.classList.add("nbSearchInput"),C.classList.add("nbList"),D.classList.add("nbInputFocuser"),B.placeholder=Browser.i18n.getMessage("findANotebook"),B.tabIndex=2,D.tabIndex=1,a.appendChild(y),A.appendChild(B),z.appendChild(A),z.appendChild(C),a.appendChild(z),a.appendChild(D),y.addEventListener("click",function(){t()}),B.addEventListener("input",r),B.addEventListener("keydown",o),B.addEventListener("keyup",k),D.addEventListener("focus",p),this.addNotebook=d,this.close=g,this.contains=h,this.findNotebookByGuid=i,this.getSelected=j,this.markStatus=m,this.open=p,this.reset=q,this.select=s,this.__defineGetter__("height",function(){return z.offsetTop+z.offsetHeight}),Object.preventExtensions(this)}Object.preventExtensions(NotebookSelector);