/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
!function(){function a(){window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{clearly:!0}},"*"),window.parent.postMessage({name:"setNotebook",notebook:Browser.i18n.getMessage("fleFakeNotebook")},"*");var a=document.querySelector("#clipper-tour-phase1");a.style.visibility="visible",a.style.opacity="1",a.querySelector(".next-button").addEventListener("click",b),w={event:{name:"eventDetected",type:"clearly"},action:c},Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"intro step shown",userId:0})}function b(){window.parent.postMessage({name:"eventClick",wnd:"globalTools",select:"#clearly"},"*")}function c(){w=null;var a=document.querySelector("#clipper-tour-phase1");a.querySelector(".next-button").removeEventListener("click",b),a.style.opacity="0",window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{}},"*"),document.querySelector("#clipper-tour-phase2").style.visibility="visible",w={event:{name:"taskFinished",type:"clearly"},action:d}}function d(){w=null,document.querySelector("#clipper-tour-phase1").style.visibility="hidden",e()}function e(){window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{arrow:!0,screenshot:!0}},"*");var a=document.querySelector("#clipper-tour-phase2");a.style.visibility="visible",a.style.opacity="1",a.querySelector(".next-button").addEventListener("click",f),w={event:{name:"eventDetected",type:"arrow"},action:g},Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"screenshot step shown",userId:0})}function f(){window.parent.postMessage({name:"eventClick",wnd:"globalTools",select:"#screenshot"},"*")}function g(){w=null;var a=document.querySelector("#clipper-tour-phase2");a.querySelector(".next-button").removeEventListener("click",f),a.style.opacity="0",window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{}},"*"),w={event:{name:"taskFinished",type:"screenshot"},action:h}}function h(){document.querySelector("#clipper-tour-phase2").style.visibility="hidden",w=null,i()}function i(){window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{arrow:!0,text:!0,line:!0,ellipse:!0,roundedRectangle:!0,rectangle:!0,stampReject:!0,stampExclaim:!0,stampQuestion:!0,stampAccept:!0,stampPerfect:!0,pixelate:!0,highlighter:!0,marker:!0}},"*"),window.parent.postMessage({name:"fleMarkUp"},"*"),w={event:{name:"taskFinished",type:"markup"},action:j},Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"markup step shown",userId:0})}function j(){w=null,window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{shareButton:!0}},"*");var a=document.querySelector("#clipper-tour-phase4");a.style.visibility="visible",a.style.opacity="1",a.querySelector(".next-button").addEventListener("click",k),window.parent.postMessage({name:"createTag",tagName:Browser.i18n.getMessage("fleFakeTag1")},"*"),window.parent.postMessage({name:"createTag",tagName:Browser.i18n.getMessage("fleFakeTag2")},"*"),w={event:{name:"eventDetected",type:"shareButton"},action:l},Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"sharing step shown",userId:0})}function k(){window.parent.postMessage({name:"eventClick",wnd:"globalTools",select:"#shareButton"},"*")}function l(){w=null;var a=document.querySelector("#clipper-tour-phase4");a.querySelector(".next-button").removeEventListener("click",k),a.addEventListener("webkitTransitionEnd",m),a.style.opacity="0",window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{}},"*"),document.querySelector("#clipper-tour-phase5").style.visibility="visible",Browser.sendToExtension({name:"bounce",message:{name:"doneSharing",guid:"12345",url:v}})}function m(){var a=document.querySelector("#clipper-tour-phase4");a.removeEventListener("webkitTransitionEnd",m),a.style.visibility="hidden",n()}function n(){var a=document.querySelector("#clipper-tour-phase5");a.querySelector(".finish-button").addEventListener("click",o),a.style.opacity="1",Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"social sharing step shown",userId:0})}function o(){var a=document.querySelector("#clipper-tour-phase5");a.querySelector(".finish-button").removeEventListener("click",o),a.addEventListener("webkitTransitionEnd",p),a.style.opacity="0",document.querySelector("#clipper-tour-phase6").style.visibility="visible"}function p(){var a=document.querySelector("#clipper-tour-phase5");a.removeEventListener("webkitTransitionEnd",p),a.style.visibility="hidden",q()}function q(){{var a=document.querySelector("#clipper-tour-phase6"),b=Browser.i18n.getMessage("fleSharedTitle");"http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(v)+"&title="+encodeURIComponent(b)}a.querySelector(".done-button").addEventListener("click",r),a.querySelector(".facebook").addEventListener("click",function(){Browser.sendToExtension({name:"main_openWindow",width:626,height:436,url:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(v),type:"popup"}),Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"facebook clickthru",userId:0})}),a.querySelector(".twitter").addEventListener("click",function(){Browser.sendToExtension({name:"main_openWindow",width:550,height:420,url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(b)+"&url="+encodeURIComponent(v),type:"popup"}),Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"twitter clickthru",userId:0})}),a.querySelector(".linkedin").addEventListener("click",function(){Browser.sendToExtension({name:"main_openWindow",width:520,height:570,url:"http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(v)+"&title="+encodeURIComponent(b),type:"popup"}),Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"linkedin clickthru",userId:0})}),a.style.opacity="1",Browser.sendToExtension({name:"trackEvent",category:"FLE",action:"last step shown",userId:0})}function r(){var a=document.querySelector("#clipper-tour-phase6");a.querySelector(".done-button").removeEventListener("click",r),a.addEventListener("webkitTransitionEnd",s),a.style.opacity="0"}function s(){var a=document.querySelector("#clipper-tour-phase6");a.removeEventListener("webkitTransitionEnd",p),window.parent.postMessage({name:"redirect"},"*")}function t(){a()}var u,v,w;window.addEventListener("message",function(a){return"getLocationReply"===a.data.name?(u=a.data.location,void(v=u.protocol+"//"+u.host+u.pathname)):void(w&&w.event.name===a.data.name&&"undefined"!=typeof a.data.type&&w.event.type===a.data.type&&w.action(a.data))}),window.addEventListener("DOMContentLoaded",function(){GlobalUtils.localize(document.body),window.parent.postMessage({name:"eventFilter",wnd:"globalTools",allowed:{}},"*"),window.parent.postMessage({name:"getLocation"},"*"),t()})}();