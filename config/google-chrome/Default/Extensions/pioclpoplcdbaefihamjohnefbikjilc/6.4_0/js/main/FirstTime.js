/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function FirstTime(){"use strict";function a(){var a=versionDetect.getLastVersionParsed(),b=versionDetect.getSourceVersionParsed();return a&&a[0]?b[0]>a[0]?j.UPGRADE:versionDetect.geq(b,[6,0,9])&&!versionDetect.geq(a,[6,0,9])?j.MINOR_UPGRADE:j.CURRENT:j.FIRST_TIME}function b(a){k=a,Persistent.set("userFlowState",a)}function c(){return k===i.UPGRADE||k===i.MINOR_UPGRADE}function d(a){k!=i.FIRST_TIME||n||m||g(a)}function e(a){m||(k==i.FIRST_TIME||k==i.UPGRADE?g(a):k==i.MINOR_UPGRADE&&Browser.insertJS("third_party/port.js",function(){Browser.insertJS("js/common/Browser.js",function(){Browser.insertJS("content/UINames.js",function(){Browser.insertJS("content/release_notes/inject_frame.js"),Browser.insertCSS("content/release_notes/inject_frame.css"),b(i.CURRENT),a()})})}))}function f(){return!m&&(k==i.FIRST_TIME||k==i.UPGRADE||k==i.MINOR_UPGRADE)}function g(a){var c=extension.getBootstrapInfo("marketingUrl")+"/webclipper/whats_new/";extension.msgHandlerOpenTab({url:c+"?firstlaunch"},null,function(){b(i.CURRENT),a()})}function h(){k===i.GUIDED_TOUR?b(i.CURRENT):k==i.FIRST_TIME||l==j.FIRST_TIME?b(i.FIRST_TIME):k==i.UPGRADE||l==j.UPGRADE?b(i.UPGRADE):(k==i.MINOR_UPGRADE||l==j.MINOR_UPGRADE)&&b(i.CURRENT),Persistent.set("userFlowState",k)}var i={CURRENT:"normal",FIRST_TIME:"first",UPGRADE:"upgrade",MINOR_UPGRADE:"minor"},j={CURRENT:0,UPGRADE:1,FIRST_TIME:2,MINOR_UPGRADE:3},k=Persistent.get("userFlowState")||i.CURRENT,l=a(),m=SAFARI,n=YANDEX;this.isUpgraded=c,this.msgHandlerOnAction=e,this.msgHandlerOnInit=d,this.needToShowIntro=f,this.startUp=h,Object.preventExtensions(this)}firstTime=new FirstTime;