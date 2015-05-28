/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function ContentVeil(){"use strict";function a(a){clearTimeout(q),q=setTimeout(function(){a.srcElement.className+=" tooltipon"},250)}function b(){clearTimeout(q),this.className=this.className.replace(/\s*tooltipon/g,"")}function c(a){z=null,A=null,B=0,C=0,E=!1,s.className=s.className.replace(/\s*evernoteShadowBox/g,""),r.className=s.className.replace(/\s*evernoteShadowBox/g,""),a||p(),u.className=u.className.replace(/\s*evernoteUsingExpandContract/g,""),v.className=v.className.replace(/s*evernoteUsingExpandContract/g,""),n("embed"),d()}function d(){r.style.height=document.body.scrollHeight+"px",r.style.width=document.body.scrollWidth+"px",r.style.borderWidth="0"}function e(a){f(),s.style.display="none",r.style.backgroundColor=a?a:"rgba(255, 255, 255, 0.75)"}function f(){s.style.display="",r.style.backgroundColor="",r.parentNode||document.documentElement.appendChild(r)}function g(){r.parentNode&&r.parentNode.removeChild(r)}function h(){return r.parentNode?!1:!0}function i(a,b){return{top:a.top-b,left:a.left-b,bottom:a.bottom+b,right:a.right+b,width:a.width+2*b,height:a.height+2*b}}function j(a,b,c,d){z=a,A=b,B=document.body.scrollTop,C=document.body.scrollLeft,D=c,E=d,a=i(a,8);var e=a.left,f=a.top,g=a.width,h=a.height,j=r.style.width.replace("px",""),k=r.style.height.replace("px","");s.className=s.className.replace(/\s*evernoteShadowBox/g,""),r.className=s.className.replace(/\s*evernoteShadowBox/g,""),d&&(s.className+=" evernoteShadowBox",r.className+=" evernoteShadowBox"),s.style.display="block",r.style.borderLeftWidth=Math.max(e,0)+"px",r.style.borderTopWidth=Math.max(f,0)+"px",r.style.borderRightWidth=Math.max(j-e-g,0)+"px",r.style.borderBottomWidth=Math.max(k-f-h,0)+"px"}function k(a,b,c){j(a,b,!0,c)}function l(a,b,d,e){var g=contentPreview.computeDescendantBoundingBox(a);g?(c(e),j(g,a,!0,d),b&&a.scrollIntoView(!0),m("embed",a),u.className+=" evernoteUsingExpandContract",g.height>window.innerHeight?v.className+=" evernoteUsingExpandContract":v.className=v.className.replace(/\s*evernoteUsingExpandContract/g,""),f()):log.warn("Couldn't create rectangle from element: "+a.cloneNode(!1).outerHTML)}function m(a,b){for(var c=document.getElementsByTagName(a),d=0;d<c.length;d++)c[d].enSavedVisibility=c[d].style.visibility,c[d].style.visibility="hidden";n(a,b)}function n(a,b){b||(b=document);for(var c=b.getElementsByTagName(a),d=0;d<c.length;d++)"undefined"!=typeof c[d].enSavedVisibility&&(c[d].style.visibility=c[d].enSavedVisibility,delete c[d].enSavedVisibility)}function o(){return r}function p(a){t.innerText=a?1==a?Browser.i18n.getMessage("oneMorePageFound"):Browser.i18n.getMessage("morePagesFound",[a]):"",t.scrollIntoView(!0)}var q,r=document.createElement("div");r.id="evernoteContentVeil";var s=document.createElement("div");s.id="evernoteInnerBox";var t=document.createElement("div");t.id="evernotePageCounter",r.appendChild(t),r.appendChild(s);for(var u,v,w=0;2>w;w++){var x=document.createElement("div"),y=document.createElement("div");x.className="evernoteArticleExpand",y.className="evernoteArticleContract",x.setAttribute("tooltip",Browser.i18n.getMessage("expandArticleTooltip")),y.setAttribute("tooltip",Browser.i18n.getMessage("contractArticleTooltip")),x.addEventListener("click",function(){contentPreview.expandPreview()}),y.addEventListener("click",function(){contentPreview.contractPreview()}),x.addEventListener("mousemove",a),x.addEventListener("mouseout",b),y.addEventListener("mousemove",a),y.addEventListener("mouseout",b),0==w?(u=document.createElement("div"),u.className="evernoteExpandContract evernoteUsingExpandContract",u.appendChild(x),u.appendChild(y),r.appendChild(u)):(v=document.createElement("div"),v.id="bottomExpandContract",v.className="evernoteExpandContract",v.appendChild(x),v.appendChild(y),r.appendChild(v))}var z=null,A=null,B=0,C=0,D=!1,E=!1;window.addEventListener("scroll",function(){if(z&&!D){var a={top:z.top,bottom:z.bottom,left:z.left,right:z.right,width:z.width,height:z.height},b=document.body.scrollTop-B,c=document.body.scrollLeft-C;if(!b&&!c)return;a.top-=b,a.bottom-=b,a.left-=c,a.right-=c,d(),j(a,A)}}),window.addEventListener("resize",function(){if(A){var a=contentPreview.computeDescendantBoundingBox(A);a&&(d(),E?j(a,A,!0,!0):j(a,A,!0,!1))}}),window.addEventListener("DOMSubtreeModified",function(a){if(A&&A.contains(a.srcElement)){var b=contentPreview.computeDescendantBoundingBox(A);b&&(d(),E?j(b,A,!0,!0):j(b,A,!0,!1))}}),this.reset=c,this.show=f,this.gray=e,this.getElement=o,this.hide=g,this.isHidden=h,this.revealRect=j,this.revealStaticRect=k,this.outlineElement=l,this.expandRect=i,this.setPageCount=p,Object.preventExtensions(this)}