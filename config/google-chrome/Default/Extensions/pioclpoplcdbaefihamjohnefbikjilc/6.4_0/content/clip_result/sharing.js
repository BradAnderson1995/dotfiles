/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function copyText(){Browser.sendToExtension({name:"copyText",text:shareLink.value})}function doneSharing(a){"linkedin"===shareType?document.location.href="http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(a.url)+"&title="+title:"weibo"===shareType?document.location.href="http://service.weibo.com/share/share.php?url="+encodeURIComponent(a.url)+"&title="+title+"&pic="+encodeURIComponent(a.url+"/thm/note/"+noteGuid):"facebook"===shareType?document.location.href="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(a.url):"twitter"===shareType?document.location.href="https://twitter.com/intent/tweet?text="+title+"&url="+encodeURIComponent(a.url):"gplus"===shareType?document.location.href="https://plus.google.com/share?url="+encodeURIComponent(a.url):"url"===shareType&&(document.body.classList.add("url"),shareLink.value=a.url)}function emailNote(){if(!send.classList.contains("disabled")){for(var a=recipients.value.split(/\s*,\s*/),b=0;b<a.length;b++)""===a[b].trim()&&a.splice(b,1);Browser.sendToExtension({name:"emailNote",message:message.value,noteGuid:noteGuid,recipients:a,token:token,shared:"true"===shared?!0:!1}),Browser.sendToExtension({name:"trackEvent",category:"Share",action:"email_completed",label:message.value.trim()?"added_message":"no_message",value:a.length}),window.close()}}function handleRecipientsInput(){showAutocomplete();for(var a=recipients.value.split(/\s*,\s*/),b=new RegExp(EDAM_EMAIL_REGEX),c=!0,d=0;d<a.length;d++)if(""!==a[d]){if(!b.test(a[d]))return send.classList.add("disabled"),void send.classList.remove("green");c=!1}c?(send.classList.add("disabled"),send.classList.remove("green")):(send.classList.remove("disabled"),send.classList.add("green"))}function receiveContacts(a){if(a.count===findContactsCount){contacts.innerHTML="";for(var b=0;b<a.contacts.length;b++){var c=document.createElement("div");c.classList.add("contact"),c.innerText=a.contacts[b].name?a.contacts[b].name+" ("+a.contacts[b].email+")":a.contacts[b].email,c.setAttribute("email",a.contacts[b].email),c.addEventListener("click",function(){var a=recipients.value.lastIndexOf(",",recipients.selectionStart-1),b=recipients.value.indexOf(",",recipients.selectionStart-1);0>b&&(b=recipients.value.length),recipients.value=recipients.value.substring(0,a+1)+this.getAttribute("email")+","+recipients.value.substring(b+1),handleRecipientsInput.call(recipients),recipients.focus()}),contacts.appendChild(c)}}}function showAutocomplete(){clearTimeout(autoCompleteTimeout);var a=recipients.value.lastIndexOf(",",recipients.selectionStart-1),b=recipients.value.indexOf(",",recipients.selectionStart-1);0>b&&(b=recipients.value.length);var c=recipients.value.slice(a+1,b);findContactsCount++,c.trim()?autoCompleteTimeout=setTimeout(function(a){return function(){Browser.sendToExtension({name:"findContacts",prefix:a,count:findContactsCount})}}(c.trim()),300):contacts.innerHTML=""}function urlCopied(a){a.copied?document.body.classList.add("urlCopied"):document.body.classList.remove("urlCopied")}var noteGuid=decodeURIComponent(/guid=([^&]+)/.exec(document.location.search)[1]),shareType=/shareType=([^&]+)/.exec(document.location.search)[1],title=/title=([^&]+)/.exec(document.location.search)[1],token=decodeURIComponent(/token=([^&]+)/.exec(document.location.search)[1]),shared=/shared=([^&]+)/.exec(document.location.search)[1],recipients,contacts,message,send,shareLink,copy,autoCompleteTimeout,findContactsCount=0;window.addEventListener("DOMContentLoaded",function(){if(document.body.classList.add(shareType),recipients=document.getElementById("recipients"),contacts=document.getElementById("contacts"),message=document.getElementById("message"),send=document.getElementById("send"),shareLink=document.getElementById("shareLink"),copy=document.getElementById("copy"),GlobalUtils.localize(document.documentElement),document.getElementById("title").innerText=decodeURIComponent(title),recipients.placeholder=Browser.i18n.getMessage("enterEmailAddresses"),message.placeholder=Browser.i18n.getMessage("addAMessage"),recipients.addEventListener("input",handleRecipientsInput),send.addEventListener("click",emailNote),shareLink.addEventListener("focus",function(){this.select()}),shareLink.addEventListener("mouseup",function(a){a.preventDefault()}),shareLink.addEventListener("copy",function(){document.body.classList.add("urlCopied")}),copy.addEventListener("click",copyText),SAFARI){var a=parseInt(/width=([^&]+)/.exec(document.location.search)[1]),b=parseInt(/height=([^&]+)/.exec(document.location.search)[1]);window.resizeTo(window.outerWidth-window.innerWidth+a,window.outerHeight-window.innerHeight+b),copy.style.display="none"}"email"!==shareType&&Browser.sendToExtension({name:"shareNote",guid:noteGuid,shareType:shareType,token:token})}),Browser.addMessageHandlers({sh_complete:doneSharing,sh_receiveContacts:receiveContacts,sh_urlCopied:urlCopied});