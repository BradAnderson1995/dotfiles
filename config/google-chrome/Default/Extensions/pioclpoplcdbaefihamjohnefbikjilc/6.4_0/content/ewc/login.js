/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function isAuthenticated(a){if(a.baseUrl===location.protocol+"//"+location.hostname&&a.auth&&a.auth.authenticationToken){var b=new XMLHttpRequest;b.open("GET",location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+"/SetAuthToken.action?auth="+encodeURIComponent(a.auth.authenticationToken)+"&targetUrl="+encodeURIComponent("/test.jsp")),b.onreadystatechange=function(){4===this.readyState&&continueToEWC()},b.send()}else continueToEWC()}function continueToEWC(){SAFARI?document.getElementById("login_form").submit():location.reload()}/^https:\/\/(?:www|stage|stage-china|app)\.(evernote|yinxiang)\.com\/ClipNCiteLogin\.action/i.test(location.href)&&/^https:\/\/(?:www|stage|stage-china|app)\.(evernote|yinxiang)\.com\/ClipNCite\.action/i.test(document.referrer)&&window===window.parent&&(window.stop(),Browser.addMessageHandlers({ewc_isAuthenticated:isAuthenticated}),Browser.sendToExtension({name:"main_isAuthenticated",type:"ewc"}));