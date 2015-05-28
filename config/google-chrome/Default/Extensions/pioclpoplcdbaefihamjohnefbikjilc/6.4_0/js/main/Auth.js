/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function Auth(){function a(){var a=Persistent.get("savedAuthInfo");if(x={},y="",!a||!a.currentUser||!a.userInfo)return void Persistent.set("savedAuthInfo",{});y=a.currentUser;for(var c in a.userInfo)try{x[c]=a.userInfo[c]}catch(d){log.warn("Couldn't restore credentials for user "+c)}if(!x[y]){log.warn("No entry for saved user, picking another.");for(var c in x){y=c,b();break}}}function b(){var a={};for(var b in x){var c=JSON.parse(JSON.stringify(x[b]));a[b]=c}Persistent.set("savedAuthInfo",{userInfo:a,currentUser:y})}function c(a,b,c){c&&A.push(c),C||(C=!0,SAFARI?q().authenticateLongSession(a,b,"en-safari-clipper-xauth-new","1fbffc8cf53bd605",Persistent.get("deviceID"),t(navigator.userAgent),!0,g,f):OPERA?q().authenticateLongSession(a,b,"en-opera-clipper-xauth-new","bda9ae45efd276dc",Persistent.get("deviceID"),t(navigator.userAgent),!0,g,f):YANDEX?q().authenticateLongSession(a,b,"en-yandex-clipper-xauth-new","6281f15aacf2b24a",Persistent.get("deviceID"),t(navigator.userAgent),!0,g,f):q().authenticateLongSession(a,b,"en-chrome-clipper-xauth-new","57542b7c39ab82e9",Persistent.get("deviceID"),t(navigator.userAgent),!0,g,f),B=setTimeout(d,3e4))}function d(){for(var a=0;a<A.length;a++)e(a,{authenticationToken:null,error:"TIMEOUT"});A=[],C=!1}function e(a,b){try{A[a](b)}catch(c){log.warn("Got error running login callback: "+c)}}function f(a){log.warn(w.isThriftError(a)?"failed login: "+a.name+JSON.stringify(a):"failed login because of network problem");for(var b=j(a),c=0;c<A.length;c++)e(c,{error:b});A=[],C=!1}function g(a){if(C)if(B&&clearTimeout(B),a.secondFactorRequired){for(var c=0;c<A.length;c++)e(c,{authenticationToken:a.authenticationToken,secondFactorDeliveryHint:a.secondFactorDeliveryHint,expiration:(new Date).getTime()-a.currentTime+a.expiration});A=[],C=!1}else if(a.user)if(z=(new Date).getTime()-a.currentTime,y=a.user.id.toString(),x[y]={},x[y].username=a.user.username,x[y].authenticationToken=a.authenticationToken,x[y].expiration=a.expiration,x[y].basic=a.user.serviceLevel===ServiceLevel.BASIC,x[y].plus=a.user.serviceLevel===ServiceLevel.PLUS,x[y].premium=a.user.serviceLevel===ServiceLevel.PREMIUM,x[y].shardId=a.user.shardId,x[y].fullName=a.user.name||a.user.username,x[y].email=a.user.email,x[y].quota=a.user.accountLimits.uploadLimit,x[y].noteSizeMax=a.user.accountLimits.noteSizeMax,x[y].monthEnd=a.user.accounting.uploadLimitEnd,x[y].version=Auth.VERSION,a.user.businessUserInfo)x[y].businessId=a.user.businessUserInfo.businessId,x[y].bizName=a.user.businessUserInfo.businessName,b(),q().authenticateToBusiness(a.authenticationToken,h,i);else{b(),w.showLoggedInState();for(var c=0;c<A.length;c++)e(c,{authenticationToken:x[y].authenticationToken,username:x[y].username,userId:y,basic:x[y].basic,plus:x[y].plus,premium:x[y].premium,fullName:x[y].fullName});A=[],C=!1}}function h(a){x[y]?(x[y].bizAuthenticationToken=a.authenticationToken,x[y].bizExpiration=a.expiration,x[y].bizShardId=a.user.shardId,x[y].bizUserId=a.user.id):log.warn("Got business login for unknown user. Discarding."),b(),w.showLoggedInState();for(var c=0;c<A.length;c++)e(c,{authenticationToken:x[y].authenticationToken,bizAuthenticationToken:x[y].bizAuthenticationToken,username:x[y].username,userId:y,basic:x[y].basic,plus:x[y].plus,premium:x[y].premium,fullName:x[y].fullName});A=[],C=!1}function i(a){if(a.errorCode===EDAMErrorCode.BUSINESS_SECURITY_LOGIN_REQUIRED&&"sso"===a.parameter){delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].bizShardId,delete x[y].bizUserId,b(),w.showLoggedInState();for(var c=0;c<A.length;c++)e(c,{sso:!0,bizName:x[y].bizName,username:x[y].username});A=[],C=!1}else f(a)}function j(a){if(!a)return"UNKNOWN";if("number"==typeof a.code){var b=a.code;switch(b){case 0:return"NETWORK";case 503:return"HTTP/503";case 490:}}if(a.errorCode===EDAMErrorCode.DATA_REQUIRED){if("password"===a.parameter)return"PASSWORD_REQUIRED";if("username"===a.parameter)return"USERNAME_REQUIRED"}else{if(a.errorCode===EDAMErrorCode.INVALID_AUTH)return"password"===a.parameter?"INVALID_PASSWORD":"username"===a.parameter?"INVALID_USERNAME":"oneTimeCode"===a.parameter?"INVALID_TWO_STEP_CODE":"INVALID_AUTH";if(a.errorCode===EDAMErrorCode.PERMISSION_DENIED)return"tooManyFailuresTryAgainLater"===a.parameter?"TOO_MANY_FAILURES":"User.active"===a.parameter?"ACCOUNT_DEACTIVATED":"oneTimeCode"===a.parameter?"INVALID_TWO_STEP_CODE":"authenticationToken"===a.parameter?"EXPIRED_AUTHENTICATION_TOKEN":"PERMISSION_DENIED";if(a.errorCode===EDAMErrorCode.AUTH_EXPIRED)return"password"===a.parameter?"EXPIRED_PASSWORD":"authenticationToken"===a.parameter?"EXPIRED_AUTHENTICATION_TOKEN":"AUTH_EXPIRED";if(a.errorCode===EDAMErrorCode.BAD_DATA_FORMAT)return"username"===a.parameter?"INVALID_USERNAME":"INVALID_AUTH"}return"UNKNOWN"}function k(a){if(!a.expiration)return!1;var b=(new Date).getTime();return b-=z,b>a.expiration-18e4?!1:!0}function l(a){if(!a.bizExpiration||!a.bizAuthenticationToken)return!1;var b=(new Date).getTime();return b-=z,b>a.bizExpiration-18e4?!1:!0}function m(a){function c(c){x[y].bizAuthenticationToken=c.authenticationToken,x[y].bizExpiration=c.expiration,x[y].bizShardId=c.user.shardId,x[y].bizUserId=c.user.id,b(),e.bizAuthenticationToken=c.authenticationToken,e.bizExpiration=c.expiration,a(e)}function d(c){w.isThriftError(c)?c.errorCode!==EDAMErrorCode.PERMISSION_DENIED||"Business"!==c.parameter&&"Business.status"!==c.parameter?c.errorCode===EDAMErrorCode.BUSINESS_SECURITY_LOGIN_REQUIRED?(delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].bizShardId,delete x[y].bizUserId,b(),a(e)):(log.error("problem refreshing business auth token: "+c.trace),n(),a(null)):(delete e.businessId,delete x[y].businessId,delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].bizName,delete x[y].bizShardId,delete x[y].bizUserId,b(),a(e)):(log.warn("network was down when trying to refresh biz auth token, but still called callback"),a(e))}var e={},f=new Bootstrapper(options.get("simulateSimplifiedChinese"),options.get("useStage"),options.get("overrideServiceURL"),options.get("secureProto"));f.bootstrap(function(b){if(!b)return void log.warn("Version out of date!");var f=s();f.authenticationToken&&k(f)?(e={username:f.username,authenticationToken:f.authenticationToken,userId:y,shardId:f.shardId,basic:f.basic,plus:f.plus,premium:f.premium,noteSizeMax:f.noteSizeMax,fullName:f.fullName,email:f.email},f.businessId?(e.businessId=f.businessId,e.bizUserId=f.bizUserId,l(f)?(e.bizAuthenticationToken=f.bizAuthenticationToken,e.bizExpiration=f.bizExpiration,a(e)):q().authenticateToBusiness(f.authenticationToken,c,d)):a(e)):a(null)},!1)}function n(a){for(;y;)o(a)}function o(a){a||q().revokeLongSession(x[y].authenticationToken,function(){},function(a){log.error("problem revoking auth token: "+a.name+JSON.stringify(a.name))}),delete x[y],y="";for(var c in x){y=c;break}b(),z=0,0==Object.keys(x).length&&w.showLoggedOutState()}function p(a){var c=s();if(c.authenticationToken){var d={authenticationToken:c.authenticationToken};c.bizAuthenticationToken?new Date+18e4>c.bizExpiration?q().authenticateToBusiness(c.authenticationToken,function(c){x[y].bizAuthenticationToken=c.authenticationToken,x[y].bizExpiration=c.expiration,x[y].bizShardId=c.user.shardId,x[y].bizUserId=c.user.id,b(),d.bizAuthenticationToken=c.authenticationToken,a(d)},function(c){w.isThriftError(c)?c.errorCode!==EDAMErrorCode.PERMISSION_DENIED||"Business"!==c.parameter&&"Business.status"!==c.parameter?c.errorCode===EDAMErrorCode.BUSINESS_SECURITY_LOGIN_REQUIRED&&"sso"===c.parameter?(delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].bizShardId,delete x[y].bizUserId,b(),a(d)):(log.error("problem refreshing business token: "+c.trace),n(),a(null)):(delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].businessId,delete x[y].bizName,delete x[y].bizShardId,delete x[y].bizUserId,b(),a(d)):(log.warn("network was down when trying to refresh biz auth token, but still called callback"),a(d))}):(d.bizAuthenticationToken=c.bizAuthenticationToken,a(d)):a(d)}else a(null)}function q(){return w.createUserStoreClient("")}function r(){return y}function s(a){a||(a=y);var b=x[a];return b?b:{}}function t(a){var b;if(/macintosh/i.test(a))b="MacOS";else if(/windows/i.test(a)){var c=a.match(/Windows NT (.+);/);if(c)switch(c[1]){case"3.1":b="Windows NT 3.1";break;case"3.5":b="Windows NT 3.5";break;case"3.51":b="Windows NT 3.51";break;case"4.0":b="Windows NT 4.0";break;case"5.0":b="Windows 2000";break;case"5.01":b="Windows 2000 SP1";break;case"5.1":b="Windows XP";break;case"5.2":b="Windows XP x64";break;case"6.0":b="Windows Vista";break;case"6.1":b="Windows 7";break;case"6.2":b="Windows 8";break;case"6.3":b="Windows 8.1";break;default:b="Windows"}else b="Windows"}else b=/linux/i.test(a)?"Linux":"Unknown Operating System";return SAFARI?"Safari ("+b+")":OPERA?"Opera ("+b+")":YANDEX?"Yandex ("+b+")":"Google Chrome ("+b+")"}function u(a,b,c){c&&A.push(c),C||(C=!0,q().completeTwoFactorAuthentication(a,b,Persistent.get("deviceID"),t(navigator.userAgent),g,f))}function v(a){a&&A.push(a),p(function(a){a?q().getUser(a.authenticationToken,function(a){if(y=a.id.toString(),x[y]){x[y].username=a.username,x[y].basic=a.serviceLevel===ServiceLevel.BASIC,x[y].plus=a.serviceLevel===ServiceLevel.PLUS,x[y].premium=a.serviceLevel===ServiceLevel.PREMIUM,x[y].shardId=a.shardId,x[y].fullName=a.name||a.username,x[y].email=a.email,x[y].quota=a.accountLimits.uploadLimit,x[y].noteSizeMax=a.accountLimits.noteSizeMax,x[y].monthEnd=a.accounting.uploadLimitEnd,x[y].version=Auth.VERSION,a.businessUserInfo?(x[y].businessId=a.businessUserInfo.businessId,x[y].bizName=a.businessUserInfo.businessName,b(),q().authenticateToBusiness(x[y].authenticationToken,h,i)):(delete x[y].businessId,delete x[y].bizAuthenticationToken,delete x[y].bizExpiration,delete x[y].bizName,b());for(var c=0;c<A.length;c++)e(c);A=[]}},function(a){log.error("error when updating user status: "+a.__proto__.name+JSON.stringify(a))}):log.error("no tokens found when trying to update user status")})}var w=Browser.extension.getBackgroundPage().extension,x={},y=null,z=0,A=[],B=0,C=!1;a(),this.getAuthTokens=p,this.isAuthenticated=m,this.login=c,this.logout=o,this.logoutAll=n,this.getCurrentUser=r,this.getUserInfo=s,this.completeTwoFactorAuthentication=u,this.updateUserStatus=v,Object.preventExtensions(this)}Auth.VERSION=1,Object.preventExtensions(Auth);