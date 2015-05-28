var ty,tyaa=tyaa||{},tya=this,tyb=function(a){return void 0!==a},tyba=function(a){a=a.split(".");for(var b=tya,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b},tyc=function(){},tyca=function(a){a.getInstance=function(){return a.hp?a.hp:a.hp=new a}},tyda=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&
"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},tyd=function(a){return"array"==tyda(a)},tyea=function(a){var b=tyda(a);return"array"==b||"object"==b&&"number"==typeof a.length},tye=function(a){return"string"==
typeof a},tyfa=function(a){return"number"==typeof a},tyf=function(a){return"function"==tyda(a)},tyg=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},tyia=function(a){return a[tyga]||(a[tyga]=++tyha)},tyga="closure_uid_"+(1E9*Math.random()>>>0),tyha=0,tyja=function(a,b,c){return a.call.apply(a.bind,arguments)},tyka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},tyh=function(a,b,c){tyh=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tyja:tyka;return tyh.apply(null,arguments)},tyla=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},tyi=Date.now||function(){return+new Date},tyna=function(a){if(tya.execScript)tya.execScript(a,
"JavaScript");else if(tya.eval)if(null==tyma&&(tya.eval("var _et_ = 1;"),"undefined"!=typeof tya._et_?(delete tya._et_,tyma=!0):tyma=!1),tyma)tya.eval(a);else{var b=tya.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}else throw Error("goog.globalEval not available");},tyma=null,tyoa=function(a,b){var c=a.split("."),d=tya;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=
c.shift());)!c.length&&tyb(b)?d[e]=b:d=d[e]?d[e]:d[e]={}},tyj=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pA=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return tyh.apply(null,c)}return tyh(this,a)};var typa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,typa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};tyj(typa,Error);typa.prototype.name="CustomError";var tyqa;var tyra=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},tysa=function(a){return/^[\s\xa0]*$/.test(a)},tyta=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")},tyua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},tyCa=function(a){if(!tyva.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tywa,"&amp;"));
-1!=a.indexOf("<")&&(a=a.replace(tyxa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(tyya,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tyza,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tyAa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tyBa,"&#0;"));return a},tywa=/&/g,tyxa=/</g,tyya=/>/g,tyza=/"/g,tyAa=/'/g,tyBa=/\x00/g,tyva=/[\x00&<>"']/,tyDa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},tyEa={"'":"\\'"},tyFa=function(a){a=String(a);if(a.quote)return a.quote();
for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=tyDa[d])){if(!(31<e&&127>e))if(d in tyEa)d=tyEa[d];else if(d in tyDa)d=tyEa[d]=tyDa[d];else{e=d;g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=tyEa[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},tyGa=function(a,b){return Array(b+1).join(a)},tyk=function(a,b){var c=tyb(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");
-1==d&&(d=c.length);return tyGa("0",Math.max(0,b-d))+c},tyHa=function(a){return Array.prototype.join.call(arguments,"")},tyIa=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^tyi()).toString(36)},tyKa=function(a,b){for(var c=0,d=tyua(String(a)).split("."),e=tyua(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=/(\d*)(\D*)/g,m=/(\d*)(\D*)/g;do{var n=l.exec(h)||["","",""],p=m.exec(k)||
["","",""];if(0==n[0].length&&0==p[0].length)break;c=tyJa(0==n[1].length?0:parseInt(n[1],10),0==p[1].length?0:parseInt(p[1],10))||tyJa(0==n[2].length,0==p[2].length)||tyJa(n[2],p[2])}while(0==c)}return c},tyJa=function(a,b){return a<b?-1:a>b?1:0};Math.random();var tyLa=function(a){isFinite(a)&&(a=String(a));return tye(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};var tyMa=function(a){return a},tyNa=function(a){return a};var tyl=Array.prototype,tyOa=tyl.indexOf?function(a,b,c){return tyl.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(tye(a))return tye(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tym=tyl.forEach?function(a,b,c){tyl.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=tye(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},tyPa=function(a,b){for(var c=tye(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,
c[d],d,a)},tyQa=tyl.filter?function(a,b,c){return tyl.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=tye(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e},tyRa=tyl.map?function(a,b,c){return tyl.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=tye(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},tySa=tyl.some?function(a,b,c){return tyl.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=tye(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},tyTa=tyl.every?function(a,b,c){return tyl.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=tye(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0},tyVa=function(a){var b;a:{b=tyUa;for(var c=a.length,d=tye(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:tye(a)?a.charAt(b):a[b]},tyWa=function(a,b){for(var c=tye(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in
c&&b.call(void 0,c[d],d,a))return d;return-1},tyn=function(a,b){return 0<=tyOa(a,b)},tyXa=function(a,b){var c=tyOa(a,b),d;(d=0<=c)&&tyl.splice.call(a,c,1);return d},tyYa=function(a){return tyl.concat.apply(tyl,arguments)},tyZa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},ty0a=function(a,b,c,d){tyl.splice.apply(a,ty_a(arguments,1))},ty_a=function(a,b,c){return 2>=arguments.length?tyl.slice.call(a,b):tyl.slice.call(a,b,c)},ty2a=function(a,b){a.sort(b||
ty1a)},ty1a=function(a,b){return a>b?1:a<b?-1:0};var ty3a=function(){return null},ty4a=function(a){return a};var ty5a=function(a,b,c){return Math.min(Math.max(a,b),c)};var ty6a="StopIteration"in tya?tya.StopIteration:{message:"StopIteration",stack:""},ty7a=function(){};ty7a.prototype.next=function(){throw ty6a;};ty7a.prototype.uf=function(){return this};
var ty8a=function(a){if(a instanceof ty7a)return a;if("function"==typeof a.uf)return a.uf(!1);if(tyea(a)){var b=0,c=new ty7a;c.next=function(){for(;;){if(b>=a.length)throw ty6a;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");},ty9a=function(a,b){if(tyea(a))try{tym(a,b,void 0)}catch(c){if(c!==ty6a)throw c;}else{a=ty8a(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(d){if(d!==ty6a)throw d;}}};var ty$a=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},tyab=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},tybb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},tycb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1},tydb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d},tyeb=function(a,b){var c=tydb(a,b,void 0);return c&&a[c]},tyfb=function(a){for(var b in a)return!1;return!0},tygb=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+
b+'"');a[b]=c},tyhb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),tyib=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tyhb.length;f++)c=tyhb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},tyjb=function(a){var b=arguments.length;if(1==b&&tyd(arguments[0]))return tyjb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var tyo=function(a,b){this.za={};this.da=[];this.we=this.ra=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};ty=tyo.prototype;ty.Qb=function(){return this.ra};ty.Ma=function(){tykb(this);for(var a=[],b=0;b<this.da.length;b++)a.push(this.za[this.da[b]]);return a};ty.Zb=function(){tykb(this);return this.da.concat()};ty.Lc=function(a){return tylb(this.za,a)};
ty.Bf=function(a){for(var b=0;b<this.da.length;b++){var c=this.da[b];if(tylb(this.za,c)&&this.za[c]==a)return!0}return!1};ty.Ba=function(a,b){if(this===a)return!0;if(this.ra!=a.Qb())return!1;var c=b||tymb;tykb(this);for(var d,e=0;d=this.da[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};var tymb=function(a,b){return a===b};tyo.prototype.isEmpty=function(){return 0==this.ra};tyo.prototype.clear=function(){this.za={};this.we=this.ra=this.da.length=0};
tyo.prototype.remove=function(a){return tylb(this.za,a)?(delete this.za[a],this.ra--,this.we++,this.da.length>2*this.ra&&tykb(this),!0):!1};var tykb=function(a){if(a.ra!=a.da.length){for(var b=0,c=0;b<a.da.length;){var d=a.da[b];tylb(a.za,d)&&(a.da[c++]=d);b++}a.da.length=c}if(a.ra!=a.da.length){for(var e={},c=b=0;b<a.da.length;)d=a.da[b],tylb(e,d)||(a.da[c++]=d,e[d]=1),b++;a.da.length=c}};ty=tyo.prototype;ty.get=function(a,b){return tylb(this.za,a)?this.za[a]:b};
ty.set=function(a,b){tylb(this.za,a)||(this.ra++,this.da.push(a),this.we++);this.za[a]=b};ty.addAll=function(a){var b;a instanceof tyo?(b=a.Zb(),a=a.Ma()):(b=tybb(a),a=tyab(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};ty.forEach=function(a,b){for(var c=this.Zb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};ty.clone=function(){return new tyo(this)};
ty.uf=function(a){tykb(this);var b=0,c=this.we,d=this,e=new ty7a;e.next=function(){if(c!=d.we)throw Error("The map has changed since the iterator was created");if(b>=d.da.length)throw ty6a;var e=d.da[b++];return a?e:d.za[e]};return e};var tylb=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var tynb,tyob,typb={id:"hitType",name:"t",valueType:"text",maxLength:void 0,defaultValue:void 0},tyqb={id:"sessionControl",name:"sc",valueType:"text",maxLength:void 0,defaultValue:void 0},tyrb={id:"eventCategory",name:"ec",valueType:"text",maxLength:150,defaultValue:void 0},tysb={id:"eventAction",name:"ea",valueType:"text",maxLength:500,defaultValue:void 0},tytb={id:"eventLabel",name:"el",valueType:"text",maxLength:500,defaultValue:void 0},tyub={id:"eventValue",name:"ev",valueType:"integer",maxLength:void 0,
defaultValue:void 0},tyvb={ky:typb,Dx:{id:"anonymizeIp",name:"aip",valueType:"boolean",maxLength:void 0,defaultValue:void 0},Dy:{id:"queueTime",name:"qt",valueType:"integer",maxLength:void 0,defaultValue:void 0},Kx:{id:"cacheBuster",name:"z",valueType:"text",maxLength:void 0,defaultValue:void 0},ez:tyqb,fz:{id:"sessionGroup",name:"sg",valueType:"text",maxLength:void 0,defaultValue:void 0},gA:{id:"userId",name:"uid",valueType:"text",maxLength:void 0,defaultValue:void 0},xy:{id:"nonInteraction",name:"ni",
valueType:"boolean",maxLength:void 0,defaultValue:void 0},Yx:{id:"description",name:"cd",valueType:"text",maxLength:2048,defaultValue:void 0},Bz:{id:"title",name:"dt",valueType:"text",maxLength:1500,defaultValue:void 0},Gx:{id:"appId",name:"aid",valueType:"text",maxLength:150,defaultValue:void 0},Hx:{id:"appInstallerId",name:"aiid",valueType:"text",maxLength:150,defaultValue:void 0},ey:tyrb,dy:tysb,fy:tytb,gy:tyub,pz:{id:"socialNetwork",name:"sn",valueType:"text",maxLength:50,defaultValue:void 0},
oz:{id:"socialAction",name:"sa",valueType:"text",maxLength:50,defaultValue:void 0},qz:{id:"socialTarget",name:"st",valueType:"text",maxLength:2048,defaultValue:void 0},Ez:{id:"transactionId",name:"ti",valueType:"text",maxLength:500,defaultValue:void 0},Dz:{id:"transactionAffiliation",name:"ta",valueType:"text",maxLength:500,defaultValue:void 0},Fz:{id:"transactionRevenue",name:"tr",valueType:"currency",maxLength:void 0,defaultValue:void 0},Gz:{id:"transactionShipping",name:"ts",valueType:"currency",
maxLength:void 0,defaultValue:void 0},Hz:{id:"transactionTax",name:"tt",valueType:"currency",maxLength:void 0,defaultValue:void 0},Vx:{id:"currencyCode",name:"cu",valueType:"text",maxLength:10,defaultValue:void 0},oy:{id:"itemPrice",name:"ip",valueType:"currency",maxLength:void 0,defaultValue:void 0},py:{id:"itemQuantity",name:"iq",valueType:"integer",maxLength:void 0,defaultValue:void 0},my:{id:"itemCode",name:"ic",valueType:"text",maxLength:500,defaultValue:void 0},ny:{id:"itemName",name:"in",valueType:"text",
maxLength:500,defaultValue:void 0},ly:{id:"itemCategory",name:"iv",valueType:"text",maxLength:500,defaultValue:void 0},Qx:{id:"campaignSource",name:"cs",valueType:"text",maxLength:100,defaultValue:void 0},Ox:{id:"campaignMedium",name:"cm",valueType:"text",maxLength:50,defaultValue:void 0},Px:{id:"campaignName",name:"cn",valueType:"text",maxLength:100,defaultValue:void 0},Nx:{id:"campaignKeyword",name:"ck",valueType:"text",maxLength:500,defaultValue:void 0},Lx:{id:"campaignContent",name:"cc",valueType:"text",
maxLength:500,defaultValue:void 0},Mx:{id:"campaignId",name:"ci",valueType:"text",maxLength:100,defaultValue:void 0},jy:{id:"gclid",name:"gclid",valueType:"text",maxLength:void 0,defaultValue:void 0},Wx:{id:"dclid",name:"dclid",valueType:"text",maxLength:void 0,defaultValue:void 0},By:{id:"pageLoadTime",name:"plt",valueType:"integer",maxLength:void 0,defaultValue:void 0},Zx:{id:"dnsTime",name:"dns",valueType:"integer",maxLength:void 0,defaultValue:void 0},wz:{id:"tcpConnectTime",name:"tcp",valueType:"integer",
maxLength:void 0,defaultValue:void 0},dz:{id:"serverResponseTime",name:"srt",valueType:"integer",maxLength:void 0,defaultValue:void 0},Ay:{id:"pageDownloadTime",name:"pdt",valueType:"integer",maxLength:void 0,defaultValue:void 0},Hy:{id:"redirectResponseTime",name:"rrt",valueType:"integer",maxLength:void 0,defaultValue:void 0},xz:{id:"timingCategory",name:"utc",valueType:"text",maxLength:150,defaultValue:void 0},Az:{id:"timingVar",name:"utv",valueType:"text",maxLength:500,defaultValue:void 0},zz:{id:"timingValue",
name:"utt",valueType:"integer",maxLength:void 0,defaultValue:void 0},yz:{id:"timingLabel",name:"utl",valueType:"text",maxLength:500,defaultValue:void 0},hy:{id:"exDescription",name:"exd",valueType:"text",maxLength:150,defaultValue:void 0},iy:{id:"exFatal",name:"exf",valueType:"boolean",maxLength:void 0,defaultValue:"1"}};var tywb=function(a,b){for(var c=0,d=a.length-1,e=0;c<=d;){var f=Math.floor((c+d)/2),e=a[f];if(b<=e){d=0==f?0:a[f-1];if(b>d)return(d+1).toString()+"-"+e.toString();d=f-1}else if(b>e){if(f>=a.length-1)return(a[a.length-1]+1).toString()+"+";c=f+1}}return"<= 0"};var tyxb=function(){this.Yk=[]};tyxb.prototype.when=function(a){this.Yk.push(a);return this};tyxb.prototype.xx=function(a){var b=arguments;this.when(function(a){return tyn(b,a.zm)});return this};tyxb.prototype.wr=function(a,b){var c=ty_a(arguments,1);this.when(function(b){return tyn(c,b.kg.get(a))});return this};var tyyb=function(a,b){if(tyg(a.Ab))throw Error("Filter has already been set.");a.Ab=tyg(void 0)?tyh(b,void 0):b;return a};
tyxb.prototype.build=function(){if(0==this.Yk.length)throw Error("Must specify at least one predicate using #when or a helper method.");if(!tyg(this.Ab))throw Error("Must specify a delegate filter using #applyFilter.");return tyh(function(a){tyTa(this.Yk,function(b){return b(a)})&&this.Ab(a)},this)};var tyzb=function(){this.ys=!1;this.dv="";this.kx=!1;this.gi=null},tyAb=function(a){var b=new tyzb;if(null!=b.gi)throw Error("LabelerBuilder: Only one labeling strategy may be used.");b.gi=tyh(function(b){var d=b.kg.get(tyub),e=b.kg.get(tytb);tyfa(d)&&(d=a(d),null!=e&&this.ys&&(d=e+this.dv+d),b.kg.set(tytb,d))},b);return b};
tyzb.prototype.build=function(){if(null==this.gi)throw Error("LabelerBuilder: a labeling strategy must be specified prior to calling build().");return tyyb((new tyxb).xx("event"),tyh(function(a){this.gi(a);this.kx&&a.kg.remove(tyub)},this)).build()};var typ=function(){this.Be=this.Be;this.fe=this.fe};typ.prototype.Be=!1;typ.prototype.isDisposed=function(){return this.Be};typ.prototype.W=function(){this.Be||(this.Be=!0,this.D())};var tyBb=function(a,b){a.Be?b.call(void 0):(a.fe||(a.fe=[]),a.fe.push(tyb(void 0)?tyh(b,void 0):b))};typ.prototype.D=function(){if(this.fe)for(;this.fe.length;)this.fe.shift()()};
var tyCb=function(a){a&&"function"==typeof a.W&&a.W()},tyDb=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];tyea(d)?tyDb.apply(null,d):tyCb(d)}};var tyq=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.ie=!1;this.vq=!0};tyq.prototype.stopPropagation=function(){this.ie=!0};tyq.prototype.preventDefault=function(){this.defaultPrevented=!0;this.vq=!1};var tyEb=function(a){a.preventDefault()};var tyFb=[],tyGb=[],tyHb=!1,tyIb=function(a){tyFb[tyFb.length]=a;if(tyHb)for(var b=0;b<tyGb.length;b++)a(tyh(tyGb[b].yr,tyGb[b]))};var tyJb=function(a){tyJb[" "](a);return a};tyJb[" "]=tyc;var tyKb;a:{var tyLb=tya.navigator;if(tyLb){var tyMb=tyLb.userAgent;if(tyMb){tyKb=tyMb;break a}}tyKb=""}var tyr=function(a){return-1!=tyKb.indexOf(a)};var tyNb=function(){return tyr("Opera")||tyr("OPR")},tyOb=function(){return tyr("Edge")||tyr("Trident")||tyr("MSIE")},tyPb=function(){return(tyr("Chrome")||tyr("CriOS"))&&!tyNb()&&!tyOb()};var tyQb=function(){return tyr("Edge")};var tyRb=function(){return tyr("iPhone")&&!tyr("iPod")&&!tyr("iPad")};var tySb=tyNb(),tys=tyOb(),tyt=tyr("Gecko")&&!(-1!=tyKb.toLowerCase().indexOf("webkit")&&!tyQb())&&!(tyr("Trident")||tyr("MSIE"))&&!tyQb(),tyu=-1!=tyKb.toLowerCase().indexOf("webkit")&&!tyQb();tyu&&tyr("Mobile");var tyTb=tyr("Macintosh"),tyUb=tyr("Windows"),tyVb=tyr("Linux")||tyr("CrOS"),tyWb=tya.navigator||null;tyWb&&(tyWb.appVersion||"").indexOf("X11");
var tyXb=tyr("Android"),tyYb=tyRb(),tyZb=tyr("iPad"),ty_b=function(){var a=tyKb;if(tyt)return/rv\:([^\);]+)(\)|;)/.exec(a);if(tys&&tyQb())return/Edge\/([\d\.]+)/.exec(a);if(tys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tyu)return/WebKit\/(\S+)/.exec(a)},ty0b=function(){var a=tya.document;return a?a.documentMode:void 0},ty1b=function(){if(tySb&&tya.opera){var a=tya.opera.version;return tyf(a)?a():a}var a="",b=ty_b();b&&(a=b?b[1]:"");return tys&&!tyQb()&&(b=ty0b(),b>parseFloat(a))?String(b):
a}(),ty2b={},tyv=function(a){return ty2b[a]||(ty2b[a]=0<=tyKa(ty1b,a))},ty4b=function(a){return tys&&(tyQb()||ty3b>=a)},ty5b=tya.document,ty6b=ty0b(),ty3b=!ty5b||!tys||!ty6b&&tyQb()?void 0:ty6b||("CSS1Compat"==ty5b.compatMode?parseInt(ty1b,10):5);var ty7b=!tys||ty4b(9),ty8b=!tys||ty4b(9),ty9b=tys&&!tyv("9"),ty$b=!tyu||tyv("528"),tyac=tyt&&tyv("1.9b")||tys&&tyv("8")||tySb&&tyv("9.5")||tyu&&tyv("528"),tybc=tyt&&!tyv("8")||tys&&!tyv("9");var tyw=function(a,b){tyq.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Xk=!1;this.Oc=null;a&&this.init(a,b)};tyj(tyw,tyq);var tycc=[1,4,2];
tyw.prototype.init=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(tyt){var e;a:{try{tyJb(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=tyu||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=tyu||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:
a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Xk=tyTb?a.metaKey:a.ctrlKey;this.state=a.state;this.Oc=a;a.defaultPrevented&&this.preventDefault()};var tydc=function(a){return(ty7b?0==a.Oc.button:"click"==a.type?!0:!!(a.Oc.button&tycc[0]))&&!(tyu&&tyTb&&a.ctrlKey)};
tyw.prototype.stopPropagation=function(){tyw.B.stopPropagation.call(this);this.Oc.stopPropagation?this.Oc.stopPropagation():this.Oc.cancelBubble=!0};tyw.prototype.preventDefault=function(){tyw.B.preventDefault.call(this);var a=this.Oc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ty9b)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};tyw.prototype.Xb=function(){return this.Oc};var tyec="closure_listenable_"+(1E6*Math.random()|0),tyfc=function(a){return!(!a||!a[tyec])},tygc=0;var tyhc=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.gh=!!d;this.Th=e;this.key=++tygc;this.removed=this.eh=!1},tyic=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.Th=null};var tyjc=function(a){this.src=a;this.qb={};this.Gg=0};tyjc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.qb[f];a||(a=this.qb[f]=[],this.Gg++);var g=tykc(a,b,d,e);-1<g?(b=a[g],c||(b.eh=!1)):(b=new tyhc(b,this.src,f,!!d,e),b.eh=c,a.push(b));return b};tyjc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.qb))return!1;var e=this.qb[a];b=tykc(e,b,c,d);return-1<b?(tyic(e[b]),tyl.splice.call(e,b,1),0==e.length&&(delete this.qb[a],this.Gg--),!0):!1};
var tylc=function(a,b){var c=b.type;if(!(c in a.qb))return!1;var d=tyXa(a.qb[c],b);d&&(tyic(b),0==a.qb[c].length&&(delete a.qb[c],a.Gg--));return d};tyjc.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.qb)if(!a||c==a){for(var d=this.qb[c],e=0;e<d.length;e++)++b,tyic(d[e]);delete this.qb[c];this.Gg--}return b};tyjc.prototype.Lf=function(a,b,c,d){a=this.qb[a.toString()];var e=-1;a&&(e=tykc(a,b,c,d));return-1<e?a[e]:null};
var tykc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.gh==!!c&&f.Th==d)return e}return-1};var tymc="closure_lm_"+(1E6*Math.random()|0),tync={},tyoc=0,tyx=function(a,b,c,d,e){if(tyd(b)){for(var f=0;f<b.length;f++)tyx(a,b[f],c,d,e);return null}c=typc(c);return tyfc(a)?a.listen(b,c,d,e):tyqc(a,b,c,!1,d,e)},tyqc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=tyrc(a);h||(a[tymc]=h=new tyjc(a));c=h.add(b,c,d,e,f);if(c.proxy)return c;d=tysc();c.proxy=d;d.src=a;d.listener=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(tytc(b.toString()),d);tyoc++;
return c},tysc=function(){var a=tyuc,b=ty8b?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},tyvc=function(a,b,c,d,e){if(tyd(b)){for(var f=0;f<b.length;f++)tyvc(a,b[f],c,d,e);return null}c=typc(c);return tyfc(a)?a.listenOnce(b,c,d,e):tyqc(a,b,c,!0,d,e)},tywc=function(a,b,c,d,e){if(tyd(b))for(var f=0;f<b.length;f++)tywc(a,b[f],c,d,e);else c=typc(c),tyfc(a)?a.ma(b,c,d,e):a&&(a=tyrc(a))&&(b=a.Lf(b,c,!!d,e))&&tyxc(b)},tyxc=function(a){if(tyfa(a)||
!a||a.removed)return!1;var b=a.src;if(tyfc(b))return tylc(b.Nc,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.gh):b.detachEvent&&b.detachEvent(tytc(c),d);tyoc--;(c=tyrc(b))?(tylc(c,a),0==c.Gg&&(c.src=null,b[tymc]=null)):tyic(a);return!0},tytc=function(a){return a in tync?tync[a]:tync[a]="on"+a},tyzc=function(a,b,c,d){var e=!0;if(a=tyrc(a))if(b=a.qb[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.gh==c&&!f.removed&&(f=tyyc(f,d),e=e&&!1!==f)}return e},
tyyc=function(a,b){var c=a.listener,d=a.Th||a.src;a.eh&&tyxc(a);return c.call(d,b)},tyuc=function(a,b){if(a.removed)return!0;if(!ty8b){var c=b||tyba("window.event"),d=new tyw(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.ie&&0<=h;h--){d.currentTarget=c[h];var k=tyzc(c[h],f,!0,d),e=e&&k}for(h=
0;!d.ie&&h<c.length;h++)d.currentTarget=c[h],k=tyzc(c[h],f,!1,d),e=e&&k}return e}return tyyc(a,new tyw(b,this))},tyrc=function(a){a=a[tymc];return a instanceof tyjc?a:null},tyAc="__closure_events_fn_"+(1E9*Math.random()>>>0),typc=function(a){if(tyf(a))return a;a[tyAc]||(a[tyAc]=function(b){return a.handleEvent(b)});return a[tyAc]};tyIb(function(a){tyuc=a(tyuc)});var tyy=function(){typ.call(this);this.Nc=new tyjc(this);this.js=this;this.Tk=null};tyj(tyy,typ);tyy.prototype[tyec]=!0;ty=tyy.prototype;ty.Ke=function(){return this.Tk};ty.Dl=function(a){this.Tk=a};ty.addEventListener=function(a,b,c,d){tyx(this,a,b,c,d)};ty.removeEventListener=function(a,b,c,d){tywc(this,a,b,c,d)};
ty.dispatchEvent=function(a){var b,c=this.Ke();if(c){b=[];for(var d=1;c;c=c.Ke())b.push(c),++d}c=this.js;d=a.type||a;if(tye(a))a=new tyq(a,c);else if(a instanceof tyq)a.target=a.target||c;else{var e=a;a=new tyq(d,c);tyib(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.ie&&0<=g;g--)f=a.currentTarget=b[g],e=tyBc(f,d,!0,a)&&e;a.ie||(f=a.currentTarget=c,e=tyBc(f,d,!0,a)&&e,a.ie||(e=tyBc(f,d,!1,a)&&e));if(b)for(g=0;!a.ie&&g<b.length;g++)f=a.currentTarget=b[g],e=tyBc(f,d,!1,a)&&e;return e};
ty.D=function(){tyy.B.D.call(this);this.lq();this.Tk=null};ty.listen=function(a,b,c,d){return this.Nc.add(String(a),b,!1,c,d)};ty.listenOnce=function(a,b,c,d){return this.Nc.add(String(a),b,!0,c,d)};ty.ma=function(a,b,c,d){return this.Nc.remove(String(a),b,c,d)};ty.lq=function(a){return this.Nc?this.Nc.removeAll(a):0};
var tyBc=function(a,b,c,d){b=a.Nc.qb[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.removed&&g.gh==c){var h=g.listener,k=g.Th||g.src;g.eh&&tylc(a.Nc,g);e=!1!==h.call(k,d)&&e}}return e&&0!=d.vq};tyy.prototype.Lf=function(a,b,c,d){return this.Nc.Lf(String(a),b,c,d)};var tyCc=function(a,b,c){this.gv=c;this.Us=a;this.ow=b;this.vi=0;this.Uh=null};tyCc.prototype.get=function(){var a;0<this.vi?(this.vi--,a=this.Uh,this.Uh=a.next,a.next=null):a=this.Us();return a};tyCc.prototype.put=function(a){this.ow(a);this.vi<this.gv&&(this.vi++,a.next=this.Uh,this.Uh=a)};var tyDc=function(a){tya.setTimeout(function(){throw a;},0)},tyEc,tyFc=function(){var a=tya.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!tyr("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=tyh(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!tyOb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(tyb(c.next)){c=c.next;var a=c.bn;c.bn=null;a()}};return function(a){d.next={bn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){tya.setTimeout(a,0)}},tyGc=ty4a;tyIb(function(a){tyGc=a});var tyHc=function(){this.lj=this.tf=null},tyJc=new tyCc(function(){return new tyIc},function(a){a.reset()},100);tyHc.prototype.add=function(a,b){var c=tyJc.get();c.set(a,b);this.lj?this.lj.next=c:this.tf=c;this.lj=c};tyHc.prototype.remove=function(){var a=null;this.tf&&(a=this.tf,this.tf=this.tf.next,this.tf||(this.lj=null),a.next=null);return a};var tyIc=function(){this.next=this.scope=this.ak=null};tyIc.prototype.set=function(a,b){this.ak=a;this.scope=b;this.next=null};
tyIc.prototype.reset=function(){this.next=this.scope=this.ak=null};var tyOc=function(a,b){tyKc||tyLc();tyMc||(tyKc(),tyMc=!0);tyNc.add(a,b)},tyKc,tyLc=function(){if(tya.Promise&&tya.Promise.resolve){var a=tya.Promise.resolve();tyKc=function(){a.then(tyPc)}}else tyKc=function(){var a=tyPc,a=tyGc(a);!tyf(tya.setImmediate)||tya.Window&&tya.Window.prototype&&tya.Window.prototype.setImmediate==tya.setImmediate?(tyEc||(tyEc=tyFc()),tyEc(a)):tya.setImmediate(a)}},tyMc=!1,tyNc=new tyHc,tyPc=function(){for(var a=null;a=tyNc.remove();){try{a.ak.call(a.scope)}catch(b){tyDc(b)}tyJc.put(a)}tyMc=
!1};var tyQc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},tyRc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var tyUc=function(a,b){this.G=0;this.cd=void 0;this.ye=this.hd=this.P=null;this.Mh=this.Xj=!1;if(a==tySc)tyTc(this,2,b);else try{var c=this;a.call(b,function(a){tyTc(c,2,a)},function(a){tyTc(c,3,a)})}catch(d){tyTc(this,3,d)}},tyVc=function(){this.next=this.context=this.We=this.gg=this.child=null;this.Ug=!1};tyVc.prototype.reset=function(){this.context=this.We=this.gg=this.child=null;this.Ug=!1};
var tyWc=new tyCc(function(){return new tyVc},function(a){a.reset()},100),tyXc=function(a,b,c){var d=tyWc.get();d.gg=a;d.We=b;d.context=c;return d},tySc=function(){};tyUc.prototype.then=function(a,b,c){return tyYc(this,tyf(a)?a:null,tyf(b)?b:null,c)};tyQc(tyUc);tyUc.prototype.cancel=function(a){0==this.G&&tyOc(function(){var b=new tyZc(a);ty_c(this,b)},this)};
var ty_c=function(a,b){if(0==a.G)if(a.P){var c=a.P;if(c.hd){for(var d=0,e=null,f=null,g=c.hd;g&&(g.Ug||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.G&&1==d?ty_c(c,b):(f?(d=f,d.next==c.ye&&(c.ye=d),d.next=d.next.next):ty0c(c),ty1c(c,e,3,b)))}a.P=null}else tyTc(a,3,b)},ty3c=function(a,b){a.hd||2!=a.G&&3!=a.G||ty2c(a);a.ye?a.ye.next=b:a.hd=b;a.ye=b},tyYc=function(a,b,c,d){var e=tyXc(null,null,null);e.child=new tyUc(function(a,g){e.gg=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:
a;e.We=c?function(b){try{var e=c.call(d,b);!tyb(e)&&b instanceof tyZc?g(b):a(e)}catch(l){g(l)}}:g});e.child.P=a;ty3c(a,e);return e.child};tyUc.prototype.pr=function(a){this.G=0;tyTc(this,2,a)};tyUc.prototype.qr=function(a){this.G=0;tyTc(this,3,a)};
var tyTc=function(a,b,c){if(0==a.G){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(tyRc(c)){a.G=1;b=c;c=a.pr;var d=a.qr;b instanceof tyUc?ty3c(b,tyXc(c||tyc,d||null,a)):b.then(c,d,a);return}if(tyg(c))try{if(d=c.then,tyf(d)){ty4c(a,c,d);return}}catch(e){b=3,c=e}}a.cd=c;a.G=b;a.P=null;ty2c(a);3!=b||c instanceof tyZc||ty5c(a,c)}},ty4c=function(a,b,c){a.G=1;var d=!1,e=function(b){d||(d=!0,a.pr(b))},f=function(b){d||(d=!0,a.qr(b))};try{c.call(b,e,f)}catch(g){f(g)}},ty2c=function(a){a.Xj||
(a.Xj=!0,tyOc(a.lt,a))},ty0c=function(a){var b=null;a.hd&&(b=a.hd,a.hd=b.next,b.next=null);a.hd||(a.ye=null);return b};tyUc.prototype.lt=function(){for(var a=null;a=ty0c(this);)ty1c(this,a,this.G,this.cd);this.Xj=!1};
var ty1c=function(a,b,c,d){if(3==c&&b.We&&!b.Ug)for(;a&&a.Mh;a=a.P)a.Mh=!1;if(b.child)b.child.P=null,ty6c(b,c,d);else try{b.Ug?b.gg.call(b.context):ty6c(b,c,d)}catch(e){ty7c.call(null,e)}tyWc.put(b)},ty6c=function(a,b,c){2==b?a.gg.call(a.context,c):a.We&&a.We.call(a.context,c)},ty5c=function(a,b){a.Mh=!0;tyOc(function(){a.Mh&&ty7c.call(null,b)})},ty7c=tyDc,tyZc=function(a){typa.call(this,a)};tyj(tyZc,typa);tyZc.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var tyz=function(a,b){this.je=[];this.Rp=a;this.vn=b||null;this.Of=this.Qc=!1;this.cd=void 0;this.im=this.Cs=this.Bj=!1;this.ej=0;this.P=null;this.ah=0};tyz.prototype.cancel=function(a){if(this.Qc)this.cd instanceof tyz&&this.cd.cancel();else{if(this.P){var b=this.P;delete this.P;a?b.cancel(a):(b.ah--,0>=b.ah&&b.cancel())}this.Rp?this.Rp.call(this.vn,this):this.im=!0;this.Qc||this.ca(new ty8c)}};tyz.prototype.mn=function(a,b){this.Bj=!1;ty9c(this,a,b)};
var ty9c=function(a,b,c){a.Qc=!0;a.cd=c;a.Of=!b;ty$c(a)};tyz.prototype.en=function(){if(this.Qc){if(!this.im)throw new tyad;this.im=!1}};tyz.prototype.callback=function(a){this.en();ty9c(this,!0,a)};tyz.prototype.ca=function(a){this.en();ty9c(this,!1,a)};tyz.prototype.addCallback=function(a,b){return tyA(this,a,null,b)};var tybd=function(a,b,c){tyA(a,null,b,c)},tyA=function(a,b,c,d){a.je.push([b,c,d]);a.Qc&&ty$c(a);return a};
tyz.prototype.then=function(a,b,c){var d,e,f=new tyUc(function(a,b){d=a;e=b});tyA(this,d,function(a){a instanceof ty8c?f.cancel():e(a)});return f.then(a,b,c)};tyQc(tyz);var tycd=function(a,b){b instanceof tyz?a.addCallback(tyh(b.Kd,b)):a.addCallback(function(){return b})};tyz.prototype.Kd=function(a){var b=new tyz;tyA(this,b.callback,b.ca,b);a&&(b.P=this,this.ah++);return b};
var tydd=function(a){return tySa(a.je,function(a){return tyf(a[1])})},ty$c=function(a){if(a.ej&&a.Qc&&tydd(a)){var b=a.ej,c=tyed[b];c&&(c.mw(),delete tyed[b]);a.ej=0}a.P&&(a.P.ah--,delete a.P);for(var b=a.cd,d=c=!1;a.je.length&&!a.Bj;){var e=a.je.shift(),f=e[0],g=e[1],e=e[2];if(f=a.Of?g:f)try{var h=f.call(e||a.vn,b);tyb(h)&&(a.Of=a.Of&&(h==b||h instanceof Error),a.cd=b=h);if(tyRc(b)||"function"===typeof tya.Promise&&b instanceof tya.Promise)d=!0,a.Bj=!0}catch(k){b=k,a.Of=!0,tydd(a)||(c=!0)}}a.cd=
b;d&&(h=tyh(a.mn,a,!0),d=tyh(a.mn,a,!1),b instanceof tyz?(tyA(b,h,d),b.Cs=!0):b.then(h,d));c&&(b=new tyfd(b),tyed[b.Na]=b,a.ej=b.Na)},tygd=function(a){var b=new tyz;b.callback(a);return b},tyhd=function(a){var b=new tyz;b.ca(a);return b},tyad=function(){typa.call(this)};tyj(tyad,typa);tyad.prototype.message="Deferred has already fired";tyad.prototype.name="AlreadyCalledError";var ty8c=function(){typa.call(this)};tyj(ty8c,typa);ty8c.prototype.message="Deferred was canceled";ty8c.prototype.name="CanceledError";
var tyfd=function(a){this.Na=tya.setTimeout(tyh(this.nx,this),0);this.uh=a};tyfd.prototype.nx=function(){delete tyed[this.Na];throw this.uh;};tyfd.prototype.mw=function(){tya.clearTimeout(this.Na)};var tyed={};var tyid=function(){tyy.call(this);this.dg="google-analytics";this.vc=chrome.storage.local;chrome.storage.onChanged.addListener(tyh(this.Qv,this))};tyj(tyid,tyy);tyid.prototype.Qv=function(a){tyjd(this,a)&&this.dispatchEvent("a")};var tyjd=function(a,b){return tySa(tybb(b),function(a){return 0==a.lastIndexOf(this.dg,0)},a)};
tyid.prototype.get=function(a){var b=new tyz,c=this.dg+"."+a;this.vc.get(c,function(a){chrome.runtime.lastError?b.ca(chrome.runtime.lastError):(a=a[c],b.callback(null!=a?a.toString():void 0))});return b};tyid.prototype.set=function(a,b){var c=new tyz,d={};d[this.dg+"."+a]=b;this.vc.set(d,function(){chrome.runtime.lastError?c.ca(chrome.runtime.lastError):c.callback()});return c};tyjb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var tykd=function(){this.iq=""};tykd.prototype.lk=function(){return this.iq};tykd.prototype.Yh=function(a){this.iq=a;return this};var tymd=function(){this.$e="";this.Rr=tyld};tymd.prototype.lk=function(){return this.$e};tymd.prototype.Ln=function(){return 1};var tyld={};var tyod=function(){this.$e="";this.Qr=tynd;this.ze=null};tyod.prototype.Ln=function(){return this.ze};tyod.prototype.lk=function(){return this.$e};var typd=function(a){return a instanceof tyod&&a.constructor===tyod&&a.Qr===tynd?a.$e:"type_error:SafeHtml"},tynd={};tyod.prototype.Yh=function(a,b){this.$e=a;this.ze=b;return this};var tyqd=(new tyod).Yh("",0);var tyB=function(a,b){this.x=tyb(a)?a:0;this.y=tyb(b)?b:0};tyB.prototype.clone=function(){return new tyB(this.x,this.y)};var tyrd=function(a,b){return new tyB(a.x-b.x,a.y-b.y)};tyB.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};tyB.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};tyB.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var tysd=function(a,b){this.width=a;this.height=b},tytd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};ty=tysd.prototype;ty.clone=function(){return new tysd(this.width,this.height)};ty.As=function(){return this.width/this.height};ty.isEmpty=function(){return!(this.width*this.height)};ty.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ty.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};ty.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var tyud=!tys||ty4b(9),tyvd=!tyt&&!tys||tys&&ty4b(9)||tyt&&tyv("1.9.1"),tywd=tys&&!tyv("9"),tyxd=tys||tySb||tyu;tys&&ty4b(9);var tyD=function(a){return a?new tyyd(tyC(a)):tyqa||(tyqa=new tyyd)},tyAd=function(a,b){var c=b||document,d=null;return(d=c.getElementsByClassName?c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?c.querySelector("."+a):tyzd(document,"*",a,b)[0])||null},tyBd=function(a,b){return tyAd(a,b)},tyzd=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);
if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&tyn(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a},tyDd=function(a,b){ty$a(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in tyCd?a.setAttribute(tyCd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},
tyCd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},tyEd=function(a){a=(a||window).document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new tysd(a.clientWidth,a.clientHeight)},tyFd=function(a){return tyu||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement},tyGd=function(a){return a?a.parentWindow||
a.defaultView:window},tyId=function(a,b,c){return tyHd(document,arguments)},tyHd=function(a,b){var c=b[0],d=b[1];if(!tyud&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',tyCa(d.name),'"');if(d.type){c.push(' type="',tyCa(d.type),'"');var e={};tyib(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(tye(d)?c.className=d:tyd(d)?c.className=d.join(" "):tyDd(c,d));2<b.length&&tyJd(a,c,b,2);return c},tyJd=function(a,b,c,d){function e(c){c&&b.appendChild(tye(c)?a.createTextNode(c):
c)}for(;d<c.length;d++){var f=c[d];!tyea(f)||tyg(f)&&0<f.nodeType?e(f):tym(tyKd(f)?tyZa(f):f,e)}},tyLd=function(a,b){tyJd(tyC(a),a,arguments,1)},tyMd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)},tyNd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},tyOd=function(a){if(void 0!=a.firstElementChild)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a},tyPd=function(a){return tyg(a)&&1==a.nodeType},tyQd=function(a){var b;if(tyxd&&!(tys&&
tyv("9")&&!tyv("10")&&tya.SVGElement&&a instanceof tya.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return tyPd(b)?b:null},tyRd=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},tyC=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},tyE=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=
b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{tyMd(a);var c=tyC(a);a.appendChild(c.createTextNode(String(b)))}},tySd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},tyTd={IMG:" ",BR:"\n"},tyWd=function(a){return tyUd(a)&&tyVd(a)},tyXd=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))},tyUd=function(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified},tyVd=function(a){a=a.tabIndex;
return tyfa(a)&&0<=a&&32768>a},tyZd=function(a){if(tywd&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];tyYd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");tywd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},ty_d=function(a){var b=[];tyYd(a,b,!1);return b.join("")},tyYd=function(a,b,c){if(!(a.nodeName in tySd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in tyTd)b.push(tyTd[a.nodeName]);else for(a=a.firstChild;a;)tyYd(a,b,c),a=a.nextSibling},tyKd=function(a){if(a&&"number"==typeof a.length){if(tyg(a))return"function"==typeof a.item||"string"==typeof a.item;if(tyf(a))return"function"==typeof a.item}return!1},ty1d=function(a){return ty0d(a,function(a){return tye(a.className)&&tyn(a.className.split(/\s+/),"vb-wb-e")})},ty0d=function(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null},ty2d=function(){var a=document;
try{return a&&a.activeElement}catch(b){}return null},tyyd=function(a){this.Ga=a||tya.document||document};ty=tyyd.prototype;ty.K=tyD;ty.Ia=function(){return this.Ga};ty.A=function(a){return tye(a)?this.Ga.getElementById(a):a};ty.N=function(a,b){return tyAd(a,b||this.Ga)};ty.J=function(a,b){return tyAd(a,b||this.Ga)};ty.F=function(a,b,c){return tyHd(this.Ga,arguments)};ty.createElement=function(a){return this.Ga.createElement(a)};ty.createTextNode=function(a){return this.Ga.createTextNode(String(a))};
var ty3d=function(a){return"CSS1Compat"==a.Ga.compatMode};tyyd.prototype.getWindow=function(){var a=this.Ga;return a.parentWindow||a.defaultView};var ty4d=function(a){var b=a.Ga;a=tyFd(b);b=b.parentWindow||b.defaultView;return tys&&tyv("10")&&b.pageYOffset!=a.scrollTop?new tyB(a.scrollLeft,a.scrollTop):new tyB(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};ty=tyyd.prototype;ty.appendChild=function(a,b){a.appendChild(b)};ty.append=tyLd;ty.removeNode=tyNd;
ty.getChildren=function(a){return tyvd&&void 0!=a.children?a.children:tyQa(a.childNodes,function(a){return 1==a.nodeType})};ty.contains=tyRd;ty.Xc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!tyUd(a)||tyVd(a)):tyWd(a))&&tys?(a=tyf(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};var ty5d={id:"apiVersion",name:"v",valueType:"text",maxLength:void 0,defaultValue:void 0},ty6d={id:"appName",name:"an",valueType:"text",maxLength:100,defaultValue:void 0},ty7d={id:"appVersion",name:"av",valueType:"text",maxLength:100,defaultValue:void 0},ty8d={id:"clientId",name:"cid",valueType:"text",maxLength:void 0,defaultValue:void 0},ty9d={id:"language",name:"ul",valueType:"text",maxLength:20,defaultValue:void 0},ty$d={id:"libVersion",name:"_v",valueType:"text",maxLength:void 0,defaultValue:void 0},
tyae={id:"sampleRateOverride",name:"usro",valueType:"integer",maxLength:void 0,defaultValue:void 0},tybe={id:"screenColors",name:"sd",valueType:"text",maxLength:20,defaultValue:void 0},tyce={id:"screenResolution",name:"sr",valueType:"text",maxLength:20,defaultValue:void 0},tyde={id:"trackingId",name:"tid",valueType:"text",maxLength:void 0,defaultValue:void 0},tyee={id:"viewportSize",name:"vp",valueType:"text",maxLength:20,defaultValue:void 0},tyfe={Ex:ty5d,Ix:ty6d,Jx:ty7d,Sx:ty8d,qy:ty9d,sy:ty$d,
Zy:tyae,$y:tybe,az:tyce,Cz:tyde,kA:tyee},tyhe=function(a){if(!tye(a))return a;var b=tyge(a,tyvb);if(tyg(b))return b;b=tyge(a,tyfe);if(tyg(b))return b;b=/^dimension(\d+)$/.exec(a);if(null!==b){a=parseInt(b[1],10);if(1>a||200<a)throw Error("Expected dimension index range 1-200, but was : "+a);return{id:"dimension"+a,name:"cd"+a,valueType:"text",maxLength:150,defaultValue:void 0}}b=/^metric(\d+)$/.exec(a);if(null!==b){a=parseInt(b[1],10);if(1>a||200<a)throw Error("Expected metric index range 1-200, but was : "+
a);return{id:"metric"+a,name:"cm"+a,valueType:"integer",maxLength:void 0,defaultValue:void 0}}throw Error(a+" is not a valid parameter name.");},tyge=function(a,b){var c=tyeb(b,function(b){return b.id==a&&"metric"!=a&&"dimension"!=a});return tyg(c)?c:null};var tyje=function(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("[goog.string.format] Template required");return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(a,b,d,h,k,l,m,n){if("%"==l)return"%";var p=c.shift();if("undefined"==typeof p)throw Error("[goog.string.format] Not enough arguments");arguments[0]=p;return tyie[l].apply(null,arguments)})},tyie={s:function(a,b,c){return isNaN(c)||""==c||a.length>=c?a:a=-1<b.indexOf("-",0)?
a+tyGa(" ",c-a.length):tyGa(" ",c-a.length)+a},f:function(a,b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));var f;f=0>a?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=a&&(d=f+d);if(isNaN(c)||d.length>=c)return d;d=isNaN(e)?Math.abs(a).toString():Math.abs(a).toFixed(e);a=c-d.length-f.length;0<=b.indexOf("-",0)?d=f+d+tyGa(" ",a):(b=0<=b.indexOf("0",0)?"0":" ",d=f+tyGa(b,a)+d);return d},d:function(a,b,c,d,e,f,g,h){return tyie.f(parseInt(a,10),b,c,d,0,f,g,h)}};tyie.i=tyie.d;
tyie.u=tyie.d;var tyke=function(a){if("function"==typeof a.Qb)a=a.Qb();else if(tyea(a)||tye(a))a=a.length;else{var b=0,c;for(c in a)b++;a=b}return a},tyle=function(a){if("function"==typeof a.Ma)return a.Ma();if(tye(a))return a.split("");if(tyea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return tyab(a)},tyme=function(a){if("function"==typeof a.Zb)return a.Zb();if("function"!=typeof a.Ma){if(tyea(a)||tye(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return tybb(a)}},tyne=function(a,
b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(tyea(a)||tye(a))tym(a,b,void 0);else for(var c=tyme(a),d=tyle(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)},tyoe=function(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(tyea(a)||tye(a))return tyTa(a,b,void 0);for(var c=tyme(a),d=tyle(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0};var type=function(a){this.Vb=new tyo;if(0<arguments.length%2)throw Error("Uneven number of arguments to ParameterMap constructor.");for(var b=arguments,c=0;c<b.length;c+=2)this.set(b[c],b[c+1])};type.prototype.set=function(a,b){if(null==b)throw Error("undefined-or-null value for key: "+a.name);this.Vb.set(a.name,{key:a,value:b})};type.prototype.remove=function(a){this.Vb.remove(a.name)};type.prototype.get=function(a){a=this.Vb.get(a.name,null);return null===a?null:a.value};type.prototype.addAll=function(a){this.Vb.addAll(a.Vb)};
var tyqe=function(a,b){tym(a.Vb.Ma(),function(a){b(a.key,a.value)})};type.prototype.clone=function(){var a=new type;a.Vb=this.Vb.clone();return a};type.prototype.Ba=function(a){return this.Vb.length!==a.Vb.length?!1:tyTa(this.Vb.Ma(),function(b){return b.value==a.get(b.key)})};type.prototype.contains=function(a){return tyTa(a.Vb.Ma(),tyh(function(a){return a.value==this.get(a.key)},this))};type.prototype.toString=function(){var a={};tyqe(this,function(b,c){a[b.id]=c});return JSON.stringify(a)};var tyre=function(a,b){this.Js=b;this.yb=b.fk();this.bq=new type;this.Wq=!1};tyre.prototype.set=function(a,b){if(null==b)throw Error("Value must be defined and not null. Parameter="+a.id);var c=tyhe(a);this.bq.set(c,b)};tyre.prototype.Jd=function(a){this.Js.Jd(a)};tyre.prototype.send=function(a,b){var c=this.bq.clone();b instanceof type?c.addAll(b):tyg(b)&&ty$a(b,function(a,b){null!=a&&c.set(tyhe(b),a)},this);this.Wq&&(this.Wq=!1,c.set(tyqb,"start"));return this.yb.send(a,c)};var tyve=function(a){var b=tyse(),c;tyob||(c=tyse(),tyob=new tyte(c,new tyue(c,"https://www.google-analytics.com/collect",8192)));c=tyob;this.ev="ca1.6.0";this.ws="Google Play Music";this.xs=a;this.ab=b;this.Is=c};var tywe=function(){};tyca(tywe);tywe.prototype.send=function(){return tygd()};var tyxe=function(a){this.zh=[];this.Ab=a};tyxe.prototype.Jd=function(a){if(!tyf(a))throw Error("Invalid filter. Must be a function.");this.zh.push(a)};tyxe.prototype.send=function(a,b){if(0==this.zh.length)return this.Ab.send(a,b);var c=new tyye(a,b);return tyze(this,0,c).addCallback(function(){if(!c.Hj)return this.Ab.send(a,b)},this)};
var tyze=function(a,b,c){return tygd().addCallback(function(){return this.zh[b](c)},a).addCallback(function(){if(++b<this.zh.length&&!c.Hj)return tyze(this,b,c)},a)},tyye=function(a,b){this.zm=a;this.kg=b;this.Hj=!1};tyye.prototype.cancel=function(){this.Hj=!0};var tyAe=function(a){this.Zs=a};tyAe.prototype.send=function(a,b){this.Zs.push({Nu:a,parameters:b});return tygd()};var tyBe=function(a,b,c){this.ab=a;this.Ce=[];this.Ld={enabled:new tyAe(this.Ce),disabled:c};this.yb=this.Ld.enabled;tyA(this.ab.af.Kd(),tyla(this.Ov,b),this.Nv,this)};tyBe.prototype.Ov=function(a){if(null===this.Ce)throw Error("Channel setup already completed.");this.Ld.enabled=a();tyCe(this);tym(this.Ce,function(a){this.send(a.Nu,a.parameters)},this);this.Ce=null;tyDe(this.ab,tyh(this.Mv,this))};
tyBe.prototype.Nv=function(){if(null===this.Ce)throw Error("Channel setup already completed.");this.yb=this.Ld.enabled=this.Ld.disabled;this.Ce=null};tyBe.prototype.send=function(a,b){return this.yb.send(a,b)};var tyCe=function(a){a.yb=tyEe(a.ab)?a.Ld.enabled:a.Ld.disabled};tyBe.prototype.Mv=function(a){switch(a){case "analytics.tracking-permitted":tyCe(this)}};var tyFe=function(a,b){this.Dj=[];var c=tyh(function(){this.yh=new tyxe(b.fk());tym(this.Dj,function(a){this.yh.Jd(a)},this);this.Dj=null;return this.yh},this);this.yb=new tyBe(a,c,tywe.getInstance())};tyFe.prototype.fk=function(){return this.yb};tyFe.prototype.Jd=function(a){this.yh?this.yh.Jd(a):this.Dj.push(a)};var tyte=function(a,b){this.ab=a;this.bx=b};tyte.prototype.create=function(){return new tyFe(this.ab,this.bx)};var tyGe=function(a,b,c,d,e,f){tyz.call(this,e,f);this.Hk=a;this.Nj=[];this.Cn=!!b;this.ot=!!c;this.Ns=!!d;for(b=this.Mp=0;b<a.length;b++)tyA(a[b],tyh(this.Po,this,b,!0),tyh(this.Po,this,b,!1));0!=a.length||this.Cn||this.callback(this.Nj)};tyj(tyGe,tyz);tyGe.prototype.Po=function(a,b,c){this.Mp++;this.Nj[a]=[b,c];this.Qc||(this.Cn&&b?this.callback([a,c]):this.ot&&!b?this.ca(c):this.Mp==this.Hk.length&&this.callback(this.Nj));this.Ns&&!b&&(c=null);return c};
tyGe.prototype.ca=function(a){tyGe.B.ca.call(this,a);for(a=0;a<this.Hk.length;a++)this.Hk[a].cancel()};var tyHe=function(a){return(new tyGe(a,!1,!0)).addCallback(function(a){for(var c=[],d=0;d<a.length;d++)c[d]=a[d][1];return c})};var tyIe=function(){for(var a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),b=0,c=a.length;b<c;b++)switch(a[b]){case "x":a[b]=Math.floor(16*Math.random()).toString(16);break;case "y":a[b]=(Math.floor(4*Math.random())+8).toString(16)}return a.join("")};var tyJe=function(a){this.vc=a;this.sw=100;this.cn=[];this.Di=this.Jg=null;this.af=this.zk();this.af.addCallback(function(){this.ar=tyx(this.vc,"a",tyh(this.xu,this))},this)};tyJe.prototype.zk=function(){return tyHe([tyKe(this),tyLe(this)]).addCallback(function(){return this},this)};
tyJe.prototype.xu=function(){tyMe(this);var a=this.Lh(),b=tyEe(this);tyHe([tyKe(this),tyLe(this)]).addCallback(function(){a!=this.Lh()&&tyNe(this,"analytics.user-id");b!=tyEe(this)&&tyNe(this,"analytics.tracking-permitted")},this)};
var tyDe=function(a,b){tyMe(a);a.cn.push(b)},tyEe=function(a){tyMe(a);if(a=a.Di)a=tya._gaUserPrefs,a=!(a&&a.ioo&&a.ioo());return a},tyKe=function(a){return a.vc.get("analytics.tracking-permitted").addCallback(function(a){this.Di=!0;if(tyb(a))switch(a){case "true":this.Di=!0;break;case "false":this.Di=!1}},a)};tyJe.prototype.Lh=function(){tyMe(this);if(!tye(this.Jg))throw Error("Invalid state. UserID is not a string.");return this.Jg};
var tyLe=function(a){return a.vc.get("analytics.user-id").addCallback(function(a){tyb(a)?this.Jg=a:tyOe(this)},a)},tyOe=function(a){a.Jg=tyIe();a.vc.set("analytics.user-id",a.Jg).addCallback(function(){tyNe(this,"analytics.user-id")},a)},tyPe=function(a){tyMe(a);return a.sw},tyNe=function(a,b){tym(a.cn,function(a){a(b)})};tyJe.prototype.W=function(){null!=this.ar&&tyxc(this.ar)};var tyMe=function(a){if(!a.af.Kd().Qc)throw Error("Settings object accessed prior to entering ready state.");};var tyQe=function(a,b){tyy.call(this);this.Yd=a||1;this.mf=b||tya;this.Cj=tyh(this.ox,this);this.Fk=tyi()};tyj(tyQe,tyy);ty=tyQe.prototype;ty.enabled=!1;ty.Ya=null;ty.setInterval=function(a){this.Yd=a;this.Ya&&this.enabled?(this.stop(),this.start()):this.Ya&&this.stop()};
ty.ox=function(){if(this.enabled){var a=tyi()-this.Fk;0<a&&a<.8*this.Yd?this.Ya=this.mf.setTimeout(this.Cj,this.Yd-a):(this.Ya&&(this.mf.clearTimeout(this.Ya),this.Ya=null),this.dispatchEvent("tick"),this.enabled&&(this.Ya=this.mf.setTimeout(this.Cj,this.Yd),this.Fk=tyi()))}};ty.start=function(){this.enabled=!0;this.Ya||(this.Ya=this.mf.setTimeout(this.Cj,this.Yd),this.Fk=tyi())};ty.stop=function(){this.enabled=!1;this.Ya&&(this.mf.clearTimeout(this.Ya),this.Ya=null)};
ty.D=function(){tyQe.B.D.call(this);this.stop();delete this.mf};var tyRe=function(a,b,c){if(tyf(a))c&&(a=tyh(a,c));else if(a&&"function"==typeof a.handleEvent)a=tyh(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:tya.setTimeout(a,b||0)};var tyF=function(a){typ.call(this);this.Uc=a;this.da={}};tyj(tyF,typ);var tySe=[];tyF.prototype.listen=function(a,b,c,d){tyd(b)||(b&&(tySe[0]=b.toString()),b=tySe);for(var e=0;e<b.length;e++){var f=tyx(a,b[e],c||this.handleEvent,d||!1,this.Uc||this);if(!f)break;this.da[f.key]=f}return this};tyF.prototype.listenOnce=function(a,b,c,d){return tyTe(this,a,b,c,d)};
var tyTe=function(a,b,c,d,e,f){if(tyd(c))for(var g=0;g<c.length;g++)tyTe(a,b,c[g],d,e,f);else{b=tyvc(b,c,d||a.handleEvent,e,f||a.Uc||a);if(!b)return a;a.da[b.key]=b}return a};tyF.prototype.ma=function(a,b,c,d,e){if(tyd(b))for(var f=0;f<b.length;f++)this.ma(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.Uc||this,c=typc(c),d=!!d,b=tyfc(a)?a.Lf(b,c,d,e):a?(a=tyrc(a))?a.Lf(b,c,d,e):null:null,b&&(tyxc(b),delete this.da[b.key]);return this};
tyF.prototype.removeAll=function(){ty$a(this.da,tyxc);this.da={}};tyF.prototype.D=function(){tyF.B.D.call(this);this.removeAll()};tyF.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var tyUe=function(){tyy.call(this);this.I=new tyF(this);ty$b&&(tyac?this.I.listen(tybc?document.body:window,["online","offline"],this.Qo):(this.Yp=this.$d(),this.Ya=new tyQe(250),this.I.listen(this.Ya,"tick",this.Cu),this.Ya.start()))};tyj(tyUe,tyy);tyUe.prototype.$d=function(){return ty$b?navigator.onLine:!0};tyUe.prototype.Cu=function(){var a=this.$d();a!=this.Yp&&(this.Yp=a,this.Qo())};tyUe.prototype.Qo=function(){this.dispatchEvent(this.$d()?"online":"offline")};
tyUe.prototype.D=function(){tyUe.B.D.call(this);this.I.W();this.I=null;this.Ya&&(this.Ya.W(),this.Ya=null)};var tyVe=function(a,b){this.ab=a;this.Ab=b};tyVe.prototype.send=function(a,b){b.set(ty8d,this.ab.Lh());return this.Ab.send(a,b)};var tyWe=function(a){this.Ab=a};tyWe.prototype.send=function(a,b){tyXe(b);tyYe(b);return this.Ab.send(a,b)};var tyXe=function(a){tyqe(a,function(b,c){tyb(b.maxLength)&&"text"==b.valueType&&0<b.maxLength&&c.length>b.maxLength&&a.set(b,c.substring(0,b.maxLength))})},tyYe=function(a){tyqe(a,function(b,c){tyb(b.defaultValue)&&c==b.defaultValue&&a.remove(b)})};var tyZe={status:"device-offline",details:void 0},ty_e={status:"rate-limited",details:void 0},ty0e={status:"sampled-out",details:void 0},ty1e={status:"sent",details:void 0};var ty2e=function(a,b){this.qx=a;this.Ab=b};ty2e.prototype.send=function(a,b){var c;c=this.qx;var d=c.fr(),e=Math.floor((d-c.yp)*c.nt);0<e&&(c.wf=Math.min(c.wf+e,c.ov),c.yp=d);1>c.wf?c=!1:(--c.wf,c=!0);return c||"item"==a||"transaction"==a?this.Ab.send(a,b):tygd(ty_e)};var ty3e=function(){this.wf=60;this.ov=500;this.nt=5E-4;this.fr=function(){return(new Date).getTime()};this.yp=this.fr()};var ty4e=function(a,b){this.ab=a;this.Ab=b};ty4e.prototype.send=function(a,b){var c=b.get(ty8d),c=parseInt(c.split("-")[1],16),d;"timing"!=a?d=tyPe(this.ab):((d=b.get(tyae))&&b.remove(tyae),d=d||tyPe(this.ab));return c<655.36*d?this.Ab.send(a,b):tygd(ty0e)};var ty5e=tya.JSON.stringify;var tyG=function(a){this.za=new tyo;a&&this.addAll(a)},ty6e=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+tyia(a):b.substr(0,1)+a};ty=tyG.prototype;ty.Qb=function(){return this.za.Qb()};ty.add=function(a){this.za.set(ty6e(a),a)};ty.addAll=function(a){a=tyle(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};ty.removeAll=function(a){a=tyle(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};ty.remove=function(a){return this.za.remove(ty6e(a))};ty.clear=function(){this.za.clear()};
ty.isEmpty=function(){return this.za.isEmpty()};ty.contains=function(a){return this.za.Lc(ty6e(a))};ty.lp=function(a){var b=new tyG;a=tyle(a);for(var c=0;c<a.length;c++){var d=a[c];this.contains(d)&&b.add(d)}return b};ty.Oj=function(a){var b=this.clone();b.removeAll(a);return b};ty.Ma=function(){return this.za.Ma()};ty.clone=function(){return new tyG(this)};ty.Ba=function(a){return this.Qb()==tyke(a)&&ty7e(this,a)};
var ty7e=function(a,b){var c=tyke(b);if(a.Qb()>c)return!1;!(b instanceof tyG)&&5<c&&(b=new tyG(b));return tyoe(a,function(a){var c=b;return"function"==typeof c.contains?c.contains(a):"function"==typeof c.Bf?c.Bf(a):tyea(c)||tye(c)?tyn(c,a):tycb(c,a)})};tyG.prototype.uf=function(){return this.za.uf(!1)};var ty8e=function(a,b,c){c=c||tya;var d=c.onerror,e=!!b;tyu&&!tyv("535.3")&&(e=!e);c.onerror=function(b,c,h,k,l){d&&d(b,c,h,k,l);a({message:b,fileName:c,xA:h,rA:k,error:l});return e}},ty$e=function(a){for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(ty9e(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(50<=d){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")},ty9e=
function(a){if(tyaf[a])return tyaf[a];a=String(a);if(!tyaf[a]){var b=/function ([^\(]+)/.exec(a);tyaf[a]=b?b[1]:"[Anonymous]"}return tyaf[a]},tyaf={};var tybf=function(a){this.ee=a;this.Va=this.P=null},tycf=function(a){tya.console&&(tya.console.timeStamp?tya.console.timeStamp(a):tya.console.markTimeline&&tya.console.markTimeline(a));tya.msWriteProfilerMark&&tya.msWriteProfilerMark(a)};ty=tybf.prototype;ty.getName=function(){return this.ee};ty.getParent=function(){return this.P};ty.getChildren=function(){this.Va||(this.Va={});return this.Va};ty.log=function(){};ty.Iq=function(){};ty.wx=function(){};
var tydf=null,tyef=function(){tydf||(tydf=new tybf(""));return tydf};var tyff=function(){};var tygf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,tyif=function(a){if(tyhf){tyhf=!1;var b=tya.location;if(b){var c=b.href;if(c&&(c=(c=tyif(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw tyhf=!0,Error();}}return a.match(tygf)},tyhf=tyu,tyjf=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g,
" ")):"")}},tykf=/#|$/,tylf=function(a){var b=window.location.href,c=b.search(tykf),d;a:{d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(!(0>d)){e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b.substr(d,e-d).replace(/\+/g," ")}};var tymf=function(){};tymf.prototype.$m=null;tymf.prototype.getOptions=function(){var a;(a=this.$m)||(a={},tynf(this)&&(a[0]=!0,a[1]=!0),a=this.$m=a);return a};var tyof,typf=function(){};tyj(typf,tymf);var tyqf=function(a){return(a=tynf(a))?new ActiveXObject(a):new XMLHttpRequest},tynf=function(a){if(!a.ep&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ep=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ep};
tyof=new typf;var tyH=function(a){tyy.call(this);this.headers=new tyo;this.nj=a||null;this.Sa=!1;this.mj=this.V=null;this.Ap=this.ji="";this.Xf=0;this.Yf="";this.Xd=this.yk=this.Xh=this.Tj=!1;this.Cg=0;this.Zi=null;this.uq="";this.ij=this.zx=!1};tyj(tyH,tyy);var tyrf=/^https?$/i,tysf=["POST","PUT"],tytf=[],tyuf=function(a,b,c,d,e){var f=new tyH;tytf.push(f);b&&f.listen("complete",b);f.listenOnce("ready",f.Ks);f.send(a,c,d,e)};tyH.prototype.Ks=function(){this.W();tyXa(tytf,this)};
tyH.prototype.send=function(a,b,c,d){if(this.V)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ji+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ji=a;this.Yf="";this.Xf=0;this.Ap=b;this.Tj=!1;this.Sa=!0;this.V=this.nj?tyqf(this.nj):tyqf(tyof);this.mj=this.nj?this.nj.getOptions():tyof.getOptions();this.V.onreadystatechange=tyh(this.Wp,this);try{tyff(tyvf(this,"Opening Xhr")),this.yk=!0,this.V.open(b,String(a),!0),this.yk=!1}catch(e){tyff(tyvf(this,"Error opening Xhr: "+e.message));
this.uh(5,e);return}a=c||"";var f=this.headers.clone();d&&tyne(d,function(a,b){f.set(b,a)});d=tyVa(f.Zb());c=tya.FormData&&a instanceof tya.FormData;!tyn(tysf,b)||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.V.setRequestHeader(b,a)},this);this.uq&&(this.V.responseType=this.uq);"withCredentials"in this.V&&(this.V.withCredentials=this.zx);try{tywf(this),0<this.Cg&&(this.ij=tyxf(this.V),tyff(tyvf(this,"Will abort after "+this.Cg+"ms if incomplete, xhr2 "+
this.ij)),this.ij?(this.V.timeout=this.Cg,this.V.ontimeout=tyh(this.hr,this)):this.Zi=tyRe(this.hr,this.Cg,this)),tyff(tyvf(this,"Sending request")),this.Xh=!0,this.V.send(a),this.Xh=!1}catch(g){tyff(tyvf(this,"Send error: "+g.message)),this.uh(5,g)}};var tyxf=function(a){return tys&&tyv(9)&&tyfa(a.timeout)&&tyb(a.ontimeout)},tyUa=function(a){return"content-type"==a.toLowerCase()};
tyH.prototype.hr=function(){"undefined"!=typeof tyaa&&this.V&&(this.Yf="Timed out after "+this.Cg+"ms, aborting",this.Xf=8,tyvf(this,this.Yf),this.dispatchEvent("timeout"),this.abort(8))};tyH.prototype.uh=function(a,b){this.Sa=!1;this.V&&(this.Xd=!0,this.V.abort(),this.Xd=!1);this.Yf=b;this.Xf=a;tyyf(this);tyzf(this)};var tyyf=function(a){a.Tj||(a.Tj=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
tyH.prototype.abort=function(a){this.V&&this.Sa&&(tyvf(this,"Aborting"),this.Sa=!1,this.Xd=!0,this.V.abort(),this.Xd=!1,this.Xf=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),tyzf(this))};tyH.prototype.D=function(){this.V&&(this.Sa&&(this.Sa=!1,this.Xd=!0,this.V.abort(),this.Xd=!1),tyzf(this,!0));tyH.B.D.call(this)};tyH.prototype.Wp=function(){this.isDisposed()||(this.yk||this.Xh||this.Xd?tyAf(this):this.hg())};tyH.prototype.hg=function(){tyAf(this)};
var tyAf=function(a){if(a.Sa&&"undefined"!=typeof tyaa)if(a.mj[1]&&4==a.Le()&&2==a.getStatus())tyvf(a,"Local request error detected and ignored");else if(a.Xh&&4==a.Le())tyRe(a.Wp,0,a);else if(a.dispatchEvent("readystatechange"),a.Vu()){tyvf(a,"Request complete");a.Sa=!1;try{if(a.vp())a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.Xf=6;var b;try{b=2<a.Le()?a.V.statusText:""}catch(c){b=""}a.Yf=b+" ["+a.getStatus()+"]";tyyf(a)}}finally{tyzf(a)}}},tyzf=function(a,b){if(a.V){tywf(a);var c=
a.V,d=a.mj[0]?tyc:null;a.V=null;a.mj=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},tywf=function(a){a.V&&a.ij&&(a.V.ontimeout=null);tyfa(a.Zi)&&(tya.clearTimeout(a.Zi),a.Zi=null)};ty=tyH.prototype;ty.Uf=function(){return!!this.V};ty.Vu=function(){return 4==this.Le()};
ty.vp=function(){var a=this.getStatus(),b;a:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:b=!0;break a;default:b=!1}if(!b){if(a=0===a)a=tyif(String(this.ji))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),a=!tyrf.test(a?a.toLowerCase():"");b=a}return b};ty.Le=function(){return this.V?this.V.readyState:0};ty.getStatus=function(){try{return 2<this.Le()?this.V.status:-1}catch(a){return-1}};
ty.It=function(){try{return this.V?this.V.responseText:""}catch(a){return""}};var tyvf=function(a,b){return b+" ["+a.Ap+" "+a.ji+" "+a.getStatus()+"]"};tyIb(function(a){tyH.prototype.hg=a(tyH.prototype.hg)});var tyBf=function(a,b){this.Ac=this.ve=this.ed="";this.Ed=null;this.Pd=this.rb="";this.ac=this.Yu=!1;var c;if(a instanceof tyBf)this.ac=tyb(b)?b:a.ac,tyCf(this,a.ed),c=a.ve,tyDf(this),this.ve=c,c=a.Ie(),tyDf(this),this.Ac=c,tyEf(this,a.Ed),tyFf(this,a.rb),tyGf(this,a.Tb.clone()),tyHf(this,a.Pd);else if(a&&(c=tyif(String(a)))){this.ac=!!b;tyCf(this,c[1]||"",!0);var d=c[2]||"";tyDf(this);this.ve=tyIf(d);d=c[3]||"";tyDf(this);this.Ac=tyIf(d,!0);tyEf(this,c[4]);tyFf(this,c[5]||"",!0);tyGf(this,c[6]||
"",!0);tyHf(this,c[7]||"",!0)}else this.ac=!!b,this.Tb=new tyJf(null,0,this.ac)};
tyBf.prototype.toString=function(){var a=[],b=this.ed;b&&a.push(tyKf(b,tyLf,!0),":");if(b=this.Ie()){a.push("//");var c=this.ve;c&&a.push(tyKf(c,tyLf,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Ed;null!=b&&a.push(":",String(b))}if(b=this.rb)this.Ac&&"/"!=b.charAt(0)&&a.push("/"),a.push(tyKf(b,"/"==b.charAt(0)?tyMf:tyNf,!0));(b=this.Tb.toString())&&a.push("?",b);(b=this.Pd)&&a.push("#",tyKf(b,tyOf));return a.join("")};
tyBf.prototype.resolve=function(a){var b=this.clone(),c=!!a.ed;c?tyCf(b,a.ed):c=!!a.ve;if(c){var d=a.ve;tyDf(b);b.ve=d}else c=!!a.Ac;c?(d=a.Ie(),tyDf(b),b.Ac=d):c=null!=a.Ed;d=a.rb;if(c)tyEf(b,a.Ed);else if(c=!!a.rb){if("/"!=d.charAt(0))if(this.Ac&&!this.rb)d="/"+d;else{var e=b.rb.lastIndexOf("/");-1!=e&&(d=b.rb.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&
g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?tyFf(b,d):c=""!==a.Tb.toString();c?tyGf(b,tyIf(a.Tb.toString())):c=!!a.Pd;c&&tyHf(b,a.Pd);return b};tyBf.prototype.clone=function(){return new tyBf(this)};var tyCf=function(a,b,c){tyDf(a);a.ed=c?tyIf(b,!0):b;a.ed&&(a.ed=a.ed.replace(/:$/,""));return a};tyBf.prototype.Ie=function(){return this.Ac};
var tyEf=function(a,b){tyDf(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ed=b}else a.Ed=null},tyFf=function(a,b,c){tyDf(a);a.rb=c?tyIf(b,!0):b},tyGf=function(a,b,c){tyDf(a);b instanceof tyJf?(a.Tb=b,a.Tb.pl(a.ac)):(c||(b=tyKf(b,tyPf)),a.Tb=new tyJf(b,0,a.ac))};tyBf.prototype.Nw=function(a){tyGf(this,a,void 0)};tyBf.prototype.jk=function(){return this.Tb.toString()};
var tyQf=function(a,b,c){tyDf(a);a.Tb.set(b,c)},tyHf=function(a,b,c){tyDf(a);a.Pd=c?tyIf(b):b},tyDf=function(a){if(a.Yu)throw Error("Tried to modify a read-only Uri");};tyBf.prototype.pl=function(a){this.ac=a;this.Tb&&this.Tb.pl(a);return this};
var tyRf=function(a,b){return a instanceof tyBf?a.clone():new tyBf(a,b)},tyIf=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},tyKf=function(a,b,c){return tye(a)?(a=encodeURI(a).replace(b,tySf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},tySf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},tyLf=/[#\/\?@]/g,tyNf=/[\#\?:]/g,tyMf=/[\#\?]/g,tyPf=/[\#\?@]/g,tyOf=/#/g,tyJf=function(a,b,c){this.ra=this.ya=null;this.Nb=
a||null;this.ac=!!c},tyTf=function(a){a.ya||(a.ya=new tyo,a.ra=0,a.Nb&&tyjf(a.Nb,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};ty=tyJf.prototype;ty.Qb=function(){tyTf(this);return this.ra};ty.add=function(a,b){tyTf(this);this.Nb=null;a=tyUf(this,a);var c=this.ya.get(a);c||this.ya.set(a,c=[]);c.push(b);this.ra++;return this};ty.remove=function(a){tyTf(this);a=tyUf(this,a);return this.ya.Lc(a)?(this.Nb=null,this.ra-=this.ya.get(a).length,this.ya.remove(a)):!1};
ty.clear=function(){this.ya=this.Nb=null;this.ra=0};ty.isEmpty=function(){tyTf(this);return 0==this.ra};ty.Lc=function(a){tyTf(this);a=tyUf(this,a);return this.ya.Lc(a)};ty.Bf=function(a){var b=this.Ma();return tyn(b,a)};ty.Zb=function(){tyTf(this);for(var a=this.ya.Ma(),b=this.ya.Zb(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
ty.Ma=function(a){tyTf(this);var b=[];if(tye(a))this.Lc(a)&&(b=tyYa(b,this.ya.get(tyUf(this,a))));else{a=this.ya.Ma();for(var c=0;c<a.length;c++)b=tyYa(b,a[c])}return b};ty.set=function(a,b){tyTf(this);this.Nb=null;a=tyUf(this,a);this.Lc(a)&&(this.ra-=this.ya.get(a).length);this.ya.set(a,[b]);this.ra++;return this};ty.get=function(a,b){var c=a?this.Ma(a):[];return 0<c.length?String(c[0]):b};
ty.toString=function(){if(this.Nb)return this.Nb;if(!this.ya)return"";for(var a=[],b=this.ya.Zb(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Ma(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.Nb=a.join("&")};ty.clone=function(){var a=new tyJf;a.Nb=this.Nb;this.ya&&(a.ya=this.ya.clone(),a.ra=this.ra);return a};var tyUf=function(a,b){var c=String(b);a.ac&&(c=c.toLowerCase());return c};
tyJf.prototype.pl=function(a){a&&!this.ac&&(tyTf(this),this.Nb=null,this.ya.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.Nb=null,this.ya.set(tyUf(this,d),tyZa(a)),this.ra+=a.length))},this));this.ac=a};var tyVf=function(a,b,c){this.yw=a;this.ni=b;this.wv=c};tyVf.prototype.send=function(a,b){if(!this.wv.$d())return tyhd(tyZe);var c=new tyz,d=tyWf(a,b);d.length>this.ni?c.ca({status:"payload-too-big",details:tyje("Encoded hit length == %s, but should be <= %s.",d.length,this.ni)}):tyuf(this.yw,function(){c.callback(ty1e)},"POST",d);return c};var tyWf=function(a,b){var c=new tyJf;c.add(typb.name,a);tyqe(b,function(a,b){c.add(a.name,b.toString())});return c.toString()};var tyue=function(a,b,c){this.ab=a;this.ww=b;this.ni=c};tyue.prototype.fk=function(){if(!this.yb){if(!this.ab.af.Kd().Qc)throw Error("Cannot construct shared channel prior to settings being ready.");var a=new tyUe,a=new tyWe(new tyVf(this.ww,this.ni,a)),b=new ty3e;this.yb=new tyVe(this.ab,new ty4e(this.ab,new ty2e(b,a)))}return this.yb};var tyXf=new tyo,tyse=function(){tynb||(tynb=new tyJe(new tyid));return tynb};var tyI=function(a){this.zw=a};tyI.prototype.toString=function(){return this.zw};var tyJ=function(a){return tyJ.kp(a)};tyJ.kp=function(a){return a+"_"};tyJ.yA=function(){throw Error("xid.literal must not be used in COMPILED mode.");};tyJ.object=function(a){if(a&&a.constructor&&a.constructor.toString()===Object.toString()){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[tyJ.kp(c)]=a[c]);return b}throw Error("xid.object must be called with an object literal.");};tyJ.cy=!0;tyJ.oA=function(a){return a};tyJ.wA=function(){return"a_"!=tyJ("a")};new tyI(tyJ("goog.ui.ActivityMonitor"));new tyI(tyJ("fava.app.AppLifetimeService"));new tyI(tyJ("fava.base.AsyncOperationServices"));new tyI(tyJ("fava.net.BrowserChannelServices"));new tyI(tyJ("fava.canvas.CanvasService"));new tyI(tyJ("fava.canvas.CanvasConfiguration"));new tyI(tyJ("fava.diagnostics.CsiService"));new tyI(tyJ("fava.data.DataServices"));new tyI(tyJ("fava.data.DataStoreUpdaterService"));new tyI(tyJ("fava.locale.DateTimeFormatService"));new tyI(tyJ("fava.debug.DeobfuscationService"));
new tyI(tyJ("fava.diagnostics.Diagnostics"));new tyI(tyJ("fava.component.DomServices"));new tyI(tyJ("fava.app.DragDropService"));new tyI(tyJ("fava.browser.ExportService"));new tyI(tyJ("fava.layout.FixedLayoutHelper"));new tyI(tyJ("fava.gbar.GbarService"));new tyI(tyJ("fava.gloader.GoogleLoaderService"));new tyI(tyJ("fava.controls.help.HelpOverlayService"));new tyI(tyJ("fava.view.HistoryInterface"));new tyI(tyJ("fava.view.HistoryManager"));new tyI(tyJ("fava.view.HistoryRegistry"));new tyI(tyJ("fava.identity.IdentityService"));
new tyI(tyJ("fava.browser.IeCutCopyHandle"));new tyI(tyJ("fava.diagnostics.Impressions"));new tyI(tyJ("fava.browser.KeyboardShortcutHandler"));new tyI(tyJ("fava.browser.KeyboardShortcutRegistry"));new tyI(tyJ("fava.mail.MailServices"));new tyI(tyJ("fava.controls.mole.MoleManager"));new tyI(tyJ("fava.app.NavBarService"));new tyI(tyJ("fava.view.NavigationServices"));new tyI(tyJ("fava.net.NetworkDiagnosticsService"));new tyI(tyJ("fava.app.NotificationService"));new tyI(tyJ("fava.request.OauthService"));
new tyI(tyJ("fava.net.OfflineServices"));new tyI(tyJ("fava.modules.PrefetchService"));new tyI(tyJ("fava.controls.RelativeDateControl"));new tyI(tyJ("fava.request.RequestService"));new tyI(tyJ("fava.base.Scheduler"));new tyI(tyJ("fava.net.ServerErrorService"));new tyI(tyJ("fava.dom.SoyRenderer"));new tyI(tyJ("fava.dom.SoyRendererConfig"));new tyI(tyJ("fava.app.TearoffManager"));new tyI(tyJ("fava.app.TearoffSharedData"));new tyI(tyJ("fava.app.TearoffRegistry"));new tyI(tyJ("fava.app.TitleBar"));new tyI(tyJ("fava.controls.Toast"));
new tyI(tyJ("fava.app.UserActionService"));new tyI(tyJ("fava.browser.ViewportServices"));new tyI(tyJ("fava.diagnostics.ViewDiagnostics"));new tyI(tyJ("fava.view.ViewManagerInterface"));new tyI(tyJ("fava.view.ViewRegistry"));new tyI(tyJ("fava.browser.WindowService"));new tyI(tyJ("fava.browser.WindowOpenerUtil"));new tyI(tyJ("fava.app.WindowWidget"));new tyI(tyJ("fava.request.XsrfService"));var tyYf=new tyI("a");var ty_f=function(){var a,b=tyXf.get("Google Play Music",null);a=chrome.runtime.getManifest().version;null===b&&(b=new tyve(a),tyXf.set("Google Play Music",b));a=b;b=new tyre(0,a.Is.create());b.set(ty$d,a.ev);b.set(ty5d,1);b.set(ty6d,a.ws);b.set(ty7d,a.xs);b.set(tyde,"UA-19995902-12");(a=navigator.language||navigator.browserLanguage)&&b.set(ty9d,a);(a=screen.colorDepth+"-bit")&&b.set(tybe,a);(a=[screen.width,screen.height].join("x"))&&b.set(tyce,a);a=tyEd();(a=[a.width,a.height].join("x"))&&b.set(tyee,
a);b.Jd(tyZf([0,1,100,500,1E3,5E3,1E4,2E4,5E4,1E5,25E4,5E5,75E4,1E6],"Music Source File Count"));b.Jd(tyZf([0,1,10,20,50,100,200,500,1E3,2E3,5E3,1E4,2E4,5E4,1E5,25E4,5E5,75E4,1E6],"Upload Failure Count"));this.T=b;new tyo},tyK=function(a,b,c){a.T.send("event",{eventCategory:"Mini Player",eventAction:b,eventLabel:c,eventValue:void 0})},tyZf=function(a,b){var c=tyAb(tyla(tywb,a)).build();return tyyb((new tyxb).wr(tyrb,"Uploads").wr(tysb,b),c).build()};new tyI("b");var ty0f=new tyI("c");var ty1f={PAUSE:3,mz:4,Vy:6,DOWNLOAD:7,dA:8,Py:9,Ly:10,Bx:11,ay:12,Uy:13,lz:14,Sz:15,gz:16,iz:17,Ny:18,Yy:19,jz:20,jA:21,Iy:22,Ey:23,iA:24,eA:25,My:26,ty:27,Zz:28,kz:29,vy:30,cs:31,Vz:101,Xz:102,Pz:103,Lz:104,Wz:105,zy:106,Sy:107,Cy:108,Nz:109,aA:110,bA:111,Mz:112,rz:201,bz:202,cz:203,Fy:204,by:205,Tx:206,Ux:207,Jy:208,Uz:209,vz:210,Qy:301,Qz:302,hz:303,Ky:304,Kz:305,Wy:306,Yz:307,Gy:308,uz:309,Xy:312,$z:313,Rz:314,Ry:315,Oy:316,yy:317,Ty:318,Tz:319,Oz:320};var tyL=function(){},tyM=function(a,b,c,d){a.Id=null;b||(b=[]);a.zA=void 0;a.Yg=-1;a.lb=b;a:{if(a.lb.length){b=a.lb.length-1;var e=a.lb[b];if(e&&"object"==typeof e&&!tyd(e)){a.mg=b-a.Yg;a.Ge=e;break a}}-1<c?(a.mg=c,a.Ge=null):a.mg=Number.MAX_VALUE}if(d)for(c=0;c<d.length;c++)b=d[c],b<a.mg?(b+=a.Yg,a.lb[b]=a.lb[b]||ty2f):a.Ge[b]=a.Ge[b]||ty2f},ty2f=[],tyN=function(a,b){if(b<a.mg){var c=b+a.Yg,d=a.lb[c];return d===ty2f?a.lb[c]=[]:d}d=a.Ge[b];return d===ty2f?a.Ge[b]=[]:d},tyO=function(a,b,c){b<a.mg?
a.lb[b+a.Yg]=c:a.Ge[b]=c},ty3f=function(a,b,c,d){a.Id||(a.Id={});if(!a.Id[c]){var e=tyN(a,c);if(d||e)a.Id[c]=new b(e)}return a.Id[c]},ty4f=function(a,b){a.Id||(a.Id={});var c=b?b.lb:b;a.Id[1]=b;tyO(a,1,c)};tyL.prototype.fl=function(){return tya.JSON&&tya.JSON.stringify?tya.JSON.stringify(this.lb):ty5e(this.lb)};tyL.prototype.toString=function(){return this.lb.toString()};
var ty5f=function(a,b){if(tyg(a)&&tyg(b)){var c={},d,e,f;for(d in a)a.hasOwnProperty(d)&&(c[d]=0);for(d in b)b.hasOwnProperty(d)&&(c[d]=0);for(d in c){var c=a[d],g=b[d];if(tyg(c)&&!tyd(c)){if(void 0!==e)throw Error("invalid jspb state");e=tyfb(c)?void 0:c;c=void 0}if(tyg(g)&&!tyd(g)){if(void 0!==f)throw Error("invalid jspb state");f=tyfb(g)?void 0:g;g=void 0}if(!ty5f(c,g))return!1}return e||f?ty5f(e,f):!0}return a==b};var ty7f=function(a){tyM(this,a,-1,ty6f)};tyj(ty7f,tyL);var ty6f=[5];var ty8f=function(a){tyM(this,a,-1,null)};tyj(ty8f,tyL);var ty9f=function(a){tyM(this,a,-1,null)};tyj(ty9f,tyL);var ty$f=function(a){tyM(this,a,-1,null)};tyj(ty$f,tyL);ty=ty$f.prototype;ty.Aq=function(a){tyO(this,1,a)};ty.setVolume=function(a){tyO(this,3,a)};ty.getTime=function(){return tyN(this,4)};ty.setTime=function(a){tyO(this,4,a)};ty.Kw=function(a){tyO(this,5,a)};var tyag=function(a){tyM(this,a,-1,null)};tyj(tyag,tyL);var tybg=function(a){tyM(this,a,-1,null)};tyj(tybg,tyL);var tycg=function(a){tyM(this,a,-1,null)};tyj(tycg,tyL);tycg.prototype.getId=function(){return tyN(this,1)};tycg.prototype.ne=function(a){tyO(this,1,a)};var tydg=function(a){tyM(this,a,-1,null)};tyj(tydg,tyL);var tyeg=function(a){tyM(this,a,-1,null)};tyj(tyeg,tyL);tyeg.prototype.getId=function(){return tyN(this,1)};tyeg.prototype.ne=function(a){tyO(this,1,a)};var tyfg=function(a){tyM(this,a,-1,null)};tyj(tyfg,tyL);var tygg=function(a){tyM(this,a,-1,null)};tyj(tygg,tyL);ty=tygg.prototype;ty.getId=function(){return tyN(this,1)};ty.ne=function(a){tyO(this,1,a);return this};ty.getName=function(){return tyN(this,2)};ty.Dq=function(a){tyO(this,2,a);return this};ty.ek=function(){return tyN(this,3)};ty.hl=function(a){tyO(this,3,a);return this};ty.Pn=function(){return tyN(this,5)};ty.Hq=function(a){tyO(this,10,a);return this};ty.zq=function(a){tyO(this,11,a);return this};ty.fn=function(){tyO(this,11,void 0);return this};
ty.po=function(){return tyN(this,12)};ty.Fq=function(a){tyO(this,12,a);return this};var tyhg=function(a){tyM(this,a,-1,null)};tyj(tyhg,tyL);tyhg.prototype.Gn=function(){return tyN(this,3)};var tyig=function(a){tyM(this,a,-1,null)};tyj(tyig,tyL);var tyjg=function(a){tyM(this,a,-1,null)};tyj(tyjg,tyL);tyjg.prototype.getVersion=function(){return tyN(this,1)};tyjg.prototype.setVersion=function(a){tyO(this,1,a)};var tykg=function(a){tyM(this,a,-1,null)};tyj(tykg,tyL);tykg.prototype.Hh=function(){return tyN(this,1)};tykg.prototype.Eq=function(a){tyO(this,1,a)};var tylg=function(a){tyM(this,a,-1,null)};tyj(tylg,tyL);tylg.prototype.setEnabled=function(a){tyO(this,1,a)};var tymg=function(a){tyM(this,a,-1,null)};tyj(tymg,tyL);tymg.prototype.Zn=function(){return tyN(this,1)};var tyog=function(a){tyM(this,a,-1,tyng)};tyj(tyog,tyL);var tyng=[1];var typg=function(a){tyM(this,a,-1,null)};tyj(typg,tyL);typg.prototype.setEnabled=function(a){tyO(this,1,a)};var tyqg=function(a){tyM(this,a,-1,null)};tyj(tyqg,tyL);var tyrg=function(a){tyM(this,a,-1,null)};tyj(tyrg,tyL);tyrg.prototype.Lh=function(){return tyN(this,3)};var tytg=function(a){tyM(this,a,-1,tysg)};tyj(tytg,tyL);var tysg=[2];tytg.prototype.Aq=function(a){tyO(this,1,a)};var tyug=function(a){tyM(this,a,-1,null)};tyj(tyug,tyL);var tyvg=function(a){tyM(this,a,-1,null)};tyj(tyvg,tyL);var tywg=function(a){tyM(this,a,-1,null)};tyj(tywg,tyL);var tyxg=function(a){tyM(this,a,-1,null)};tyj(tyxg,tyL);var tyyg=function(a){tyM(this,a,-1,null)};tyj(tyyg,tyL);ty=tyyg.prototype;ty.setActive=function(a){tyO(this,1,a);return this};ty.getCurrentTime=function(){return tyN(this,3)};ty.setCurrentTime=function(a){tyO(this,3,a);return this};ty.Ao=function(){return tyN(this,4)};ty.qo=function(){return tyN(this,5)};ty.getState=function(){return tyN(this,9)};ty.Xa=function(a){tyO(this,9,a);return this};ty.mk=function(){return tyN(this,14)};var tyzg=function(a){tyM(this,a,-1,null)};tyj(tyzg,tyL);var tyAg=function(a){tyM(this,a,-1,null)};tyj(tyAg,tyL);var tyBg=function(a){tyM(this,a,-1,null)};tyj(tyBg,tyL);var tyCg=function(a){tyM(this,a,-1,null)};tyj(tyCg,tyL);var tyEg=function(a){tyM(this,a,-1,tyDg)};tyj(tyEg,tyL);var tyDg=[2];var tyGg=function(a){tyM(this,a,-1,tyFg)};tyj(tyGg,tyL);var tyFg=[1];var tyHg=function(a){tyM(this,a,-1,null)};tyj(tyHg,tyL);var tyJg=function(a){tyM(this,a,-1,tyIg)};tyj(tyJg,tyL);var tyIg=[2,3,4,5];var tyLg=function(a){tyM(this,a,-1,tyKg)};tyj(tyLg,tyL);var tyKg=[3,4];var tyMg=function(a){tyM(this,a,-1,null)};tyj(tyMg,tyL);tyMg.prototype.getPlayerState=function(){return ty3f(this,tyyg,1,1)};var tyOg=function(a){tyM(this,a,-1,tyNg)};tyj(tyOg,tyL);var tyNg=[3,4];tyOg.prototype.Zn=function(){return tyN(this,6)};var tyPg=function(a){tyM(this,a,-1,null)};tyj(tyPg,tyL);var tyQg=function(a){tyM(this,a,-1,null)};tyj(tyQg,tyL);tyQg.prototype.Bq=function(a){tyO(this,1,a)};tyQg.prototype.Jn=function(){return tyN(this,2)};var tySg=function(a){tyM(this,a,-1,tyRg)};tyj(tySg,tyL);var tyRg=[1,18,28];tySg.prototype.Nf=function(){return tyN(this,13)};tySg.prototype.Jn=function(){return tyN(this,14)};var tyTg=function(a){tyM(this,a,-1,null)};tyj(tyTg,tyL);tyTg.prototype.Kf=function(){return ty3f(this,tyPg,1)};tyTg.prototype.Cq=function(a){ty4f(this,a)};var tyUg=function(a){tyM(this,a,-1,null)};tyj(tyUg,tyL);tyUg.prototype.mk=function(){return tyN(this,2)};var tyVg=function(a){tyM(this,a,-1,null)};tyj(tyVg,tyL);var tyWg=function(a){tyM(this,a,-1,null)};tyj(tyWg,tyL);var tyXg=function(a){switch(a){case 3:return chrome.i18n.getMessage("6233107584508657559");case 4:case 9:case 10:case 13:case 14:return chrome.i18n.getMessage("7080245643233785574");case 7:return chrome.i18n.getMessage("548629550059508920");case 8:return chrome.i18n.getMessage("7194376132387780145");case 11:return chrome.i18n.getMessage("3782346097595894324");case 12:return chrome.i18n.getMessage("4082846773463542695");case 15:return chrome.i18n.getMessage("5029496897209707807");default:return chrome.i18n.getMessage("7664246845088850317")+
a}};chrome.i18n.getMessage("607779708716020188");for(var tyYg=0;63>tyYg;tyYg++);var tyZg=new tyI("d");var ty_g=function(){return"chrome-extension:"==tya.location.protocol};var ty0g=function(a){var b=new tyz;if(ty_g())if(tyb(tya.chrome.browser)&&tyb(tya.chrome.browser.openTab))tya.chrome.browser.openTab({url:a},function(){tya.chrome.runtime.lastError&&b.ca(tya.chrome.runtime.lastError.message);b.callback()});else{var c=(tyb(void 0)?void 0:tya).document.createElement("a");c.href=a;c.target="_blank";c.click();b.callback()}else window.open(a),b.callback()};var ty2g=function(a){tyy.call(this);this.Ic=new tyG;this.tj=!1;null!=a&&ty1g(this,a)};tyj(ty2g,tyy);var ty1g=function(a,b){if(a.tj){var c=new tyG(b),d=a.Ic.Oj(c),c=c.Oj(a.Ic);a.Ic.removeAll(d);a.Ic.addAll(c);if(0<d.Qb()||0<c.Qb())d=new ty3g(c.Ma(),d.Ma()),a.dispatchEvent(d)}else a.tj=!0,a.Ic.addAll(b),a.dispatchEvent("f")},ty3g=function(){tyq.call(this,"g")};tyj(ty3g,tyq);var ty4g=function(){tyy.call(this);this.vx=[];this.sx=[];this.Yi=null;this.getAuthToken(!1)};tyj(ty4g,tyy);ty=ty4g.prototype;ty.getAuthToken=function(a,b){var c=new tyz;tyb(b)&&c.addCallback(tyh(this.mq,this,b));c.addCallback(tyh(this.dw,this,a));c.callback();return c};ty.mq=function(a){var b=new tyz;chrome.identity.removeCachedAuthToken({token:a},function(){b.callback()});return b};
ty.dw=function(a){var b=new tyz;chrome.identity.getAuthToken({interactive:a},tyh(function(a){if(tyb(a)){var d=null===this.Yi;this.Yi=tyi();b.callback(a);d&&this.dispatchEvent("b")}else b.ca(Error("The user is not signed in."))},this));return b};
ty.lw=function(a){var b=new tyz,c={Authorization:"Bearer "+a};this.Bs=a;tyuf("https://www.googleapis.com/oauth2/v1/userinfo?alt=json",function(a){a=a.target;a.vp()?(a=JSON.parse(a.It()),b.callback(a.email)):b.ca(a.getStatus())},"GET",null,c);b.addCallback(this.Zw,this);return b};
ty.Nf=function(){if(tyb(this.Cm))return tygd(this.Cm);var a=new tyz;a.addCallback(tyh(this.getAuthToken,this,!1));a.addCallback(this.lw,this);tybd(a,function(a){if(401==a)return a=new tyz,a.addCallback(tyh(this.mq,this,this.Bs)),a.addCallback(tyhd),a.callback(),a},this);a.callback();return a};ty.Zw=function(a){tyb(this.jj)&&(tya.clearTimeout(this.jj),this.jj=void 0);this.Cm=a;this.jj=tyRe(function(){this.jj=this.Cm=void 0},36E5,this)};
ty.Gn=function(){return null==this.Yi||144E5<tyi()-this.Yi?1:0<this.vx.length?3:0<this.sx.length?4:2};var ty5g=function(a,b){var c;c=b instanceof tyBf?b:tyRf(b);if(c.ed||c.Ac||null!=c.Ed)return null;if(a){if(a.rb&&c.rb&&"/"!=c.rb.charAt(0)){var d=a.rb;"/"!=d.charAt(d.length-1)&&(d+="/");var e=new tyBf(a);tyFf(e,d+c.rb);""!==c.Tb.toString()&&e.Nw(c.jk());c.Pd&&tyHf(e,c.Pd);return e}return a.resolve(c)}return c};var ty6g=function(a,b){this.dg=a;this.zm=b;this.constructor.Sm||(this.constructor.Sm={});this.constructor.Sm[this.toString()]=this};ty6g.prototype.fl=function(){return this.toString()};ty6g.prototype.toString=function(){this.ir||(this.ir=this.dg.ik()+":"+this.zm);return this.ir};var ty7g=function(a,b){ty6g.call(this,a,b)};tyj(ty7g,ty6g);var ty8g=function(a){this.ee=a};ty8g.prototype.ik=function(){return this.ee};new ty8g("lib");var ty$g=function(a){typ.call(this);this.le={};this.Gk={};this.Ji={};this.ke={};this.Xm={};this.Lp={};this.An=a?a.An:new tyy;this.cx=!a;this.lg=null;a?(this.lg=a,this.Ji=a.Ji,this.ke=a.ke,this.Gk=a.Gk,this.Xm=a.Xm):tyi();a=ty9g(this);this!=a&&(a.hh?a.hh.push(this):a.hh=[this])};tyj(ty$g,typ);Math.random();var ty9g=function(a){for(;a.lg;)a=a.lg;return a};
ty$g.prototype.get=function(a){var b;a:{for(b=this;b;b=b.lg){if(b.isDisposed())throw Error("AppContext is disposed.");if(b.le[a]){b=b.le[a][0];break a}if(b.Lp[a])break}if(b=this.Ji[a]){b=b(this);if(null==b)throw Error("Factory method for service "+a+" returned null or undefined.");tyP(this,a,b)}else b=null}if(null==b)throw new tyah(a);return b};
var tybh=function(a,b){return!(!a.le[b]&&!a.Ji[b])},tyP=function(a,b,c){if(a.isDisposed())tyCb(c);else{a.le[b]=[c,!0];c=tych(a,a,b);for(var d=0;d<c.length;d++)c[d].callback(null);delete a.Gk[b]}},tych=function(a,b,c){var d=[],e=a.ke[c];e&&(tyPa(e,function(a){var c;a:{for(c=a.vs;c;){if(c==b){c=!0;break a}c=c.lg}c=!1}c&&(d.push(a.d),tyXa(e,a))}),0==e.length&&delete a.ke[c]);return d},tydh=function(a,b){a.ke&&tyne(a.ke,function(a,d,e){tyPa(a,function(d){d.vs==b&&tyXa(a,d)});0==a.length&&delete e[d]})};
ty$g.prototype.D=function(){if(ty9g(this)==this){var a=this.hh;if(a)for(;a.length;)a[0].W()}else for(var a=ty9g(this).hh,b=0;b<a.length;b++)if(a[b]==this){a.splice(b,1);break}for(var c in this.le)a=this.le[c],a[1]&&"undefined"!=typeof a[0].W&&a[0].W();this.le=null;this.cx&&this.An.W();tydh(this,this);this.ke=null;tyCb(this.Wv);this.Lp=this.Wv=null;ty$g.B.D.call(this)};var tyah=function(a){typa.call(this);this.id=a;this.message='Service for "'+a+'" is not registered'};tyj(tyah,typa);var tyeh=new ty8g("fva");
new ty7g(tyeh,1);var tyfh=function(){if(null==tya.APPCONTEXT)throw"No registered AppContext.";return tya.APPCONTEXT};var tygh=function(){tyy.call(this)};tyj(tygh,tyy);tygh.prototype.Bo=function(a){return ty5g(null,a||"")};var tyhh=new tyI("e");new tyI("f");new tyI("g");new tyI("h");new tyI("i");new tyI("j");var tyih=new tyI("k"),tyjh=new tyI("l");new tyI("m");new tyI("n");var tykh=window.PERSISTENT,tylh=window.TEMPORARY;var tymh=function(a){this.vc=a};tymh.prototype.get=function(a,b){var c=new tyz;this.vc.get(a,function(d){var e=chrome.runtime?chrome.runtime.lastError:void 0;e?c.ca(e):(d=d[a],c.callback(tyb(d)?d:b))});return c};tymh.prototype.set=function(a,b){var c=new tyz,d={};d[a]=b;this.vc.set(d,function(){var a=chrome.runtime?chrome.runtime.lastError:void 0;a?c.ca(a):c.callback()});return c};
tymh.prototype.clear=function(){var a=new tyz;this.vc.clear(function(){var b=chrome.runtime?chrome.runtime.lastError:void 0;b?a.ca(b):a.callback()});return a};var tynh=function(a,b,c){typ.call(this);this.Jk=a;this.Yd=b||0;this.Uc=c;this.Gs=tyh(this.at,this)};tyj(tynh,typ);ty=tynh.prototype;ty.Na=0;ty.D=function(){tynh.B.D.call(this);this.stop();delete this.Jk;delete this.Uc};ty.start=function(a){this.stop();this.Na=tyRe(this.Gs,tyb(a)?a:this.Yd)};ty.stop=function(){this.Uf()&&tya.clearTimeout(this.Na);this.Na=0};ty.Uf=function(){return 0!=this.Na};ty.at=function(){this.Na=0;this.Jk&&this.Jk.call(this.Uc)};var typh=function(a){tyy.call(this);this.xw=a||tyoh};tyj(typh,tyy);var tyoh=tyRf("https://play.google.com/music/"),tyqh=function(a){if(!tybh(a,tyhh)){var b=new typh;tyP(a,tyhh,b);return tygd()}a=new tyz;a.callback();return a};typh.prototype.Bo=function(a){return ty5g(this.xw,a||"")};new tyI("o");new tyI("p");new tyI("q");new tyI("r");new tyI("s");new tyI("t");var tyrh=new tyI("u");new tyI("v");new tyI("w");new tyI("x");new tyI("y");new tyI("z");new tyI("A");new tyI("B");new tyI("C");new tyI("D");new tyI("E");new tyI("F");new tyI("G");new tyI("H");new tyI("I");new tyI("J");new tyI("K");var tyth=function(a,b){tyy.call(this);this.T=a.get(tyYf);this.mi=new tymh(b);this.bh=new tyo;this.Fs=tysh(this)};tyj(tyth,tyy);
var tyuh={Cx:"lsAlwaysUseDefaultDownloadLocation",Fx:"lsAppActivated",Xx:"lsDefaultDownloadLocationId",$x:"lsDragAndDropActivated",ry:"lsLastTrackFailureLoggingTime",uy:"miniPlayerAlwaysOnTop",sz:"lsSyncMusicEnabled",cs:"lsUploadStatusIndicatorDismissed",fA:"lsUserAddedMusicSourceIds",hA:"lsUserSelectedDownloadDirId",lA:"lsVolume",nz:"lsSJFEBase"},tysh=function(a){var b=new tyz;tym(tyab(tyuh),function(a){b.addCallback(tyh(this.mi.get,this.mi,a,null));b.addCallback(function(b){this.bh.set(a,b)},this)},
a);b.callback();return b},tyvh=function(a,b){if(tyb(b))if(a.bh.get("miniPlayerAlwaysOnTop")===b)tygd(b);else{a.bh.set("miniPlayerAlwaysOnTop",b);var c=new tyz;c.addCallback(tyh(a.mi.set,a.mi,"miniPlayerAlwaysOnTop",b));tyA(c,function(){this.dispatchEvent({type:"v",value:b})},function(){},a);c.callback()}else tyhd(Error("LocalSettings can not store undefined value."))};tyth.prototype.Qt=function(a){var b=new tyz;tycd(b,this.Fs);b.addCallback(function(){return this.bh.get(a)},this);b.callback();return b};
var tywh=function(a){var b=new tyz;b.addCallback(tyh(a.Qt,a,"miniPlayerAlwaysOnTop"));b.addCallback(function(a){return"boolean"==typeof a&&a?!0:!1});b.callback();return b};var tyzh=function(a,b){tyb(a.name)?(this.name=a.name,this.code=tyxh[a.name]):(this.code=a.code,this.name=tyyh(a.code));typa.call(this,tyra("%s %s",this.name,b))};tyj(tyzh,typa);
var tyyh=function(a){var b=tydb(tyxh,function(b){return a==b});if(!tyb(b))throw Error("Invalid code: "+a);return b},tyxh={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};var tyAh=function(a,b){tyq.call(this,a.type,b);this.Oc=a};tyj(tyAh,tyq);var tyBh=function(a){a=a.slice(0,a.lastIndexOf("/")+1);/^\/+$/.test(a)||(a=a.replace(/\/+$/,""));return a};var tyCh=function(a){tyy.call(this);this.dd=a;this.dd.onwritestart=tyh(this.Ae,this);this.dd.onprogress=tyh(this.Ae,this);this.dd.onwrite=tyh(this.Ae,this);this.dd.onabort=tyh(this.Ae,this);this.dd.onerror=tyh(this.Ae,this);this.dd.onwriteend=tyh(this.Ae,this)};tyj(tyCh,tyy);tyCh.prototype.abort=function(){try{this.dd.abort()}catch(a){throw new tyzh(a,"aborting save");}};tyCh.prototype.Le=function(){return this.dd.readyState};tyCh.prototype.Ae=function(a){this.dispatchEvent(new tyAh(a,this))};
tyCh.prototype.D=function(){delete this.dd;tyCh.B.D.call(this)};var tyDh=function(a){tyCh.call(this,a);this.Em=a};tyj(tyDh,tyCh);tyDh.prototype.Yn=function(){return this.Em.length};tyDh.prototype.write=function(a){try{this.Em.write(a)}catch(b){throw new tyzh(b,"writing file");}};tyDh.prototype.seek=function(a){try{this.Em.seek(a)}catch(b){throw new tyzh(b,"seeking in file");}};var tyEh=function(a,b){this.Wb=a;this.De=b};ty=tyEh.prototype;ty.isFile=function(){return this.De.isFile};ty.getName=function(){return this.De.name};ty.Dc=function(){return this.De.fullPath};ty.copyTo=function(a,b){var c=new tyz;this.De.copyTo(a.ze,b,tyh(function(a){c.callback(a.isFile?new tyFh(this.Wb,a):new tyGh(this.Wb,a))},this),tyh(function(d){var e="copying "+this.Dc()+" into "+a.Dc()+(b?", renaming to "+b:"");c.ca(new tyzh(d,e))},this));return c};
ty.remove=function(){var a=new tyz;this.De.remove(tyh(a.callback,a,!0),tyh(function(b){var c="removing "+this.Dc();a.ca(new tyzh(b,c))},this));return a};ty.getParent=function(){var a=new tyz;this.De.getParent(tyh(function(b){a.callback(new tyGh(this.Wb,b))},this),tyh(function(b){var c="getting parent of "+this.Dc();a.ca(new tyzh(b,c))},this));return a};var tyGh=function(a,b){tyEh.call(this,a,b);this.ze=b};tyj(tyGh,tyEh);
tyGh.prototype.getFile=function(a,b){var c=new tyz;this.ze.getFile(a,tyHh(b),tyh(function(a){c.callback(new tyFh(this.Wb,a))},this),tyh(function(b){var e="loading file "+a+" from "+this.Dc();c.ca(new tyzh(b,e))},this));return c};tyGh.prototype.getDirectory=function(a,b){var c=new tyz;this.ze.getDirectory(a,tyHh(b),tyh(function(a){c.callback(new tyGh(this.Wb,a))},this),tyh(function(b){var e="loading directory "+a+" from "+this.Dc();c.ca(new tyzh(b,e))},this));return c};
tyGh.prototype.pn=function(a){function b(a){if(!d.length)return tygd(a);var c=d.shift();return(".."==c?a.getParent():"."==c?tygd(a):a.getDirectory(c,2)).addCallback(b)}if(0==a.lastIndexOf("/",0)){var c=this.Wb.kk();if(this.Dc()!=c.Dc())return c.pn(a)}var d=tyQa(a.split("/"),ty4a);return b(this)};var tyHh=function(a){return 2==a?{create:!0}:3==a?{create:!0,exclusive:!0}:{}},tyFh=function(a,b){tyEh.call(this,a,b);this.mt=b};tyj(tyFh,tyEh);
tyFh.prototype.createWriter=function(){var a=new tyz;this.mt.createWriter(function(b){a.callback(new tyDh(b))},tyh(function(b){var c="creating writer for "+this.Dc();a.ca(new tyzh(b,c))},this));return a};var tyIh=function(a){this.Wb=a};tyIh.prototype.getName=function(){return this.Wb.name};tyIh.prototype.kk=function(){return new tyGh(this,this.Wb.root)};var tyJh=function(a,b){var c=tya.requestFileSystem||tya.webkitRequestFileSystem;if(!tyf(c))return tyhd(Error("File API unsupported"));var d=new tyz;c(a,b,function(a){d.callback(new tyIh(a))},function(a){d.ca(new tyzh(a,"requesting filesystem"))});return d},tyKh=function(a){return tyJh(0,a)},tyLh=function(a){return tyJh(1,a)},tyMh=function(a){var b=tya.BlobBuilder||tya.WebKitBlobBuilder;if(tyb(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=tyZa(arguments);
c=tya.BlobBuilder||tya.WebKitBlobBuilder;if(tyb(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(tyb(tya.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b};var tyNh=function(a,b){this.sf=new tyz;this.zk(a,b)};tyNh.prototype.zk=function(a,b){tyA(tyOh(a,b).addCallback(function(){return(a==tykh?tyLh:tyKh)(b)},this),function(a){this.Wb=a;this.sf.callback()},function(){},this)};
var tyOh=function(a,b){var c=new tyz;(a==tykh?navigator.webkitPersistentStorage:navigator.webkitTemporaryStorage).requestQuota(b,function(a){c.callback(a)},function(a){c.callback(a)});return c},tyPh=function(a,b){var c=new tyz;a.sf.Kd().addCallback(function(){var a=this.Wb.kk(),e=tyBh(b).split("/"),f=tyh(function(a){for(var b="";tysa(b)&&0!=e.length;)b=e.shift();b.length?tyA(a.getDirectory(b,2),function(a){e.length?f(a):c.callback(a)},function(a){c.ca(a)},this):c.callback(a)},this);f(a)},a);return c},
tyQh=function(a,b){var c=b.slice(b.lastIndexOf("/")+1),d=new tyz;tyA(tyPh(a,b).addCallback(function(a){return a.getFile(c,2)}),function(a){d.callback(a)},function(a){d.ca(a)},a);return d};
tyNh.prototype.write=function(a,b,c){var d=new tyz,e,f=tyh(function(a){d.ca(a)},this);tyA(tyQh(this,a).addCallback(function(a){e=a;return e.createWriter()}),function(a){a.addEventListener("writeend",function(){d.callback(e)});a.addEventListener("error",f);a.Yn()>=b.byteLength+c?(a.seek(c),a.write(tyMh(b))):d.ca(Error("Tried to write past the preallocated file size"))},f,this);return d};
var tyRh=function(a){var b=new tyNh(tykh,1073741824);tyP(a,tyih,b)},tySh=function(a){var b=new tyNh(tylh,536870912);tyP(a,tyjh,b)};var tyTh=new tyI("L"),tyUh=new tyI("M");new tyI("N");new tyI("O");var tyVh=function(a){a.get(tyjh);this.cq=a.get(tyih);this.T=a.get(tyYf)},tyWh=function(a){tybh(a,tyTh)||tyP(a,tyTh,new tyVh(a));a.get(tyTh)},tyXh=function(a){var b=new tyz;tyA(tyPh(a,"/"),function(){b.callback(a.Wb)},function(a){b.ca(a)});return b};tyVh.prototype.Dt=function(){return tyXh(this.cq)};tyVh.prototype.Et=function(){return tyPh(this.cq,"/")};
tyVh.prototype.Io=function(a,b){var c=new tyz;chrome.fileSystem.chooseEntry({type:"openDirectory"},function(d){null!=d?chrome.fileSystem.getDisplayPath(d,function(a){a={entry:new tyGh(new tyIh(d.filesystem),d),name:a,qw:b?chrome.fileSystem.retainEntry(d):void 0};c.callback(a)}):c.cancel(a||!1)});return c};new tyI("P");new tyI("Q");new tyI("R");new tyI("S");var tyYh=new tyI("T");new tyI("U");new tyI("V");new tyI("W");var tyZh=new tyI("X");new tyI("Y");var ty_h=function(a,b,c){tyq.call(this,"K");this.messageType=a;this.message=b;this.rn=c};tyj(ty_h,tyq);var ty0h=function(a,b,c){tyq.call(this,a.toString());this.message=b;this.rn=c};tyj(ty0h,tyq);var ty1h=function(a){tyy.call(this);this.Vj=a;this.Na=tyIa();this.I=new tyF(this);tyBb(this,tyla(tyCb,this.I));this.Ak()};tyj(ty1h,tyy);ty=ty1h.prototype;ty.Ak=function(){this.I.listen(this.Vj,"J",this.$t);this.I.listen(this.Vj,"K",this.fu)};ty.$t=function(){this.dispatchEvent("L");this.W()};ty.fu=function(a){this.dispatchEvent(new ty0h(a.messageType.toString(),a.message,a.rn))};ty.Kh=function(){return this.Na};ty.sendMessage=function(a,b,c){this.Vj.sendMessage(a,b,c)};var ty2h=function(){tyy.call(this);this.cj=[];this.wh=new tyo;this.Ms=null};tyj(ty2h,tyy);var ty3h=function(a,b,c,d){var e=a.wh.get(b.Kh());tyb(e)||(e=new tyF(a),a.wh.set(b.Kh(),e),tyBb(a,tyla(tyCb,e)));e.listen(b,c.toString(),d)};ty2h.prototype.Qm=function(){};ty2h.prototype.forEach=function(a){tym(this.cj,function(b){try{a.call(this,b)}catch(c){this.Ms.wx(),this.xn(b)}},this)};ty2h.prototype.xn=function(a){tyXa(this.cj,a);var b=this.wh.get(a.Kh());tyb(b)&&(this.wh.remove(a.Kh()),b.W())};var ty4h=function(a){ty1h.call(this,a)};tyj(ty4h,ty1h);var ty5h=function(a){switch(a){case 3:return tyLg;case 4:return tyfg;case 6:return null;case 7:return tytg;case 8:return null;case 9:return tybg;case 10:return null;case 11:return null;case 12:return ty9f;case 13:return null;case 14:return null;case 15:return tyMg;case 16:return tycg;case 17:return tydg;case 18:return null;case 19:return null;case 20:return null;case 21:return tyrg;case 22:return null;case 23:return null;case 24:return null;case 25:return null;case 26:return ty8f;case 27:return tyVg;
case 28:return tyog;case 29:return null;case 101:return tyOg;case 102:return tyJg;case 103:return tyGg;case 104:return tyig;case 105:return tylg;case 108:return ty$f;case 109:return tyEg;case 110:return typg;case 111:return tyqg;case 112:return ty7f;case 201:return tyCg;case 202:return tyBg;case 203:return tyAg;case 204:return tyzg;case 205:return tyug;case 316:return tyvg;case 317:return tyxg;case 206:return null;case 207:return null;case 208:return tyag;case 209:return tyUg;case 301:return null;
case 302:return tyjg;case 303:return tyeg;case 304:return null;case 305:return tyhg;case 306:return null;case 307:return tymg;case 308:return null;case 309:return null;case 312:return null;case 314:return tykg;case 313:return tyTg;case 319:return tyHg;case 30:return tywg;case 31:return null;case 320:return tyWg;default:return null}},ty6h;for(ty6h in ty1f);var ty8h=function(a){tyy.call(this);this.xr=a;this.xv=++ty7h};tyj(ty8h,tyy);var ty7h=0;ty8h.prototype.toString=function(){return"<EventPort."+this.xv+">"};ty8h.prototype.sendMessage=function(a,b,c){chrome.runtime.sendMessage({type:a,message:tyb(b)?b.lb:void 0,dataBuffer:c,sentFrom:this.xr})};var ty9h=function(a){ty1h.call(this,a)};tyj(ty9h,ty4h);ty9h.prototype.fj=function(a){var b=new tyMg;ty4f(b,a);this.sendMessage(15,b)};var ty$h=function(a,b,c,d,e,f){var g=new ty$f;g.Aq(b);tyb(c)&&tyO(g,2,c);tyb(d)&&g.setVolume(d);tyb(e)&&g.setTime(e);tyb(f)&&g.Kw(f);a.sendMessage(108,g)},tyai=function(a,b){var c=new ty9h(b);tyP(a,tyZh,c);return c};var tybi,tyci=function(){if(null==tybi)throw"No registered ExperimentsManager.";return tybi};var tydi=new tyPg([2,100,-1,15,1E4,60,4,"/s/16eb9c9a8fc995bbcd437210188b077f/","http://www.google.com/support/music/bin/answer.py?answer=1229970",,"https://play.google.com/store/search?c=music&q=","https://play.google.com/about/play-terms.html","https://www.google.com/policies/privacy/","https://play.google.com/store/search?c=music&feature=music_play_menu&q=",18E4,,1E3,[[[1,10],[2,15],[3,10,5],[4,10,5],[5,10,5],[6,5,3],[7,10,4],[8,30]]],500,"http://www.google.com/support/music/bin/answer.py?answer=1229970",
"http://www.google.com/support/music/bin/answer.py?answer=1075570&topic=1234609",,"unknown",,"https://play.google.com/log","F05C50C9",1E4,"",1,0,5E3,15E3,105834,"https://play.google.com/play/log",["OWQxOTZmMTQtOGU5Ny00NzIy","a790bb39c49dbf094a22ee9f","LWJmN2QtMjcyNjU3OTgzOWZm","ZTlkZjY4YTEyOTA2ZDI4NDgx"],"//chromeos-registration.googleapis.com/js/echo_provider_api.js",-7,9E5,"https://wallet.google.com/inapp/lib/buy.js","AIzaSyBY4_QBkKwyv5DMlVISeJbBQEJCmh-VyIU","1054447039124-vf2v0safagbrkl8bmf2p5dib5cv33p60.apps.googleusercontent.com",
"https://support.google.com/googleplay/?p=music_subscription_more_info","https://www.googleapis.com/musicqueue/v1.0/","1.0.0","",2E4,"prod",[1428516E6]]);var tyei=function(){tyy.call(this);this.$j=tyb(tya.FLAGS)?new tyPg(tya.FLAGS):tydi};tyj(tyei,tyy);tyca(tyei);tyei.prototype.Kf=function(){return this.$j};tyei.prototype.Cq=function(a){var b=this.$j;if(b==a||b&&a&&b instanceof a.constructor&&ty5f(b.lb,a.lb))return!1;this.$j=a;this.dispatchEvent("M");return!0};new tySg(tya.USER_CONTEXT);new tyI("Z");var tyfi=["MusicManager.log","Peer.db","ServerDatabase.db"];var tygi;
tygi={Gr:["BC","AD"],Fr:["Before Christ","Anno Domini"],Lr:"JFMAMJJASOND".split(""),Yr:"JFMAMJJASOND".split(""),Ir:"January February March April May June July August September October November December".split(" "),Xr:"January February March April May June July August September October November December".split(" "),Tr:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),$r:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ds:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),bs:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Vr:"Sun Mon Tue Wed Thu Fri Sat".split(" "),as:"Sun Mon Tue Wed Thu Fri Sat".split(" "),wy:"SMTWTFS".split(""),Zr:"SMTWTFS".split(""),Ur:["Q1","Q2","Q3","Q4"],Pr:["1st quarter","2nd quarter","3rd quarter","4th quarter"],zr:["AM","PM"],Fm:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Om:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Dr:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Jm:6,mA:[5,6],Km:5};var tyhi=function(a,b,c,d,e,f){tye(a)?(this.Hb="y"==a?b:0,this.Cb="m"==a?b:0,this.nb="d"==a?b:0,this.hb="h"==a?b:0,this.Za="n"==a?b:0,this.jb="s"==a?b:0):(this.Hb=a||0,this.Cb=b||0,this.nb=c||0,this.hb=d||0,this.Za=e||0,this.jb=f||0)};ty=tyhi.prototype;
ty.Dg=function(a){var b=Math.min(this.Hb,this.Cb,this.nb,this.hb,this.Za,this.jb),c=Math.max(this.Hb,this.Cb,this.nb,this.hb,this.Za,this.jb);if(0>b&&0<c)return null;if(!a&&0==b&&0==c)return"PT0S";c=[];0>b&&c.push("-");c.push("P");(this.Hb||a)&&c.push(Math.abs(this.Hb)+"Y");(this.Cb||a)&&c.push(Math.abs(this.Cb)+"M");(this.nb||a)&&c.push(Math.abs(this.nb)+"D");if(this.hb||this.Za||this.jb||a)c.push("T"),(this.hb||a)&&c.push(Math.abs(this.hb)+"H"),(this.Za||a)&&c.push(Math.abs(this.Za)+"M"),(this.jb||
a)&&c.push(Math.abs(this.jb)+"S");return c.join("")};ty.Ba=function(a){return a.Hb==this.Hb&&a.Cb==this.Cb&&a.nb==this.nb&&a.hb==this.hb&&a.Za==this.Za&&a.jb==this.jb};ty.clone=function(){return new tyhi(this.Hb,this.Cb,this.nb,this.hb,this.Za,this.jb)};ty.zd=function(){return 0==this.Hb&&0==this.Cb&&0==this.nb&&0==this.hb&&0==this.Za&&0==this.jb};ty.add=function(a){this.Hb+=a.Hb;this.Cb+=a.Cb;this.nb+=a.nb;this.hb+=a.hb;this.Za+=a.Za;this.jb+=a.jb};
var tyki=function(a,b,c){tyfa(a)?(this.date=tyii(a,b||0,c||1),tyji(this,c||1)):tyg(a)?(this.date=tyii(a.getFullYear(),a.getMonth(),a.getDate()),tyji(this,a.getDate())):(this.date=new Date(tyi()),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0))},tyii=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};ty=tyki.prototype;ty.Ah=tygi.Jm;ty.Bh=tygi.Km;
ty.clone=function(){var a=new tyki(this.date);a.Ah=this.Ah;a.Bh=this.Bh;return a};ty.getFullYear=function(){return this.date.getFullYear()};ty.getYear=function(){return this.getFullYear()};ty.getMonth=function(){return this.date.getMonth()};ty.getDate=function(){return this.date.getDate()};ty.getTime=function(){return this.date.getTime()};ty.getDay=function(){return this.date.getDay()};ty.getUTCFullYear=function(){return this.date.getUTCFullYear()};ty.getUTCMonth=function(){return this.date.getUTCMonth()};
ty.getUTCDate=function(){return this.date.getUTCDate()};ty.getUTCHours=function(){return this.date.getUTCHours()};ty.getUTCMinutes=function(){return this.date.getUTCMinutes()};ty.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};var tyli=function(a){a=a.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+tyk(c,2)+":"+tyk(b,2)}return a};ty=tyki.prototype;ty.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
ty.setFullYear=function(a){this.date.setFullYear(a)};ty.setMonth=function(a){this.date.setMonth(a)};ty.setDate=function(a){this.date.setDate(a)};ty.setTime=function(a){this.date.setTime(a)};
ty.add=function(a){if(a.Hb||a.Cb){var b=this.getMonth()+a.Cb+12*a.Hb,c=this.getYear()+Math.floor(b/12),b=b%12;0>b&&(b+=12);var d;a:{switch(b){case 1:d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.nb&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.nb),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),
this.setDate(a.getDate()),tyji(this,a.getDate()))};ty.Dg=function(a,b){return[this.getFullYear(),tyk(this.getMonth()+1,2),tyk(this.getDate(),2)].join(a?"-":"")+(b?tyli(this):"")};ty.Ba=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};ty.toString=function(){return this.Dg()};var tyji=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};tyki.prototype.valueOf=function(){return this.date.valueOf()};
var tymi=function(a,b,c,d,e,f,g){this.date=tyfa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a?a.getTime():tyi())};tyj(tymi,tyki);ty=tymi.prototype;ty.getHours=function(){return this.date.getHours()};ty.getMinutes=function(){return this.date.getMinutes()};ty.getSeconds=function(){return this.date.getSeconds()};ty.getUTCHours=function(){return this.date.getUTCHours()};ty.getUTCMinutes=function(){return this.date.getUTCMinutes()};ty.setHours=function(a){this.date.setHours(a)};
ty.setMinutes=function(a){this.date.setMinutes(a)};ty.setSeconds=function(a){this.date.setSeconds(a)};ty.setMilliseconds=function(a){this.date.setMilliseconds(a)};ty.setUTCHours=function(a){this.date.setUTCHours(a)};ty.add=function(a){tyki.prototype.add.call(this,a);a.hb&&this.setHours(this.date.getHours()+a.hb);a.Za&&this.setMinutes(this.date.getMinutes()+a.Za);a.jb&&this.setSeconds(this.date.getSeconds()+a.jb)};
ty.Dg=function(a,b){var c=tyki.prototype.Dg.call(this,a);return a?c+" "+tyk(this.getHours(),2)+":"+tyk(this.getMinutes(),2)+":"+tyk(this.getSeconds(),2)+(b?tyli(this):""):c+"T"+tyk(this.getHours(),2)+tyk(this.getMinutes(),2)+tyk(this.getSeconds(),2)+(b?tyli(this):"")};ty.Ba=function(a){return this.getTime()==a.getTime()};ty.toString=function(){return this.Dg()};ty.clone=function(){var a=new tymi(this.date);a.Ah=this.Ah;a.Bh=this.Bh;return a};new tyI("$");var tyni=new tyI("aa");var tyoi=function(a){this.Cc=a.get(tyTh)};ty=tyoi.prototype;ty.Lt=function(){var a=new tyz;a.addCallback(this.Cc.Dt,this.Cc);a.addCallback(function(a){this.Tq=a.kk()},this);a.callback();return a};ty.Ps=function(){var a=new tyz;tyfi.forEach(function(b){a.addCallback(tyh(this.Qs,this,b))},this);a.addCallback(this.Os,this);a.callback();return a};
ty.Qs=function(a){var b=new tyz;b.addCallback(function(a){return this.Tq.getFile(a)},this);tyA(b,function(a){return a.copyTo(this.dr)},function(){return tygd()},this);b.callback(a);return b};ty.Os=function(){var a=new tyz;a.addCallback(function(){return this.Tq.getDirectory("MusicChromeAppLogs",1)},this);tyA(a,function(a){return a.copyTo(this.dr)},function(){return tygd()},this);a.callback();return a};
ty.Ss=function(a){var b=new tyz,c=(new tymi).getTime();a=a.entry;b.addCallback(tyla(a.pn,"google_play_music_logs_"+c),a);b.addCallback(function(a){this.dr=a},this);b.callback();return b};var typi=tyr("Firefox"),tyqi=tyRb()||tyr("iPod"),tyri=tyr("iPad"),tysi=tyr("Android")&&!(tyPb()||tyr("Firefox")||tyNb()||tyr("Silk")),tyti=tyPb(),tyui=tyr("Safari")&&!(tyPb()||tyr("Coast")||tyNb()||tyOb()||tyr("Silk")||tyr("Android"))&&!(tyRb()||tyr("iPad")||tyr("iPod"));var tyvi=function(a){return(a=a.exec(tyKb))?a[1]:""},tywi=function(){if(typi)return tyvi(/Firefox\/([0-9.]+)/);if(tys||tySb)return ty1b;if(tyti)return tyvi(/Chrome\/([0-9.]+)/);if(tyui&&!(tyRb()||tyr("iPad")||tyr("iPod")))return tyvi(/Version\/([0-9.]+)/);if(tyqi||tyri){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(tyKb))return a[1]+"."+a[2]}else if(tysi)return(a=tyvi(/Android\s+([0-9.]+)/))?a:tyvi(/Version\/([0-9.]+)/);return""}();var tyxi=tyRf("/music/listen"),tyyi=function(a){var b;b=tyb(void 0)?void 0:tyxi;var c=tyfh();if(!tybh(c,tyhh)){var d=new tygh;tyP(c,tyhh,d)}b=c.get(tyhh).Bo(b);if(null!==b)return tyb(a)&&(tyQf(b,"utm_source",a),tyQf(b,"utm_medium","chrome_app"),tyQf(b,"utm_campaign","chrome")),b.toString()};tys&&tyv(8);var tyzi={},tyAi={},tyBi={},tyCi=function(){throw Error("Do not instantiate directly");};tyCi.prototype.kh=null;tyCi.prototype.getContent=function(){return this.content};tyCi.prototype.toString=function(){return this.content};var tyDi=function(a){if(!tyg(a))return String(a);if(a instanceof tyCi){if(a.Nd===tyzi)return tyMa(a.getContent());if(a.Nd===tyBi)return tyCa(a.getContent())}return"zSoyz"},tyEi={};var tyFi=function(a,b){null!=a&&this.append.apply(this,arguments)};ty=tyFi.prototype;ty.Kb="";ty.set=function(a){this.Kb=""+a};ty.append=function(a,b,c){this.Kb+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Kb+=arguments[d];return this};ty.clear=function(){this.Kb=""};ty.Yn=function(){return this.Kb.length};ty.toString=function(){return this.Kb};var tyGi=function(a){if(null!=a)switch(a.kh){case 1:return 1;case -1:return-1;case 0:return 0}return null},tyHi=function(){tyCi.call(this)};tyj(tyHi,tyCi);tyHi.prototype.Nd=tyzi;var tyIi=function(a){return null!=a&&a.Nd===tyzi?a:a instanceof tyod?tyQ(typd(a),a.Ln()):tyQ(tyCa(String(String(a))),tyGi(a))},tyJi=function(a,b){this.content=String(a);this.kh=null!=b?b:null};tyj(tyJi,tyCi);tyJi.prototype.Nd=tyBi;
var tyQ=function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=new b(String(a));void 0!==d&&(e.kh=d);return e}}(tyHi),tyKi=function(a){return(a=String(a))?new tyJi(a,void 0):""};(function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new b(e);void 0!==d&&(e.kh=d);return e}})(tyHi);
var tyNi=function(a){return String(a).replace(tyLi,"").replace(tyMi,"&lt;")},tyPi=function(a){return null!=a&&a.Nd===tyzi?tyOi(tyNi(a.getContent())):tyCa(String(a))},tyTi=function(a){return null!=a&&a.Nd===tyzi?(a=tyNi(a.getContent()),String(a).replace(tyQi,tyRi)):String(a).replace(tySi,tyRi)},tyXi=function(a){if(null!=a&&a.Nd===tyAi)return String(a).replace(tyUi,tyVi);a instanceof tymd?(a=a instanceof tymd&&a.constructor===tymd&&a.Rr===tyld?a.$e:"type_error:SafeUrl",a=String(a).replace(tyUi,tyVi)):
(a=String(a),a=tyWi.test(a)?a.replace(tyUi,tyVi):"#zSoyz");return a},tyYi={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},tyRi=function(a){return tyYi[a]},tyZi={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07",
"\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8",
"\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},tyVi=function(a){return tyZi[a]},ty_i=/[\x00\x22\x27\x3c\x3e]/g,tySi=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
tyQi=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,tyUi=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,tyWi=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,tyOi=function(a){return String(a).replace(ty_i,tyRi)},tyLi=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,tyMi=/</g;var ty0i=function(){this.kq=tyi()};new ty0i;ty0i.prototype.set=function(a){this.kq=a};ty0i.prototype.reset=function(){this.set(tyi())};ty0i.prototype.get=function(){return this.kq};var ty1i=function(a){if(a.classList)return a.classList;a=a.className;return tye(a)&&a.match(/\S+/g)||[]},ty2i=function(a,b){return a.classList?a.classList.contains(b):tyn(ty1i(a),b)},tyR=function(a,b){a.classList?a.classList.add(b):ty2i(a,b)||(a.className+=0<a.className.length?" "+b:b)},ty3i=function(a,b){if(a.classList)tym(b,function(b){tyR(a,b)});else{var c={};tym(ty1i(a),function(a){c[a]=!0});tym(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}},
tyS=function(a,b){a.classList?a.classList.remove(b):ty2i(a,b)&&(a.className=tyQa(ty1i(a),function(a){return a!=b}).join(" "))},ty4i=function(a,b){a.classList?tym(b,function(b){tyS(a,b)}):a.className=tyQa(ty1i(a),function(a){return!tyn(b,a)}).join(" ")},tyT=function(a,b,c){c?tyR(a,b):tyS(a,b)};var ty5i=function(a){tyy.call(this);this.kj=a||window;this.Ik=tyx(this.kj,"resize",this.uu,!1,this);this.yg=tyEd(this.kj)};tyj(ty5i,tyy);var ty7i=function(){var a=window,b=tyia(a);return ty6i[b]=ty6i[b]||new ty5i(a)},ty6i={};ty5i.prototype.ud=function(){return this.yg?this.yg.clone():null};ty5i.prototype.D=function(){ty5i.B.D.call(this);this.Ik&&(tyxc(this.Ik),this.Ik=null);this.yg=this.kj=null};ty5i.prototype.uu=function(){var a=tyEd(this.kj);tytd(a,this.yg)||(this.yg=a,this.dispatchEvent("resize"))};var ty8i={Hm:".",Lm:",",Mm:"%",sj:"0",Or:"+",Hr:"-",Im:"E",Nm:"\u2030",oj:"\u221e",Kr:"NaN",Gm:"#,##0.###",Sr:"#E0",Nr:"#,##0%",Cr:"\u00a4#,##0.00",Er:"USD"},tyU=ty8i,tyU=ty8i;var ty9i=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};ty=ty9i.prototype;ty.getWidth=function(){return this.right-this.left};ty.getHeight=function(){return this.bottom-this.top};ty.clone=function(){return new ty9i(this.top,this.right,this.bottom,this.left)};ty.contains=function(a){return this&&a?a instanceof ty9i?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
ty.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};ty.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};ty.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var ty$i=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};ty=ty$i.prototype;ty.clone=function(){return new ty$i(this.left,this.top,this.width,this.height)};ty.lp=function(a){var b=Math.max(this.left,a.left),c=Math.min(this.left+this.width,a.left+a.width);if(b<=c){var d=Math.max(this.top,a.top);a=Math.min(this.top+this.height,a.top+a.height);if(d<=a)return this.left=b,this.top=d,this.width=c-b,this.height=a-d,!0}return!1};
ty.Oj=function(a){var b;b:{b=Math.max(this.left,a.left);var c=Math.min(this.left+this.width,a.left+a.width);if(b<=c){var d=Math.max(this.top,a.top),e=Math.min(this.top+this.height,a.top+a.height);if(d<=e){b=new ty$i(b,d,c-b,e-d);break b}}b=null}if(b&&b.height&&b.width){b=[];var c=this.top,d=this.height,e=this.left+this.width,f=this.top+this.height,g=a.left+a.width,h=a.top+a.height;a.top>this.top&&(b.push(new ty$i(this.left,this.top,this.width,a.top-this.top)),c=a.top,d-=a.top-this.top);h<f&&(b.push(new ty$i(this.left,
h,this.width,f-h)),d=h-c);a.left>this.left&&b.push(new ty$i(this.left,c,a.left-this.left,d));g<e&&b.push(new ty$i(g,c,e-g,d));a=b}else a=[this.clone()];return a};ty.contains=function(a){return a instanceof ty$i?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};ty.ud=function(){return new tysd(this.width,this.height)};
ty.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};ty.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};ty.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var tyaj=function(a,b){var c=tyC(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""},tybj=function(a,b){return tyaj(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]},tycj=function(a){return tybj(a,"position")},tyej=function(a,b,c){var d;b instanceof tyB?(d=b.x,b=b.y):(d=b,b=c);a.style.left=tydj(d,!1);a.style.top=tydj(b,!1)},tyfj=function(a){a=a?tyC(a):document;return!tys||ty4b(9)||ty3d(tyD(a))?a.documentElement:
a.body},tygj=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}tys&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},tyhj=function(a){if(tys&&!ty4b(8))return a.offsetParent;var b=tyC(a),c=tybj(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=tybj(a,"position"),d=d&&"static"==
c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null},tyjj=function(a){for(var b=new ty9i(0,Infinity,Infinity,0),c=tyD(a),d=c.Ia().body,e=c.Ia().documentElement,f=tyFd(c.Ga);a=tyhj(a);)if(!(tys&&0==a.clientWidth||tyu&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=tybj(a,"overflow")){var g=tyij(a),h=new tyB(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,
g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=tyEd(c.getWindow());b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null},tyij=function(a){var b=tyC(a),c=new tyB(0,0),d=tyfj(b);if(a==d)return c;a=tygj(a);b=ty4d(tyD(b));c.x=a.left+b.x;c.y=a.top+b.y;return c},tykj=function(a){a=tygj(a);return new tyB(a.left,
a.top)},tylj=function(a){if(1==a.nodeType)return tykj(a);var b=tyf(a.Xb),c=a;a.targetTouches&&a.targetTouches.length?c=a.targetTouches[0]:b&&a.Xb().targetTouches&&a.Xb().targetTouches.length&&(c=a.Xb().targetTouches[0]);return new tyB(c.clientX,c.clientY)},tymj=function(a,b,c){if(b instanceof tysd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=tydj(b,!0);a.style.height=tydj(c,!0)},tydj=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a},
tyoj=function(a){var b=tynj;if("none"!=tybj(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a},tynj=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=tyu&&!b&&!c;return tyb(b)&&!d||!a.getBoundingClientRect?new tysd(b,c):(a=tygj(a),new tysd(a.right-a.left,a.bottom-a.top))},typj=function(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=
b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")},tyV=function(a,b){a.style.display=b?"":"none"},tyqj=function(a){return"rtl"==tybj(a,"direction")},tyrj=tyt?"MozUserSelect":tyu?"WebkitUserSelect":null,tysj=function(a,b,c){c=c?null:a.getElementsByTagName("*");if(tyrj){if(b=b?"none":"",a.style[tyrj]=b,c){a=0;for(var d;d=c[a];a++)d.style[tyrj]=b}}else if(tys||tySb)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)},tytj=function(a,b){if(/^\d+px?$/.test(b))return parseInt(b,
10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e},tyuj=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?tytj(a,c):0},tyvj={thin:2,medium:4,thick:6},tywj=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in tyvj?tyvj[c]:tytj(a,c)},tyxj=function(a){if(tys&&!ty4b(9)){var b=
tywj(a,"borderLeft"),c=tywj(a,"borderRight"),d=tywj(a,"borderTop");a=tywj(a,"borderBottom");return new ty9i(d,c,a,b)}b=tyaj(a,"borderLeftWidth");c=tyaj(a,"borderRightWidth");d=tyaj(a,"borderTopWidth");a=tyaj(a,"borderBottomWidth");return new ty9i(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};tys&&tyv(12);var tyyj=!1,tyzj=function(a){if(a=a.match(/[\d]+/g))a.length=3};
if(navigator.plugins&&navigator.plugins.length){var tyAj=navigator.plugins["Shockwave Flash"];tyAj&&(tyyj=!0,tyAj.description&&tyzj(tyAj.description));navigator.plugins["Shockwave Flash 2.0"]&&(tyyj=!0)}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var tyBj=navigator.mimeTypes["application/x-shockwave-flash"];(tyyj=tyBj&&tyBj.enabledPlugin)&&tyzj(tyBj.enabledPlugin.description)}else try{var tyCj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),tyyj=!0;tyzj(tyCj.GetVariable("$version"))}catch(tyDj){try{tyCj=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),tyyj=!0}catch(tyEj){try{tyCj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),tyyj=!0,tyzj(tyCj.GetVariable("$version"))}catch(tyFj){}}};var tyGj=function(){this.qj=[];this.Wr=0},tyHj;tyGj.prototype.addListener=function(a,b){var c=String(this.Wr++);this.qj.push({eventName:a,handler:b,key:c});return c};tyGj.prototype.lq=function(){this.qj=[]};
tyoa("SJBpost",function(a,b,c){var d;tyb(tyHj)||(tyHj=new tyGj);d=tyHj;var e={eventName:a,eventSrc:b||{},payload:c||{}},f=!1;if(window.SJBfullyLoaded)for(b=d.qj,c=b.length,d=0;d<c&&d<b.length;d++){var g=b[d];g&&g.eventName==a&&(g="function"==typeof g.handler?g.handler:window[g.handler])&&(f|=g(e))}else window.SJBdelayedEvents.push({eventName:a,eventSrc:b,payload:c})});window.SJBdelayedEvents=[];window.SJBfullyLoaded=!1;var tyIj=function(a){this.xa=void 0;this.Ua={};if(a){var b=tyme(a);a=tyle(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])}};tyIj.prototype.set=function(a,b){tyJj(this,a,b,!1)};tyIj.prototype.add=function(a,b){tyJj(this,a,b,!0)};
var tyJj=function(a,b,c,d){for(var e=0;e<b.length;e++){var f=b.charAt(e);a.Ua[f]||(a.Ua[f]=new tyIj);a=a.Ua[f]}if(d&&void 0!==a.xa)throw Error('The collection already contains the key "'+b+'"');a.xa=c},tyKj=function(a,b){for(var c=a,d=0;d<b.length;d++)if(c=c.Ua[b.charAt(d)],!c)return;return c};tyIj.prototype.get=function(a){return(a=tyKj(this,a))?a.xa:void 0};tyIj.prototype.Ma=function(){var a=[];tyLj(this,a);return a};
var tyLj=function(a,b){void 0!==a.xa&&b.push(a.xa);for(var c in a.Ua)tyLj(a.Ua[c],b)};tyIj.prototype.Zb=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.Ua[e])return[];c=c.Ua[e]}tyMj(c,a,b)}else tyMj(this,"",b);return b};var tyMj=function(a,b,c){void 0!==a.xa&&c.push(b);for(var d in a.Ua)tyMj(a.Ua[d],b+d,c)};ty=tyIj.prototype;ty.Lc=function(a){return void 0!==this.get(a)};
ty.Bf=function(a){if(this.xa===a)return!0;for(var b in this.Ua)if(this.Ua[b].Bf(a))return!0;return!1};ty.clear=function(){this.Ua={};this.xa=void 0};ty.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.Ua[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.Ua[e]}a=b.xa;for(delete b.xa;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.Ua[e].isEmpty())delete b.Ua[e];else break;return a};ty.clone=function(){return new tyIj(this)};ty.Qb=function(){return tyke(this.Ma())};
ty.isEmpty=function(){return void 0===this.xa&&tyfb(this.Ua)};var tyNj=function(a){tyM(this,a,70,null)};tyj(tyNj,tyL);ty=tyNj.prototype;ty.ud=function(){return tyN(this,1)};ty.setSize=function(a){tyO(this,1,a)};ty.getWidth=function(){return tyN(this,12)};ty.vg=function(a){tyO(this,12,a)};ty.getHeight=function(){return tyN(this,13)};ty.tg=function(a){tyO(this,13,a)};ty.Fo=function(){return tyN(this,33)};ty.Nl=function(a){tyO(this,33,a)};ty.Kn=function(){return null!=tyN(this,2)?tyN(this,2):!1};ty.qg=function(a){tyO(this,2,a)};
ty.In=function(){return tyN(this,51)};ty.Li=function(a){tyO(this,51,a)};ty.Un=function(){return tyN(this,32)};ty.Oi=function(a){tyO(this,32,a)};ty.Co=function(){return null!=tyN(this,19)?tyN(this,19):!1};ty.Vi=function(a){tyO(this,19,a)};ty.Do=function(){return null!=tyN(this,52)?tyN(this,52):!1};ty.Wi=function(a){tyO(this,52,a)};ty.Eo=function(){return null!=tyN(this,67)?tyN(this,67):!1};ty.Xi=function(a){tyO(this,67,a)};ty.Hn=function(){return null!=tyN(this,20)?tyN(this,20):!1};
ty.Ki=function(a){tyO(this,20,a)};ty.lo=function(){return tyN(this,60)};ty.Ti=function(a){tyO(this,60,a)};ty.Mn=function(){return null!=tyN(this,3)?tyN(this,3):!1};ty.il=function(a){tyO(this,3,a)};ty.xt=function(){return null!=tyN(this,4)?tyN(this,4):!1};ty.Hw=function(a){tyO(this,4,a)};ty.$n=function(){return tyN(this,65)};ty.ul=function(a){tyO(this,65,a)};ty.Nt=function(){return tyN(this,9)};ty.Uw=function(a){tyO(this,9,a)};ty.Ot=function(){return tyN(this,10)};ty.Vw=function(a){tyO(this,10,a)};
ty.Pt=function(){return tyN(this,11)};ty.Ww=function(a){tyO(this,11,a)};ty.Mt=function(){return null!=tyN(this,14)?tyN(this,14):!1};ty.Tw=function(a){tyO(this,14,a)};ty.Rn=function(){return null!=tyN(this,34)?tyN(this,34):!1};ty.ll=function(a){tyO(this,34,a)};ty.On=function(){return tyN(this,15)};ty.Mi=function(a){tyO(this,15,a)};ty.Vn=function(){return tyN(this,16)};ty.ql=function(a){tyO(this,16,a)};ty.Xn=function(){return tyN(this,17)};ty.tl=function(a){tyO(this,17,a)};
ty.Go=function(){return tyN(this,18)};ty.Xw=function(a){tyO(this,18,a)};ty.Ho=function(){return tyN(this,45)};ty.Yw=function(a){tyO(this,45,a)};ty.zt=function(){return tyN(this,22)};ty.Iw=function(a){tyO(this,22,a)};ty.Wn=function(){return tyN(this,54)};ty.rl=function(a){tyO(this,54,a)};ty.Nn=function(){return tyN(this,21)};ty.jl=function(a){tyO(this,21,a)};ty.st=function(){return null!=tyN(this,23)?tyN(this,23):!1};ty.Cw=function(a){tyO(this,23,a)};ty.getToken=function(){return tyN(this,24)};
ty.setToken=function(a){tyO(this,24,a)};ty.Rt=function(){return tyN(this,36)};ty.$w=function(a){tyO(this,36,a)};ty.Kt=function(){return null!=tyN(this,6)?tyN(this,6):!1};ty.Rw=function(a){tyO(this,6,a)};ty.Jt=function(){return tyN(this,26)};ty.Qw=function(a){tyO(this,26,a)};ty.Tn=function(){return tyN(this,30)};ty.ol=function(a){tyO(this,30,a)};ty.Jo=function(){return tyN(this,31)};ty.Pl=function(a){tyO(this,31,a)};ty.ko=function(){return tyN(this,27)};ty.Cl=function(a){tyO(this,27,a)};
ty.Ht=function(){return tyN(this,28)};ty.Ow=function(a){tyO(this,28,a)};ty.vo=function(){return tyN(this,57)};ty.Il=function(a){tyO(this,57,a)};ty.wo=function(){return tyN(this,58)};ty.Jl=function(a){tyO(this,58,a)};ty.to=function(){return tyN(this,59)};ty.Gl=function(a){tyO(this,59,a)};ty.xo=function(){return null!=tyN(this,35)?tyN(this,35):!1};ty.Kl=function(a){tyO(this,35,a)};ty.yo=function(){return null!=tyN(this,41)?tyN(this,41):!1};ty.Ll=function(a){tyO(this,41,a)};
ty.ro=function(){return null!=tyN(this,64)?tyN(this,64):!1};ty.Fl=function(a){tyO(this,64,a)};ty.io=function(){return null!=tyN(this,48)?tyN(this,48):!1};ty.Bl=function(a){tyO(this,48,a)};ty.uo=function(){return null!=tyN(this,49)?tyN(this,49):!1};ty.Hl=function(a){tyO(this,49,a)};ty.eo=function(){return null!=tyN(this,37)?tyN(this,37):!1};ty.zl=function(a){tyO(this,37,a)};ty.rt=function(){return tyN(this,38)};ty.Bw=function(a){tyO(this,38,a)};ty.qt=function(){return tyN(this,39)};
ty.Aw=function(a){tyO(this,39,a)};ty.fo=function(){return tyN(this,40)};ty.Al=function(a){tyO(this,40,a)};ty.Qn=function(){return tyN(this,42)};ty.kl=function(a){tyO(this,42,a)};ty.wt=function(){return tyN(this,43)};ty.Gw=function(a){tyO(this,43,a)};ty.Gt=function(){return tyN(this,44)};ty.Mw=function(a){tyO(this,44,a)};ty.Ft=function(){return tyN(this,62)};ty.Lw=function(a){tyO(this,62,a)};ty.ho=function(){return tyN(this,46)};ty.Si=function(a){tyO(this,46,a)};ty.oo=function(){return tyN(this,61)};
ty.El=function(a){tyO(this,61,a)};ty.Sn=function(){return tyN(this,50)};ty.nl=function(a){tyO(this,50,a)};ty.co=function(){return tyN(this,53)};ty.yl=function(a){tyO(this,53,a)};ty.bo=function(){return tyN(this,55)};ty.xl=function(a){tyO(this,55,a)};ty.zo=function(){return tyN(this,56)};ty.Ml=function(a){tyO(this,56,a)};ty.Lo=function(){return tyN(this,63)};ty.Rl=function(a){tyO(this,63,a)};ty.Ko=function(){return tyN(this,68)};ty.Ql=function(a){tyO(this,68,a)};ty.Mo=function(){return tyN(this,69)};
ty.Sl=function(a){tyO(this,69,a)};ty.ao=function(){return tyN(this,66)};ty.wl=function(a){tyO(this,66,a)};var tyW=function(){tyM(this,void 0,70,null)};tyj(tyW,tyNj);tyW.prototype.Fw=function(a){this.gt=a};tyW.prototype.vt=function(){return this.gt};tyW.prototype.Ew=function(a){this.et=a};tyW.prototype.tt=function(){return this.et};var tyQj=function(){if(!tyOj){var a=tyOj=new tyIj,b;for(b in tyPj)a.add(b,tyPj[b])}},tyOj,tyX=function(a,b){this.types=a;this.ax=b},tyPj={a:new tyX([1,0],[tyW.prototype.jl,tyW.prototype.Ml]),b:new tyX([1,0],[tyW.prototype.Cw,tyW.prototype.Bw]),c:new tyX([1,0],[tyW.prototype.qg,tyW.prototype.Aw]),cc:new tyX([1],[tyW.prototype.Li]),ci:new tyX([1],[tyW.prototype.Oi]),d:new tyX([1],[tyW.prototype.il]),e:new tyX([0],[tyW.prototype.Mi]),f:new tyX([2],[tyW.prototype.ql]),fg:new tyX([1],[tyW.prototype.ll]),
fh:new tyX([1],[tyW.prototype.ol]),ft:new tyX([1],[tyW.prototype.nl]),fv:new tyX([1],[tyW.prototype.Pl]),g:new tyX([1],[tyW.prototype.Tw]),h:new tyX([1,0],[tyW.prototype.Hw,tyW.prototype.tg]),i:new tyX([1],[tyW.prototype.Iw]),ip:new tyX([1],[tyW.prototype.rl]),j:new tyX([2],[tyW.prototype.Ew]),k:new tyX([1,0],[tyW.prototype.tl,tyW.prototype.kl]),l:new tyX([0],[tyW.prototype.Mw]),lf:new tyX([1],[tyW.prototype.ul]),m:new tyX([0],[tyW.prototype.Rl]),mv:new tyX([1],[tyW.prototype.wl]),n:new tyX([1],[tyW.prototype.Ki]),
nc:new tyX([1],[tyW.prototype.xl]),nd:new tyX([1],[tyW.prototype.yl]),no:new tyX([1],[tyW.prototype.zl]),ns:new tyX([1],[tyW.prototype.Al]),nt0:new tyX([2],[tyW.prototype.$w]),nu:new tyX([1],[tyW.prototype.Si]),nw:new tyX([1],[tyW.prototype.Bl]),o:new tyX([1,2],[tyW.prototype.Cl,tyW.prototype.Fw]),p:new tyX([1,0],[tyW.prototype.Vi,tyW.prototype.Gw]),pa:new tyX([1],[tyW.prototype.El]),pd:new tyX([1],[tyW.prototype.Ti]),pp:new tyX([1],[tyW.prototype.Wi]),pf:new tyX([1],[tyW.prototype.Xi]),q:new tyX([2],
[tyW.prototype.Ow]),r:new tyX([1,0],[tyW.prototype.Rw,tyW.prototype.Qw]),rg:new tyX([1],[tyW.prototype.Gl]),rh:new tyX([1],[tyW.prototype.Hl]),rj:new tyX([1],[tyW.prototype.Il]),rp:new tyX([1],[tyW.prototype.Jl]),rw:new tyX([1],[tyW.prototype.Kl]),rwu:new tyX([1],[tyW.prototype.Ll]),rwa:new tyX([1],[tyW.prototype.Fl]),s:new tyX([1,0],[tyW.prototype.Nl,tyW.prototype.setSize]),t:new tyX([2],[tyW.prototype.setToken]),u:new tyX([1],[tyW.prototype.Xw]),ut:new tyX([1],[tyW.prototype.Yw]),v:new tyX([0],
[tyW.prototype.Lw]),vb:new tyX([0],[tyW.prototype.Ql]),vl:new tyX([0],[tyW.prototype.Sl]),w:new tyX([0],[tyW.prototype.vg]),x:new tyX([0],[tyW.prototype.Uw]),y:new tyX([0],[tyW.prototype.Vw]),z:new tyX([0],[tyW.prototype.Ww])},tyRj=function(a,b){tyje("For token '%s': %s",a,b)};
tyQj.prototype.parse=function(a){var b=new tyW,c=new tyW;if(""==a)a=!0;else{a=a.split("-");for(var d=!0,e=0;e<a.length;e++){var f=a[e],g=f.substring(0,1);if("O"==g||"J"==g){for(g="";12>g.length&&e<a.length;)f=a[e],g=g+"-"+f,e++;f=g.substring(1)}var g=b,h=c;if(0==f.length)f=!1;else{var k=void 0;for(var l=tyOj,m=void 0,k=f.substring(0,1).toLowerCase()+f.substring(1),m=1;m<=k.length;++m){var n=l,p=k.substring(0,m);if(0==p.length?n.isEmpty():!tyKj(n,p))break}k=1==m?null:(l=l.get(k.substring(0,m-1)))?
{Uv:f.substring(0,m-1),value:f.substring(m-1),attributes:l}:null;if(k){m=void 0;c:{var m=k.Uv,l=k.value,k=k.attributes,n=[],p=[],q=void 0;for(q in k.types){var r=k.types[q],t=k.ax[q],t=tySj(this,r)(m,l,g,h,t);if(null===t){m=!0;break c}n.push(r);p.push(t)}for(q in p)r=n[q],t=p[q],tyTj(this,r)(f,t);m=!1}f=m}else f=!1}d=d&&f}a=d}return new tyUj(b,c,a)};var tyVj=function(a,b,c,d,e){e.apply(c,[b]);a=a.substring(0,1);e.apply(d,[a==a.toUpperCase()])};ty=tyQj.prototype;
ty.Yv=function(a,b,c,d,e){if(""==b)return 0;b=tyLa(b);if(isNaN(b))return 1;tyVj(a,b,c,d,e);return null};ty.kv=function(a,b){switch(b){case 1:tyRj(a,"Option value could not be interpreted as an integer.");break;case 0:tyRj(a,"Missing value for integer option.")}};ty.Xv=function(a,b,c,d,e){if(""!=b)return 2;tyVj(a,!0,c,d,e);return null};ty.jv=function(a,b){switch(b){case 2:tyRj(a,"Unexpected value specified for boolean option.")}};ty.Zv=function(a,b,c,d,e){if(""==b)return 0;tyVj(a,b,c,d,e);return null};
ty.lv=function(a,b){switch(b){case 0:tyRj(a,"Missing value for string option.")}};var tySj=function(a,b){switch(b){case 0:return tyh(a.Yv,a);case 1:return tyh(a.Xv,a);case 2:return tyh(a.Zv,a);default:return function(){}}},tyTj=function(a,b){switch(b){case 0:return tyh(a.kv,a);case 1:return tyh(a.jv,a);case 2:return tyh(a.lv,a);default:return function(){}}},tyUj=function(a,b,c){this.rf=a;this.Rq=b;this.Kg=c};tyUj.prototype.wp=function(){return this.Kg};var tyXj=function(a){this.Vk=null;this.jc=[];this.dc=null;tyWj(this,a)},tyYj=function(a){null==a.Vk&&(a.Vk=new tyQj);return a.Vk},tyWj=function(a,b){a.dc=b?tye(b)?tyYj(a).parse(b):b:tyYj(a).parse("")},tyY=function(a,b,c,d){b||"number"==typeof b&&0==b||(b=void 0);var e=a.dc.rf;a=a.dc.Rq;var f=c.call(e);b!=f&&(void 0!=f&&c.call(a),d.call(e,b))};ty=tyXj.prototype;ty.qg=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Kn,tyW.prototype.qg);return this};
ty.il=function(a){tyY(this,a,tyW.prototype.Mn,tyW.prototype.il);return this};ty.tg=function(a){null!=a&&this.setSize();tyY(this,a,tyW.prototype.getHeight,tyW.prototype.tg);return this};ty.Nl=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Fo,tyW.prototype.Nl);return this};ty.ql=function(a){a&&(a=a.replace(";",":"));tyY(this,a,tyW.prototype.Vn,tyW.prototype.ql);return this};ty.ol=function(a){tyY(this,a,tyW.prototype.Tn,tyW.prototype.ol);return this};
ty.Pl=function(a){tyY(this,a,tyW.prototype.Jo,tyW.prototype.Pl);return this};ty.Oi=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Un,tyW.prototype.Oi);return this};ty.Li=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.In,tyW.prototype.Li);return this};ty.ll=function(a){tyY(this,a,tyW.prototype.Rn,tyW.prototype.ll);return this};ty.nl=function(a){tyY(this,a,tyW.prototype.Sn,tyW.prototype.nl);return this};ty.tl=function(a){tyY(this,a,tyW.prototype.Xn,tyW.prototype.tl);return this};
ty.jl=function(a){tyY(this,a,tyW.prototype.Nn,tyW.prototype.jl);return this};ty.setSize=function(a){tyg(a)&&(a=Math.max(a.width,a.height));null!=a&&(this.vg(),this.tg());tyY(this,a,tyW.prototype.ud,tyW.prototype.setSize);return this};ty.Vi=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Co,tyW.prototype.Vi);return this};ty.Wi=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Do,tyW.prototype.Wi);return this};ty.Xi=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Eo,tyW.prototype.Xi);return this};
ty.Ki=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.Hn,tyW.prototype.Ki);return this};ty.Ti=function(a){a&&tyZj(this);tyY(this,a,tyW.prototype.lo,tyW.prototype.Ti);return this};ty.El=function(a){tyY(this,a,tyW.prototype.oo,tyW.prototype.El);return this};ty.vg=function(a){null!=a&&this.setSize();tyY(this,a,tyW.prototype.getWidth,tyW.prototype.vg);return this};ty.Mi=function(a){tyY(this,a,tyW.prototype.On,tyW.prototype.Mi);return this};
ty.Kl=function(a){tyY(this,a,tyW.prototype.xo,tyW.prototype.Kl);return this};ty.Ll=function(a){tyY(this,a,tyW.prototype.yo,tyW.prototype.Ll);return this};ty.Fl=function(a){tyY(this,a,tyW.prototype.ro,tyW.prototype.Fl);return this};ty.Bl=function(a){tyY(this,a,tyW.prototype.io,tyW.prototype.Bl);return this};ty.Hl=function(a){tyY(this,a,tyW.prototype.uo,tyW.prototype.Hl);return this};ty.Il=function(a){tyY(this,a,tyW.prototype.vo,tyW.prototype.Il);return this};
ty.Jl=function(a){tyY(this,a,tyW.prototype.wo,tyW.prototype.Jl);return this};ty.Gl=function(a){tyY(this,a,tyW.prototype.to,tyW.prototype.Gl);return this};ty.Cl=function(a){tyY(this,a,tyW.prototype.ko,tyW.prototype.Cl);return this};ty.yl=function(a){tyY(this,a,tyW.prototype.co,tyW.prototype.yl);return this};ty.xl=function(a){tyY(this,a,tyW.prototype.bo,tyW.prototype.xl);return this};ty.rl=function(a){tyY(this,a,tyW.prototype.Wn,tyW.prototype.rl);return this};
ty.zl=function(a){tyY(this,a,tyW.prototype.eo,tyW.prototype.zl);return this};ty.Al=function(a){tyY(this,a,tyW.prototype.fo,tyW.prototype.Al);return this};ty.Si=function(a){tyY(this,a,tyW.prototype.ho,tyW.prototype.Si);return this};ty.kl=function(a){tyY(this,a,tyW.prototype.Qn,tyW.prototype.kl);return this};ty.Ml=function(a){tyY(this,a,tyW.prototype.zo,tyW.prototype.Ml);return this};ty.Rl=function(a){tyY(this,a,tyW.prototype.Lo,tyW.prototype.Rl);return this};
ty.Ql=function(a){tyY(this,a,tyW.prototype.Ko,tyW.prototype.Ql);return this};ty.Sl=function(a){tyY(this,a,tyW.prototype.Mo,tyW.prototype.Sl);return this};ty.ul=function(a){tyY(this,a,tyW.prototype.$n,tyW.prototype.ul);return this};ty.wl=function(a){tyY(this,a,tyW.prototype.ao,tyW.prototype.wl);return this};var tyZj=function(a){a.Ki();a.Li();a.qg();a.Oi();a.Ti();a.Vi();a.Wi();a.Xi()};
tyXj.prototype.build=function(){this.jc.length=0;var a=this.dc.rf;a.Go()||a.Ho()?a.ud()||this.setSize(0):(a=this.dc.rf,a.ud()||a.getWidth()||a.getHeight()||(this.setSize(),this.tg(),this.vg(),tyZj(this)));tyZ(this,"s",tyW.prototype.ud);tyZ(this,"w",tyW.prototype.getWidth);ty_(this,"c",tyW.prototype.Kn);tyZ(this,"c",tyW.prototype.qt,16,6);ty_(this,"d",tyW.prototype.Mn);tyZ(this,"h",tyW.prototype.getHeight);ty_(this,"s",tyW.prototype.Fo);ty_(this,"h",tyW.prototype.xt);ty_(this,"p",tyW.prototype.Co);
ty_(this,"pa",tyW.prototype.oo);ty_(this,"pd",tyW.prototype.lo);ty_(this,"pp",tyW.prototype.Do);ty_(this,"pf",tyW.prototype.Eo);tyZ(this,"p",tyW.prototype.wt);ty_(this,"n",tyW.prototype.Hn);tyZ(this,"r",tyW.prototype.Jt);ty_(this,"r",tyW.prototype.Kt);ty_(this,"fh",tyW.prototype.Tn);ty_(this,"fv",tyW.prototype.Jo);ty_(this,"cc",tyW.prototype.In);ty_(this,"ci",tyW.prototype.Un);ty_(this,"o",tyW.prototype.ko);ty_j(this,"o",tyW.prototype.vt);ty_j(this,"j",tyW.prototype.tt);tyZ(this,"x",tyW.prototype.Nt);
tyZ(this,"y",tyW.prototype.Ot);tyZ(this,"z",tyW.prototype.Pt);ty_(this,"g",tyW.prototype.Mt);ty_(this,"fg",tyW.prototype.Rn);ty_(this,"ft",tyW.prototype.Sn);tyZ(this,"e",tyW.prototype.On);ty_j(this,"f",tyW.prototype.Vn);ty_(this,"k",tyW.prototype.Xn);tyZ(this,"k",tyW.prototype.Qn);ty_(this,"u",tyW.prototype.Go);ty_(this,"ut",tyW.prototype.Ho);ty_(this,"i",tyW.prototype.zt);ty_(this,"ip",tyW.prototype.Wn);ty_(this,"a",tyW.prototype.Nn);tyZ(this,"a",tyW.prototype.zo);tyZ(this,"m",tyW.prototype.Lo);
tyZ(this,"vb",tyW.prototype.Ko);tyZ(this,"vl",tyW.prototype.Mo);ty_(this,"lf",tyW.prototype.$n);ty_(this,"mv",tyW.prototype.ao);ty_(this,"b",tyW.prototype.st);tyZ(this,"b",tyW.prototype.rt);ty_j(this,"t",tyW.prototype.getToken);ty_j(this,"nt0",tyW.prototype.Rt);ty_(this,"rw",tyW.prototype.xo);ty_(this,"rwu",tyW.prototype.yo);ty_(this,"rwa",tyW.prototype.ro);ty_(this,"nw",tyW.prototype.io);ty_(this,"rh",tyW.prototype.uo);ty_(this,"nc",tyW.prototype.bo);ty_(this,"nd",tyW.prototype.co);ty_(this,"no",
tyW.prototype.eo);ty_j(this,"q",tyW.prototype.Ht);ty_(this,"ns",tyW.prototype.fo);tyZ(this,"l",tyW.prototype.Gt);tyZ(this,"v",tyW.prototype.Ft);ty_(this,"nu",tyW.prototype.ho);ty_(this,"rj",tyW.prototype.vo);ty_(this,"rp",tyW.prototype.wo);ty_(this,"rg",tyW.prototype.to);return this.jc.join("-")};
var tyZ=function(a,b,c,d,e){var f=c.call(a.dc.rf);if(void 0!=f&&null!=f){var g;g=void 0==d?10:10!=d&&16!=d?10:d;f=f.toString(g);d=new tyFi;d.append(16==g?"0x":"");void 0==e?e="":(e-=f.length,e=0>=e?"":tyGa("0",e));d.append(e);d.append(f);ty0j(a,b,d.toString(),c)}},ty_=function(a,b,c){c.call(a.dc.rf)&&ty0j(a,b,"",c)},ty_j=function(a,b,c){var d=c.call(a.dc.rf);d&&ty0j(a,b,d,c)},ty0j=function(a,b,c,d){d.call(a.dc.Rq)&&(b=b.substring(0,1).toUpperCase()+b.substring(1));a.jc.push(b+c)};var ty1j=/^[^\/]*\/\//,ty2j=function(){};ty2j.prototype.parse=function(a){return new ty3j(a)};
var ty3j=function(a){this.ig=a;this.Ai="";(a=this.ig.match(ty1j))&&a[0]?(this.Ai=a[0],a=this.Ai.match(/\w+/)?this.ig:"http://"+this.ig.substring(this.Ai.length)):a="http://"+this.ig;this.Ig=tyRf(a,!0);this.Kg=!0;this.Pp=!1},ty4j=["image","proxy","public"],ty6j=function(a){if(void 0==a.jc){a.jc=a.Ig.rb.substring(1).split("/");var b=a.jc.length;if(7==b||2==b)ty5j(a.jc[0])||(a.Kg=!1);else if(7<b||2<b&&5>b||0==b)a.Kg=!1;if(2>=b){a.Pp=!0;var b=b-1,c=a.jc[b],d=c.indexOf("=");-1!=d&&(a.jc[b]=c.substr(0,
d),a.jc.push(c.substr(d+1)))}}return a.jc};ty3j.prototype.wp=function(){ty6j(this);return this.Kg};var ty7j=function(a){ty6j(a);return a.Pp};ty3j.prototype.Ie=function(){var a=this.Ig.Ed;return this.Ig.Ie()+(a?":"+a:"")};ty3j.prototype.Dc=function(){return this.Ig.rb};ty3j.prototype.jk=function(){return this.Ig.Tb.toString()};
var ty8j=function(a){if(void 0!=a.Bi)return a.Bi;var b=ty6j(a);ty5j(b[0])?a.Bi=b[0]:a.Bi=null;return a.Bi},ty9j=function(a){switch(ty6j(a).length){case 7:return!0;case 6:return null==ty8j(a);case 5:return!1;case 3:return!0;case 2:return null==ty8j(a);case 1:return!1;default:return!1}},ty$j=function(a,b){var c;if(ty7j(a))a:{c=null!=ty8j(a)?1:0;switch(b){case 6:c=0+c;break;case 4:if(!ty9j(a)){c=null;break a}c=1+c;break;default:c=null;break a}c=ty6j(a)[c]}else a:{c=null!=ty8j(a)?1:0;switch(b){case 0:c=
0+c;break;case 1:c=1+c;break;case 2:c=2+c;break;case 3:c=3+c;break;case 4:if(!ty9j(a)){c=null;break a}c=4+c;break;case 5:var d=ty9j(a)?1:0;c=4+c+d;break;default:c=null;break a}c=ty6j(a)[c]}return c};ty3j.prototype.Ct=function(){void 0==this.Op&&(this.Op=ty$j(this,0));return this.Op};var tyak=function(a){void 0==a.eq&&(a.eq=ty$j(a,1));return a.eq},tybk=function(a){void 0==a.fp&&(a.fp=ty$j(a,2));return a.fp},tyck=function(a){void 0==a.Sq&&(a.Sq=ty$j(a,3));return a.Sq};
ty3j.prototype.getOptions=function(){void 0==this.$p&&(this.$p=ty$j(this,4));return this.$p};var tydk=function(a){if(void 0==a.dc){var b=a.getOptions();b||(b="");a.dc=(new tyQj).parse(b)}return a.dc};ty3j.prototype.Pn=function(){void 0==this.Bn&&(this.Bn=ty$j(this,5));return this.Bn};var ty5j=function(a){return!(!a||!tyn(ty4j,a))};var tyfk=function(a){this.ib=null;a instanceof ty3j||(void 0==tyek&&(tyek=new ty2j),a=tyek.parse(a.toString()));this.ib=a;tyXj.call(this,tydk(this.ib));this.bw=this.ib.Ai;this.Ac=this.ib.Ie();this.jq=this.ib.jk()},tyek;tyj(tyfk,tyXj);
tyfk.prototype.build=function(){if(!this.ib.wp())return this.ib.ig;var a=tyfk.B.build.call(this),b=[];null!=ty8j(this.ib)&&b.push(ty8j(this.ib));if(ty7j(this.ib)){var c=this.ib;void 0==c.Np&&(c.Np=ty$j(c,6));b.push(c.Np+(a?"="+a:""))}else b.push(this.ib.Ct()),b.push(tyak(this.ib)),b.push(tybk(this.ib)),b.push(tyck(this.ib)),a&&b.push(a),b.push(this.ib.Pn());return this.bw+this.Ac+"/"+b.join("/")+(this.jq?"?"+this.jq:"")};var tygk=/^(https?:)?\/\/(lh|gp|ci|gm)[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google))\.com\//i,tyhk=/^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,tyik=/^(https?:)?\/\/(qa(-red|-blue)?|dev2)-lighthouse\.sandbox\.google\.com\//i,tyjk=/^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i,tykk=function(a){return tygk.test(a)||tyhk.test(a)||tyik.test(a)||tyjk.test(a)};var tylk=function(a){if(!a||!tykk(a))return a;try{var b=new tyfk(a);tyWj(b,"");var c=b.qg(!0).Mi(100)}catch(d){return a}c.Si(!0);1.5<tya.devicePixelRatio?c.setSize(592):c.setSize(296);return(a=c.build())&&tykk(a)?tyCf(tyRf(a),"https").toString():a};var tymk=function(){};tyca(tymk);
var tynk=/[\!\#\%\&\'\(\)\*\+\\\-\:\;\<\=\>\?\@\^\_\`\{\|\}\~\"\[\]\.,]/g,tyok=/[\_\-\:\/]/g,typk={$:"s","\u00c0":"a","\u00c1":"a","\u00c2":"a","\u00c3":"a","\u00c4":"a","\u00c5":"a","\u00c6":"ae","\u00c7":"c","\u00c8":"e","\u00c9":"e","\u00ca":"e","\u00cb":"e","\u00cc":"i","\u00cd":"i","\u00ce":"i","\u00cf":"i","\u00d0":"d","\u00d1":"n","\u00d2":"o","\u00d3":"o","\u00d4":"o","\u00d5":"o","\u00d6":"o","\u00d7":" ","\u00d8":"o","\u00d9":"u","\u00da":"u","\u00db":"u","\u00dc":"u","\u00dd":"y","\u00de":"t",
"\u00df":"s","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e6":"ae","\u00e7":"c","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00ec":"i","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f0":"d","\u00f1":"n","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f7":" ","\u00f8":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","\u00fd":"y","\u00fe":"t","\u00ff":"y","\u0100":"a","\u0101":"a","\u0102":"a","\u0103":"a","\u0104":"a","\u0105":"a",
"\u0106":"c","\u0107":"c","\u0108":"c","\u0109":"c","\u010a":"c","\u010b":"c","\u010c":"c","\u010d":"c","\u010e":"d","\u010f":"d","\u0110":"d","\u0111":"d","\u0112":"e","\u0113":"e","\u0114":"e","\u0115":"e","\u0116":"e","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"e","\u011b":"e","\u011c":"g","\u011d":"g","\u011e":"g","\u011f":"g","\u0120":"g","\u0121":"g","\u0122":"g","\u0123":"g","\u0124":"h","\u0125":"h","\u0126":"h","\u0127":"h","\u0128":"i","\u0129":"i","\u012a":"i","\u012b":"i","\u012c":"i",
"\u012d":"i","\u012e":"i","\u012f":"i","\u0130":"i","\u0131":"i","\u0132":"ij","\u0133":"ij","\u0134":"j","\u0135":"j","\u0136":"k","\u0137":"k","\u0138":"k","\u0139":"l","\u013a":"l","\u013b":"l","\u013c":"l","\u013d":"l","\u013e":"l","\u013f":"l","\u0140":"l","\u0141":"l","\u0142":"l","\u0143":"n","\u0144":"n","\u0145":"n","\u0146":"n","\u0147":"n","\u0148":"n","\u0149":"n","\u014a":"n","\u014b":"n","\u014c":"o","\u014d":"o","\u014e":"o","\u014f":"o","\u0150":"o","\u0151":"o","\u0152":"oe","\u0153":"oe",
"\u0154":"r","\u0155":"r","\u0156":"r","\u0157":"r","\u0158":"r","\u0159":"r","\u015a":"s","\u015b":"s","\u015c":"s","\u015d":"s","\u015e":"s","\u015f":"s","\u0160":"s","\u0161":"s","\u0162":"t","\u0163":"t","\u0164":"t","\u0165":"t","\u0166":"t","\u0167":"t","\u0168":"u","\u0169":"u","\u016a":"u","\u016b":"u","\u016c":"u","\u016d":"u","\u016e":"u","\u016f":"u","\u0170":"u","\u0171":"u","\u0172":"u","\u0173":"u","\u0174":"w","\u0175":"w","\u0176":"y","\u0177":"y","\u0178":"y","\u0179":"z","\u017a":"z",
"\u017b":"z","\u017c":"z","\u017d":"z","\u017e":"z","\u017f":"s","\u0180":"b","\u0181":"b","\u0182":"b","\u0183":"b","\u0184":"b","\u0185":"b","\u0186":"c","\u0187":"c","\u0188":"c","\u0189":"d","\u018a":"d","\u018b":"d","\u018c":"d","\u018d":"d","\u018e":"e","\u018f":"e","\u0190":"e","\u0191":"f","\u0192":"f","\u0193":"g","\u0194":"g","\u0195":"h","\u0196":"i","\u0197":"i","\u0198":"k","\u0199":"k","\u019a":"l","\u019b":"l","\u019c":"m","\u019d":"n","\u019e":"n","\u019f":"o","\u01a0":"o","\u01a1":"o",
"\u01a2":"oi","\u01a3":"oi","\u01a4":"p","\u01a5":"p","\u01a6":"r","\u01a7":"s","\u01a8":"s","\u01a9":"s","\u01aa":"s","\u01ab":"t","\u01ac":"t","\u01ad":"t","\u01ae":"t","\u01af":"u","\u01b0":"u","\u01b1":"u","\u01b2":"v","\u01b3":"y","\u01b4":"y","\u01b5":"z","\u01b6":"z","\u01c4":"dz","\u01c5":"dz","\u01c6":"dz","\u01c7":"lj","\u01c8":"lj","\u01c9":"lj","\u01ca":"nj","\u01cb":"nj","\u01cc":"nj","\u01cd":"a","\u01ce":"a","\u01cf":"i","\u01d0":"i","\u01d1":"o","\u01d2":"o","\u01d3":"u","\u01d4":"u",
"\u01d5":"u","\u01d6":"u","\u01d7":"u","\u01d8":"u","\u01d9":"u","\u01da":"u","\u01db":"u","\u01dc":"u","\u01dd":"e","\u01de":"a","\u01df":"a","\u01e0":"a","\u01e1":"a","\u01e2":"ae","\u01e3":"ae","\u01e4":"g","\u01e5":"g","\u01e6":"g","\u01e7":"g","\u01e8":"k","\u01e9":"k","\u01ea":"o","\u01eb":"o","\u01ec":"o","\u01ed":"o","\u01f0":"j","\u01f1":"dz","\u01f2":"dz","\u01f3":"dz","\u01f4":"g","\u01f5":"g","\u01f8":"n","\u01f9":"n","\u01fa":"a","\u01fb":"a","\u01fc":"ae","\u01fd":"ae","\u01fe":"o",
"\u01ff":"o","\u0200":"a","\u0201":"a","\u0202":"a","\u0203":"a","\u0204":"e","\u0205":"e","\u0206":"e","\u0207":"e","\u0208":"i","\u0209":"i","\u020a":"i","\u020b":"i","\u020c":"o","\u020d":"o","\u020e":"o","\u020f":"o","\u0210":"r","\u0211":"r","\u0212":"r","\u0213":"r","\u0214":"u","\u0215":"u","\u0216":"u","\u0217":"u","\u0218":"s","\u0219":"s","\u021a":"t","\u021b":"t","\u021e":"h","\u021f":"h","\u0220":"n","\u0221":"d","\u0222":"ou","\u0223":"ou","\u0224":"z","\u0225":"z","\u0226":"a","\u0227":"a",
"\u0228":"e","\u0229":"e","\u022a":"o","\u022b":"o","\u022c":"o","\u022d":"o","\u022e":"o","\u022f":"o","\u0230":"o","\u0231":"o","\u0232":"y","\u0233":"y","\u0234":"l","\u0235":"n","\u0236":"t","\u0237":"j","\u0238":"db","\u0239":"qp","\u023a":"a","\u023b":"c","\u023c":"c","\u023d":"l","\u023e":"t","\u023f":"s","\u0240":"z","\u0243":"b","\u0244":"u","\u0245":"v","\u0246":"e","\u0247":"e","\u0248":"j","\u0249":"j","\u024a":"q","\u024b":"q","\u024c":"r","\u024d":"r","\u024e":"y","\u024f":"y","\u1edd":"o",
"\u2010":"-"},tyqk=/^(the|a|an)\s/,tyrk=/\s(and|&|et|y)\s/;tymk.prototype.normalize=function(a){if(tysa(null==a?"":String(a)))return a;for(var b=a,c="",d=0;d<b.length;++d)c=typk[b[d]]?c+typk[b[d]]:c+b[d];b=c.toLowerCase();b=b.replace(tyrk," and ");b=b.replace(tyqk,"");b=b.replace(tyok," ");b=b.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"");b=b.replace(tynk,"");return tysa(null==b?"":String(b))?a:b};var ty0=function(a,b){this.type=a;var c=b||[];this.id=tyd(c)?c:c.yt?c.yt():[];this.id.toString=function(){return tysk(this)};this.id.px=function(){return tysk(this,!0)}};new ty0("ap",["queue"]);new ty0("ap",["auto-playlist-trash"]);new ty0("all");new ty0("albums");new ty0("artists");new ty0("genres");new ty0("start");new ty0("uq");new ty0("now");new ty0("settings");new ty0("accountsettings");new ty0("labs");new ty0("exprec");new ty0("expgenres");new ty0("exptop");new ty0("expnew");new ty0("imfl");
new ty0("ap",["auto-playlist-thumbs-up"]);new ty0("ap",["auto-playlist-recent"]);new ty0("ap",["auto-playlist-promo"]);new ty0("rd");new ty0("manager");new ty0("ap",["sound-search"]);new ty0("ap",["purchased-and-uploaded"]);new ty0("ap",["added-from-all-access"]);new ty0("splash");new ty0("signup",["welcome"]);new ty0("signup",["checkout"]);new ty0("signup",["completed"]);new ty0("signup",["nuq-genres"]);new ty0("signup",["nuq-artists"]);new ty0("signup",["nuq-completed"]);new ty0("mv",[]);
new ty0("almv",[]);new ty0("armv",[]);new ty0("sulp",[]);new ty0("suw",[]);new ty0("sul",[]);new ty0("sww",[]);new ty0("suup",[]);var tysk=function(a,b){if(!a)return"";var c=tyWa(a,function(a){return!!a}),c=a.slice(0,c+1);b&&(c=tyRa(c,function(a){return tymk.getInstance().normalize(a)}));return tyRa(c,function(a){return encodeURIComponent(a).replace(/%20/g,"+")}).join("/")};ty0.prototype.toString=function(a){return(a=a?this.id.px():this.id.toString())?"/"+this.type+"/"+a:"/"+this.type};
ty0.prototype.Ba=function(a){return a?"all"==this.type&&"all"==a.type?!0:this.toString()==a.toString():!1};var tytk=function(a){if(ty_g()){var b=new tyz,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="blob";c.onload=function(){var a=new FileReader;a.onload=function(){b.callback(a.result)};a.readAsDataURL(c.response)};c.onerror=function(){b.ca()};c.send();return b}return null};var tyuk={Br:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},Ar:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},tyvk=tyuk,tyvk=tyuk;var tyxk=function(a){var b=tyU.Cr,c=["0"];a=tywk[a][0]&7;if(0<a){c.push(".");for(var d=0;d<a;d++)c.push("0")}return b.replace(/0.00/g,c.join(""))},tywk={AED:[2,"dh","\u062f.\u0625.","DH"],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[0,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[18,"kr","kr"],DOP:[2,"$","RD$"],
EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[0,"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[2,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,
"S/.","S/."],PHP:[2,"\u20b1","Php"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u0440\u0443\u0431.","\u0440\u0443\u0431."],SAR:[2,"Rial","Rial"],SEK:[2,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u20b4","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[0,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var tyyk=function(a,b,c){this.Tf=b||tyU.Er;this.Vs=c||0;this.oi=40;this.tc=1;this.ff=0;this.ae=3;this.pi=this.Zc=0;this.Nq=this.sr=!1;this.ng=this.he="";this.Cd="-";this.Te="";this.bg=1;this.qk=3;this.hj=this.un=!1;this.Af=0;this.Zm=null;"number"==typeof a?this.Wg(a):this.Jc(a)};
tyyk.prototype.Jc=function(a){a.replace(/ /g,"\u00a0");var b=[0];this.he=tyzk(this,a,b);for(var c=b[0],d=-1,e=0,f=0,g=0,h=-1,k=a.length,l=!0;b[0]<k&&l;b[0]++)switch(a.charAt(b[0])){case "#":0<f?g++:e++;0<=h&&0>d&&h++;break;case "0":if(0<g)throw Error('Unexpected "0" in pattern "'+a+'"');f++;0<=h&&0>d&&h++;break;case ",":h=0;break;case ".":if(0<=d)throw Error('Multiple decimal separators in pattern "'+a+'"');d=e+f+g;break;case "E":if(this.hj)throw Error('Multiple exponential symbols in pattern "'+
a+'"');this.hj=!0;this.pi=0;b[0]+1<k&&"+"==a.charAt(b[0]+1)&&(b[0]++,this.sr=!0);for(;b[0]+1<k&&"0"==a.charAt(b[0]+1);)b[0]++,this.pi++;if(1>e+f||1>this.pi)throw Error('Malformed exponential pattern "'+a+'"');l=!1;break;default:b[0]--,l=!1}0==f&&0<e&&0<=d&&(f=d,0==f&&f++,g=e-f,e=f-1,f=1);if(0>d&&0<g||0<=d&&(d<e||d>e+f)||0==h)throw Error('Malformed pattern "'+a+'"');g=e+f+g;this.ae=0<=d?g-d:0;0<=d&&(this.Zc=e+f-d,0>this.Zc&&(this.Zc=0));this.tc=(0<=d?d:g)-e;this.hj&&(this.oi=e+this.tc,0==this.ae&&
0==this.tc&&(this.tc=1));this.qk=Math.max(0,h);this.un=0==d||d==g;c=b[0]-c;this.ng=tyzk(this,a,b);b[0]<a.length&&";"==a.charAt(b[0])?(b[0]++,this.Cd=tyzk(this,a,b),b[0]+=c,this.Te=tyzk(this,a,b)):(this.Cd=this.he+this.Cd,this.Te+=this.ng)};
tyyk.prototype.Wg=function(a){switch(a){case 1:this.Jc(tyU.Gm);break;case 2:this.Jc(tyU.Sr);break;case 3:this.Jc(tyU.Nr);break;case 4:this.Jc(tyxk(this.Tf));break;case 5:tyAk(this,1);break;case 6:tyAk(this,2);break;default:throw Error("Unsupported pattern type.");}};var tyAk=function(a,b){a.Af=b;a.Jc(tyU.Gm);a.Zc=0;a.ae=2;if(0<a.Zc)throw Error("Can't combine significant digits and minimum fraction digits");a.ff=2};
tyyk.prototype.parse=function(a,b){var c=b||[0];if(0!=this.Af)throw Error("Parsing of compact numbers is unimplemented");var d=NaN;a=a.replace(/ /g,"\u00a0");var e=a.indexOf(this.he,c[0])==c[0],f=a.indexOf(this.Cd,c[0])==c[0];e&&f&&(this.he.length>this.Cd.length?f=!1:this.he.length<this.Cd.length&&(e=!1));e?c[0]+=this.he.length:f&&(c[0]+=this.Cd.length);if(a.indexOf(tyU.oj,c[0])==c[0])c[0]+=tyU.oj.length,d=Infinity;else{var d=a,g=!1,h=!1,k=!1,l=1,m=tyU.Hm,n=tyU.Lm,p=tyU.Im;if(0!=this.Af)throw Error("Parsing of compact style numbers is not implemented");
for(var q="";c[0]<d.length;c[0]++){var r=d.charAt(c[0]),t=tyBk(r);if(0<=t&&9>=t)q+=t,k=!0;else if(r==m.charAt(0)){if(g||h)break;q+=".";g=!0}else if(r==n.charAt(0)&&("\u00a0"!=n.charAt(0)||c[0]+1<d.length&&0<=tyBk(d.charAt(c[0]+1)))){if(g||h)break}else if(r==p.charAt(0)){if(h)break;q+="E";h=!0}else if("+"==r||"-"==r)q+=r;else if(r==tyU.Mm.charAt(0)){if(1!=l)break;l=100;if(k){c[0]++;break}}else if(r==tyU.Nm.charAt(0)){if(1!=l)break;l=1E3;if(k){c[0]++;break}}else break}d=parseFloat(q)/l}if(e){if(a.indexOf(this.ng,
c[0])!=c[0])return NaN;c[0]+=this.ng.length}else if(f){if(a.indexOf(this.Te,c[0])!=c[0])return NaN;c[0]+=this.Te.length}return f?-d:d};
tyyk.prototype.format=function(a){if(isNaN(a))return tyU.Kr;var b=[],c;var d=null===this.Zm?a:this.Zm,e=a;0==this.Af?c=tyCk:(d=Math.abs(d),e=Math.abs(e),c=tyDk(this,1>=d?0:tyEk(d)).Rj,tyFk(this,e/Math.pow(10,c)),d=tyFk(this,d/Math.pow(10,c)),c=tyDk(this,c+tyEk(d.jp)));a/=Math.pow(10,c.Rj);b.push(c.prefix);d=0>a||0==a&&0>1/a;b.push(d?this.Cd:this.he);if(isFinite(a))if(a=a*(d?-1:1)*this.bg,this.hj)if(0==a)tyGk(this,a,this.tc,b),tyHk(this,0,b);else{e=Math.log(a)/Math.log(10);e=Math.floor(e+2E-15);a/=
Math.pow(10,e);var f=this.tc;if(1<this.oi&&this.oi>this.tc){for(;0!=e%this.oi;)a*=10,e--;f=1}else 1>this.tc?(e++,a/=10):(e-=this.tc-1,a*=Math.pow(10,this.tc-1));tyGk(this,a,f,b);tyHk(this,e,b)}else tyGk(this,a,this.tc,b);else b.push(tyU.oj);b.push(d?this.Te:this.ng);b.push(c.br);return b.join("")};
var tyFk=function(a,b){var c=Math.pow(10,a.ae),d=0>=a.ff?Math.round(b*c):Math.round(tyIk(b*c,a.ff,a.ae)),e;isFinite(d)?(e=Math.floor(d/c),c=Math.floor(d-e*c)):(e=b,c=0);return{jp:e,pt:c}},tyGk=function(a,b,c,d){if(a.Zc>a.ae)throw Error("Min value must be less than max value");b=tyFk(a,b);var e=Math.pow(10,a.ae),f=b.jp,g=b.pt,h=0==f?0:tyEk(f)+1,k=0<a.Zc||0<g||a.Nq&&h<a.ff;b=a.Zc;k&&(b=a.Nq&&0<a.ff?a.ff-h:a.Zc);for(var l="",h=f;1E20<h;)l="0"+l,h=Math.round(h/10);var l=h+l,m=tyU.Hm,n=tyU.Lm,h=tyU.sj.charCodeAt(0),
p=l.length;if(0<f||0<c){for(f=p;f<c;f++)d.push(String.fromCharCode(h));for(f=0;f<p;f++)d.push(String.fromCharCode(h+1*l.charAt(f))),1<p-f&&0<a.qk&&1==(p-f)%a.qk&&d.push(n)}else k||d.push(String.fromCharCode(h));(a.un||k)&&d.push(m);a=""+(g+e);for(c=a.length;"0"==a.charAt(c-1)&&c>b+1;)c--;for(f=1;f<c;f++)d.push(String.fromCharCode(h+1*a.charAt(f)))},tyHk=function(a,b,c){c.push(tyU.Im);0>b?(b=-b,c.push(tyU.Hr)):a.sr&&c.push(tyU.Or);b=""+b;for(var d=tyU.sj,e=b.length;e<a.pi;e++)c.push(d);c.push(b)},
tyBk=function(a){a=a.charCodeAt(0);if(48<=a&&58>a)return a-48;var b=tyU.sj.charCodeAt(0);return b<=a&&a<b+10?a-b:-1},tyzk=function(a,b,c){for(var d="",e=!1,f=b.length;c[0]<f;c[0]++){var g=b.charAt(c[0]);if("'"==g)c[0]+1<f&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):e=!e;else if(e)d+=g;else switch(g){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<f&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.Tf;else switch(a.Vs){case 0:d+=tywk[a.Tf][1];break;case 2:var g=a.Tf,h=tywk[g],d=d+(g==
h[1]?g:g+" "+h[1]);break;case 1:d+=tywk[a.Tf][2]}break;case "%":if(1!=a.bg)throw Error("Too many percent/permill");a.bg=100;d+=tyU.Mm;break;case "\u2030":if(1!=a.bg)throw Error("Too many percent/permill");a.bg=1E3;d+=tyU.Nm;break;default:d+=g}}return d},tyCk={prefix:"",br:"",Rj:0},tyDk=function(a,b){var c=1==a.Af?tyvk.Br:tyvk.Ar;if(3>b)return tyCk;b=Math.min(14,b);c=c[Math.pow(10,b)];if(!c)return tyCk;c=c.other;return c&&"0"!=c?(c=/([^0]*)(0+)(.*)/.exec(c))?{prefix:c[1],br:c[3],Rj:b-(c[2].length-
1)}:tyCk:tyCk},tyEk=function(a){for(var b=0;1<=(a/=10);)b++;return b},tyIk=function(a,b,c){if(!a)return a;b=b-tyEk(a)-1;if(b<-c)return c=Math.pow(10,c),Math.round(a/c)*c;c=Math.pow(10,b);return Math.round(a*c)/c};var tyJk=function(a){return 1==a%10&&11!=a%100?"one":2==a%10&&12!=a%100?"two":3==a%10&&13!=a%100?"few":"other"},tyKk=tyJk,tyKk=tyJk;var tyLk=function(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1},tyMk=function(a,b){var c,d=a|0;c=void 0===b?Math.min(tyLk(a),3):b;return 1==d&&0==c?"one":"other"},tyNk=tyMk,tyNk=tyMk;var tyQk=function(a){this.Qe=[];this.Uk=[];this.Ok=new tyyk(1);a&&(a=tyOk(this,a),this.Uk=tyPk(this,a))},tyRk=/'([{}#].*?)'/g,tySk=/''/g;tyQk.prototype.format=function(a){if(0==this.Uk.length)a="";else{var b=[];tyTk(this,this.Uk,a,!1,b);a=b.join("");for(a.search("#");0<this.Qe.length;)a=a.replace(this.Ej(this.Qe),this.Qe.pop())}return a};
var tyTk=function(a,b,c,d,e){for(var f=0;f<b.length;f++)switch(b[f].type){case 4:e.push(b[f].value);break;case 3:var g=b[f].value,h=a,k=e,l=c[g];tyb(l)?(h.Qe.push(l),k.push(h.Ej(h.Qe))):k.push("Undefined parameter - "+g);break;case 2:var g=b[f].value,h=a,k=c,l=d,m=e,n=g.Xg;tyb(k[n])?(n=g[k[n]],tyb(n)||(n=g.other),tyTk(h,n,k,l,m)):m.push("Undefined parameter - "+n);break;case 0:g=b[f].value;tyUk(a,g,c,tyNk,d,e);break;case 1:g=b[f].value,tyUk(a,g,c,tyKk,d,e)}},tyUk=function(a,b,c,d,e,f){var g=b.Xg,
h=b.Tm,k=+c[g];isNaN(k)?f.push("Undefined or invalid parameter - "+g):(h=k-h,g=b[c[g]],tyb(g)||(d=a.Ok.At?d(h,a.Ok.At()):d(h),g=b[d],tyb(g)||(g=b.other)),b=[],tyTk(a,g,c,e,b),c=b.join(""),e?f.push(c):(a=a.Ok.format(h),f.push(c.replace(/#/g,a))))},tyOk=function(a,b){var c=a.Qe,d=tyh(a.Ej,a);b=b.replace(tySk,function(){c.push("'");return d(c)});return b=b.replace(tyRk,function(a,b){c.push(b);return d(c)})},tyVk=function(a){var b=0,c=[],d=[],e=/[{}]/g;e.lastIndex=0;for(var f;f=e.exec(a);){var g=f.index;
"}"==f[0]?(c.pop(),0==c.length&&(f={type:1},f.value=a.substring(b,g),d.push(f),b=g+1)):(0==c.length&&(b=a.substring(b,g),""!=b&&d.push({type:0,value:b}),b=g+1),c.push("{"))}b=a.substring(b);""!=b&&d.push({type:0,value:b});return d},tyWk=/^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,tyXk=/^\s*(\w+)\s*,\s*selectordinal\s*,/,tyYk=/^\s*(\w+)\s*,\s*select\s*,/,tyPk=function(a,b){for(var c=[],d=tyVk(b),e=0;e<d.length;e++){var f={};if(0==d[e].type)f.type=4,f.value=d[e].value;else if(1==d[e].type){var g=
d[e].value;switch(tyWk.test(g)?0:tyXk.test(g)?1:tyYk.test(g)?2:/^\s*\w+\s*/.test(g)?3:5){case 2:f.type=2;f.value=tyZk(a,d[e].value);break;case 0:f.type=0;f.value=ty_k(a,d[e].value);break;case 1:f.type=1;f.value=ty0k(a,d[e].value);break;case 3:f.type=3,f.value=d[e].value}}c.push(f)}return c},tyZk=function(a,b){var c="";b=b.replace(tyYk,function(a,b){c=b;return""});var d={};d.Xg=c;for(var e=tyVk(b),f=0;f<e.length;){var g=e[f].value;f++;if(1==e[f].type)var h=tyPk(a,e[f].value);d[g.replace(/\s/g,"")]=
h;f++}return d},ty_k=function(a,b){var c="",d=0;b=b.replace(tyWk,function(a,b,e){c=b;e&&(d=parseInt(e,10));return""});var e={};e.Xg=c;e.Tm=d;for(var f=tyVk(b),g=0;g<f.length;){var h=f[g].value;g++;if(1==f[g].type)var k=tyPk(a,f[g].value);e[h.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=k;g++}return e},ty0k=function(a,b){var c="";b=b.replace(tyXk,function(a,b){c=b;return""});var d={};d.Xg=c;d.Tm=0;for(var e=tyVk(b),f=0;f<e.length;){var g=e[f].value;f++;if(1==e[f].type)var h=tyPk(a,e[f].value);d[g.replace(/\s*(?:=)?(\w+)\s*/,
"$1")]=h;f++}return d};tyQk.prototype.Ej=function(a){return"\ufddf_"+(a.length-1).toString(10)+"_"};chrome.i18n.getMessage("3125342991297920614");chrome.i18n.getMessage("7224832103566723854");chrome.i18n.getMessage("2840006222747077107");chrome.i18n.getMessage("1781759902625939771");chrome.i18n.getMessage("5464364716831469679");chrome.i18n.getMessage("4055580652532057510");chrome.i18n.getMessage("1595478688335662057");var ty1k=chrome.i18n.getMessage("3936240281193464170"),ty2k=chrome.i18n.getMessage("445149490695787423");chrome.i18n.getMessage("5593848105713936399");chrome.i18n.getMessage("5432330868773114140");
chrome.i18n.getMessage("1712333098917352630");chrome.i18n.getMessage("537543696442379345");chrome.i18n.getMessage("730022297859142476");chrome.i18n.getMessage("762389150316771008");chrome.i18n.getMessage("5497512316841934820");
var ty3k=function(a){a=Math.ceil((a||0)/1E3);var b=a%60;a=Math.floor(a/60);var c=a%60;a=Math.floor(a/60);var d=a%24;a=Math.floor(a/24);a=new tyhi(0,0,a,d,c,b);b=a.hb+24*a.nb;0<b?(c=chrome.i18n.getMessage("7873745865358968651"),b=(new tyQk(c)).format({NUM_HOURS:b})+" "):b="";0<a.Za?(c=a.Za,d=chrome.i18n.getMessage("7292878672940239832"),c=(new tyQk(d)).format({NUM_MINUTES:c})+" "):c="";a=a.jb;d=chrome.i18n.getMessage("4461486069850736796");a=(new tyQk(d)).format({NUM_SECONDS:a});return tyHa(b,c,a)};
chrome.i18n.getMessage("7192513315706728552");chrome.i18n.getMessage("953268105555355822");chrome.i18n.getMessage("1604878361972859546");chrome.i18n.getMessage("3313128122800055613");var ty4k=chrome.i18n.getMessage("1179345224084080955"),ty5k=chrome.i18n.getMessage("4754400438927203898"),ty6k=chrome.i18n.getMessage("192481666606780833"),ty7k=chrome.i18n.getMessage("2982463607788408741"),ty8k=chrome.i18n.getMessage("5671499827182863671");chrome.i18n.getMessage("6485379744416240146");chrome.i18n.getMessage("7535122927261158198");
chrome.i18n.getMessage("8892908795692466458");chrome.i18n.getMessage("1220984280262077870");chrome.i18n.getMessage("6233799104785293347");chrome.i18n.getMessage("5004312405043027351");chrome.i18n.getMessage("1664100143082435029");var ty9k=function(){},ty$k=function(a){if("number"==typeof a){var b=new ty9k;b.Uq=a;var c;c=a;if(0==c)c="Etc/GMT";else{var d=["Etc/GMT",0>c?"-":"+"];c=Math.abs(c);d.push(Math.floor(c/60)%100);c%=60;0!=c&&d.push(":",tyk(c,2));c=d.join("")}b.gr=c;0==a?a="UTC":(c=["UTC",0>a?"+":"-"],a=Math.abs(a),c.push(Math.floor(a/60)%100),a%=60,0!=a&&c.push(":",a),a=c.join(""));b.Am=[a,a];b.dj=[];return b}b=new ty9k;b.gr=a.id;b.Uq=-a.std_offset;b.Am=a.names;b.dj=a.transitions;return b},tyal=function(a,b){for(var c=
Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),b.getUTCHours(),b.getUTCMinutes())/36E5,d=0;d<a.dj.length&&c>=a.dj[d];)d+=2;return 0==d?0:a.dj[d-1]};ty9k.prototype.ik=function(a){return this.Am[0<tyal(this,a)?3:1]};ty9k.prototype.getOffset=function(a){return this.Uq-tyal(this,a)};var tybl=function(a,b){this.Ci=[];this.ta=b||tygi;"number"==typeof a?this.Wg(a):this.Jc(a)},tycl=[/^\'(?:[^\']|\'\')*\'/,/^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/,/^[^\'GyMkSEahKHcLQdmsvwzZ]+/];tybl.prototype.Jc=function(a){for(;a;)for(var b=0;b<tycl.length;++b){var c=a.match(tycl[b]);if(c){c=c[0];a=a.substring(c.length);0==b&&("''"==c?c="'":(c=c.substring(1,c.length-1),c=c.replace(/\'\'/,"'")));this.Ci.push({text:c,type:b});break}}};
tybl.prototype.format=function(a,b){if(!a)throw Error("The date to format must be non-null.");var c=b?6E4*(a.getTimezoneOffset()-b.getOffset(a)):0,d=c?new Date(a.getTime()+c):a,e=d;b&&d.getTimezoneOffset()!=a.getTimezoneOffset()&&(e=6E4*(d.getTimezoneOffset()-a.getTimezoneOffset()),d=new Date(d.getTime()+e),c+=0<c?-864E5:864E5,e=new Date(a.getTime()+c));for(var c=[],f=0;f<this.Ci.length;++f){var g=this.Ci[f].text;1==this.Ci[f].type?c.push(tydl(this,g,a,d,e,b)):c.push(g)}return c.join("")};
tybl.prototype.Wg=function(a){var b;if(4>a)b=this.ta.Fm[a];else if(8>a)b=this.ta.Om[a-4];else if(12>a)b=this.ta.Dr[a-8],b=b.replace("{1}",this.ta.Fm[a-8]),b=b.replace("{0}",this.ta.Om[a-8]);else{this.Wg(10);return}this.Jc(b)};
var tyel=function(a,b){var c;c=String(b);var d=a.ta||tygi;if(void 0!==d.fs){for(var e=[],f=0;f<c.length;f++){var g=c.charCodeAt(f);e.push(48<=g&&57>=g?String.fromCharCode(d.fs+g-48):c.charAt(f))}c=e.join("")}return c},tyfl=function(a){if(!(a.getHours&&a.getSeconds&&a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");},tydl=function(a,b,c,d,e,f){var g=b.length;switch(b.charAt(0)){case "G":return c=
0<d.getFullYear()?1:0,4<=g?a.ta.Fr[c]:a.ta.Gr[c];case "y":return c=d.getFullYear(),0>c&&(c=-c),2==g&&(c%=100),tyel(a,tyk(c,g));case "M":a:switch(c=d.getMonth(),g){case 5:a=a.ta.Lr[c];break a;case 4:a=a.ta.Ir[c];break a;case 3:a=a.ta.Tr[c];break a;default:a=tyel(a,tyk(c+1,g))}return a;case "k":return tyfl(e),tyel(a,tyk(e.getHours()||24,g));case "S":return c=e.getTime()%1E3/1E3,tyel(a,c.toFixed(Math.min(3,g)).substr(2)+(3<g?tyk(0,g-3):""));case "E":return c=d.getDay(),4<=g?a.ta.ds[c]:a.ta.Vr[c];case "a":return tyfl(e),
g=e.getHours(),a.ta.zr[12<=g&&24>g?1:0];case "h":return tyfl(e),tyel(a,tyk(e.getHours()%12||12,g));case "K":return tyfl(e),tyel(a,tyk(e.getHours()%12,g));case "H":return tyfl(e),tyel(a,tyk(e.getHours(),g));case "c":a:switch(c=d.getDay(),g){case 5:a=a.ta.Zr[c];break a;case 4:a=a.ta.bs[c];break a;case 3:a=a.ta.as[c];break a;default:a=tyel(a,tyk(c,1))}return a;case "L":a:switch(c=d.getMonth(),g){case 5:a=a.ta.Yr[c];break a;case 4:a=a.ta.Xr[c];break a;case 3:a=a.ta.$r[c];break a;default:a=tyel(a,tyk(c+
1,g))}return a;case "Q":return c=Math.floor(d.getMonth()/3),4>g?a.ta.Ur[c]:a.ta.Pr[c];case "d":return tyel(a,tyk(d.getDate(),g));case "m":return tyfl(e),tyel(a,tyk(e.getMinutes(),g));case "s":return tyfl(e),tyel(a,tyk(e.getSeconds(),g));case "v":return a=f||ty$k(c.getTimezoneOffset()),a.gr;case "w":return c=e.getMonth(),c=new Date(e.getFullYear(),c,e.getDate()),e=a.ta.Km||3,b=a.ta.Jm||0,d=((c.getDay()+6)%7-b+7)%7,c=c.valueOf()+864E5*((e-b+7)%7-d),c=Math.floor(Math.round((c-(new Date((new Date(c)).getFullYear(),
0,1)).valueOf())/864E5)/7)+1,tyel(a,tyk(c,g));case "z":return a=f||ty$k(c.getTimezoneOffset()),4>g?a.Am[0<tyal(a,c)?2:0]:a.ik(c);case "Z":return e=f||ty$k(c.getTimezoneOffset()),4>g?(a=-e.getOffset(c),g=[0>a?"-":"+"],a=Math.abs(a),g.push(tyk(Math.floor(a/60)%100,2),tyk(a%60,2)),a=g.join("")):(g=e.getOffset(c),c=["GMT"],c.push(0>=g?"+":"-"),g=Math.abs(g),c.push(tyk(Math.floor(g/60)%100,2),":",tyk(g%60,2)),a=tyel(a,c.join(""))),a;default:return""}};new tybl(11);var tygl;var tyhl=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")},ty1=function(a,b,c){tyd(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(tygl||(tygl={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=tygl,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)},tyil=function(a,
b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)};var tyll=function(a,b,c,d,e){if(!(tys||tyu&&tyv("525")))return!0;if(tyTb&&e)return tyjl(a);if(e&&!d)return!1;tyfa(b)&&(b=tykl(b));if(!c&&(17==b||18==b||tyTb&&91==b))return!1;if(tyu&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(tys&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!tyu}return tyjl(a)},tyjl=function(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||tyu&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;
default:return!1}},tykl=function(a){if(tyt)a=tyml(a);else if(tyTb&&tyu)a:switch(a){case 93:a=91;break a}return a},tyml=function(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};var tynl=function(a){var b=a.offsetLeft,c=a.offsetParent;c||"fixed"!=tycj(a)||(c=tyC(a).documentElement);if(!c)return b;if(tyt)var d=tyxj(c),b=b+d.left;else ty4b(8)&&!ty4b(9)&&(d=tyxj(c),b-=d.left);return tyqj(c)?c.clientWidth-(b+a.offsetWidth):b};var tyol=function(a,b,c){tyy.call(this);this.target=a;this.handle=b||a;this.ki=c||new ty$i(NaN,NaN,NaN,NaN);this.Ga=tyC(a);this.I=new tyF(this);tyBb(this,tyla(tyCb,this.I));tyx(this.handle,["touchstart","mousedown"],this.Vq,!1,this)};tyj(tyol,tyy);var typl=tys&&!tyv("12")||tyt&&tyv("1.9.3");ty=tyol.prototype;ty.clientX=0;ty.clientY=0;ty.screenX=0;ty.screenY=0;ty.Yq=0;ty.Zq=0;ty.deltaX=0;ty.deltaY=0;ty.ob=!0;ty.ld=!1;ty.hq=!0;ty.bp=0;ty.ti=0;ty.Pu=!1;ty.ue=!1;ty.md=function(a){this.ue=a};
ty.getHandler=function(){return this.I};ty.setEnabled=function(a){this.ob=a};ty.D=function(){tyol.B.D.call(this);tywc(this.handle,["touchstart","mousedown"],this.Vq,!1,this);this.I.removeAll();typl&&this.Ga.releaseCapture();this.handle=this.target=null};var tyql=function(a){tyb(a.Gc)||(a.Gc=tyqj(a.target));return a.Gc};
tyol.prototype.Vq=function(a){var b="mousedown"==a.type;if(!this.ob||this.ld||b&&!tydc(a))this.dispatchEvent("earlycancel");else{tyrl(a);if(0==this.bp)if(this.dispatchEvent(new tysl("start",this,a.clientX,a.clientY)))this.ld=!0,this.hq&&a.preventDefault();else return;else this.hq&&a.preventDefault();var b=this.Ga,c=b.documentElement,d=!typl;this.I.listen(b,["touchmove","mousemove"],this.ju,d);this.I.listen(b,["touchend","mouseup"],this.qh,d);typl?(c.setCapture(!1),this.I.listen(c,"losecapture",this.qh)):
this.I.listen(tyGd(b),"blur",this.qh);tys&&this.Pu&&this.I.listen(b,"dragstart",tyEb);this.uw&&this.I.listen(this.uw,"scroll",this.Lv,d);this.clientX=this.Yq=a.clientX;this.clientY=this.Zq=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;this.deltaX=this.ue?tynl(this.target):this.target.offsetLeft;this.deltaY=this.target.offsetTop;this.Sk=ty4d(tyD(this.Ga));this.ti=tyi()}};
tyol.prototype.qh=function(a){this.I.removeAll();typl&&this.Ga.releaseCapture();if(this.ld){tyrl(a);this.ld=!1;var b=tytl(this,this.deltaX),c=tyul(this,this.deltaY);this.dispatchEvent(new tysl("end",this,a.clientX,a.clientY,0,b,c))}else this.dispatchEvent("earlycancel")};var tyrl=function(a){var b=a.type;"touchstart"==b||"touchmove"==b?a.init(a.Xb().targetTouches[0],a.currentTarget):"touchend"!=b&&"touchcancel"!=b||a.init(a.Xb().changedTouches[0],a.currentTarget)};
tyol.prototype.ju=function(a){if(this.ob){tyrl(a);var b=(this.ue&&tyql(this)?-1:1)*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.ld){var d=this.Yq-this.clientX,e=this.Zq-this.clientY;if(d*d+e*e>this.bp)if(this.dispatchEvent(new tysl("start",this,a.clientX,a.clientY)))this.ld=!0;else{this.isDisposed()||this.qh(a);return}}c=tyvl(this,b,c);b=c.x;c=c.y;this.ld&&this.dispatchEvent(new tysl("beforedrag",
this,a.clientX,a.clientY,0,b,c))&&(tywl(this,a,b,c),a.preventDefault())}};var tyvl=function(a,b,c){var d=ty4d(tyD(a.Ga));b+=d.x-a.Sk.x;c+=d.y-a.Sk.y;a.Sk=d;a.deltaX+=b;a.deltaY+=c;b=tytl(a,a.deltaX);a=tyul(a,a.deltaY);return new tyB(b,a)};tyol.prototype.Lv=function(a){var b=tyvl(this,0,0);a.clientX=this.clientX;a.clientY=this.clientY;tywl(this,a,b.x,b.y)};
var tywl=function(a,b,c,d){a.Lj(c,d);a.dispatchEvent(new tysl("drag",a,b.clientX,b.clientY,0,c,d))},tytl=function(a,b){var c=a.ki,d=isNaN(c.left)?null:c.left,c=isNaN(c.width)?0:c.width;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))},tyul=function(a,b){var c=a.ki,d=isNaN(c.top)?null:c.top,c=isNaN(c.height)?0:c.height;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))};
tyol.prototype.Lj=function(a,b){this.ue&&tyql(this)?this.target.style.right=a+"px":this.target.style.left=a+"px";this.target.style.top=b+"px"};tyol.prototype.Vf=function(){return this.ld};var tysl=function(a,b,c,d,e,f,g){tyq.call(this,a);this.clientX=c;this.clientY=d;this.left=tyb(f)?f:b.deltaX;this.top=tyb(g)?g:b.deltaY;this.Sj=b};tyj(tysl,tyq);var tyxl=function(a){tyy.call(this);this.C=a;a=tys?"focusout":"blur";this.hv=tyx(this.C,tys?"focusin":"focus",this,!tys);this.iv=tyx(this.C,a,this,!tys)};tyj(tyxl,tyy);tyxl.prototype.handleEvent=function(a){var b=new tyw(a.Xb());b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};tyxl.prototype.D=function(){tyxl.B.D.call(this);tyxc(this.hv);tyxc(this.iv);delete this.C};var tyyl=function(){};tyca(tyyl);tyyl.prototype.Nk=0;var ty2=function(a){tyy.call(this);this.fb=a||tyD();this.Gc=tyzl;this.Na=null;this.S=!1;this.C=null;this.vd=void 0;this.ic=this.Va=this.P=this.Mk=null;this.ur=!1};tyj(ty2,tyy);ty2.prototype.Ou=tyyl.getInstance();
var tyzl=null,tyAl=function(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");};ty=ty2.prototype;ty.getId=function(){return this.Na||(this.Na=":"+(this.Ou.Nk++).toString(36))};
ty.ne=function(a){if(this.P&&this.P.ic){var b=this.P.ic,c=this.Na;c in b&&delete b[c];tygb(this.P.ic,a,this)}this.Na=a};ty.A=function(){return this.C};ty.N=function(a){return this.C?this.fb.N(a,this.C):null};ty.J=function(a){return this.N(a)};ty.getHandler=function(){this.vd||(this.vd=new tyF(this));return this.vd};
ty.Ui=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.P&&this.Na&&tyBl(this.P,this.Na)&&this.P!=a)throw Error("Unable to set parent component");this.P=a;ty2.B.Dl.call(this,a)};ty.getParent=function(){return this.P};ty.Dl=function(a){if(this.P&&this.P!=a)throw Error("Method not supported");ty2.B.Dl.call(this,a)};ty.K=function(){return this.fb};ty.F=function(){this.C=this.fb.createElement("DIV")};ty.render=function(a){tyCl(this,a)};
var tyCl=function(a,b,c){if(a.S)throw Error("Component already rendered");a.C||a.F();b?b.insertBefore(a.C,c||null):a.fb.Ia().body.appendChild(a.C);a.P&&!a.P.S||a.H()};ty=ty2.prototype;ty.ba=function(a){if(this.S)throw Error("Component already rendered");if(a&&this.hc(a)){this.ur=!0;var b=tyC(a);this.fb&&this.fb.Ia()==b||(this.fb=tyD(a));this.eb(a);this.H()}else throw Error("Invalid element to decorate");};ty.hc=function(){return!0};ty.eb=function(a){this.C=a};
ty.H=function(){this.S=!0;this.Rc(function(a){!a.S&&a.A()&&a.H()})};ty.Ha=function(){this.Rc(function(a){a.S&&a.Ha()});this.vd&&this.vd.removeAll();this.S=!1};ty.D=function(){this.S&&this.Ha();this.vd&&(this.vd.W(),delete this.vd);this.Rc(function(a){a.W()});!this.ur&&this.C&&tyNd(this.C);this.P=this.Mk=this.C=this.ic=this.Va=null;ty2.B.D.call(this)};ty.Bt=function(){return this.Mk};ty.Jw=function(a){this.Mk=a};ty.Ka=function(a,b){this.vj(a,this.rd(),b)};
ty.vj=function(a,b,c){if(a.S&&(c||!this.S))throw Error("Component already rendered");if(0>b||b>this.rd())throw Error("Child component index out of bounds");this.ic&&this.Va||(this.ic={},this.Va=[]);if(a.getParent()==this){var d=a.getId();this.ic[d]=a;tyXa(this.Va,a)}else tygb(this.ic,a.getId(),a);a.Ui(this);ty0a(this.Va,b,0,a);a.S&&this.S&&a.getParent()==this?(c=this.na(),b=c.childNodes[b]||null,b!=a.A()&&c.insertBefore(a.A(),b)):c?(this.C||this.F(),b=this.Yb(b+1),tyCl(a,this.na(),b?b.C:null)):this.S&&
!a.S&&a.C&&a.C.parentNode&&1==a.C.parentNode.nodeType&&a.H()};ty.na=function(){return this.C};ty.Rb=function(){null==this.Gc&&(this.Gc=tyqj(this.S?this.C:this.fb.Ia().body));return this.Gc};ty.ef=function(a){if(this.S)throw Error("Component already rendered");this.Gc=a};ty.rd=function(){return this.Va?this.Va.length:0};var tyBl=function(a,b){var c;a.ic&&b?(c=a.ic,c=(b in c?c[b]:void 0)||null):c=null;return c};ty2.prototype.Yb=function(a){return this.Va?this.Va[a]||null:null};
ty2.prototype.Rc=function(a,b){this.Va&&tym(this.Va,a,b)};var tyDl=function(a,b){return a.Va&&b?tyOa(a.Va,b):-1};ty2.prototype.removeChild=function(a,b){if(a){var c=tye(a)?a:a.getId();a=tyBl(this,c);if(c&&a){var d=this.ic;c in d&&delete d[c];tyXa(this.Va,a);b&&(a.Ha(),a.C&&tyNd(a.C));a.Ui(null)}}if(!a)throw Error("Child is not in parent component");return a};var tyEl=function(a,b){this.C=a;this.fb=b};var tyFl=function(a,b){ty2.call(this,b);this.tx=!!a;this.Pe=null};tyj(tyFl,ty2);ty=tyFl.prototype;ty.bk=null;ty.Ra=!1;ty.Jb=null;ty.cb=null;ty.wc=null;ty.Aj=!1;ty.O=function(){return"u-modalpopup"};ty.Dh=function(){return this.Jb};ty.F=function(){tyFl.B.F.call(this);var a=this.A(),b=tyua(this.O()).split(" ");ty3i(a,b);tyXd(a,!0);tyV(a,!1);tyGl(this);tyHl(this)};
var tyGl=function(a){if(a.tx&&!a.cb){var b;b=a.K().F("iframe",{frameborder:0,style:"border:0;vertical-align:bottom;"+(tye(void 0)?(new tykd).Yh(void 0).lk():""),src:'javascript:""'});a.cb=b;a.cb.className=a.O()+"-bg";tyV(a.cb,!1);typj(a.cb,0)}a.Jb||(a.Jb=a.K().F("DIV",a.O()+"-bg"),tyV(a.Jb,!1))},tyHl=function(a){a.wc||(a.wc=a.K().createElement("SPAN"),tyV(a.wc,!1),tyXd(a.wc,!0),a.wc.style.position="absolute")};ty=tyFl.prototype;ty.tq=function(){this.Aj=!1};ty.hc=function(a){return!!a&&"DIV"==a.tagName};
ty.eb=function(a){tyFl.B.eb.call(this,a);a=tyua(this.O()).split(" ");ty3i(this.A(),a);tyGl(this);tyHl(this);tyXd(this.A(),!0);tyV(this.A(),!1)};ty.H=function(){if(this.cb){var a=this.A();a.parentNode&&a.parentNode.insertBefore(this.cb,a)}a=this.A();a.parentNode&&a.parentNode.insertBefore(this.Jb,a);tyFl.B.H.call(this);a=this.A();a.parentNode&&a.parentNode.insertBefore(this.wc,a.nextSibling);this.bk=new tyxl(this.K().Ia());this.getHandler().listen(this.bk,"focusin",this.onFocus);tyIl(this,!1)};
ty.Ha=function(){this.ja()&&this.qa(!1);tyCb(this.bk);tyFl.B.Ha.call(this);tyNd(this.cb);tyNd(this.Jb);tyNd(this.wc)};ty.qa=function(a){a!=this.Ra&&(this.Ye&&this.Ye.stop(),this.yf&&this.yf.stop(),this.Xe&&this.Xe.stop(),this.xf&&this.xf.stop(),this.S&&tyIl(this,a),a?this.gx():this.Mu())};
var tyIl=function(a,b){a.Ip||(a.Ip=new tyEl(a.C,a.fb));var c=a.Ip;if(b){c.Ne||(c.Ne=[]);for(var d=c.fb.getChildren(c.fb.Ia().body),e=0;e<d.length;e++){var f=d[e];f==c.C||tyil(f,"hidden")||(ty1(f,"hidden",!0),c.Ne.push(f))}}else if(c.Ne){for(e=0;e<c.Ne.length;e++)c.Ne[e].removeAttribute("aria-hidden");c.Ne=null}};
tyFl.prototype.gx=function(){if(this.dispatchEvent("beforeshow")){try{this.Pe=this.K().Ia().activeElement}catch(a){}this.dl();this.Fd();this.getHandler().listen(this.K().getWindow(),"resize",this.dl);tyJl(this,!0);this.focus();this.Ra=!0;this.Ye&&this.yf?(tyvc(this.Ye,"end",this.yi,!1,this),this.yf.play(),this.Ye.play()):this.yi()}};
tyFl.prototype.Mu=function(){if(this.dispatchEvent("beforehide")){this.getHandler().ma(this.K().getWindow(),"resize",this.dl);this.Ra=!1;this.Xe&&this.xf?(tyvc(this.Xe,"end",this.xi,!1,this),this.xf.play(),this.Xe.play()):this.xi();a:{try{var a=this.K(),b=a.Ia().body,c=a.Ia().activeElement||b;if(!this.Pe||this.Pe==b){this.Pe=null;break a}(c==b||a.contains(this.A(),c))&&this.Pe.focus()}catch(d){}this.Pe=null}}};var tyJl=function(a,b){a.cb&&tyV(a.cb,b);a.Jb&&tyV(a.Jb,b);tyV(a.A(),b);tyV(a.wc,b)};
ty=tyFl.prototype;ty.yi=function(){this.dispatchEvent("show")};ty.xi=function(){tyJl(this,!1);this.dispatchEvent("hide")};ty.ja=function(){return this.Ra};ty.focus=function(){this.Fn()};
ty.dl=function(){this.cb&&tyV(this.cb,!1);this.Jb&&tyV(this.Jb,!1);var a=this.K().Ia(),b=tyEd(tyGd(a)||window),c=Math.max(b.width,Math.max(a.body.scrollWidth,a.documentElement.scrollWidth)),a=Math.max(b.height,Math.max(a.body.scrollHeight,a.documentElement.scrollHeight));this.cb&&(tyV(this.cb,!0),tymj(this.cb,c,a));this.Jb&&(tyV(this.Jb,!0),tymj(this.Jb,c,a))};
ty.Fd=function(){var a=this.K().Ia(),b=tyGd(a)||window;if("fixed"==tycj(this.A()))var c=a=0;else c=ty4d(this.K()),a=c.x,c=c.y;var d=tyoj(this.A()),b=tyEd(b),a=Math.max(a+b.width/2-d.width/2,0),c=Math.max(c+b.height/2-d.height/2,0);tyej(this.A(),a,c);tyej(this.wc,a,c)};ty.onFocus=function(a){this.Aj?this.tq():a.target==this.wc&&tyRe(this.Fn,0,this)};ty.Fn=function(){try{tys&&this.K().Ia().body.focus(),this.A().focus()}catch(a){}};
ty.D=function(){tyCb(this.Ye);this.Ye=null;tyCb(this.Xe);this.Xe=null;tyCb(this.yf);this.yf=null;tyCb(this.xf);this.xf=null;tyFl.B.D.call(this)};var ty3=function(a,b,c){tyFl.call(this,b,c);this.mb=a||"modal-Jc";this.gc=(new tyKl).Ib(tyLl,!0).Ib(tyMl,!1,!0)};tyj(ty3,tyFl);ty=ty3.prototype;ty.kt=!0;ty.wk=!0;ty.Jp=!0;ty.dt=!0;ty.$g=.5;ty.of="";ty.zb=null;ty.kd=null;ty.$s=!1;ty.la=null;ty.wb=null;ty.$i=null;ty.Fb=null;ty.kc=null;ty.ia=null;ty.Zk="dialog";ty.O=function(){return this.mb};ty.setTitle=function(a){this.of=a;this.wb&&tyE(this.wb,a)};ty.setContent=function(a){this.zb=a=(new tyod).Yh(a,null);this.kc&&(this.kc.innerHTML=typd(a))};
ty.getContent=function(){return null!=this.zb?typd(this.zb):""};ty.td=function(){return this.Zk};ty.na=function(){this.A()||this.render();return this.kc};ty.Dh=function(){this.A()||this.render();return ty3.B.Dh.call(this)};var tyNl=function(a,b){a.$g=b;if(a.A()){var c=a.Dh();c&&typj(c,a.$g)}},tyOl=function(a,b){var c=tyua(a.mb+"-Fb-draggable").split(" ");a.A()&&(b?ty3i(a.la,c):ty4i(a.la,c));b&&!a.kd?(a.kd=new tyol(a.A(),a.la),ty3i(a.la,c),tyx(a.kd,"start",a.Dw,!1,a)):!b&&a.kd&&(a.kd.W(),a.kd=null)};
ty=ty3.prototype;
ty.F=function(){ty3.B.F.call(this);var a=this.A(),b=this.K();this.la=b.F("DIV",this.mb+"-Fb",this.wb=b.F("SPAN",{className:this.mb+"-Fb-g",id:this.getId()},this.of),this.Fb=b.F("SPAN",this.mb+"-Fb-Jb"));tyLd(a,this.la,this.kc=b.F("DIV",this.mb+"-y"),this.ia=b.F("DIV",this.mb+"-buttons"));tyhl(this.wb,"heading");tyhl(this.Fb,"button");tyXd(this.Fb,!0);ty1(this.Fb,"label",tyPl);this.$i=this.wb.id;tyhl(a,this.td());ty1(a,"labelledby",this.$i||"");this.zb&&(this.kc.innerHTML=typd(this.zb));tyV(this.Fb,
this.wk);this.gc&&(a=this.gc,a.C=this.ia,a.render());tyV(this.ia,!!this.gc);tyNl(this,this.$g)};
ty.eb=function(a){ty3.B.eb.call(this,a);a=this.A();var b=this.mb+"-y";this.kc=tyzd(document,null,b,a)[0];this.kc||(this.kc=this.K().F("DIV",b),this.zb&&(this.kc.innerHTML=typd(this.zb)),a.appendChild(this.kc));var b=this.mb+"-Fb",c=this.mb+"-Fb-g",d=this.mb+"-Fb-Jb";(this.la=tyzd(document,null,b,a)[0])?(this.wb=tyzd(document,null,c,this.la)[0],this.Fb=tyzd(document,null,d,this.la)[0]):(this.la=this.K().F("DIV",b),a.insertBefore(this.la,this.kc));this.wb?(this.of=tyZd(this.wb),this.wb.id||(this.wb.id=
this.getId())):(this.wb=tyId("SPAN",{className:c,id:this.getId()}),this.la.appendChild(this.wb));this.$i=this.wb.id;ty1(a,"labelledby",this.$i||"");this.Fb||(this.Fb=this.K().F("SPAN",d),this.la.appendChild(this.Fb));tyV(this.Fb,this.wk);b=this.mb+"-buttons";(this.ia=tyzd(document,null,b,a)[0])?(this.gc=new tyKl(this.K()),this.gc.ba(this.ia)):(this.ia=this.K().F("DIV",b),a.appendChild(this.ia),this.gc&&(a=this.gc,a.C=this.ia,a.render()),tyV(this.ia,!!this.gc));tyNl(this,this.$g)};
ty.H=function(){ty3.B.H.call(this);this.getHandler().listen(this.A(),"keydown",this.Tp).listen(this.A(),"keypress",this.Tp);this.getHandler().listen(this.ia,"click",this.Cv);tyOl(this,this.dt);this.getHandler().listen(this.Fb,"click",this.Sv);var a=this.A();tyhl(a,this.td());""!==this.wb.id&&ty1(a,"labelledby",this.wb.id);if(!this.Jp){this.Jp=!1;if(this.S){var a=this.K(),b=this.Dh();a.removeNode(this.cb);a.removeNode(b)}this.ja()&&tyIl(this,!1)}};
ty.Ha=function(){this.ja()&&this.qa(!1);tyOl(this,!1);ty3.B.Ha.call(this)};ty.qa=function(a){a!=this.ja()&&(this.S||this.render(),ty3.B.qa.call(this,a))};ty.yi=function(){ty3.B.yi.call(this);this.dispatchEvent("aftershow")};ty.xi=function(){ty3.B.xi.call(this);this.dispatchEvent("afterhide");this.$s&&this.W()};
ty.Dw=function(){var a=this.K().Ia(),b=tyEd(tyGd(a)||window),c=Math.max(a.body.scrollWidth,b.width),a=Math.max(a.body.scrollHeight,b.height),d=tyoj(this.A());"fixed"==tycj(this.A())?(b=new ty$i(0,0,Math.max(0,b.width-d.width),Math.max(0,b.height-d.height)),this.kd.ki=b||new ty$i(NaN,NaN,NaN,NaN)):this.kd.ki=new ty$i(0,0,c-d.width,a-d.height)||new ty$i(NaN,NaN,NaN,NaN)};ty.Sv=function(){tyQl(this)};
var tyQl=function(a){if(a.wk){var b=a.gc,c=b&&b.Gj;c?(b=b.get(c),a.dispatchEvent(new tyRl(c,b))&&a.qa(!1)):a.qa(!1)}};ty3.prototype.D=function(){this.ia=this.Fb=null;ty3.B.D.call(this)};ty3.prototype.Cv=function(a){a:{for(a=a.target;null!=a&&a!=this.ia;){if("BUTTON"==a.tagName)break a;a=a.parentNode}a=null}if(a&&!a.disabled){a=a.name;var b=this.gc.get(a);this.dispatchEvent(new tyRl(a,b))&&this.qa(!1)}};
ty3.prototype.Tp=function(a){var b=!1,c=!1,d=this.gc,e=a.target;if("keydown"==a.type)if(this.kt&&27==a.keyCode){var f=d&&d.Gj,e="SELECT"==e.tagName&&!e.disabled;f&&!e?(c=!0,b=d.get(f),b=this.dispatchEvent(new tyRl(f,b))):e||(b=!0)}else{if(9==a.keyCode&&a.shiftKey&&e==this.A()){this.Aj=!0;try{this.wc.focus()}catch(g){}tyRe(this.tq,0,this)}}else if(13==a.keyCode){if("BUTTON"==e.tagName&&!e.disabled)f=e.name;else if(e==this.Fb)tyQl(this);else if(d){var h=d.Mj,k;if(k=h)a:{k=d.C.getElementsByTagName("BUTTON");
for(var l=0,m;m=k[l];l++)if(m.name==h||m.id==h){k=m;break a}k=null}e=("TEXTAREA"==e.tagName||"SELECT"==e.tagName||"A"==e.tagName)&&!e.disabled;!k||k.disabled||e||(f=h)}f&&d&&(c=!0,b=this.dispatchEvent(new tyRl(f,String(d.get(f)))))}else e==this.Fb&&32==a.keyCode&&tyQl(this);if(b||c)a.stopPropagation(),a.preventDefault();b&&this.qa(!1)};var tyRl=function(a,b){this.type="dialogselect";this.key=a;this.caption=b};tyj(tyRl,tyq);var tyKl=function(a){this.fb=a||tyD();tyo.call(this)};tyj(tyKl,tyo);ty=tyKl.prototype;
ty.mb="u-buttonset";ty.Mj=null;ty.C=null;ty.Gj=null;ty.set=function(a,b,c,d){tyo.prototype.set.call(this,a,b);c&&(this.Mj=a);d&&(this.Gj=a);return this};ty.Ib=function(a,b,c){return this.set(a.key,a.caption,b,c)};ty.render=function(){if(this.C){this.C.innerHTML=typd(tyqd);var a=tyD(this.C);this.forEach(function(b,c){var d=a.F("BUTTON",{name:c},b);c==this.Mj&&(d.className=this.mb+"-default");this.C.appendChild(d)},this)}};
ty.ba=function(a){if(a&&1==a.nodeType){this.C=a;a=this.C.getElementsByTagName("BUTTON");for(var b=0,c,d,e;c=a[b];b++)if(d=c.name||c.id,e=tyZd(c)||c.value,d){var f=0==b;this.set(d,e,f,"cancel"==c.name);f&&tyR(c,this.mb+"-default")}}};ty.A=function(){return this.C};ty.K=function(){return this.fb};
var tySl=chrome.i18n.getMessage("6814976743136440069"),tyTl=chrome.i18n.getMessage("4263959392548297550"),tyUl=chrome.i18n.getMessage("2881621988818346391"),tyVl=chrome.i18n.getMessage("66116513409922755"),tyWl=chrome.i18n.getMessage("4396890764725725469"),tyXl=chrome.i18n.getMessage("9084816336314899019"),tyPl=chrome.i18n.getMessage("2139683490477275175"),tyLl={key:"ok",caption:tySl},tyMl={key:"cancel",caption:tyTl},tyYl={key:"yes",caption:tyUl},tyZl={key:"no",caption:tyVl},ty_l={key:"save",caption:tyWl},
ty0l={key:"continue",caption:tyXl};"undefined"!=typeof document&&((new tyKl).Ib(tyLl,!0,!0),(new tyKl).Ib(tyLl,!0).Ib(tyMl,!1,!0),(new tyKl).Ib(tyYl,!0).Ib(tyZl,!1,!0),(new tyKl).Ib(tyYl).Ib(tyZl,!0).Ib(tyMl,!1,!0),(new tyKl).Ib(ty0l).Ib(ty_l).Ib(tyMl,!0,!0));tyIa();tylf("u");tylf("hl");(new tyQg).Bq(1);(new tyQg).Bq(7);chrome.i18n.getMessage("6652787256443519035");chrome.i18n.getMessage("2038618429165152799");chrome.i18n.getMessage("5594762259680838005");chrome.i18n.getMessage("1686917835491599951");chrome.i18n.getMessage("8385464685117997940");chrome.i18n.getMessage("5003850562831597565");chrome.i18n.getMessage("8961985815150856927");chrome.i18n.getMessage("1026450251988549367");chrome.i18n.getMessage("5971001229987621398");chrome.i18n.getMessage("6718773735728815040");chrome.i18n.getMessage("9024489874326845912");chrome.i18n.getMessage("6504449653938065974");
chrome.i18n.getMessage("7116872031464114568");chrome.i18n.getMessage("5518817744725858296");chrome.i18n.getMessage("7009828133009731416");chrome.i18n.getMessage("8325100368677049569");chrome.i18n.getMessage("5049432650728491454");chrome.i18n.getMessage("848933194605193751");new tyI("ba");new tyI("ca");new tyI("da");var ty1l=tyei.getInstance().Kf();tyN(ty1l,8);/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
chrome.i18n.getMessage("1856783607057252051");chrome.i18n.getMessage("1357694012211254786");var ty5l=function(a,b,c,d,e,f,g,h,k){var l=ty2l(c),m;m=tyij(a);var n=tyoj(a);m=new ty$i(m.x,m.y,n.width,n.height);(n=tyjj(a))&&m.lp(new ty$i(n.left,n.top,n.right-n.left,n.bottom-n.top));var n=tyD(a),p=tyD(c);if(n.Ia()!=p.Ia()){var q=n.Ia().body,p=p.getWindow(),r=new tyB(0,0),t=tyGd(tyC(q)),v=q;do{var w=t==p?tyij(v):tykj(v);r.x+=w.x;r.y+=w.y}while(t&&t!=p&&t!=t.parent&&(v=t.frameElement)&&(t=t.parent));q=tyrd(r,tyij(q));!tys||ty4b(9)||ty3d(n)||(q=tyrd(q,ty4d(n)));m.left+=q.x;m.top+=q.y}a=ty3l(a,b);
b=new tyB(a&2?m.left+m.width:m.left,a&1?m.top+m.height:m.top);b=tyrd(b,l);e&&(b.x+=(a&2?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var u;if(g)if(k)u=k;else if(u=tyjj(c))u.top-=l.y,u.right-=l.x,u.bottom-=l.y,u.left-=l.x;return ty4l(b,c,d,f,u,g,h)},ty2l=function(a){var b;if(a=a.offsetParent){var c="HTML"==a.tagName||"BODY"==a.tagName;c&&"static"==tycj(a)||(b=tyij(a),c||(c=(c=tyqj(a))&&tyt?-a.scrollLeft:!c||tys&&tyv("8")||"visible"==tybj(a,"overflowX")?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft,b=tyrd(b,
new tyB(c,a.scrollTop))))}return b||new tyB},ty4l=function(a,b,c,d,e,f,g){a=a.clone();var h=ty3l(b,c);c=tyoj(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&2?a.x-=g.width+(d?d.right:0):d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&
(h.width=Math.min(e.right-d.x,l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k=k|(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k=k|(d.y<e.top?64:0)|(d.y+h.height>
e.bottom?128:0));e=k}else e=256;k=e}f=new ty$i(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;tyej(b,new tyB(f.left,f.top));g=f.ud();tytd(c,g)||(c=g,g=tyC(b),a=ty3d(tyD(g)),!tys||tyv("10")||a&&tyv("8")?(b=b.style,tyt?b.MozBoxSizing="border-box":tyu?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+"px"):(g=b.style,a?(tys?(a=tyuj(b,"paddingLeft"),f=tyuj(b,"paddingRight"),d=tyuj(b,"paddingTop"),
h=tyuj(b,"paddingBottom"),a=new ty9i(d,f,h,a)):(a=tyaj(b,"paddingLeft"),f=tyaj(b,"paddingRight"),d=tyaj(b,"paddingTop"),h=tyaj(b,"paddingBottom"),a=new ty9i(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),b=tyxj(b),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e},ty3l=function(a,b){return(b&4&&tyqj(a)?b^2:b)&-5};var ty6l=function(a,b){tyy.call(this);a&&this.Zg(a,b)};tyj(ty6l,tyy);ty=ty6l.prototype;ty.C=null;ty.ei=null;ty.Dk=null;ty.fi=null;ty.Sb=-1;ty.Bd=-1;ty.xj=!1;
var ty7l={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},ty8l={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},ty9l=tys||tyu&&tyv("525"),ty$l=tyTb&&tyt;ty=ty6l.prototype;
ty.Tc=function(a){tyu&&(17==this.Sb&&!a.ctrlKey||18==this.Sb&&!a.altKey||tyTb&&91==this.Sb&&!a.metaKey)&&(this.Bd=this.Sb=-1);-1==this.Sb&&(a.ctrlKey&&17!=a.keyCode?this.Sb=17:a.altKey&&18!=a.keyCode?this.Sb=18:a.metaKey&&91!=a.keyCode&&(this.Sb=91));ty9l&&!tyll(a.keyCode,this.Sb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Bd=tykl(a.keyCode),ty$l&&(this.xj=a.altKey))};ty.du=function(a){this.Bd=this.Sb=-1;this.xj=a.altKey};
ty.handleEvent=function(a){var b=a.Xb(),c,d,e=b.altKey;tys&&"keypress"==a.type?(c=this.Bd,d=13!=c&&27!=c?b.keyCode:0):tyu&&"keypress"==a.type?(c=this.Bd,d=0<=b.charCode&&63232>b.charCode&&tyjl(c)?b.charCode:0):tySb?(c=this.Bd,d=tyjl(c)?b.keyCode:0):(c=b.keyCode||this.Bd,d=b.charCode||0,ty$l&&(e=this.xj),tyTb&&63==d&&224==c&&(c=191));var f=c=tykl(c),g=b.keyIdentifier;c?63232<=c&&c in ty7l?f=ty7l[c]:25==c&&a.shiftKey&&(f=9):g&&g in ty8l&&(f=ty8l[g]);a=f==this.Sb;this.Sb=f;b=new tyam(f,d,a,b);b.altKey=
e;this.dispatchEvent(b)};ty.A=function(){return this.C};ty.Zg=function(a,b){this.fi&&this.detach();this.C=a;this.ei=tyx(this.C,"keypress",this,b);this.Dk=tyx(this.C,"keydown",this.Tc,b,this);this.fi=tyx(this.C,"keyup",this.du,b,this)};ty.detach=function(){this.ei&&(tyxc(this.ei),tyxc(this.Dk),tyxc(this.fi),this.fi=this.Dk=this.ei=null);this.C=null;this.Bd=this.Sb=-1};ty.D=function(){ty6l.B.D.call(this);this.detach()};
var tyam=function(a,b,c,d){tyw.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c};tyj(tyam,tyw);var tybm=function(){},tycm;tyca(tybm);var tydm={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};ty=tybm.prototype;ty.Rd=function(){};ty.F=function(a){return a.K().F("DIV",this.He(a).join(" "),a.getContent())};ty.na=function(a){return a};ty.Gf=function(a,b,c){if(a=a.A?a.A():a){var d=[b];tys&&!tyv("7")&&(d=tyem(ty1i(a),b),d.push(b));(c?ty3i:ty4i)(a,d)}};ty.hc=function(){return!0};
ty.ba=function(a,b){b.id&&a.ne(b.id);var c=this.na(b);c&&c.firstChild?tyfm(a,c.firstChild.nextSibling?tyZa(c.childNodes):c.firstChild):a.zb=null;var d=0,e=this.O(),f=this.O(),g=!1,h=!1,k=!1,l=tyZa(ty1i(b));tym(l,function(a){g||a!=e?h||a!=f?d|=this.Ih(a):h=!0:(g=!0,f==e&&(h=!0));1==this.Ih(a)&&tyWd(c)&&tyXd(c,!1)},this);a.G=d;g||(l.push(e),f==e&&(h=!0));h||l.push(f);var m=a.oc;m&&l.push.apply(l,m);if(tys&&!tyv("7")){var n=tyem(l);0<n.length&&(l.push.apply(l,n),k=!0)}if(!g||!h||m||k)b.className=l.join(" ");
return b};ty.yd=function(a){a.Rb()&&this.ef(a.A(),!0);a.isEnabled()&&this.fd(a,a.ja())};var tygm=function(a,b,c){if(a=c||a.Rd())c=b.getAttribute("role")||null,a!=c&&tyhl(b,a)},tyhm=function(a,b,c){var d=b.Um;null!=d&&a.gl(c,d);b.ja()||ty1(c,"hidden",!b.ja());b.isEnabled()||a.Hc(c,1,!b.isEnabled());ty4(b,8)&&a.Hc(c,8,b.isSelected());ty4(b,16)&&a.Hc(c,16,b.Wc());ty4(b,64)&&a.Hc(c,64,b.mp())};ty=tybm.prototype;ty.gl=function(a,b){ty1(a,"label",b)};ty.og=function(a,b){tysj(a,!b,!tys&&!tySb)};
ty.ef=function(a,b){this.Gf(a,this.O()+"-rtl",b)};ty.Xc=function(a){var b;return ty4(a,32)&&(b=a.La())?tyWd(b):!1};ty.fd=function(a,b){var c;if(ty4(a,32)&&(c=a.La())){if(!b&&a.G&32){try{c.blur()}catch(d){}a.G&32&&a.Ud(null)}tyWd(c)!=b&&tyXd(c,b)}};ty.qa=function(a,b){tyV(a,b);a&&ty1(a,"hidden",!b)};ty.Xa=function(a,b,c){var d=a.A();if(d){var e=this.Jf(b);e&&this.Gf(a,e,c);this.Hc(d,b,c)}};
ty.Hc=function(a,b,c){tycm||(tycm={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=tycm[b];var d=a.getAttribute("role")||null;d&&(d=tydm[d]||b,b="checked"==b||"selected"==b?d:b);b&&ty1(a,b,c)};ty.setContent=function(a,b){var c=this.na(a);if(c&&(tyMd(c),b))if(tye(b))tyE(c,b);else{var d=function(a){if(a){var b=tyC(c);c.appendChild(tye(a)?b.createTextNode(a):a)}};tyd(b)?tym(b,d):!tyea(b)||"nodeType"in b?d(b):tym(tyZa(b),d)}};ty.La=function(a){return a.A()};ty.O=function(){return"u-control"};
ty.He=function(a){var b=this.O(),c=[b],d=this.O();d!=b&&c.push(d);b=a.getState();for(d=[];b;){var e=b&-b;d.push(this.Jf(e));b&=~e}c.push.apply(c,d);(a=a.oc)&&c.push.apply(c,a);tys&&!tyv("7")&&c.push.apply(c,tyem(c));return c};var tyem=function(a,b){var c=[];b&&(a=a.concat([b]));tym([],function(d){!tyTa(d,tyla(tyn,a))||b&&!tyn(d,b)||c.push(d.join("_"))});return c};tybm.prototype.Jf=function(a){this.ih||tyim(this);return this.ih[a]};
tybm.prototype.Ih=function(a){if(!this.$q){this.ih||tyim(this);var b=this.ih,c={},d;for(d in b)c[b[d]]=d;this.$q=c}a=parseInt(this.$q[a],10);return isNaN(a)?0:a};var tyim=function(a){var b=a.O();b.replace(/\xa0|\s/g," ").indexOf(" ");a.ih={1:b+"-p",2:b+"-T",4:b+"-W",8:b+"-j",16:b+"-ed",32:b+"-U",64:b+"-V"}};var tykm=function(a,b){if(!a)throw Error("Invalid class name "+a);if(!tyf(b))throw Error("Invalid decorator function "+b);tyjm[a]=b},tylm={},tyjm={};var ty5=function(a,b,c){ty2.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=tyia(b);if(d=tylm[d])break;b=b.B?b.B.constructor:null}b=d?tyf(d.getInstance)?d.getInstance():new d:null}this.L=b;this.zb=tyb(a)?a:null;this.Um=null};tyj(ty5,ty2);ty=ty5.prototype;ty.zb=null;ty.G=0;ty.Bg=39;ty.vf=255;ty.Ag=0;ty.Ra=!0;ty.oc=null;ty.Qh=!0;ty.Tg=!1;ty.Zk=null;var tynm=function(a,b){a.S&&b!=a.Qh&&tymm(a,b);a.Qh=b};ty=ty5.prototype;ty.La=function(){return this.L.La(this)};
ty.Fh=function(){return this.Oa||(this.Oa=new ty6l)};ty.Sc=function(){return this.L};ty.ks=function(a){a&&(this.oc?tyn(this.oc,a)||this.oc.push(a):this.oc=[a],this.L.Gf(this,a,!0))};ty.Gf=function(a,b){b?this.ks(a):a&&this.oc&&tyXa(this.oc,a)&&(0==this.oc.length&&(this.oc=null),this.L.Gf(this,a,!1))};ty.F=function(){var a=this.L.F(this);this.C=a;tygm(this.L,a,this.td());this.Tg||this.L.og(a,!1);this.ja()||this.L.qa(a,!1)};ty.td=function(){return this.Zk};
ty.gl=function(a){this.Um=a;var b=this.A();b&&this.L.gl(b,a)};ty.na=function(){return this.L.na(this.A())};ty.hc=function(a){return this.L.hc(a)};ty.eb=function(a){this.C=a=this.L.ba(this,a);tygm(this.L,a,this.td());this.Tg||this.L.og(a,!1);this.Ra="none"!=a.style.display};
ty.H=function(){ty5.B.H.call(this);tyhm(this.L,this,this.C);this.L.yd(this);if(this.Bg&-2&&(this.Qh&&tymm(this,!0),ty4(this,32))){var a=this.La();if(a){var b=this.Fh();b.Zg(a);this.getHandler().listen(b,"key",this.qc).listen(a,"focus",this.Oh).listen(a,"blur",this.Ud)}}};
var tymm=function(a,b){var c=a.getHandler(),d=a.A();b?(c.listen(d,"mouseover",a.Me).listen(d,"mousedown",a.Vd).listen(d,"mouseup",a.Wd).listen(d,"mouseout",a.Rh),a.Pf!=tyc&&c.listen(d,"contextmenu",a.Pf),tys&&(c.listen(d,"dblclick",a.Ro),a.Rf||(a.Rf=new tyom(a),tyBb(a,tyla(tyCb,a.Rf))))):(c.ma(d,"mouseover",a.Me).ma(d,"mousedown",a.Vd).ma(d,"mouseup",a.Wd).ma(d,"mouseout",a.Rh),a.Pf!=tyc&&c.ma(d,"contextmenu",a.Pf),tys&&(c.ma(d,"dblclick",a.Ro),tyCb(a.Rf),a.Rf=null))};
ty5.prototype.Ha=function(){ty5.B.Ha.call(this);this.Oa&&this.Oa.detach();this.ja()&&this.isEnabled()&&this.L.fd(this,!1)};ty5.prototype.D=function(){ty5.B.D.call(this);this.Oa&&(this.Oa.W(),delete this.Oa);delete this.L;this.Rf=this.oc=this.zb=null};ty5.prototype.getContent=function(){return this.zb};ty5.prototype.setContent=function(a){this.L.setContent(this.A(),a);this.zb=a};var tyfm=function(a,b){a.zb=b};ty=ty5.prototype;
ty.Eh=function(){var a=this.getContent();if(!a)return"";a=tye(a)?a:tyd(a)?tyRa(a,ty_d).join(""):tyZd(a);return tyta(a)};ty.ef=function(a){ty5.B.ef.call(this,a);var b=this.A();b&&this.L.ef(b,a)};ty.og=function(a){this.Tg=a;var b=this.A();b&&this.L.og(b,a)};ty.ja=function(){return this.Ra};ty.qa=function(a,b){if(b||this.Ra!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.A();c&&this.L.qa(c,a);this.isEnabled()&&this.L.fd(this,a);this.Ra=a;return!0}return!1};
ty.isEnabled=function(){return!(this.G&1)};ty.setEnabled=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!typm(this,1,!a)||(a||(this.setActive(!1),this.Db(!1)),this.ja()&&this.L.fd(this,a),this.Xa(1,!a,!0))};ty.Db=function(a){typm(this,2,a)&&this.Xa(2,a)};ty.Uf=function(){return!!(this.G&4)};ty.setActive=function(a){typm(this,4,a)&&this.Xa(4,a)};ty.isSelected=function(){return!!(this.G&8)};ty.Wc=function(){return!!(this.G&16)};
ty.cf=function(a){typm(this,16,a)&&this.Xa(16,a)};ty.mp=function(){return!!(this.G&64)};var tyqm=function(a,b){typm(a,64,b)&&a.Xa(64,b)};ty5.prototype.getState=function(){return this.G};ty5.prototype.Xa=function(a,b,c){c||1!=a?ty4(this,a)&&b!=!!(this.G&a)&&(this.L.Xa(this,a,b),this.G=b?this.G|a:this.G&~a):this.setEnabled(!b)};var ty4=function(a,b){return!!(a.Bg&b)};
ty5.prototype.tb=function(a,b){if(this.S&&this.G&a&&!b)throw Error("Component already rendered");!b&&this.G&a&&this.Xa(a,!1);this.Bg=b?this.Bg|a:this.Bg&~a};var tyrm=function(a,b){return!!(a.vf&b)&&ty4(a,b)},typm=function(a,b,c){return ty4(a,b)&&!!(a.G&b)!=c&&(!(a.Ag&b)||a.dispatchEvent(tyAl(b,c)))&&!a.isDisposed()};ty=ty5.prototype;ty.Me=function(a){(!a.relatedTarget||!tyRd(this.A(),a.relatedTarget))&&this.dispatchEvent("enter")&&this.isEnabled()&&tyrm(this,2)&&this.Db(!0)};
ty.Rh=function(a){a.relatedTarget&&tyRd(this.A(),a.relatedTarget)||!this.dispatchEvent("leave")||(tyrm(this,4)&&this.setActive(!1),tyrm(this,2)&&this.Db(!1))};ty.Pf=tyc;ty.Vd=function(a){this.isEnabled()&&(tyrm(this,2)&&this.Db(!0),tydc(a)&&(tyrm(this,4)&&this.setActive(!0),this.L&&this.L.Xc(this)&&this.La().focus()));!this.Tg&&tydc(a)&&a.preventDefault()};ty.Wd=function(a){this.isEnabled()&&(tyrm(this,2)&&this.Db(!0),this.Uf()&&this.$c(a)&&tyrm(this,4)&&this.setActive(!1))};
ty.Ro=function(a){this.isEnabled()&&this.$c(a)};ty.$c=function(a){tyrm(this,16)&&this.cf(!this.Wc());tyrm(this,8)&&typm(this,8,!0)&&this.Xa(8,!0);tyrm(this,64)&&tyqm(this,!this.mp());var b=new tyq("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Xk=a.Xk);return this.dispatchEvent(b)};ty.Oh=function(){tyrm(this,32)&&typm(this,32,!0)&&this.Xa(32,!0)};ty.Ud=function(){tyrm(this,4)&&this.setActive(!1);tyrm(this,32)&&typm(this,32,!1)&&this.Xa(32,!1)};
ty.qc=function(a){return this.ja()&&this.isEnabled()&&this.Ec(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};ty.Ec=function(a){return 13==a.keyCode&&this.$c(a)};if(!tyf(ty5))throw Error("Invalid component class "+ty5);if(!tyf(tybm))throw Error("Invalid renderer class "+tybm);var tysm=tyia(ty5);tylm[tysm]=tybm;tykm("u-control",function(){return new ty5(null)});
var tyom=function(a){this.lh=a;this.jh=!1;this.Uc=new tyF(this);tyBb(this,tyla(tyCb,this.Uc));a=this.lh.C;this.Uc.listen(a,"mousedown",this.hu).listen(a,"mouseup",this.iu).listen(a,"click",this.Wt)};tyj(tyom,typ);tyom.prototype.hu=function(){this.jh=!1};tyom.prototype.iu=function(){this.jh=!0};
tyom.prototype.Wt=function(a){if(this.jh)this.jh=!1;else{var b=a.Xb(),c=b.button,d=b.type;b.button=0;b.type="mousedown";this.lh.Vd(new tyw(b,a.currentTarget));b.type="mouseup";this.lh.Wd(new tyw(b,a.currentTarget));b.button=c;b.type=d}};tyom.prototype.D=function(){this.lh=null;tyom.B.D.call(this)};var tytm=function(){this.Ij=[]};tyj(tytm,tybm);tyca(tytm);var tyum=function(a,b){var c=a.Ij[b];if(!c){switch(b){case 0:c=a.O()+"-ib";break;case 1:c=a.O()+"-n";break;case 2:c=a.O()+"-y"}a.Ij[b]=c}return c};ty=tytm.prototype;ty.Rd=function(){return"menuitem"};ty.F=function(a){var b=a.K().F("DIV",this.He(a).join(" "),tyvm(this,a.getContent(),a.K()));tywm(this,a,b,ty4(a,8)||ty4(a,16));return b};ty.na=function(a){return a&&a.firstChild};
ty.ba=function(a,b){var c=tyOd(b),d=tyum(this,2);c&&ty2i(c,d)||b.appendChild(tyvm(this,b.childNodes,a.K()));ty2i(b,"u-jb")&&(a.pg(!0),this.pg(a,b,!0));return tytm.B.ba.call(this,a,b)};ty.setContent=function(a,b){var c=this.na(a),d=tyxm(this,a)?c.firstChild:null;tytm.B.setContent.call(this,a,b);d&&!tyxm(this,a)&&c.insertBefore(d,c.firstChild||null)};var tyvm=function(a,b,c){a=tyum(a,2);return c.F("DIV",a,b)};tytm.prototype.Gq=function(a,b,c){a&&b&&tywm(this,a,b,c)};
tytm.prototype.pg=function(a,b,c){a&&b&&tywm(this,a,b,c)};var tyxm=function(a,b){var c=a.na(b);if(c){var c=c.firstChild,d=tyum(a,1);return!!c&&tyPd(c)&&ty2i(c,d)}return!1},tywm=function(a,b,c,d){tygm(a,c,b.td());tyhm(a,b,c);d!=tyxm(a,c)&&(tyT(c,"u-jb",d),c=a.na(c),d?(a=tyum(a,1),c.insertBefore(b.K().F("DIV",a),c.firstChild||null)):c.removeChild(c.firstChild))};tytm.prototype.Jf=function(a){switch(a){case 2:return tyum(this,0);case 16:case 8:return"u-jb-j";default:return tytm.B.Jf.call(this,a)}};
tytm.prototype.Ih=function(a){var b=tyum(this,0);switch(a){case "u-jb-j":return 16;case b:return 2;default:return tytm.B.Ih.call(this,a)}};tytm.prototype.O=function(){return"u-v"};var ty6=function(a,b,c,d){ty5.call(this,a,d||tytm.getInstance(),c);this.Eb(b)};tyj(ty6,ty5);ty=ty6.prototype;ty.va=function(){var a=this.Bt();return null!=a?a:this.Eh()};ty.Eb=function(a){this.Jw(a)};ty.tb=function(a,b){ty6.B.tb.call(this,a,b);switch(a){case 8:this.Wc()&&!b&&this.cf(!1);var c=this.A();c&&this.Sc().Gq(this,c,b);break;case 16:(c=this.A())&&this.Sc().pg(this,c,b)}};ty.Gq=function(a){this.tb(8,a)};ty.pg=function(a){this.tb(16,a)};
ty.Eh=function(){var a=this.getContent();return tyd(a)?(a=tyRa(a,function(a){return tyPd(a)&&(ty2i(a,"u-v-hb")||ty2i(a,"u-v-kb-mb"))?"":ty_d(a)}).join(""),tyta(a)):ty6.B.Eh.call(this)};ty.Wd=function(a){var b=this.getParent();if(b){var c=b.Zp;b.Zp=null;if(b=c&&tyfa(a.clientX))b=new tyB(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}ty6.B.Wd.call(this,a)};ty.Ec=function(a){return a.keyCode==this.Gh()&&this.$c(a)?!0:ty6.B.Ec.call(this,a)};ty.Gh=function(){return this.AA};
tykm("u-v",function(){return new ty6(null)});ty6.prototype.td=function(){return ty4(this,16)?"menuitemcheckbox":ty4(this,8)?"menuitemradio":ty6.B.td.call(this)};ty6.prototype.getParent=function(){return ty5.prototype.getParent.call(this)};ty6.prototype.Ke=function(){return ty5.prototype.Ke.call(this)};var tyym=function(){};tyym.prototype.Fd=function(){};var tyzm=function(a,b,c){this.element=a;this.Jj=b;this.Vv=c};tyj(tyzm,tyym);tyzm.prototype.Fd=function(a,b,c){ty5l(this.element,this.Jj,a,b,void 0,c,this.Vv)};var tyAm=function(a,b,c,d){tyzm.call(this,a,b);this.Zf=c?5:0;this.Qk=d||void 0};tyj(tyAm,tyzm);tyAm.prototype.Pi=function(a){this.Zf=a};tyAm.prototype.Fd=function(a,b,c,d){var e=ty5l(this.element,this.Jj,a,b,null,c,10,d,this.Qk);if(e&496){var f=tyBm(e,this.Jj);b=tyBm(e,b);e=ty5l(this.element,f,a,b,null,c,10,d,this.Qk);e&496&&(f=tyBm(e,f),b=tyBm(e,b),ty5l(this.element,f,a,b,null,c,this.Zf,d,this.Qk))}};var tyBm=function(a,b){a&48&&(b^=2);a&192&&(b^=1);return b};var tyCm=function(a,b,c,d){tyAm.call(this,a,b,c||d);(c||d)&&this.Pi(65|(d?32:132))};tyj(tyCm,tyAm);var tyDm=function(a,b){this.mh=a instanceof tyB?a:new tyB(a,b)};tyj(tyDm,tyym);tyDm.prototype.Fd=function(a,b,c,d){var e;e=tyC(a);var f=e.body;e=e.documentElement;e=new tyB(f.scrollLeft||e.scrollLeft,f.scrollTop||e.scrollTop);f=this.mh.x+e.x;e=this.mh.y+e.y;var g=ty2l(a),f=f-g.x;e-=g.y;ty4l(new tyB(f,e),a,b,c,null,null,d)};var tyEm=function(a,b){tyDm.call(this,a,b)};tyj(tyEm,tyDm);tyEm.prototype.Zf=0;tyEm.prototype.Pi=function(a){this.Zf=a};tyEm.prototype.Fd=function(a,b,c,d){var e=tyfj(a),e=tyjj(e),f;f=tyD(a);f=tyFd(f.Ga);f=new tyB(this.mh.x+f.scrollLeft,this.mh.y+f.scrollTop);var g=b,h=ty4l(f,a,g,c,e,10,d);if(0!=(h&496)){if(h&16||h&32)g^=2;if(h&64||h&128)g^=1;h=ty4l(f,a,g,c,e,10,d);0!=(h&496)&&ty4l(f,a,b,c,e,this.Zf,d)}};var tyFm=function(a){this.Vm=a};tyca(tyFm);tyFm.prototype.Rd=function(){return this.Vm};var tyGm=function(a,b){a&&(a.tabIndex=b?0:-1)};tyFm.prototype.F=function(a){return a.K().F("DIV",this.He(a).join(" "))};tyFm.prototype.na=function(a){return a};tyFm.prototype.hc=function(a){return"DIV"==a.tagName};
tyFm.prototype.ba=function(a,b){b.id&&a.ne(b.id);var c=this.O(),d=!1,e=ty1i(b);e&&tym(e,function(b){b==c?d=!0:b&&(b==c+"-p"?a.setEnabled(!1):b==c+"-horizontal"?a.setOrientation("horizontal"):b==c+"-vertical"&&a.setOrientation("vertical"))},this);d||tyR(b,c);tyHm(this,a,this.na(b));return b};
var tyHm=function(a,b,c){if(c)for(var d=c.firstChild,e;d&&d.parentNode==c;){e=d.nextSibling;if(1==d.nodeType){var f=a.gk(d);f&&(f.C=d,b.isEnabled()||f.setEnabled(!1),b.Ka(f),f.ba(d))}else d.nodeValue&&""!=tyua(d.nodeValue)||c.removeChild(d);d=e}};ty=tyFm.prototype;ty.gk=function(a){a:{var b;a=ty1i(a);for(var c=0,d=a.length;c<d;c++)if(b=a[c],b=b in tyjm?tyjm[b]():null){a=b;break a}a=null}return a};ty.yd=function(a){a=a.A();tysj(a,!0,tyt);tys&&(a.hideFocus=!0);var b=this.Rd();b&&tyhl(a,b)};ty.La=function(a){return a.A()};
ty.O=function(){return"u-d"};ty.He=function(a){var b=this.O(),c=[b,"horizontal"==a.jo()?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-p");return c};var tyIm=function(a,b,c){ty2.call(this,c);this.L=b||tyFm.getInstance();this.wa=a||"vertical"};tyj(tyIm,ty2);ty=tyIm.prototype;ty.Ek=null;ty.Oa=null;ty.L=null;ty.wa=null;ty.Ra=!0;ty.ob=!0;ty.ck=!0;ty.oa=-1;ty.Pa=null;ty.ce=!1;ty.os=!1;ty.Tv=!0;ty.Kc=null;ty.La=function(){return this.Ek||this.L.La(this)};ty.Fh=function(){return this.Oa||(this.Oa=new ty6l(this.La()))};ty.Sc=function(){return this.L};ty.F=function(){this.C=this.L.F(this)};ty.na=function(){return this.L.na(this.A())};ty.hc=function(a){return this.L.hc(a)};
ty.eb=function(a){this.C=this.L.ba(this,a);"none"==a.style.display&&(this.Ra=!1)};
ty.H=function(){tyIm.B.H.call(this);this.Rc(function(a){a.S&&tyJm(this,a)},this);var a=this.A();this.L.yd(this);this.qa(this.Ra,!0);this.getHandler().listen(this,"enter",this.tk).listen(this,"highlight",this.au).listen(this,"unhighlight",this.Eu).listen(this,"open",this.mu).listen(this,"close",this.Xt).listen(a,"mousedown",this.Vd).listen(tyC(a),"mouseup",this.Yt).listen(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.Vt);this.Xc()&&tyKm(this,!0)};
var tyKm=function(a,b){var c=a.getHandler(),d=a.La();b?c.listen(d,"focus",a.Oh).listen(d,"blur",a.Ud).listen(a.Fh(),"key",a.qc):c.ma(d,"focus",a.Oh).ma(d,"blur",a.Ud).ma(a.Fh(),"key",a.qc)};ty=tyIm.prototype;ty.Ha=function(){this.Gd(-1);this.Pa&&tyqm(this.Pa,!1);this.ce=!1;tyIm.B.Ha.call(this)};ty.D=function(){tyIm.B.D.call(this);this.Oa&&(this.Oa.W(),this.Oa=null);this.L=this.Pa=this.Kc=this.Ek=null};ty.tk=function(){return!0};
ty.au=function(a){var b=tyDl(this,a.target);if(-1<b&&b!=this.oa){var c=this.Yb(this.oa);c&&c.Db(!1);this.oa=b;c=this.Yb(this.oa);this.ce&&c.setActive(!0);this.Tv&&this.Pa&&c!=this.Pa&&(ty4(c,64)?tyqm(c,!0):tyqm(this.Pa,!1))}b=this.A();null!=a.target.A()&&ty1(b,"activedescendant",a.target.A().id)};ty.Eu=function(a){a.target==this.Yb(this.oa)&&(this.oa=-1);this.A().removeAttribute("aria-activedescendant")};
ty.mu=function(a){(a=a.target)&&a!=this.Pa&&a.getParent()==this&&(this.Pa&&tyqm(this.Pa,!1),this.Pa=a)};ty.Xt=function(a){a.target==this.Pa&&(this.Pa=null)};ty.Vd=function(a){this.ob&&(this.ce=!0);var b=this.La();b&&tyWd(b)?b.focus():a.preventDefault()};ty.Yt=function(){this.ce=!1};
ty.Vt=function(a){var b;a:{b=a.target;if(this.Kc)for(var c=this.A();b&&b!==c;){var d=b.id;if(d in this.Kc){b=this.Kc[d];break a}b=b.parentNode}b=null}if(b)switch(a.type){case "mousedown":b.Vd(a);break;case "mouseup":b.Wd(a);break;case "mouseover":b.Me(a);break;case "mouseout":b.Rh(a);break;case "contextmenu":b.Pf(a)}};ty.Oh=function(){};ty.Ud=function(){this.Gd(-1);this.ce=!1;this.Pa&&tyqm(this.Pa,!1)};
ty.qc=function(a){return this.isEnabled()&&this.ja()&&(0!=this.rd()||this.Ek)&&this.Ec(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
ty.Ec=function(a){var b=this.Yb(this.oa);if(b&&"function"==typeof b.qc&&b.qc(a)||this.Pa&&this.Pa!=b&&"function"==typeof this.Pa.qc&&this.Pa.qc(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Xc())this.La().blur();else return!1;break;case 36:tyLm(this);break;case 35:tyMm(this);break;case 38:if("vertical"==this.wa)tyNm(this);else return!1;break;case 37:if("horizontal"==this.wa)this.Rb()?tyOm(this):tyNm(this);else return!1;break;case 40:if("vertical"==
this.wa)tyOm(this);else return!1;break;case 39:if("horizontal"==this.wa)this.Rb()?tyNm(this):tyOm(this);else return!1;break;default:return!1}return!0};var tyJm=function(a,b){var c=b.A(),c=c.id||(c.id=b.getId());a.Kc||(a.Kc={});a.Kc[c]=b};ty=tyIm.prototype;ty.Ka=function(a,b){tyIm.B.Ka.call(this,a,b)};
ty.vj=function(a,b,c){a.Ag|=2;a.Ag|=64;!this.Xc()&&this.os||a.tb(32,!1);tynm(a,!1);var d=a.getParent()==this?tyDl(this,a):-1;tyIm.B.vj.call(this,a,b,c);a.S&&this.S&&tyJm(this,a);a=d;-1==a&&(a=this.rd());a==this.oa?this.oa=Math.min(this.rd()-1,b):a>this.oa&&b<=this.oa?this.oa++:a<this.oa&&b>this.oa&&this.oa--};
ty.removeChild=function(a,b){if(a=tye(a)?tyBl(this,a):a){var c=tyDl(this,a);-1!=c&&(c==this.oa?(a.Db(!1),this.oa=-1):c<this.oa&&this.oa--);var d=a.A();d&&d.id&&this.Kc&&(c=this.Kc,d=d.id,d in c&&delete c[d])}a=tyIm.B.removeChild.call(this,a,b);tynm(a,!0);return a};ty.jo=function(){return this.wa};ty.setOrientation=function(a){if(this.A())throw Error("Component already rendered");this.wa=a};ty.ja=function(){return this.Ra};
ty.qa=function(a,b){if(b||this.Ra!=a&&this.dispatchEvent(a?"show":"hide")){this.Ra=a;var c=this.A();c&&(tyV(c,a),this.Xc()&&tyGm(this.La(),this.ob&&this.Ra),b||this.dispatchEvent(this.Ra?"aftershow":"afterhide"));return!0}return!1};ty.isEnabled=function(){return this.ob};
ty.setEnabled=function(a){this.ob!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.ob=!0,this.Rc(function(a){a.vr?delete a.vr:a.setEnabled(!0)})):(this.Rc(function(a){a.isEnabled()?a.setEnabled(!1):a.vr=!0}),this.ce=this.ob=!1),this.Xc()&&tyGm(this.La(),a&&this.Ra))};ty.Xc=function(){return this.ck};ty.fd=function(a){a!=this.ck&&this.S&&tyKm(this,a);this.ck=a;this.ob&&this.Ra&&tyGm(this.La(),a)};ty.Gd=function(a){(a=this.Yb(a))?a.Db(!0):-1<this.oa&&this.Yb(this.oa).Db(!1)};
ty.Db=function(a){this.Gd(tyDl(this,a))};var tyLm=function(a){tyPm(a,function(a,c){return(a+1)%c},a.rd()-1)},tyMm=function(a){tyPm(a,function(a,c){a--;return 0>a?c-1:a},0)},tyOm=function(a){tyPm(a,function(a,c){return(a+1)%c},a.oa)},tyNm=function(a){tyPm(a,function(a,c){a--;return 0>a?c-1:a},a.oa)},tyPm=function(a,b,c){c=0>c?tyDl(a,a.Pa):c;var d=a.rd();c=b.call(a,c,d);for(var e=0;e<=d;){var f=a.Yb(c);if(f&&a.an(f)){a.Gd(c);break}e++;c=b.call(a,c,d)}};
tyIm.prototype.an=function(a){return a.ja()&&a.isEnabled()&&ty4(a,2)};var tyQm=function(){};tyj(tyQm,tybm);tyca(tyQm);tyQm.prototype.O=function(){return"u-gd"};var tyRm=function(a,b,c){ty5.call(this,a,c||tyQm.getInstance(),b);this.tb(1,!1);this.tb(2,!1);this.tb(4,!1);this.tb(32,!1);this.G=1};tyj(tyRm,ty5);tykm("u-gd",function(){return new tyRm(null)});var tySm=function(){};tyj(tySm,tybm);tyca(tySm);tySm.prototype.F=function(a){return a.K().F("DIV",this.O())};tySm.prototype.ba=function(a,b){b.id&&a.ne(b.id);if("HR"==b.tagName){var c=b;b=this.F(a);c.parentNode&&c.parentNode.insertBefore(b,c);tyNd(c)}else tyR(b,this.O());return b};tySm.prototype.setContent=function(){};tySm.prototype.O=function(){return"u-nb"};var tyTm=function(a,b){ty5.call(this,null,a||tySm.getInstance(),b);this.tb(1,!1);this.tb(2,!1);this.tb(4,!1);this.tb(32,!1);this.G=1};tyj(tyTm,ty5);tyTm.prototype.H=function(){tyTm.B.H.call(this);tyhl(this.A(),"separator")};tykm("u-nb",function(){return new tyTm});var tyUm=function(a){this.Vm=a||"menu"};tyj(tyUm,tyFm);tyca(tyUm);ty=tyUm.prototype;ty.hc=function(a){return"UL"==a.tagName||tyUm.B.hc.call(this,a)};ty.gk=function(a){return"HR"==a.tagName?new tyTm:tyUm.B.gk.call(this,a)};ty.Md=function(a,b){return tyRd(a.A(),b)};ty.O=function(){return"u-t"};ty.yd=function(a){tyUm.B.yd.call(this,a);ty1(a.A(),"haspopup","true")};var tyVm=function(a){tyTm.call(this,tySm.getInstance(),a)};tyj(tyVm,tyTm);tykm("u-nb",function(){return new tyTm});var tyWm=function(a,b){tyIm.call(this,"vertical",b||tyUm.getInstance(),a);this.fd(!1)};tyj(tyWm,tyIm);ty=tyWm.prototype;ty.Sg=!0;ty.ps=!1;ty.O=function(){return this.Sc().O()};ty.Md=function(a){if(this.Sc().Md(this,a))return!0;for(var b=0,c=this.rd();b<c;b++){var d=this.Yb(b);if("function"==typeof d.Md&&d.Md(a))return!0}return!1};ty.qa=function(a,b,c){(b=tyWm.B.qa.call(this,a,b))&&a&&this.S&&this.Sg&&this.La().focus();this.Zp=a&&c&&tyfa(c.clientX)?new tyB(c.clientX,c.clientY):null;return b};
ty.tk=function(a){this.Sg&&this.La().focus();return tyWm.B.tk.call(this,a)};ty.an=function(a){return(this.ps||a.isEnabled())&&a.ja()&&ty4(a,2)};ty.eb=function(a){var b=this.Sc(),c;c=this.K();c=tyzd(c.Ga,"DIV",b.O()+"-y",a);for(var d=c.length,e=0;e<d;e++)tyHm(b,this,c[e]);tyWm.B.eb.call(this,a)};ty.Ec=function(a){var b=tyWm.B.Ec.call(this,a);b||this.Rc(function(c){!b&&c.Gh&&c.Gh()==a.keyCode&&(this.isEnabled()&&this.Db(c),b=c.qc(a))},this);return b};
ty.Gd=function(a){tyWm.B.Gd.call(this,a);var b=this.Yb(a);if(b){a=this.A();var c=b.A(),d=tyij(c),b=tyij(a),e=tyxj(a),f=d.x-b.x-e.left,d=d.y-b.y-e.top,g=a.clientWidth-c.offsetWidth,c=a.clientHeight-c.offsetHeight,h=a.scrollLeft,k=a.scrollTop;if(a==document.body||a==document.documentElement)h=b.x+e.left,k=b.y+e.top,tys&&!ty4b(10)&&(h+=e.left,k+=e.top);h+=Math.min(f,Math.max(f-g,0));k+=Math.min(d,Math.max(d-c,0));b=new tyB(h,k);a.scrollLeft=b.x;a.scrollTop=b.y}};var tyXm=function(a,b){tyWm.call(this,a,b);this.Sg=!0;this.fd(!0);this.qa(!1,!0);this.xc=new tyo};tyj(tyXm,tyWm);ty=tyXm.prototype;ty.um=!1;ty.zp=0;ty.eb=function(a){tyXm.B.eb.call(this,a);(a=a.getAttribute("for")||a.htmlFor)&&this.Zg(this.K().A(a),1)};ty.H=function(){tyXm.B.H.call(this);this.xc.forEach(this.Ym,this);var a=this.getHandler();a.listen(this,"action",this.zv);a.listen(this.K().Ia(),"mousedown",this.Sp,!0);tyu&&a.listen(this.K().Ia(),"contextmenu",this.Sp,!0)};
ty.Zg=function(a,b,c,d,e){a&&this.xc.Lc(tyia(a))||(a?(b={C:a,cr:b,pv:c,Wj:d?"contextmenu":"mousedown",nv:e},this.xc.set(tyia(a),b)):b=null,this.S&&this.Ym(b),a=tyla(this.Hv,a),this.A()&&this.getHandler().listen(this.A(),"keydown",a))};ty.Hv=function(a,b){if(27==b.keyCode)a.focus();else{var c=this.Yb(this.oa).A(),d=new tyw(b.Xb(),c);d.target=c;if(32==b.keyCode||13==b.keyCode)tyfc(c)?tyBc(c,"keydown",!1,d):tyzc(c,"keydown",!1,d);32==b.keyCode&&this.hide()}};
ty.Ym=function(a){this.getHandler().listen(a.C,a.Wj,this.Xp);"contextmenu"!=a.Wj&&this.getHandler().listen(a.C,"keydown",this.Rv)};ty.detach=function(a){if(!a||!this.xc.Lc(tyia(a)))throw Error("Menu not attached to provided element, unable to detach.");a=tyia(a);if(this.S){var b=this.xc.get(a);this.getHandler().ma(b.C,b.Wj,this.Xp)}this.xc.remove(a)};
var tyYm=function(a,b,c,d){var e=a.ja();a.Wu()&&a.um?a.hide():a.dispatchEvent("beforeshow")&&(c="undefined"!=typeof c?c:4,e||(a.A().style.visibility="hidden"),tyV(a.A(),!0),b.Fd(a.A(),c,d),e||(a.A().style.visibility="visible"),a.Gd(-1),a.qa(!0))};ty=tyXm.prototype;ty.showMenu=function(a,b,c){b=tyb(a.cr)?new tyAm(a.C,a.cr,!0):new tyEm(b,c);b.Pi&&b.Pi(5);tyYm(this,b,a.pv,a.nv)};ty.hide=function(){this.ja()&&(this.qa(!1),this.ja()||(this.zp=tyi()))};ty.Wu=function(){return this.ja()||150>tyi()-this.zp};
ty.zv=function(){this.hide()};ty.Xp=function(a){tyZm(this,a)};ty.Rv=function(a){32!=a.keyCode&&13!=a.keyCode&&40!=a.keyCode||tyZm(this,a);40==a.keyCode&&tyLm(this)};var tyZm=function(a,b){for(var c=a.xc.Zb(),d=0;d<c.length;d++){var e=a.xc.get(c[d]);if(e.C==b.currentTarget){a.showMenu(e,b.clientX,b.clientY);b.preventDefault();b.stopPropagation();break}}};tyXm.prototype.Sp=function(a){this.ja()&&!this.Md(a.target)&&this.hide()};tyXm.prototype.Ud=function(a){tyXm.B.Ud.call(this,a);this.hide()};
tyXm.prototype.D=function(){tyXm.B.D.call(this);this.xc&&(this.xc.clear(),delete this.xc)};chrome.i18n.getMessage("4095000796706848124");new tyI("ea");var ty_m=function(a,b){this.fb=b||tyD();this.gf=a||null},ty0m=function(a,b,c){var d;a:{var e=a.gf?a.gf.getData():{};d=(a.fb||tyD()).createElement("DIV");b=tyDi(b(c||tyEi,void 0,e));d.innerHTML=b;if(1==d.childNodes.length&&(b=d.firstChild,1==b.nodeType)){d=b;break a}}a.vk(d);return d},ty7=function(a,b,c,d){var e=a.gf?a.gf.getData():{};b.innerHTML=tyDi(c(d||tyEi,void 0,e));a.vk(b)};ty_m.prototype.render=function(a,b){var c=a(b||{},void 0,this.gf?this.gf.getData():{});this.vk();return String(c)};
ty_m.prototype.vk=tyc;chrome.i18n.getMessage("3323193679372503780");var ty1m=function(a){var b="";a=chrome.i18n.getMessage("210173405987284279",["</a>",'<a href="'+tyPi(tyXi(a.$f))+'" target="_blank">']);return tyQ(b+a)},ty2m=function(a){var b="";a=chrome.i18n.getMessage("2139100152161431685",["</a>",'<a href="'+tyPi(tyXi(a.$f))+'" target="_blank">']);return tyQ(b+a)},ty3m=function(){var a="",b=chrome.i18n.getMessage("7035822615949880851");return tyQ(a+b)};tys&&tyv("11");new tyI("fa");chrome.i18n.getMessage("5359972686439530616");chrome.i18n.getMessage("1072679467482196927");chrome.i18n.getMessage("2853841969129372162");chrome.i18n.getMessage("8082269310659310085");chrome.i18n.getMessage("4882534557068236871");chrome.i18n.getMessage("3370288955750739075");chrome.i18n.getMessage("2395448436346696473");chrome.i18n.getMessage("2488986379365136440");chrome.i18n.getMessage("2235236867069413571");chrome.i18n.getMessage("8668688673488857062");chrome.i18n.getMessage("7588107080089998106");
chrome.i18n.getMessage("1168628503345801417");chrome.i18n.getMessage("7973992586253470062");chrome.i18n.getMessage("4697182936858386680");chrome.i18n.getMessage("1361015519033136245");chrome.i18n.getMessage("8499447471548910222");chrome.i18n.getMessage("1758518900736299270");chrome.i18n.getMessage("6328163279924805756");chrome.i18n.getMessage("6648321575857011667");chrome.i18n.getMessage("1274244820733671365");chrome.i18n.getMessage("4220152464728736156");chrome.i18n.getMessage("3261265322610311843");var ty4m=function(a){tyq.call(this,"wa");this.reason=a};tyj(ty4m,tyq);var ty5m=function(){tyy.call(this);this.G=0;this.endTime=this.startTime=null};tyj(ty5m,tyy);ty5m.prototype.wi=function(){this.Ub("begin")};ty5m.prototype.Ve=function(){this.Ub("end")};ty5m.prototype.onStop=function(){this.Ub("stop")};ty5m.prototype.Ub=function(a){this.dispatchEvent(a)};var ty6m=function(){ty5m.call(this);this.bd=[]};tyj(ty6m,ty5m);ty6m.prototype.add=function(a){tyn(this.bd,a)||(this.bd.push(a),tyx(a,"finish",this.Qp,!1,this))};ty6m.prototype.remove=function(a){tyXa(this.bd,a)&&tywc(a,"finish",this.Qp,!1,this)};ty6m.prototype.D=function(){tym(this.bd,function(a){a.W()});this.bd.length=0;ty6m.B.D.call(this)};var ty7m=function(){ty6m.call(this);this.Yj=0};tyj(ty7m,ty6m);
ty7m.prototype.play=function(a){if(0==this.bd.length)return!1;if(a||0==this.G)this.Yj=0,this.wi();else if(1==this.G)return!1;this.Ub("play");-1==this.G&&this.Ub("resume");var b=-1==this.G&&!a;this.startTime=tyi();this.endTime=null;this.G=1;tym(this.bd,function(c){b&&-1!=c.G||c.play(a)});return!0};ty7m.prototype.stop=function(a){tym(this.bd,function(b){0==b.G||b.stop(a)});this.G=0;this.endTime=tyi();this.onStop();this.Ve()};
ty7m.prototype.Qp=function(){this.Yj++;this.Yj==this.bd.length&&(this.endTime=tyi(),this.G=0,this.Ub("finish"),this.Ve())};var ty8m={},ty9m=null,ty$m=function(a){a=tyia(a);delete ty8m[a];tyfb(ty8m)&&ty9m&&ty9m.stop()},tybn=function(){ty9m||(ty9m=new tynh(function(){tyan()},20));var a=ty9m;a.Uf()||a.start()},tyan=function(){var a=tyi();ty$a(ty8m,function(b){tycn(b,a)});tyfb(ty8m)||tybn()};var tydn=function(a,b,c,d){ty5m.call(this);if(!tyd(a)||!tyd(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.zg=a;this.it=b;this.duration=c;this.Pm=d;this.coords=[];this.ue=!1;this.progress=0};tyj(tydn,ty5m);tydn.prototype.md=function(a){this.ue=a};
tydn.prototype.play=function(a){if(a||0==this.G)this.progress=0,this.coords=this.zg;else if(1==this.G)return!1;ty$m(this);this.startTime=a=tyi();-1==this.G&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.progress||this.wi();this.Ub("play");-1==this.G&&this.Ub("resume");this.G=1;var b=tyia(this);b in ty8m||(ty8m[b]=this);tybn();tycn(this,a);return!0};
tydn.prototype.stop=function(a){ty$m(this);this.G=0;a&&(this.progress=1);tyen(this,this.progress);this.onStop();this.Ve()};tydn.prototype.D=function(){0==this.G||this.stop(!1);this.Ub("destroy");tydn.B.D.call(this)};
var tycn=function(a,b){a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<=a.progress&&(a.progress=1);tyen(a,a.progress);1==a.progress?(a.G=0,ty$m(a),a.Ub("finish"),a.Ve()):1==a.G&&a.Pk()},tyen=function(a,b){tyf(a.Pm)&&(b=a.Pm(b));a.coords=Array(a.zg.length);for(var c=0;c<a.zg.length;c++)a.coords[c]=(a.it[c]-a.zg[c])*b+a.zg[c]};tydn.prototype.Pk=function(){this.Ub("animate")};tydn.prototype.Ub=function(a){this.dispatchEvent(new tyfn(a,this))};
var tyfn=function(a,b){tyq.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.z=b.coords[2];this.duration=b.duration;this.progress=b.progress;this.state=b.G};tyj(tyfn,tyq);var tygn=function(a,b,c,d,e){tydn.call(this,b,c,d,e);this.element=a};tyj(tygn,tydn);ty=tygn.prototype;ty.qf=tyc;ty.Rb=function(){tyb(this.Gc)||(this.Gc=tyqj(this.element));return this.Gc};ty.Pk=function(){this.qf();tygn.B.Pk.call(this)};ty.Ve=function(){this.qf();tygn.B.Ve.call(this)};ty.wi=function(){this.qf();tygn.B.wi.call(this)};var tyhn=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");tygn.apply(this,arguments)};tyj(tyhn,tygn);
tyhn.prototype.qf=function(){var a=this.ue&&this.Rb()?"right":"left";this.element.style[a]=Math.round(this.coords[0])+"px";this.element.style.top=Math.round(this.coords[1])+"px"};var tyin=function(a,b,c,d,e){tygn.call(this,a,[b],[c],d,e)};tyj(tyin,tygn);tyin.prototype.qf=function(){this.element.style.width=Math.round(this.coords[0])+"px"};var tyjn=function(a,b,c,d,e){tygn.call(this,a,[b],[c],d,e)};tyj(tyjn,tygn);tyjn.prototype.qf=function(){this.element.style.height=Math.round(this.coords[0])+"px"};var tykn=function(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0};tykn.prototype.BYTES_PER_ELEMENT=4;tykn.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};tykn.prototype.toString=Array.prototype.join;
"undefined"==typeof Float32Array&&(tykn.BYTES_PER_ELEMENT=4,tykn.prototype.BYTES_PER_ELEMENT=tykn.prototype.BYTES_PER_ELEMENT,tykn.prototype.set=tykn.prototype.set,tykn.prototype.toString=tykn.prototype.toString,tyoa("Float32Array",tykn));var tyln=function(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0};tyln.prototype.BYTES_PER_ELEMENT=8;tyln.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};tyln.prototype.toString=Array.prototype.join;
if("undefined"==typeof Float64Array){try{tyln.BYTES_PER_ELEMENT=8}catch(tymn){}tyln.prototype.BYTES_PER_ELEMENT=tyln.prototype.BYTES_PER_ELEMENT;tyln.prototype.set=tyln.prototype.set;tyln.prototype.toString=tyln.prototype.toString;tyoa("Float64Array",tyln)};var tynn=function(){var a=Array(3);a[0]=0;a[1]=0;a[2]=0};var tyon=function(){var a=Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0};tynn();tynn();tyon();tyon();tyon();new Float32Array(16);var typn=function(){this.Ij=[]};tyj(typn,tytm);tyca(typn);typn.prototype.F=function(a){var b=typn.B.F.call(this,a);tyR(b,"u-ob");tyqn(this,a,b);return b};typn.prototype.ba=function(a,b){b=typn.B.ba.call(this,a,b);tyR(b,"u-ob");tyqn(this,a,b);var c=tyzd(document,"DIV","u-t",b);if(c.length){var d=new tyWm(a.K()),c=c[0];tyV(c,!1);a.K().Ia().body.appendChild(c);d.ba(c);tyrn(a,d)}return b};
typn.prototype.setContent=function(a,b){var c=this.na(a),d=c&&c.lastChild;typn.B.setContent.call(this,a,b);d&&c.lastChild!=d&&ty2i(d,"u-ob-pb")&&c.appendChild(d)};typn.prototype.yd=function(a){typn.B.yd.call(this,a);var b=a.na(),c=a.K(),c=tyzd(c.Ga,"SPAN","u-ob-pb",b)[0];tysn(a,c);c!=b.lastChild&&b.appendChild(c);ty1(a.A(),"haspopup","true")};
var tyqn=function(a,b,c){var d=b.K().F("SPAN");d.className="u-ob-pb";tysn(b,d);a.na(c).appendChild(d)},tysn=function(a,b){a.Rb()?(tyR(b,"u-ob-pb-rtl"),tyE(b,a.Rg?"\u25c4":"\u25ba")):(tyS(b,"u-ob-pb-rtl"),tyE(b,a.Rg?"\u25ba":"\u25c4"))};var tytn=function(a,b,c,d){ty6.call(this,a,b,c,d||typn.getInstance())};tyj(tytn,ty6);ty=tytn.prototype;ty.Ef=null;ty.dm=null;ty.Lk=!1;ty.Qa=null;ty.xh=!1;ty.Rg=!0;ty.Xu=!1;ty.H=function(){tytn.B.H.call(this);this.getHandler().listen(this.getParent(),"hide",this.Vp);this.Qa&&tyun(this,this.Qa,!0)};ty.Ha=function(){this.getHandler().ma(this.getParent(),"hide",this.Vp);this.Qa&&(tyun(this,this.Qa,!1),this.xh||(this.Qa.Ha(),tyNd(this.Qa.A())));tytn.B.Ha.call(this)};
ty.D=function(){this.Qa&&!this.xh&&this.Qa.W();this.Qa=null;tytn.B.D.call(this)};ty.Db=function(a,b){tytn.B.Db.call(this,a);b&&(this.Je().ce=!0);a||(this.Ef&&tya.clearTimeout(this.Ef),this.Ef=tyRe(this.Mc,218,this))};ty.cm=function(){var a=this.getParent();a&&a.Yb(a.oa)==this&&(tyvn(this,!0),tywn(this))};ty.Mc=function(){var a=this.Qa;a&&a.getParent()==this&&(tyvn(this,!1),a.Rc(function(a){"function"==typeof a.Mc&&a.Mc()}))};var tyxn=function(a){a.Ef&&tya.clearTimeout(a.Ef);a.dm&&tya.clearTimeout(a.dm)};
tytn.prototype.qa=function(a,b){var c=tytn.B.qa.call(this,a,b);c&&!this.ja()&&this.Mc();return c};var tywn=function(a){a.getParent().Rc(function(a){a!=this&&"function"==typeof a.Mc&&(a.Mc(),tyxn(a))},a)};ty=tytn.prototype;ty.qc=function(a){var b=a.keyCode,c=this.Rb()?37:39,d=this.Rb()?39:37;if(!this.Lk){if(!this.isEnabled()||b!=c&&b!=this.Gh())return!1;this.cm();tyLm(this.Je());tyxn(this)}else if(!this.Je().qc(a))if(b==d)this.Mc();else return!1;a.preventDefault();return!0};
ty.Dv=function(){this.Qa.getParent()==this&&(tyxn(this),this.Ke().Db(this),tywn(this))};ty.Vp=function(a){a.target==this.Ke()&&(this.Mc(),tyxn(this))};ty.Me=function(a){this.isEnabled()&&(tyxn(this),this.dm=tyRe(this.cm,218,this));tytn.B.Me.call(this,a)};ty.$c=function(a){tyxn(this);if(ty4(this,8)||ty4(this,16))return tytn.B.$c.call(this,a);this.cm();return!0};
var tyvn=function(a,b){a.dispatchEvent(tyAl(64,b));var c=a.Je();b!=a.Lk&&tyT(a.A(),"u-ob-V",b);if(b!=c.ja()&&(b&&(c.S||c.render(),c.Gd(-1)),c.qa(b),b)){var c=new tyAm(a.A(),a.Rg?6:4,a.Xu),d=a.Je(),e=d.A();d.ja()||(e.style.visibility="hidden",tyV(e,!0));c.Fd(e,a.Rg?4:6);d.ja()||(tyV(e,!1),e.style.visibility="visible")}a.Lk=b},tyun=function(a,b,c){var d=a.getHandler();(c?d.listen:d.ma).call(d,b,"enter",a.Dv)};
tytn.prototype.Je=function(){this.Qa?this.xh&&this.Qa.getParent()!=this&&this.Qa.Ui(this):tyrn(this,new tyWm(this.K()));this.Qa.A()||this.Qa.F();return this.Qa};var tyrn=function(a,b){var c=a.Qa;b!=c&&(c&&(a.Mc(),a.S&&tyun(a,c,!1)),a.Qa=b,a.xh=!1,b&&(b.Ui(a),b.qa(!1,!0),b.Sg=!1,b.fd(!1),a.S&&tyun(a,b,!0)))};tytn.prototype.Md=function(a){return this.Je().Md(a)};tykm("u-ob",function(){return new tytn(null)});chrome.i18n.getMessage("3239052796417276147");chrome.i18n.getMessage("3624948107517969571");chrome.i18n.getMessage("2395136813547607194");chrome.i18n.getMessage("4298797223016826648");chrome.i18n.getMessage("6223255458060266606");var tyyn=chrome.i18n.getMessage("6555053572817998410"),tyzn=chrome.i18n.getMessage("3244003434432113241"),tyAn=chrome.i18n.getMessage("599493319699637812"),tyBn=chrome.i18n.getMessage("2101525118384454593"),tyCn=chrome.i18n.getMessage("4183640380235728062"),tyDn=chrome.i18n.getMessage("6242354668932209396"),tyEn=chrome.i18n.getMessage("7293925053370285812"),tyFn=chrome.i18n.getMessage("6638274938129779637"),tyGn=chrome.i18n.getMessage("3213972439514824911"),tyHn=chrome.i18n.getMessage("9138683078793837147"),
tyIn=chrome.i18n.getMessage("6266962164598137510");chrome.i18n.getMessage("5085509606319320198");chrome.i18n.getMessage("370216116393129031");var tyJn=function(a){a=ty3k(a);return chrome.i18n.getMessage("4718177503702130030",[a])},tyKn=function(a){a=ty3k(a);return chrome.i18n.getMessage("6747414430222084644",[a])};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
chrome.i18n.getMessage("8833465340266211620");chrome.i18n.getMessage("8146596754377240594");chrome.i18n.getMessage("3199328506415818264");chrome.i18n.getMessage("3347458631875411366");chrome.i18n.getMessage("7573452675654305779");chrome.i18n.getMessage("5471522292163416150");chrome.i18n.getMessage("3539607433460112515");chrome.i18n.getMessage("5413023757349106161");chrome.i18n.getMessage("741838598955147819");chrome.i18n.getMessage("6090022040777968265");chrome.i18n.getMessage("2203397136690479355");chrome.i18n.getMessage("1558113021895652337");chrome.i18n.getMessage("2763267855550833920");chrome.i18n.getMessage("3901889124080689046");chrome.i18n.getMessage("8338465287076872825");chrome.i18n.getMessage("5071594083516657121");chrome.i18n.getMessage("8239380670132570074");chrome.i18n.getMessage("5930857699885919881");chrome.i18n.getMessage("2328554046256236832");chrome.i18n.getMessage("2506718393130237030");chrome.i18n.getMessage("5761798931116026691");
chrome.i18n.getMessage("997742287268027221");chrome.i18n.getMessage("5378532290721565403");chrome.i18n.getMessage("6898179631823558149");chrome.i18n.getMessage("8001758142015238809");/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
new ty0("ap",["original_queue"]);(tyqi||tyri)&&tyv("533.17.9");chrome.i18n.getMessage("1053534453293466081");chrome.i18n.getMessage("8090573223674035778");chrome.i18n.getMessage("117315057265021884");chrome.i18n.getMessage("8270050108993507863");chrome.i18n.getMessage("6179363104414627697");chrome.i18n.getMessage("8910998670732377227");chrome.i18n.getMessage("9217684488226619999");var tyLn=function(){tyy.call(this)};tyj(tyLn,tyy);ty=tyLn.prototype;ty.xa=0;ty.uc=0;ty.bc=100;ty.Ob=0;ty.se=1;ty.Fc=!1;ty.Se=!1;ty.Eb=function(a){a=tyMn(this,a);this.xa!=a&&(this.xa=a+this.Ob>this.bc?this.bc-this.Ob:a<this.uc?this.uc:a,this.Fc||this.Se||this.dispatchEvent("change"))};ty.va=function(){return tyMn(this,this.xa)};ty.Ni=function(a){a=tyMn(this,a);this.Ob!=a&&(this.Ob=0>a?0:this.xa+a>this.bc?this.bc-this.xa:a,this.Fc||this.Se||this.dispatchEvent("change"))};
ty.sd=function(){var a=this.Ob;return null==this.se?a:Math.round(a/this.se)*this.se};ty.Ri=function(a){if(this.uc!=a){var b=this.Fc;this.Fc=!0;this.uc=a;a+this.Ob>this.bc&&(this.Ob=this.bc-this.uc);a>this.xa&&this.Eb(a);a>this.bc&&(this.Ob=0,this.Qi(a),this.Eb(a));(this.Fc=b)||this.Se||this.dispatchEvent("change")}};ty.Wa=function(){return tyMn(this,this.uc)};
ty.Qi=function(a){a=tyMn(this,a);if(this.bc!=a){var b=this.Fc;this.Fc=!0;this.bc=a;a<this.xa+this.Ob&&this.Eb(a-this.Ob);a<this.uc&&(this.Ob=0,this.Ri(a),this.Eb(this.bc));a<this.uc+this.Ob&&(this.Ob=this.bc-this.uc);(this.Fc=b)||this.Se||this.dispatchEvent("change")}};ty.gb=function(){return tyMn(this,this.bc)};ty.Mf=function(){return this.se};var tyMn=function(a,b){return null==a.se?b:a.uc+Math.round((b-a.uc)/a.se)*a.se};chrome.i18n.getMessage("1592343229807767687");chrome.i18n.getMessage("5851160910663331658");/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
new tybl(1);Math.max(6E4*function(){var a=tyei.getInstance().Kf();return tyN(a,6)}(),12E4);chrome.i18n.getMessage("2696899443781392801");var tyNn=function(){};tyj(tyNn,tybm);tyca(tyNn);tyNn.prototype.F=function(a){var b=a.K().F("SPAN",this.He(a).join(" "));tyOn(this,b,a.jd);return b};tyNn.prototype.ba=function(a,b){b=tyNn.B.ba.call(this,a,b);var c=ty1i(b),d=!1;tyn(c,tyPn(this,null))?d=null:tyn(c,tyPn(this,!0))?d=!0:tyn(c,tyPn(this,!1))&&(d=!1);a.jd=d;ty1(b,"checked",null==d?"mixed":1==d?"true":"false");return b};tyNn.prototype.Rd=function(){return"checkbox"};
var tyOn=function(a,b,c){if(b){var d=tyPn(a,c);ty2i(b,d)||(ty$a(tyQn,function(a){a=tyPn(this,a);tyT(b,a,a==d)},a),ty1(b,"checked",null==c?"mixed":1==c?"true":"false"))}};tyNn.prototype.O=function(){return"u-n"};var tyPn=function(a,b){var c=a.O();if(1==b)return c+"-ed";if(0==b)return c+"-unchecked";if(null==b)return c+"-undetermined";throw Error("Invalid checkbox state: "+b);};var tyRn=function(a,b,c){c=c||tyNn.getInstance();ty5.call(this,null,c,b);this.jd=tyb(a)?a:!1};tyj(tyRn,ty5);var tyQn={Rx:!0,Iz:!1,Jz:null};ty=tyRn.prototype;ty.sc=null;ty.Wc=function(){return 1==this.jd};ty.cf=function(a){a!=this.jd&&(this.jd=a,tyOn(this.Sc(),this.A(),this.jd))};ty.toggle=function(){this.cf(this.jd?!1:!0)};
ty.H=function(){tyRn.B.H.call(this);if(this.Qh){var a=this.getHandler();this.sc&&a.listen(this.sc,"click",this.sk).listen(this.sc,"mouseover",this.Me).listen(this.sc,"mouseout",this.Rh).listen(this.sc,"mousedown",this.Vd).listen(this.sc,"mouseup",this.Wd);a.listen(this.A(),"click",this.sk)}a=this.C;if(this.sc&&a!=this.sc&&tysa(tyil(a,"label"))){if(!this.sc.id){var b=this.sc,c;c=this.getId()+".lbl";b.id=c}ty1(a,"labelledby",this.sc.id)}};
ty.setEnabled=function(a){tyRn.B.setEnabled.call(this,a);if(a=this.A())a.tabIndex=this.isEnabled()?0:-1};ty.sk=function(a){a.stopPropagation();var b=this.jd?"uncheck":"check";this.isEnabled()&&!a.target.href&&this.dispatchEvent(b)&&(a.preventDefault(),this.toggle(),this.dispatchEvent("change"))};ty.Ec=function(a){32==a.keyCode&&(this.$c(a),this.sk(a));return!1};tykm("u-n",function(){return new tyRn});chrome.i18n.getMessage("3224702327278720862");var tySn=function(a,b){typ.call(this);this.yn=this.nn=null;this.Dp=b;this.Qd=[];if(a>this.Dp)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.Qd.push(this.Cf())};tyj(tySn,typ);var tyTn=function(a){return a.Qd.length?a.Qd.pop():a.Cf()},tyUn=function(a,b){a.Qd.length<a.Dp?a.Qd.push(b):a.Qj(b)};tySn.prototype.Cf=function(){return this.nn?this.nn():{}};tySn.prototype.Qj=function(a){if(this.yn)this.yn(a);else if(tyg(a))if(tyf(a.W))a.W();else for(var b in a)delete a[b]};
tySn.prototype.D=function(){tySn.B.D.call(this);for(var a=this.Qd;a.length;)this.Qj(a.pop());delete this.Qd};var tyXn=function(){this.pb=[];this.Dd=new tyo;this.lr=this.aj=this.bj=this.Xq=0;this.re=new tyo;this.jn=this.wm=0;this.Nk=1;this.Od=new tySn(0,4E3);this.Od.Cf=function(){return new tyVn};this.mm=new tySn(0,50);this.mm.Cf=function(){return new tyWn};var a=this;this.Oe=new tySn(0,2E3);this.Oe.Cf=function(){return String(a.Nk++)};this.Oe.Qj=function(){};this.wn=3};tyXn.prototype.pj=1E3;var tyWn=function(){this.Lg=this.time=this.count=0};
tyWn.prototype.toString=function(){var a=[];a.push(this.type," ",this.count," (",Math.round(10*this.time)/10," ms)");this.Lg&&a.push(" [VarAlloc = ",this.Lg,"]");return a.join("")};var tyVn=function(){},ty_n=function(a,b,c,d){var e=[];-1==c?e.push("    "):e.push(tyYn(a.eventTime-c));e.push(" ",tyZn(a.eventTime-b));0==a.Hf?e.push(" Start        "):1==a.Hf?(e.push(" Done "),e.push(tyYn(a.jx-a.startTime)," ms ")):e.push(" Comment      ");e.push(d,a);0<a.Eg&&e.push("[VarAlloc ",a.Eg,"] ");return e.join("")};
tyVn.prototype.toString=function(){return null==this.type?this.comment:"["+this.type+"] "+this.comment};tyXn.prototype.reset=function(a){this.wn=a;for(a=0;a<this.pb.length;a++){var b=this.Od.id;b&&tyUn(this.Oe,b);tyUn(this.Od,this.pb[a])}this.pb.length=0;this.Dd.clear();this.Xq=tyi();this.jn=this.wm=this.lr=this.aj=this.bj=0;b=this.re.Zb();for(a=0;a<b.length;a++){var c=this.re.get(b[a]);c.count=0;c.time=0;c.Lg=0;tyUn(this.mm,c)}this.re.clear()};
var ty0n=function(){var a=ty8.uA;return a&&a.isTracing()?a.totalVarAlloc:-1};
tyXn.prototype.toString=function(){for(var a=[],b=-1,c=[],d=0;d<this.pb.length;d++){var e=this.pb[d];1==e.Hf&&c.pop();a.push(" ",ty_n(e,this.Xq,b,c.join("")));b=e.eventTime;a.push("\n");0==e.Hf&&c.push("|  ")}if(0!=this.Dd.Qb()){var f=tyi();a.push(" Unstopped timers:\n");ty9a(this.Dd,function(b){a.push("  ",b," (",f-b.startTime," ms, started at ",tyZn(b.startTime),")\n")})}b=this.re.Zb();for(d=0;d<b.length;d++)c=this.re.get(b[d]),1<c.count&&a.push(" TOTAL ",c,"\n");a.push("Total tracers created ",
this.wm,"\n","Total comments created ",this.jn,"\n","Overhead start: ",this.bj," ms\n","Overhead end: ",this.aj," ms\n","Overhead comment: ",this.lr," ms\n");return a.join("")};var tyYn=function(a){a=Math.round(a);var b="";1E3>a&&(b=" ");100>a&&(b="  ");10>a&&(b="   ");return b+a},tyZn=function(a){a=Math.round(a);return String(100+a/1E3%60).substring(1,3)+"."+String(1E3+a%1E3).substring(1,4)},ty8=new tyXn;var ty1n=function(a){typ.call(this);this.jt=a;this.Ax=!0;this.aw=!1};tyj(ty1n,typ);ty1n.prototype.ls=!1;ty1n.prototype.yr=function(a){return ty2n(this,a)};ty1n.prototype.unwrap=function(a){return a[ty3n(this,!1)]||a};
var ty3n=function(a,b){return(b?"__wrapper_":"__protected_")+tyia(a)+"__"},ty2n=function(a,b){var c=ty3n(a,!0);b[c]||((b[c]=ty4n(a,b))[ty3n(a,!1)]=b);return b[c]},ty4n=function(a,b){var c=a.ls;if(c)var d=ty$e(15);var e=function(){if(a.isDisposed())return b.apply(this,arguments);if(c){var e=d,g=[];g.push("##PE_STACK_START##");g.push(e.replace(/(\r\n|\r|\n)/g,"##STACK_BR##"));g.push("##PE_STACK_END##");var h="protectedEntryPoint: "+g.join(""),e=tyi(),k=ty0n(),l=ty8.Dd.Qb();if(ty8.pb.length+l>ty8.pj){if(ty8.pb.length>
ty8.pj/2){for(var m=0;m<ty8.pb.length;m++)g=ty8.pb[m],g.id&&tyUn(ty8.Oe,g.id),tyUn(ty8.Od,g);ty8.pb.length=0}l>ty8.pj/2&&ty8.Dd.clear()}tycf("Start : "+h);g=tyTn(ty8.Od);g.Eg=k;g.Hf=0;g.id=Number(tyTn(ty8.Oe));g.comment=h;g.type=void 0;ty8.pb.push(g);ty8.Dd.set(String(g.id),g);ty8.wm++;h=tyi();g.startTime=g.eventTime=h;ty8.bj+=h-e;e=g.id}try{return b.apply(this,arguments)}catch(n){a.jt(n);if(!a.Ax)throw a.aw&&("object"===typeof n?n.message="Error in protected function: "+n.message:n="Error in protected function: "+
n),n;throw new ty5n(n);}finally{if(c&&(h=e,e=tyi(),k=ty8.wn,g=ty8.Dd.get(String(h)),null!=g)){ty8.Dd.remove(String(h));var p,h=e-g.startTime;if(h<k)for(k=ty8.pb.length-1;0<=k;k--){if(ty8.pb[k]==g){ty8.pb.splice(k,1);tyUn(ty8.Oe,g.id);tyUn(ty8.Od,g);break}}else p=tyTn(ty8.Od),p.Hf=1,p.startTime=g.startTime,p.comment=g.comment,p.type=g.type,p.jx=p.eventTime=e,ty8.pb.push(p);k=g.type;l=null;k&&(l=ty8,m=l.re.get(k),m||(m=tyTn(l.mm),m.type=k,l.re.set(k,m)),l=m,l.count++,l.time+=h);p&&(tycf("Stop : "+p.comment),
p.Eg=ty0n(),l&&(l.Lg+=p.Eg-g.Eg));p=tyi();ty8.aj+=p-e}}};e[ty3n(a,!1)]=b;return e},ty6n=function(a,b){var c=tyba("window"),d=c[b];c[b]=function(b,c){tye(b)&&(b=tyla(tyna,b));b=ty2n(a,b);return d.call?d.call(this,b,c):d(b,c)};c[b][ty3n(a,!1)]=d};ty1n.prototype.D=function(){var a=tyba("window");a.setTimeout=this.unwrap(a.setTimeout);a.setInterval=this.unwrap(a.setInterval);ty1n.B.D.call(this)};
var ty5n=function(a){typa.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)));(a=(this.cause=a)&&a.stack)&&tye(a)&&(this.stack=a)};tyj(ty5n,typa);chrome.i18n.getMessage("1911052916191472518");chrome.i18n.getMessage("2818892450650920953");new tyG;/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
new tybl(1);new tyyk(1);chrome.i18n.getMessage("5111105817461365862");var ty7n=function(a,b,c){this.ee=b.name||null;this.ln=b.sA;this.qd={};for(a=0;a<c.length;a++)b=c[a],this.qd[b.$b()]=b};ty7n.prototype.getName=function(){return this.ee};ty7n.prototype.Sd=function(){return this.ln?this.ln.getDescriptor():null};var ty8n=function(a){a=tyab(a.qd);ty2a(a,function(a,c){return a.$b()-c.$b()});return a};var ty9n=function(a,b,c){this.P=a;this.lx=b;this.ee=c.name;this.Zu=!!c.EA;this.Pc=c.od;this.vv=c.type};ty9n.prototype.$b=function(){return this.lx};ty9n.prototype.Sd=function(){return this.P.prototype.getDescriptor()};ty9n.prototype.getName=function(){return this.ee};ty9n.prototype.bi=function(){return this.Zu};var ty$n=function(){this.bb={};this.qd=this.getDescriptor().qd;this.Mb=this.Bp=null},tyao=function(a,b,c){c=c||a;for(var d in a.bb){var e=Number(d);a.qd[e]||b.call(c,e,a.bb[d])}};ty=ty$n.prototype;ty.has=function(a){a.Sd();this.getDescriptor();a=a.$b();return null!=this.bb[a]};ty.get=function(a,b){a.Sd();this.getDescriptor();return tybo(this,a.$b(),b)};ty.set=function(a,b){a.Sd();this.getDescriptor();tyco(this,a.$b(),b)};ty.add=function(a,b){a.Sd();this.getDescriptor();tydo(this,a.$b(),b)};
ty.clear=function(a){a.Sd();this.getDescriptor();a=a.$b();delete this.bb[a];this.Mb&&delete this.Mb[a]};
ty.Ba=function(a){if(!a||this.constructor!=a.constructor)return!1;for(var b=ty8n(this.getDescriptor()),c=0;c<b.length;c++){var d=b[c],e=d.$b();if(null!=this.bb[e]!=(null!=a.bb[e]))return!1;if(null!=this.bb[e]){var f=11==d.Pc||10==d.Pc,g=tyeo(this,e),e=tyeo(a,e);if(d.bi()){if(g.length!=e.length)return!1;for(d=0;d<g.length;d++){var h=g[d],k=e[d];if(f?!h.Ba(k):h!=k)return!1}}else if(f?!g.Ba(e):g!=e)return!1}}return!0};
var tyfo=function(a,b){for(var c=ty8n(a.getDescriptor()),d=0;d<c.length;d++){var e=c[d],f=e.$b();if(null!=b.bb[f]){a.Mb&&delete a.Mb[e.$b()];var g=11==e.Pc||10==e.Pc;if(e.bi())for(var e=tyeo(b,f)||[],h=0;h<e.length;h++)tydo(a,f,g?e[h].clone():e[h]);else e=tyeo(b,f),g?(g=tyeo(a,f))?tyfo(g,e):tyco(a,f,e.clone()):tyco(a,f,e)}}};ty$n.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.bb={},a.Mb&&(a.Mb={}),tyfo(a,this));return a};
var tyeo=function(a,b){var c=a.bb[b];return null==c?null:a.Bp?b in a.Mb?a.Mb[b]:(c=a.Bp.tA(a,a.qd[b],c),a.Mb[b]=c):c},tybo=function(a,b,c){var d=tyeo(a,b);return a.qd[b].bi()?d[c||0]:d},tyco=function(a,b,c){a.bb[b]=c;a.Mb&&(a.Mb[b]=c)},tydo=function(a,b,c){a.bb[b]||(a.bb[b]=[]);a.bb[b].push(c);a.Mb&&delete a.Mb[b]},tygo=function(a,b){var c=[],d=b[0],e;for(e in b)0!=e&&c.push(new ty9n(a,e,b[e]));return new ty7n(0,d,c)};var tyho=function(){ty$n.call(this)},tyio;tyj(tyho,ty$n);tyho.prototype.oe=function(a){tyco(this,1,a)};tyho.prototype.pe=function(a){tyco(this,2,a)};var tyjo=function(){ty$n.call(this)},tyko;tyj(tyjo,ty$n);tyjo.prototype.getVersion=function(){return tybo(this,1)};tyjo.prototype.setVersion=function(a){tyco(this,1,a)};
tyho.prototype.getDescriptor=function(){tyio||(tyio=tygo(tyho,{0:{name:"Version",Ch:"buzz.channel.Version"},1:{name:"major_version",od:5,type:Number},2:{name:"minor_version",od:5,type:Number}}));return tyio};tyho.ctor=tyho;tyho.ctor.getDescriptor=tyho.prototype.getDescriptor;tyjo.prototype.getDescriptor=function(){tyko||(tyko=tygo(tyjo,{0:{name:"ProtocolVersion",Ch:"buzz.channel.ProtocolVersion"},1:{name:"version",od:11,type:tyho}}));return tyko};tyjo.ctor=tyjo;tyjo.ctor.getDescriptor=tyjo.prototype.getDescriptor;(function(){var a;return tyUb?(a=/Windows NT ([0-9.]+)/,(a=a.exec(tyKb))?a[1]:"0"):tyTb?(a=/10[_.][0-9_.]+/,(a=a.exec(tyKb))?a[0].replace(/_/g,"."):"10"):tyXb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(tyKb))?a[1]:""):tyYb||tyZb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(tyKb))?a[1].replace(/_/g,"."):""):""})();var tylo=new tyjo,tymo=new tyho;tymo.oe(3);tymo.pe(2);tylo.setVersion(tymo);var tyno=new tyho;tyno.oe(3);tyno.pe(2);var tyoo=new tyho;tyoo.oe(3);tyoo.pe(2);var typo=function(){};var tyqo=function(a,b){this.rr=!!b};tyj(tyqo,typo);tyqo.prototype.fl=function(a){var b=new tyro;tyso(this,a,b);return b.toString()};
var tyso=function(a,b,c){var d=ty8n(b.getDescriptor());tym(d,function(a){if(b.has(a)){var d;a.Sd();b.getDescriptor();d=a.$b();d=b.qd[d].bi()?null!=b.bb[d]?b.bb[d].length:0:null!=b.bb[d]?1:0;for(var g=0;g<d;++g){c.append(a.getName());11==a.Pc||10==a.Pc?(c.append(" {"),tyto(c),c.Vc+=2):c.append(": ");tyuo(this,b.get(a,g),a,c);if(11==a.Pc||10==a.Pc)c.Vc-=2,c.append("}");tyto(c)}}},a);tyao(b,function(a,b){tyvo(this,a,b,c)},a)},tyvo=function(a,b,c,d){if(null!=c)if(tyd(c))tym(c,function(a){tyvo(this,b,
a,d)},a);else{if(tyg(c)){d.append(b);d.append(" {");tyto(d);d.Vc+=2;if(c instanceof ty$n)tyso(a,c,d);else for(var e in c)tyvo(a,tyLa(e),c[e],d);d.Vc-=2;d.append("}")}else tye(c)&&(c=tyFa(c)),d.append(b),d.append(": "),d.append(c.toString());tyto(d)}},tyuo=function(a,b,c,d){switch(c.Pc){case 1:case 2:case 3:case 4:case 5:case 13:case 6:case 7:case 8:case 15:case 16:case 17:case 18:d.append(b);break;case 12:case 9:b=tyFa(b.toString());d.append(b);break;case 14:if(!a.rr){var e=!1;ty$a(c.vv,function(a,
c){a==b&&(d.append(c),e=!0)})}e&&!a.rr||d.append(b.toString());break;case 10:case 11:tyso(a,b,d)}},tyro=function(){this.Vc=0;this.Kb=[];this.cl=!0};tyro.prototype.toString=function(){return this.Kb.join("")};tyro.prototype.append=function(a){if(this.cl){for(var b=0;b<this.Vc;++b)this.Kb.push(" ");this.cl=!1}this.Kb.push(a.toString())};var tyto=function(a){a.Kb.push("\n");a.cl=!0};var tywo=new tyqo;ty$n.prototype.toString=function(){return tywo.fl(this)};new tyG([1,2,3]);new tyG([1,2]);new tyy;var tyxo={1:"NativeMessagingTransport",2:"FrameElementMethodTransport",3:"IframeRelayTransport",4:"IframePollingTransport",5:"FlashTransport",6:"NixTransport",7:"DirectTransport"};var tyyo=function(a){typ.call(this);this.ct=a||tyD()};tyj(tyyo,typ);tyyo.prototype.or=0;tyyo.prototype.getWindow=function(){return this.ct.getWindow()};tyyo.prototype.getName=function(){return tyxo[String(this.or)]||""};var tyzo=function(a,b){tyyo.call(this,b);this.yb=a;this.yb.ab.af.Kd();this.yb.ab.af.Kd();this.Ii=[]},tyAo;tyj(tyzo,tyyo);ty=tyzo.prototype;ty.or=4;ty.je=0;ty.tr=!1;ty.Mg=3800;ty.send=function(a,b){var c=a+":"+b;if(!tys||b.length<=this.Mg)this.Ii.push("|"+c);else for(var d=b.length,e=Math.ceil(d/this.Mg),f=0,g=1;f<d;)this.Ii.push(","+g+"/"+e+"|"+c.substr(f,this.Mg)),g++,f+=this.Mg;!this.tr&&this.Ii.length&&(c=this.Ii.shift(),++this.je,this.BA.send(this.je+c),this.tr=!0)};
ty.D=function(){tyzo.B.D.call(this);var a=tyBo;tyXa(a,this.tv);tyXa(a,this.hs);this.tv=this.hs=null;tyNd(this.sv);tyNd(this.gs);this.sv=this.gs=null};var tyBo=[],tyCo=tyh(function(){var a=tyBo,b,c=!1;try{for(var d=0;b=a[d];d++)c=c||b.receive()}catch(e){if(b.GA.yb.DA(),!a.length)return}a=tyi();c&&(tyAo=a);window.setTimeout(tyCo,1E3>a-tyAo?10:100)},tyzo);var tyDo=function(){ty$n.call(this)},tyEo;tyj(tyDo,ty$n);tyDo.prototype.oe=function(a){tyco(this,1,a)};tyDo.prototype.pe=function(a){tyco(this,2,a)};var tyFo=function(){ty$n.call(this)},tyGo;tyj(tyFo,ty$n);tyFo.prototype.getVersion=function(){return tybo(this,1)};tyFo.prototype.setVersion=function(a){tyco(this,1,a)};var tyHo=function(){ty$n.call(this)},tyIo;tyj(tyHo,ty$n);tyHo.prototype.Sw=function(){tyco(this,1,1)};tyHo.prototype.getName=function(){return tybo(this,2)};
tyHo.prototype.Dq=function(a){tyco(this,2,a)};tyDo.prototype.getDescriptor=function(){tyEo||(tyEo=tygo(tyDo,{0:{name:"Version",Ch:"ipc.invalidation.Version"},1:{name:"major_version",od:5,type:Number},2:{name:"minor_version",od:5,type:Number}}));return tyEo};tyDo.ctor=tyDo;tyDo.ctor.getDescriptor=tyDo.prototype.getDescriptor;tyFo.prototype.getDescriptor=function(){tyGo||(tyGo=tygo(tyFo,{0:{name:"ProtocolVersion",Ch:"ipc.invalidation.ProtocolVersion"},1:{name:"version",od:11,type:tyDo}}));return tyGo};
tyFo.ctor=tyFo;tyFo.ctor.getDescriptor=tyFo.prototype.getDescriptor;tyHo.prototype.getDescriptor=function(){tyIo||(tyIo=tygo(tyHo,{0:{name:"ObjectIdP",Ch:"ipc.invalidation.ObjectIdP"},1:{name:"source",od:5,type:Number},2:{name:"name",od:12,type:String}}));return tyIo};tyHo.ctor=tyHo;tyHo.ctor.getDescriptor=tyHo.prototype.getDescriptor;var ty9=function(a,b){this.Ca=a|0;this.X=b|0},tyJo={},tyKo=function(a){if(-128<=a&&128>a){var b=tyJo[a];if(b)return b}b=new ty9(a|0,0>a?-1:0);-128<=a&&128>a&&(tyJo[a]=b);return b},tyQo=function(a){return isNaN(a)||!isFinite(a)?tyLo:a<=-tyMo?tyNo:a+1>=tyMo?tyOo:0>a?tyPo(tyQo(-a)):new ty9(a%4294967296|0,a/4294967296|0)},tyMo=4294967296*4294967296/2,tyLo=tyKo(0),tyRo=tyKo(1),tySo=tyKo(-1),tyOo=new ty9(-1,2147483647),tyNo=new ty9(0,-2147483648),tyTo=tyKo(16777216);
ty9.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.zd())return"0";if(0>this.X){if(this.Ba(tyNo)){var b=tyQo(a),c=tyUo(this,b),b=tyVo(c.multiply(b),this);return c.toString(a)+b.Ca.toString(a)}return"-"+tyPo(this).toString(a)}for(var c=tyQo(Math.pow(a,6)),b=this,d="";;){var e=tyUo(b,c),f=tyVo(b,e.multiply(c)).Ca.toString(a),b=e;if(b.zd())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};var tyWo=function(a){return 0<=a.Ca?a.Ca:4294967296+a.Ca};
ty9.prototype.zd=function(){return 0==this.X&&0==this.Ca};ty9.prototype.Ba=function(a){return this.X==a.X&&this.Ca==a.Ca};ty9.prototype.compare=function(a){if(this.Ba(a))return 0;var b=0>this.X,c=0>a.X;return b&&!c?-1:!b&&c?1:0>tyVo(this,a).X?-1:1};var tyPo=function(a){return a.Ba(tyNo)?tyNo:(new ty9(~a.Ca,~a.X)).add(tyRo)};
ty9.prototype.add=function(a){var b=this.X>>>16,c=this.X&65535,d=this.Ca>>>16,e=a.X>>>16,f=a.X&65535,g=a.Ca>>>16,h;h=0+((this.Ca&65535)+(a.Ca&65535));a=0+(h>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return new ty9((a&65535)<<16|h&65535,c<<16|d&65535)};var tyVo=function(a,b){return a.add(tyPo(b))};
ty9.prototype.multiply=function(a){if(this.zd()||a.zd())return tyLo;if(this.Ba(tyNo))return 1==(a.Ca&1)?tyNo:tyLo;if(a.Ba(tyNo))return 1==(this.Ca&1)?tyNo:tyLo;if(0>this.X)return 0>a.X?tyPo(this).multiply(tyPo(a)):tyPo(tyPo(this).multiply(a));if(0>a.X)return tyPo(this.multiply(tyPo(a)));if(0>this.compare(tyTo)&&0>a.compare(tyTo))return tyQo((4294967296*this.X+tyWo(this))*(4294967296*a.X+tyWo(a)));var b=this.X>>>16,c=this.X&65535,d=this.Ca>>>16,e=this.Ca&65535,f=a.X>>>16,g=a.X&65535,h=a.Ca>>>16;a=
a.Ca&65535;var k,l,m,n;n=0+e*a;m=0+(n>>>16);m+=d*a;l=0+(m>>>16);m=(m&65535)+e*h;l+=m>>>16;m&=65535;l+=c*a;k=0+(l>>>16);l=(l&65535)+d*h;k+=l>>>16;l&=65535;l+=e*g;k+=l>>>16;l&=65535;k=k+(b*a+c*h+d*g+e*f)&65535;return new ty9(m<<16|n&65535,k<<16|l)};
var tyUo=function(a,b){if(b.zd())throw Error("division by zero");if(a.zd())return tyLo;if(a.Ba(tyNo)){if(b.Ba(tyRo)||b.Ba(tySo))return tyNo;if(b.Ba(tyNo))return tyRo;var c;c=1;if(0==c)c=a;else{var d=a.X;c=32>c?new ty9(a.Ca>>>c|d<<32-c,d>>c):new ty9(d>>c-32,0<=d?0:-1)}c=tyUo(c,b).shiftLeft(1);if(c.Ba(tyLo))return 0>b.X?tyRo:tySo;d=tyVo(a,b.multiply(c));return c.add(tyUo(d,b))}if(b.Ba(tyNo))return tyLo;if(0>a.X)return 0>b.X?tyUo(tyPo(a),tyPo(b)):tyPo(tyUo(tyPo(a),b));if(0>b.X)return tyPo(tyUo(a,tyPo(b)));
for(var e=tyLo,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor((4294967296*d.X+tyWo(d))/(4294967296*b.X+tyWo(b))));for(var f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=tyQo(c),h=g.multiply(b);0>h.X||0<h.compare(d);)c-=f,g=tyQo(c),h=g.multiply(b);g.zd()&&(g=tyRo);e=e.add(g);d=tyVo(d,h)}return e};ty9.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.Ca;return 32>a?new ty9(b<<a,this.X<<a|b>>>32-a):new ty9(0,b<<a-32)};var tyXo=new tyFo,tyYo=new tyDo;tyYo.oe(3);tyYo.pe(2);tyXo.setVersion(tyYo);var tyZo=new tyDo;tyZo.oe(3);tyZo.pe(2);var ty_o=new tyDo;ty_o.oe(3);ty_o.pe(20140825);var ty0o=new tyHo;ty0o.Dq("");ty0o.Sw();var ty1o=[];tyoa("invalidation.getDebugJson",function(){var a={};tym(ty1o,function(b){a[b.qA||b.CA]=b.FA.vA()});return a});var ty2o=function(){tyy.call(this);this.ad=1};tyj(ty2o,tyy);ty2o.prototype.Eq=function(a,b){this.ad!=a&&(this.ad=a,this.dispatchEvent(new ty4m(b)))};ty2o.prototype.Hh=function(){return this.ad};var ty3o=function(a,b){tyy.call(this);this.C=a;var c=tyPd(this.C)?this.C:this.C?this.C.body:null;this.$u=!!c&&tyqj(c);this.Cp=tyx(this.C,tyt?"DOMMouseScroll":"mousewheel",this,b)};tyj(ty3o,tyy);
ty3o.prototype.handleEvent=function(a){var b=0,c=0,d=0;a=a.Xb();if("mousewheel"==a.type){c=1;if(tys||tyu&&(tyUb||tyv("532.0")))c=40;d=ty4o(-a.wheelDelta,c);tyb(a.wheelDeltaX)?(b=ty4o(-a.wheelDeltaX,c),c=ty4o(-a.wheelDeltaY,c)):c=d}else d=a.detail,100<d?d=3:-100>d&&(d=-3),tyb(a.axis)&&a.axis===a.HORIZONTAL_AXIS?b=d:c=d;tyfa(this.Ep)&&(b=ty5a(b,-this.Ep,this.Ep));tyfa(this.Fp)&&(c=ty5a(c,-this.Fp,this.Fp));this.$u&&(b=-b);b=new ty5o(d,a,b,c);this.dispatchEvent(b)};
var ty4o=function(a,b){return tyu&&(tyTb||tyVb)&&0!=a%b?a:a/b};ty3o.prototype.D=function(){ty3o.B.D.call(this);tyxc(this.Cp);this.Cp=null};var ty5o=function(a,b,c,d){tyw.call(this,b);this.type="mousewheel";this.detail=a;this.deltaX=c;this.deltaY=d};tyj(ty5o,tyw);var ty$=function(a,b){ty2.call(this,a);this.wj=null;this.ka=new tyLn;this.cv=b||ty3a;tyx(this.ka,"change",this.Uo,!1,this)};tyj(ty$,ty2);ty=ty$.prototype;ty.wa="horizontal";ty.Zh=!1;ty.Kp=!1;ty.zc=10;ty.ri=0;ty.ai=!0;ty.ti=0;ty.Jr=1E3;ty.ob=!0;ty.Pb=!1;ty.F=function(){ty$.B.F.call(this);var a=this.K().F("DIV",this.O(this.wa));this.eb(a)};
ty.eb=function(a){ty$.B.eb.call(this,a);tyR(a,this.O(this.wa));a=this.A();var b=tyzd(document,null,"u-cc-dc",a)[0];b||(b=this.Ts(),a.appendChild(b));this.U=this.Bb=b;tyhl(this.A(),"slider");ty6o(this)};ty.H=function(){ty$.B.H.call(this);this.Gb=new tyol(this.U);this.mc=new tyol(this.Bb);this.Gb.md(this.Pb);this.mc.md(this.Pb);this.Gb.Lj=this.mc.Lj=tyc;this.Oa=new ty6l(this.A());ty7o(this,!0);this.A().tabIndex=0;this.gj()};
var ty7o=function(a,b){b?(a.getHandler().listen(a.Gb,"beforedrag",a.Nh).listen(a.mc,"beforedrag",a.Nh).listen(a.Gb,["start","end"],a.Sh).listen(a.mc,["start","end"],a.Sh).listen(a.Oa,"key",a.Tc).listen(a.A(),"click",a.Ph).listen(a.A(),"mousedown",a.Ph),a.ai&&ty8o(a,!0)):(a.getHandler().ma(a.Gb,"beforedrag",a.Nh).ma(a.mc,"beforedrag",a.Nh).ma(a.Gb,["start","end"],a.Sh).ma(a.mc,["start","end"],a.Sh).ma(a.Oa,"key",a.Tc).ma(a.A(),"click",a.Ph).ma(a.A(),"mousedown",a.Ph),a.ai&&ty8o(a,!1))};ty=ty$.prototype;
ty.Ha=function(){ty$.B.Ha.call(this);tyDb(this.Gb,this.mc,this.Oa,this.de)};ty.Nh=function(a){var b=a.Sj==this.Gb?this.U:this.Bb,c;"vertical"==this.wa?(c=this.A().clientHeight-b.offsetHeight,c=(c-a.top)/c*(this.gb()-this.Wa())+this.Wa()):c=a.left/(this.A().clientWidth-b.offsetWidth)*(this.gb()-this.Wa())+this.Wa();c=a.Sj==this.Gb?Math.min(Math.max(c,this.Wa()),this.va()+this.sd()):Math.min(Math.max(c,this.va()),this.gb());ty9o(this,b,c)};
ty.Sh=function(a){var b="start"==a.type;tyT(this.A(),"u-cc-dragging",b);tyT(a.target.handle,"u-cc-dc-dragging",b);a=a.Sj==this.Gb;b?(this.dispatchEvent("ic"),this.dispatchEvent(a?"ec":"gc")):(this.dispatchEvent("jc"),this.dispatchEvent(a?"fc":"hc"))};
ty.Tc=function(a){var b=!0;switch(a.keyCode){case 36:ty$o(this,this.Wa());break;case 35:ty$o(this,this.gb());break;case 33:tyap(this,this.zc);break;case 34:tyap(this,-this.zc);break;case 37:var c=this.Pb&&this.Rb()?1:-1;tyap(this,a.shiftKey?c*this.zc:c*this.Hg);break;case 40:tyap(this,a.shiftKey?-this.zc:-this.Hg);break;case 39:c=this.Pb&&this.Rb()?-1:1;tyap(this,a.shiftKey?c*this.zc:c*this.Hg);break;case 38:tyap(this,a.shiftKey?this.zc:this.Hg);break;default:b=!1}b&&a.preventDefault()};
ty.Ph=function(a){this.A().focus&&this.A().focus();var b=a.target;tyRd(this.U,b)||tyRd(this.Bb,b)||(b="click"==a.type,b&&tyi()<this.ti+this.Jr||(b||(this.ti=tyi()),this.Kp?ty$o(this,tybp(this,a)):(this.om(a),this.ec=tycp(this,tybp(this,a)),this.gp="vertical"==this.wa?this.hi<this.ec.offsetTop:this.hi>tydp(this,this.ec)+this.ec.offsetWidth,a=tyC(this.A()),this.getHandler().listen(a,"mouseup",this.nm,!0).listen(this.A(),"mousemove",this.om),this.xd||(this.xd=new tyQe(200),this.getHandler().listen(this.xd,
"tick",this.Xo)),this.Xo(),this.xd.start())))};ty.To=function(a){tyap(this,(0<a.detail?-1:1)*this.Hg);a.preventDefault()};ty.Xo=function(){var a;if("vertical"==this.wa){var b=this.hi,c=this.ec.offsetTop;this.gp?b<c&&(a=tyep(this,this.ec)+this.zc):b>c+this.ec.offsetHeight&&(a=tyep(this,this.ec)-this.zc)}else b=this.hi,c=tydp(this,this.ec),this.gp?b>c+this.ec.offsetWidth&&(a=tyep(this,this.ec)+this.zc):b<c&&(a=tyep(this,this.ec)-this.zc);tyb(a)&&ty9o(this,this.ec,a)};
ty.nm=function(){this.xd&&this.xd.stop();var a=tyC(this.A());this.getHandler().ma(a,"mouseup",this.nm,!0).ma(this.A(),"mousemove",this.om)};var tyfp=function(a,b){var c,d=a.A();c=tylj(b);d=tylj(d);c=new tyB(c.x-d.x,c.y-d.y);return"vertical"==a.wa?c.y:a.Pb&&a.Rb()?a.A().clientWidth-c.x:c.x};ty$.prototype.om=function(a){this.hi=tyfp(this,a)};
var tybp=function(a,b){var c=a.Wa(),d=a.gb();if("vertical"==a.wa){var e=a.U.offsetHeight,f=a.A().clientHeight-e,e=tyfp(a,b)-e/2;return(d-c)*(f-e)/f+c}e=a.U.offsetWidth;f=a.A().clientWidth-e;e=tyfp(a,b)-e/2;return(d-c)*e/f+c},tyep=function(a,b){if(b==a.U)return a.ka.va();if(b==a.Bb)return a.ka.va()+a.ka.sd();throw Error("Illegal thumb element. Neither minThumb nor maxThumb");};ty$.prototype.Vf=function(){return this.Gb.Vf()||this.mc.Vf()};
var tyap=function(a,b){Math.abs(b)<a.Mf()&&(b=(0==b?0:0>b?-1:1)*a.Mf());var c=tyep(a,a.U)+b,d=tyep(a,a.Bb)+b,c=ty5a(c,a.Wa(),a.gb()-a.ri),d=ty5a(d,a.Wa()+a.ri,a.gb());tygp(a,c,d-c)},ty9o=function(a,b,c){var d=tyMn(a.ka,c);c=b==a.U?d:a.ka.va();b=b==a.Bb?d:a.ka.va()+a.ka.sd();c>=a.Wa()&&b>=c+a.ri&&a.gb()>=b&&tygp(a,c,b-c)},tygp=function(a,b,c){a.Wa()<=b&&b<=a.gb()-c&&a.ri<=c&&c<=a.gb()-b&&(b!=a.va()||c!=a.sd())&&(a.ka.Se=!0,a.ka.Ni(0),a.ka.Eb(b),a.ka.Ni(c),a.ka.Se=!1,a.Uo())};ty$.prototype.Wa=function(){return this.ka.Wa()};
ty$.prototype.Ri=function(a){this.ka.Ri(a)};ty$.prototype.gb=function(){return this.ka.gb()};ty$.prototype.Qi=function(a){this.ka.Qi(a)};var tycp=function(a,b){return b<=a.ka.va()+a.ka.sd()/2?a.U:a.Bb};ty$.prototype.Uo=function(){this.gj();ty6o(this);this.dispatchEvent("change")};
ty$.prototype.gj=function(){if(this.U&&!this.Zh){var a=tyhp(this,tyep(this,this.U)),b=tyhp(this,tyep(this,this.Bb));if("vertical"==this.wa)this.U.style.top=a.y+"px",this.Bb.style.top=b.y+"px",this.Ea&&(a=tyip(b.y,a.y,this.U.offsetHeight),this.Ea.style.top=a.offset+"px",this.Ea.style.height=a.size+"px");else{var c=this.Pb&&this.Rb()?"right":"left";this.U.style[c]=a.x+"px";this.Bb.style[c]=b.x+"px";this.Ea&&(a=tyip(a.x,b.x,this.U.offsetWidth),this.Ea.style[c]=a.offset+"px",this.Ea.style.width=a.size+
"px")}}};
var tyip=function(a,b,c){var d=Math.ceil(c/2);return{offset:a+d,size:Math.max(b-a+c-2*d,0)}},tyhp=function(a,b){var c=new tyB;if(a.U){var d=a.Wa(),e=a.gb(),e=b==d&&d==e?0:(b-d)/(e-d);"vertical"==a.wa?(d=a.A().clientHeight-a.U.offsetHeight,e=Math.round(e*d),c.x=tydp(a,a.U),c.y=d-e):(d=Math.round(e*(a.A().clientWidth-a.U.offsetWidth)),c.x=d,c.y=a.U.offsetTop)}return c},ty$o=function(a,b){b=ty5a(b,a.Wa(),a.gb());a.Zh&&a.nh.stop(!0);var c=new ty7m,d,e=tycp(a,b),f=a.va(),g=a.sd(),h=tyep(a,e),k=tyhp(a,
h);d=a.Mf();Math.abs(b-h)<d&&(b=ty5a(h+(b>h?d:-d),a.Wa(),a.gb()));ty9o(a,e,b);h=tyhp(a,tyep(a,e));d="vertical"==a.wa?[tydp(a,e),h.y]:[h.x,e.offsetTop];k=new tyhn(e,[k.x,k.y],d,100);k.md(a.Pb);c.add(k);a.Ea&&tyjp(a,e,f,g,h,c);a.wj&&(e=tykp(a.wj,f,b),tym(e,function(a){c.add(a)}));a.nh=c;a.getHandler().listen(c,"end",a.ht);a.Zh=!0;c.play(!1)},tyjp=function(a,b,c,d,e,f){var g=tyhp(a,c),h=tyhp(a,c+d);c=g;d=h;b==a.U?c=e:d=e;"vertical"==a.wa?(b=tyip(h.y,g.y,a.U.offsetHeight),g=tyip(d.y,c.y,a.U.offsetHeight),
e=new tyhn(a.Ea,[tydp(a,a.Ea),b.offset],[tydp(a,a.Ea),g.offset],100),b=new tyjn(a.Ea,b.size,g.size,100)):(b=tyip(g.x,h.x,a.U.offsetWidth),g=tyip(c.x,d.x,a.U.offsetWidth),e=new tyhn(a.Ea,[b.offset,a.Ea.offsetTop],[g.offset,a.Ea.offsetTop],100),b=new tyin(a.Ea,b.size,g.size,100));e.md(a.Pb);b.md(a.Pb);f.add(e);f.add(b)};ty=ty$.prototype;ty.ht=function(){this.Zh=!1};
ty.setOrientation=function(a){if(this.wa!=a){var b=this.O(this.wa),c=this.O(a);this.wa=a;this.A()&&(a=this.A(),ty2i(a,b)&&(tyS(a,b),tyR(a,c)),b=this.Pb&&this.Rb()?"right":"left",this.U.style[b]=this.U.style.top="",this.Bb.style[b]=this.Bb.style.top="",this.Ea&&(this.Ea.style[b]=this.Ea.style.top="",this.Ea.style.width=this.Ea.style.height=""),this.gj())}};ty.jo=function(){return this.wa};
ty.D=function(){ty$.B.D.call(this);this.xd&&this.xd.W();delete this.xd;this.nh&&this.nh.W();delete this.nh;delete this.U;delete this.Bb;this.Ea&&delete this.Ea;this.ka.W();delete this.ka;this.Oa&&(this.Oa.W(),delete this.Oa);this.de&&(this.de.W(),delete this.de);this.Gb&&(this.Gb.W(),delete this.Gb);this.mc&&(this.mc.W(),delete this.mc)};ty.Hg=1;ty.Mf=function(){return this.ka.Mf()};ty.va=function(){return this.ka.va()};ty.Eb=function(a){ty9o(this,this.U,a)};ty.sd=function(){return this.ka.sd()};
ty.Ni=function(a){ty9o(this,this.Bb,this.ka.va()+a)};ty.qa=function(a){tyV(this.A(),a);a&&this.gj()};var ty6o=function(a){var b=a.A();b&&(ty1(b,"valuemin",a.Wa()),ty1(b,"valuemax",a.gb()),ty1(b,"valuenow",a.va()),ty1(b,"valuetext",a.cv(a.va())||""))},ty8o=function(a,b){b?(a.de||(a.de=new ty3o(a.A())),a.getHandler().listen(a.de,"mousewheel",a.To)):a.getHandler().ma(a.de,"mousewheel",a.To)};
ty$.prototype.setEnabled=function(a){this.ob!=a&&this.dispatchEvent(a?"enable":"disable")&&(this.ob=a,ty7o(this,a),a||this.nm(),tyT(this.A(),"u-cc-p",!a))};ty$.prototype.isEnabled=function(){return this.ob};var tydp=function(a,b){return a.Pb?tynl(b):b.offsetLeft};var tylp=function(a,b){ty$.call(this,a,b);this.ka.Ni(0)};tyj(tylp,ty$);tylp.prototype.O=function(a){return"vertical"==a?"u-cc-vertical":"u-cc-horizontal"};tylp.prototype.Ts=function(){var a=this.K().F("DIV","u-cc-dc");tyhl(a,"button");return a};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
chrome.i18n.getMessage("2885588583451993603");new tybl(1);new tyyk(1);chrome.i18n.getMessage("6588162415744257525");chrome.i18n.getMessage("595142360727489397");chrome.i18n.getMessage("2120603839336392434");chrome.i18n.getMessage("7586136400217442714");var tymp={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps-lock",27:"esc",32:"space",33:"pg-up",34:"pg-down",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:"semicolon",61:"equals",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",
93:"context",96:"num-0",97:"num-1",98:"num-2",99:"num-3",100:"num-4",101:"num-5",102:"num-6",103:"num-7",104:"num-8",105:"num-9",106:"num-multiply",107:"num-plus",109:"num-minus",110:"num-period",111:"num-division",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",186:"semicolon",187:"equals",189:"dash",188:",",190:".",191:"/",192:"`",219:"open-square-bracket",220:"\\",221:"close-square-bracket",222:"single-quote",224:"win"};var typp=function(a){tyy.call(this);this.Df=this.wg={};this.ii=0;this.St=tyjb(tynp);this.mx=tyjb(tyop);this.ss=!0;this.ms=this.ts=!1;this.qv=!0;this.rs=!1;this.uj=null;this.Yc=a;tyx(this.Yc,"keydown",this.Tc,!1,this);tyt&&tyx(this.Yc,"keyup",this.So,!1,this);tyUb&&!tyt&&(tyx(this.Yc,"keypress",this.Zo,!1,this),tyx(this.Yc,"keyup",this.$o,!1,this))},tyqp;tyj(typp,tyy);var tyrp=function(a){this.Jq=a||null;this.next=a?null:{}},tynp=[27,112,113,114,115,116,117,118,119,120,121,122,123,19],tyop="color date datetime datetime-local email month number password search tel text time url week".split(" ");
typp.prototype.$a=function(a,b){tysp(this.wg,tytp(arguments),a)};var tytp=function(a){if(tye(a[1]))a=tyRa(tyup(a[1]),function(a){return a.keyCode&255|a.rv<<8});else{var b=a,c=1;tyd(a[1])&&(b=a[1],c=0);for(a=[];c<b.length;c+=2)a.push(b[c]&255|b[c+1]<<8)}return a};
typp.prototype.D=function(){typp.B.D.call(this);this.wg={};tywc(this.Yc,"keydown",this.Tc,!1,this);tyt&&tywc(this.Yc,"keyup",this.So,!1,this);tyUb&&!tyt&&(tywc(this.Yc,"keypress",this.Zo,!1,this),tywc(this.Yc,"keyup",this.$o,!1,this));this.Yc=null};
var tyup=function(a){a=a.replace(/[ +]*\+[ +]*/g,"+").replace(/[ ]+/g," ").toLowerCase();a=a.split(" ");for(var b=[],c,d=0;c=a[d];d++){var e=c.split("+"),f=null;c=0;for(var g,h=0;g=e[h];h++){switch(g){case "shift":c|=1;continue;case "ctrl":c|=2;continue;case "alt":c|=4;continue;case "meta":c|=8;continue}e=g;if(!tyqp){f={};g=void 0;for(g in tymp)f[tymp[g]]=tykl(parseInt(g,10));tyqp=f}f=tyqp[e];break}b.push({keyCode:f,rv:c})}return b};
typp.prototype.So=function(a){if(tyTb){if(224==a.keyCode){this.Hp=!0;tyRe(function(){this.Hp=!1},400,this);return}var b=a.metaKey||this.Hp;67!=a.keyCode&&88!=a.keyCode&&86!=a.keyCode||!b||(a.metaKey=b,this.Tc(a))}32==this.uj&&32==a.keyCode&&a.preventDefault();this.uj=null};var tyvp=function(a){return tyUb&&!tyt&&a.ctrlKey&&a.altKey&&!a.shiftKey};typp.prototype.Zo=function(a){32<a.keyCode&&tyvp(a)&&(this.qp=!0)};typp.prototype.$o=function(a){!this.qp&&tyvp(a)&&this.Tc(a)};
var tysp=function(a,b,c){var d=b.shift(),e=a[d];if(e&&(0==b.length||e.Jq))throw Error("Keyboard shortcut conflicts with existing shortcut");b.length?(d=d.toString(),e=new tyrp,e=d in a?a[d]:a[d]=e,tysp(e.next,b,c)):a[d]=new tyrp(c)};
typp.prototype.Tc=function(a){var b;b=a.keyCode;if(16==b||17==b||18==b)b=!1;else{var c=a.target,d="TEXTAREA"==c.tagName||"INPUT"==c.tagName||"BUTTON"==c.tagName||"SELECT"==c.tagName,e=!d&&(c.isContentEditable||c.ownerDocument&&"on"==c.ownerDocument.designMode);b=!d&&!e||this.St[b]||this.ms?!0:e?!1:this.qv&&(a.altKey||a.ctrlKey||a.metaKey)?!0:"INPUT"==c.tagName&&this.mx[c.type]?13==b:"INPUT"==c.tagName||"BUTTON"==c.tagName?this.rs?!0:32!=b:!1}if(b)if("keydown"==a.type&&tyvp(a))this.qp=!1;else{b=tykl(a.keyCode);
c=b&255|((a.shiftKey?1:0)|(a.ctrlKey?2:0)|(a.altKey?4:0)|(a.metaKey?8:0))<<8;if(!this.Df[c]||1500<=tyi()-this.ii)this.Df=this.wg,this.ii=tyi();if(c=this.Df[c])c.next?(this.Df=c.next,this.ii=tyi(),a.preventDefault()):(this.Df=this.wg,this.ii=tyi(),this.ss&&a.preventDefault(),this.ts&&a.stopPropagation(),c=c.Jq,d=a.target,e=this.dispatchEvent(new tywp("shortcut",c,d)),(e&=this.dispatchEvent(new tywp("shortcut_"+c,c,d)))||a.preventDefault(),tyt&&(this.uj=b))}};
var tywp=function(a,b,c){tyq.call(this,a,c);this.identifier=b};tyj(tywp,tyq);chrome.i18n.getMessage("828700836558117968");chrome.i18n.getMessage("7194651457266894775");chrome.i18n.getMessage("7366108491311712519");/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
new ArrayBuffer(0);Object.freeze(new Date(0));Object.freeze({});/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 @fileoverview This WebSQL backstore shall be considered a gap-stopping patch
 and will be removed as soon as Apple fixes IndexedDB bugs in Safari.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 @fileoverview Provides default comparators. The comparators in this file
 use the following logic for compare: whoever has a bigger array index wins.
 For example, DESC order for (3, 5), since 3 shall have a bigger array index
 when sorted descending, it wins the comparison.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
new tyo(0,new tyG([1,4]),1,new tyG([2]),2,new tyG([3,5,6]),3,new tyG([2,7]),4,new tyG([7]),5,new tyG([7]),6,new tyG([7]));/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
chrome.i18n.getMessage("3742493136298597541");var tyxp=tyei.getInstance().Kf();tyN(tyxp,8);var tyyp=function(a){ty8h.call(this,a);this.Ak()};tyj(tyyp,ty8h);tyyp.prototype.Ak=function(){chrome.runtime.onMessage.addListener(tyh(this.gu,this))};tyyp.prototype.gu=function(a){if(a.sentFrom!=this.xr){var b=a.type,c=a.message;a=a.dataBuffer;var d=ty5h(b),c=null===d?void 0:new d(c),b=tycb(ty1f,b)?b:null;null===b||this.dispatchEvent(new ty_h(b,c,a))}};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 found at http://polymer.github.io/AUTHORS.txt. The complete set of
 contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 distributed by Google as part of the polymer project is also subject to an
 additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
*/
var tyzp=new tyI("ga");var tyAp=function(){};tyAp.prototype.hk=function(){return chrome.i18n.getMessage("@@ui_locale")};var tyBp=function(a,b,c,d){ty2h.call(this);this.qe=b;this.Fe=c;this.ad=d;tyn(this.cj,a);this.cj.push(a);ty3h(this,a,"L",tyla(this.xn,a));this.Qm(a)};tyj(tyBp,ty2h);ty=tyBp.prototype;ty.Qm=function(a){ty3h(this,a,305,this.Fu);ty3h(this,a,302,this.Gu);ty3h(this,a,15,this.Iu);ty3h(this,a,307,this.Ju);ty3h(this,a,313,this.Ku);ty3h(this,a,314,this.Hu)};ty.Fu=function(a){a=a.message;tyN(a,1);tyN(a,2);a=a.Gn();var b=this.qe;b.Ng=a;2!=b.ad.Hh()&&3!=b.Ng&&(b.Ei=new tyyg);b.te()};ty.Gu=function(a){this.Hd(a.message.getVersion())};
ty.Iu=function(a){this.fj(a.message.getPlayerState())};ty.Ju=function(a){a=a.message;this.Bm(a.Zn(),tyN(a,2))};ty.Ku=function(a){var b=a.message;a=ty3f(b,tySg,2);b=b.Kf();tyei.getInstance().Cq(b);ty1g(this.Fe,tyN(a,18));a=0!=a.Jn();b=this.qe;b.ap=a;b.te()};ty.Hu=function(a){a=a.message.Hh();this.ad.Eq(a,"Ba")};ty.Hd=function(a){this.qe.Hd(a)};ty.fj=function(a){this.qe.fj(a)};ty.Bm=function(a,b){this.qe.Bm(a,b)};var tyCp=new tysd(296,416),tyDp=new tysd(296,296);var tyEp=function(){tya.tyliumStubList||(tya.tyliumStubList=[]);return tya.tyliumStubList};var tyIp=function(){return tyQ("<div class='vb-wb xb'>"+tyFp()+tyGp()+tyQ('<div class="cc-q xb"><div class="cc u-cc-horizontal u-cc-Db"><div class="Ob-fc-gc"><div class="ec-cc"></div></div><div class="u-cc-dc"></div></div></div>')+tyHp()+'<div class="mc xb"></div><div class="Hc-sb"></div><div class="sb-tb xb"></div></div>')},tyFp=function(){var a="",b=chrome.i18n.getMessage("2714752802779336020"),c=chrome.i18n.getMessage("2102825898069375693"),d=chrome.i18n.getMessage("8931700495296520714"),a=a+('<div class="Ab-Bb"><button class="Cb-z-x"></button><div class="hc-Fb"><p>'+
b+'</p></div><div class="Db-Eb"><div class="Fb"><a class="Fb-Gb"></a></div><div class="Hb"><a class="Hb-Gb"></a></div></div><button class="Ab-i Ib zb" title=\''+tyOi(c)+'\' aria-haspopup="true"></button><button class="Ab-i Jb" title=\''+tyOi(d)+"'></button></div>");return tyQ(a)},tyGp=function(){var a="",b=chrome.i18n.getMessage("5501301484140201550"),c=chrome.i18n.getMessage("4456793125873199230"),d=chrome.i18n.getMessage("3483193414050571677"),e=chrome.i18n.getMessage("3609204150605625912"),f=chrome.i18n.getMessage("7704516203792990151"),
g=chrome.i18n.getMessage("8741366833297918126"),a=a+('<div class="Zb-ac"><img class="bc" class="image" tabindex="-1" aria-hidden="true" /><button id="ifl-large-button" class="hc hc-kc" aria-labelledby="ifl-text-lg"></button><label id="ifl-text-lg" class="hc-g" for="ifl-large-button">'+b+'</label><button class="hc hc-lc xb" title=\''+tyOi(c)+"'></button><button class=\"Tb Tb-s off xb\" title='"+tyOi(d)+"'></button><button class=\"Tb Tb-Ub off xb\" title='"+tyOi(e)+"'></button><span class=\"f-Lb xb\" aria-label='"+
tyOi(f)+"'></span><span class=\"Db-Kb xb\" aria-label='"+tyOi(g)+"'></span></div>");return tyQ(a)},tyHp=function(){var a="",b=chrome.i18n.getMessage("6211429203092739745"),c=chrome.i18n.getMessage("5455360062863417200"),a=a+('<div class="wb-Bb"><button class="S-i Sb" value="NO_REPEAT" disabled></button><button class="S-i Qb" disabled title=\''+tyOi(b)+'\'></button><button class="S-i Cb Cb-Nb"></button><button class="S-i Pb" disabled title=\''+tyOi(c)+'\'></button><button class="S-i Rb" value="NO_SHUFFLE" disabled></button></div>');
return tyQ(a)},tyJp=function(){return tyQ('<div class="Jb"></div><div class="sb-x"></div><div class="sb-Fb"></div><div class="sb-yc"></div><button class="sb-zc-i"></button><div class="sb-Ac"></div>')},tyKp=function(){var a="",b=chrome.i18n.getMessage("1044946868924904798");return tyQ(a+b)},tyLp=function(){var a="",b=chrome.i18n.getMessage("95869773684474447");return tyQ(a+b)},tyMp=function(){var a="",b=chrome.i18n.getMessage("5497627646066282315");return tyQ(a+('<div class="Dc-Ec-Fc-Fb">'+b+"</div>"))},
tyNp=function(a){var b="";a=chrome.i18n.getMessage("6650888720096194474",[tyIi(a.Ff),"</span>",'<span class="mini-player-user-email">']);return tyQ(b+a)},tyOp=function(){var a="",b=chrome.i18n.getMessage("1504214836895903832");return tyQ(a+('<div class="Dc-Ec-Fc-Fb">'+b+"</div>"))},tyPp=function(){var a="",b=chrome.i18n.getMessage("1729815731089690989");return tyQ(a+b)},tyQp=function(){var a="",b=chrome.i18n.getMessage("3872632959071287956"),c=chrome.i18n.getMessage("5578390534357178026");return tyQ(a+
('<p class="Dc-Ec-Fc-yc-Gc">'+b+'</p><p class="Dc-Ec-Fc-yc-Gc">'+c+"</p>"))},tyRp=function(){var a="",b=chrome.i18n.getMessage("5889126665299129466");return tyQ(a+b)},tySp=function(){var a="",b=chrome.i18n.getMessage("1372788343021542418");return tyQ(a+b)},tyTp=function(){var a="",b=chrome.i18n.getMessage("8619410898472620495");return tyQ(a+b)},tyUp=function(){var a="",b=chrome.i18n.getMessage("7354691783317064273");return tyQ(a+('<p class="Dc-Ec-Fc-yc-Gc">'+b+"</p>"))},tyVp=function(){return tyQ('<p class="Dc-Ec-Fc-yc-Gc"></p>')},
tyWp=function(){var a="",b=chrome.i18n.getMessage("819996403327805209");return tyQ(a+b)},tyXp=function(){var a="",b=chrome.i18n.getMessage("8679806927601731663");return tyQ(a+b)},tyYp=function(){var a="",b=chrome.i18n.getMessage("840692109692540367");return tyQ(a+b)},tyZp=function(){var a="",b=chrome.i18n.getMessage("3381844160250536550");return tyQ(a+b)},ty_p=function(){var a="",b=chrome.i18n.getMessage("3163044740176820503");return tyQ(a+b)},ty0p=function(){var a="",b=chrome.i18n.getMessage("3849149261610050417");
return tyQ(a+b)},ty1p=function(a){var b="";a=chrome.i18n.getMessage("3839679337223320857",[tyIi(a.Ff)]);return tyQ(b+a)},ty2p=function(a){var b="";a=chrome.i18n.getMessage("8992323138519095501",[tyIi(a.artistName),tyIi(a.ix)]);return tyQ(b+a)},ty3p=function(a){var b="",c=chrome.i18n.getMessage("1726363342938046830"),d=chrome.i18n.getMessage("4075286221500750156",[tyIi(a.Ds),tyIi(a.version)]),e=chrome.i18n.getMessage("8639048757911329468",["</span>",tyIi(a.uv),"<span class='mc-oc-nc'>"]),f=chrome.i18n.getMessage("1722592106949807025"),
g=chrome.i18n.getMessage("4357737589458300153",["</a>",'<a class="mc-uc-vc" href="'+tyPi(tyXi(a.url))+'">']),h=chrome.i18n.getMessage("2544569632476723854"),k=chrome.i18n.getMessage("8440128775129354214");if(a.cw)var l=""+chrome.i18n.getMessage("7819314041543176992"),l=tyKi(l),b=b+('<sj-icon-button class="mc-Jb" icon="clear" aria-label='+tyTi(l)+"></sj-icon-button>");else b+='<button class="mc-Jb"></button>';b+='<div class="mc-Fb">'+c+'</div><div class="mc-nc">'+d+'</div><div class="mc-oc-nc-d">'+
e+'</div><div class="mc-pc-qc-d"><button class="mc-pc-qc">'+f+'</button></div><div class="mc-mc-g">'+g+'</div><div class="mc-rc-sc"><a class="mc-tc" href="'+tyPi(tyXi(a.url))+'">'+h+'</a> - <a class="mc-sc" href="'+tyPi(tyXi(a.url))+'">'+k+"</a></div>";return tyQ(b)},ty4p=function(a){a=a||{};var b="";if(a.ag){var c=Math.ceil(a.ag/1E3);a=Math.floor(c/3600);var d=Math.floor(c/60)-60*a,c=c-3600*a-60*d,b=b+((0<a?tyIi(a)+":":"")+(10>d&&0<a?"0":"")+tyIi(d)+":"+(10>c?"0":"")+tyIi(c))}else b+="0:00";return tyQ(b)},
ty5p=function(){return tyQ('<div class="Ic-Jc-y"><div>Drag files here or select files to copy to the app\'s persistent storage</div><input type="file" class="Ic-Jc-copy-file-i" name="copyfile"><ul class="Ic-Jc-file-copy-J"></ul><div class="Ic-Jc-environment-Wb"></div></div>')},ty6p=function(a){return tyQ("<li>"+(a.av?tyIi(a.filename)+" is copied.":tyIi(a.filename)+" is not copied: "+tyIi(a.error)+".")+"</li>")};var ty7p=chrome.i18n.getMessage("8542907888351533629"),ty8p=function(a){ty2.call(this);this.M=new ty_m;this.we=chrome.runtime.getManifest().version;this.cg=ty7p;this.Es=chrome.runtime.getManifest().build_mode||"";this.Re=a.get(tyzp).hk()};tyj(ty8p,ty2);var ty9p=chrome.i18n.getMessage("8971282019539581965");ty=ty8p.prototype;ty.F=function(){var a=ty_g()?tyci().Ic.contains(8414):tyci().Ic.contains(8355);this.C=ty0m(this.M,ty3p,{version:this.we,uv:this.cg,Ds:this.Es,cw:a})};
ty.H=function(){ty8p.B.H.call(this);var a=this.getHandler(),b=this.N("mc-tc"),c=this.N("mc-sc"),d=this.N("mc-uc-vc"),e=this.N("mc-Jb");tyDd(e,{title:ty9p});var f=this.N("mc-pc-qc");a.listen(b,"click",this.yu);a.listen(c,"click",this.ru);a.listen(d,"click",this.zu);a.listen(e,"click",function(){this.dispatchEvent("yc")});a.listen(f,"click",function(){this.dispatchEvent("zc")})};ty.yu=function(){ty0g("https://play.google.com/intl/"+this.Re+"/about/play-terms.html")};
ty.ru=function(){ty0g("https://www.google.com/policies/privacy/?hl="+this.Re)};ty.zu=function(){chrome.app.window.create("thirdparty.html")};ty.Hd=function(a){this.cg=a?a:ty7p;tyE(this.N("mc-oc-nc"),this.cg)};var ty$p=function(a){ty2.call(this);this.T=a.get(tyYf);this.Pg="";this.ph=1.5<tya.devicePixelRatio?"/resources/images/miniplayer/default_album_art_296_card_x2.png":"/resources/images/miniplayer/default_album_art_296_card.png"};tyj(ty$p,ty2);ty=ty$p.prototype;ty.F=function(){this.C=ty0m(new ty_m,tyGp)};
ty.H=function(){ty$p.B.H.call(this);var a=this.getHandler();this.Kj=this.N("f-Lb");this.xm=this.N("Db-Kb");this.Og=this.N("bc");this.hf=this.N("Tb-s");this.jf=this.N("Tb-Ub");this.Sf=this.N("hc-kc");this.Wh=this.N("hc-lc");this.Su=this.N("hc-g");a.listen(this.A(),"click",this.eg);a.listen(this.A(),"mouseover",this.Kv);a.listen(this.A(),"mouseout",this.Jv)};
ty.zq=function(a){a=a||this.ph;this.Pg!==a&&(this.Pg=a,this.Pg==this.ph?this.Og.src=this.ph:(a=tyRf(tylk(a)),tyCf(a,"https"),a=tytk(a.toString()),a.addCallback(function(a){this.Og.src=a},this),tybd(a,function(){this.Og.src=this.ph},this)))};ty.fn=function(){this.Pg=this.Og.src=""};ty.setCurrentTime=function(a){tyE(this.Kj,ty4p({ag:a}).toString())};ty.Hq=function(a){tyE(this.xm,ty4p({ag:a}).toString())};
ty.ug=function(a){tyT(this.jf,"xb",!a);tyT(this.hf,"xb",!a);tyT(this.Wh,"xb",!a);tyT(this.Wh,"xb",!a);tyT(this.Kj,"xb",!a);tyT(this.xm,"xb",!a);tyT(this.Sf,"xb",a);tyT(this.Su,"xb",a)};ty.Fq=function(a){switch(a){case 5:tyS(this.hf,"j");tyR(this.jf,"j");break;case 1:tyS(this.jf,"j");tyR(this.hf,"j");break;default:tyS(this.hf,"j"),tyS(this.jf,"j")}};
ty.eg=function(a){var b;switch(a.target){case this.jf:b="Cc";a="Thumbs Up Toggle";break;case this.hf:b="Bc";a="Thumbs Down Toggle";break;case this.Sf:b="Ac";a="IFL Radio Large";break;case this.Wh:b="Ac";a="IFL Radio Small";break;default:return}tyK(this.T,"Button Clicked",a);this.dispatchEvent(b)};ty.Kv=function(){tyaq(this,!0);tyR(this.Sf,"ic")};ty.Jv=function(){tyaq(this,!1);tyS(this.Sf,"ic")};ty.df=function(a){tyT(this.Sf,"yb",!a);tyT(this.jf,"yb",!a);tyT(this.hf,"yb",!a);tyaq(this,a)};
var tyaq=function(a,b){tyT(a.Kj,"yb",!b);tyT(a.xm,"yb",!b);tyT(a.Wh,"yb",!b)};var tybq=function(){};tyj(tybq,tybm);tyca(tybq);ty=tybq.prototype;ty.Rd=function(){return"button"};ty.Hc=function(a,b,c){switch(b){case 8:case 16:ty1(a,"pressed",c);break;default:case 64:case 1:tybq.B.Hc.call(this,a,b,c)}};ty.F=function(a){var b=tybq.B.F.call(this,a);this.Ol(b,a.Jh());var c=a.va();c&&this.Eb(b,c);ty4(a,16)&&this.Hc(b,16,a.Wc());return b};ty.ba=function(a,b){b=tybq.B.ba.call(this,a,b);var c=this.va(b);a.xa=c;a.vm=this.Jh(b);ty4(a,16)&&this.Hc(b,16,a.Wc());return b};ty.va=tyc;
ty.Eb=tyc;ty.Jh=function(a){return a.title};ty.Ol=function(a,b){a&&(b?a.title=b:a.removeAttribute("title"))};ty.O=function(){return"u-i"};var tycq=function(){};tyj(tycq,tybq);tyca(tycq);ty=tycq.prototype;ty.Rd=function(){};ty.F=function(a){tynm(a,!1);a.vf&=-256;a.tb(32,!1);return a.K().F("BUTTON",{"class":this.He(a).join(" "),disabled:!a.isEnabled(),title:a.Jh()||"",value:a.va()||""},a.Eh()||"")};ty.hc=function(a){return"BUTTON"==a.tagName||"INPUT"==a.tagName&&("button"==a.type||"submit"==a.type||"reset"==a.type)};
ty.ba=function(a,b){tynm(a,!1);a.vf&=-256;a.tb(32,!1);if(b.disabled){var c=tyMa(this.Jf(1));tyR(b,c)}return tycq.B.ba.call(this,a,b)};ty.yd=function(a){a.getHandler().listen(a.A(),"click",a.$c)};ty.og=tyc;ty.ef=tyc;ty.Xc=function(a){return a.isEnabled()};ty.fd=tyc;ty.Xa=function(a,b,c){tycq.B.Xa.call(this,a,b,c);(a=a.A())&&1==b&&(a.disabled=c)};ty.va=function(a){return a.value};ty.Eb=function(a,b){a&&(a.value=b)};ty.Hc=tyc;var tydq=function(a,b,c){ty5.call(this,a,b||tycq.getInstance(),c)};tyj(tydq,ty5);ty=tydq.prototype;ty.va=function(){return this.xa};ty.Eb=function(a){this.xa=a;this.Sc().Eb(this.A(),a)};ty.Jh=function(){return this.vm};ty.Ol=function(a){this.vm=a;this.Sc().Ol(this.A(),a)};ty.D=function(){tydq.B.D.call(this);delete this.xa;delete this.vm};ty.H=function(){tydq.B.H.call(this);if(ty4(this,32)){var a=this.La();a&&this.getHandler().listen(a,"keyup",this.Ec)}};
ty.Ec=function(a){return 13==a.keyCode&&"key"==a.type||32==a.keyCode&&"keyup"==a.type?this.$c(a):32==a.keyCode};tykm("u-i",function(){return new tydq(null)});var tyeq=function(a,b,c,d){ty6.call(this,a,b,c,d)};tyj(tyeq,ty6);tykm("u-combobox-K",function(){return new tyeq(null)});var tyfq=function(a){ty3.call(this);this.L=new ty_m;this.Cc=a.get(tyTh);this.li=a.get(tyrh)};tyj(tyfq,ty3);tyfq.prototype.H=function(){tyfq.B.H.call(this);this.setTitle("Debug");this.setContent(this.L.render(ty5p));var a=this.na(),b=this.getHandler();b.listen(a,"dragover",this.Fv);b.listen(a,"dragleave",this.Ev);b.listen(a,"drop",this.Gv);tygq(this)};tyfq.prototype.Ha=function(){tyfq.B.Ha.call(this)};
var tygq=function(a){var b=tyBd("Ic-Jc-copy-file-i",tyNa(a.na()));b.onchange=tyh(function(){tyhq(this,b.files)},a)};tyfq.prototype.Fv=function(a){a.preventDefault();a.stopPropagation();tyT(this.na(),"Ic-Jc-Kc-Lc",!0)};tyfq.prototype.Ev=function(){tyT(this.na(),"Ic-Jc-Kc-Lc",!1)};tyfq.prototype.Gv=function(a){a.preventDefault();a.stopPropagation();tyT(this.na(),"Ic-Jc-Kc-Lc",!1);a=a.Xb().dataTransfer;tyb(a)&&tyb(a.types)&&(a=a.files,tyb(a)&&tyhq(this,a))};
var tyhq=function(a,b){tym(b,function(a){tyiq(this,a)},a)},tyiq=function(a,b){var c=new tyz;c.addCallback(a.Cc.Et,a.Cc);c.addCallback(function(a){return a.getFile(b.name,2)},a);c.addCallback(function(a){return a.createWriter()},a);c.addCallback(function(a){try{a.write(b),tyjq(this,b,!0)}catch(c){tyjq(this,b,!1,c.name)}},a);c.callback()},tyjq=function(a,b,c,d){tyBd("Ic-Jc-file-copy-J",tyNa(a.na())).appendChild(ty0m(a.L,ty6p,{filename:b.name,av:c,error:d}))};var tykq=function(a,b){ty2.call(this);this.T=a.get(tyYf);this.M=new ty_m;this.Qf=a.get(ty0f);this.Re=a.get(tyzp).hk();this.di=b};tyj(tykq,ty2);ty=tykq.prototype;ty.F=function(){this.C=ty0m(this.M,tyJp);this.hn=this.J("Jb");tyV(this.hn,this.di);this.wd=this.J("sb-x");this.la=this.J("sb-Fb");this.ia=this.J("sb-zc-i");this.R=this.J("sb-yc");this.If=this.J("sb-Ac")};
ty.H=function(){tykq.B.H.call(this);this.Qf.Nf().addCallback(function(a){this.Pj(a)},this);var a=this.getHandler();a.listen(this.ia,"click",this.Fj);a.listen(this.hn,"click",function(){this.dispatchEvent("Ec")})};
ty.sg=function(a,b){this.Lb=a;switch(a){case "could-not-connect":this.Vl(b.Kk,b.Dm);break;case "no-music-account":this.Xl();break;case "offline":this.Zl();break;case "user-not-logged-into-chrome":this.gm();break;case "user-not-logged-into-skyjam":this.fm();break;case "verified-user-not-logged-in":this.hm();break;case "account-type-changed":this.Tl();break;case "another-stream-being-played":this.Ul();break;case "generic-playback-error":this.Wl();break;case "segment-streaming-rate-limit-reached":this.am();
break;case "stream-rate-limit-reached":this.bm();break;case "other-authenticated-user":this.$l();break;case "unauthenticated-user":this.em()}};ty.hm=function(){this.ea(null);this.Z(tyWp);this.ga(!0);ty7(this.M,this.R,tyQp);this.aa(tyOp);tyK(this.T,"Showing ErrorView",this.Lb)};ty.gm=function(){this.ea("Xb-x");this.Z(tyZp);this.ga(!1);ty7(this.M,this.R,tyRp);this.aa(null);tyK(this.T,"Showing ErrorView",this.Lb)};
ty.fm=function(){this.ea("Xb-x");this.Z(tyYp);this.ga(!1);ty7(this.M,this.R,tySp);this.aa(null);tyK(this.T,"Showing ErrorView",this.Lb)};ty.Vl=function(a){this.ea(null);tyb(a)&&0!=a&&2!=a?(a=tyXg(a),ty7(this.M,this.R,tyVp),tyE(tyOd(this.R),a),this.Z(tyXp),this.aa(tyOp)):(ty7(this.M,this.R,tyUp),this.Z(null),this.aa(tyMp));this.ga(!1);tyK(this.T,"Showing ErrorView",this.Lb)};ty.Zl=function(){this.ea(this.di?null:"Bc-x");this.aa(tyKp);ty7(this.M,this.R,tyPp);this.Z(null);this.ga(!1)};
ty.Xl=function(){this.Qf.Nf().addCallback(function(a){this.ea("Xb-x");this.aa(null);ty7(this.M,this.R,tyNp,{Ff:a});this.Z(ty_p);this.ga(!1)},this)};ty.Tl=function(){this.ea(null);this.aa(null);tyE(this.R,ty4k);this.Z(ty1k);this.ga(!1)};ty.Ul=function(){this.ea(null);this.aa(ty5k);ty7(this.M,this.R,ty1m,{$f:"http://www.google.com/support/music/bin/answer.py?answer=1229932"});this.Z(null);this.ga(!1)};ty.am=function(){this.ea(null);this.aa(ty6k);ty7(this.M,this.R,ty3m,{});this.Z(null);this.ga(!1)};
ty.bm=function(){this.ea(null);this.aa(ty6k);ty7(this.M,this.R,ty2m,{$f:"http://www.google.com/support/music/bin/answer.py?answer=1248948"});this.Z(null);this.ga(!1)};ty.em=function(){this.ea(null);this.aa(null);tyE(this.R,ty7k);this.Z(ty1k);this.ga(!1)};ty.$l=function(){this.ea(null);this.aa(null);tyE(this.R,ty8k);this.Z(ty2k);this.ga(!1)};ty.Wl=function(){this.ea("Cc-sb-x");this.aa(tyLp);ty7(this.M,this.R,tyTp);this.Z(ty0p);this.ga(!1)};
ty.ea=function(a){if(null===a)tyV(this.wd,!1);else{if(tyb(this.qn)){var b=this.wd,c=this.qn;ty2i(b,c)&&(tyS(b,c),tyR(b,a))}else tyR(this.wd,a);this.qn=a;tyV(this.wd,!0)}};ty.aa=function(a){null===a?tyV(this.la,!1):(tyf(a)?ty7(this.M,this.la,a):tyE(this.la,a),tyV(this.la,!0))};ty.Z=function(a){null===a?tyV(this.ia,!1):(tyf(a)?ty7(this.M,this.ia,a):tyE(this.ia,a),tyV(this.ia,!0))};ty.ga=function(a){tyV(this.If,a)};ty.Pj=function(a){ty7(this.M,this.If,ty1p,{Ff:a})};
ty.Fj=function(){tyK(this.T,"Button Clicked",this.Lb);switch(this.Lb){case "verified-user-not-logged-in":ty0g("https://support.google.com/chrome/answer/185277?hl="+this.Re);break;case "could-not-connect":case "user-not-logged-into-chrome":this.dispatchEvent({type:"Fc"});break;case "user-not-logged-into-skyjam":var a=tyMa(tyyi("chrome_app_unconnected"));ty0g(a);break;case "no-music-account":a=tyRf(tyMa(tyyi("chrome_app")));tyQf(a,"utm_campaign","get_started_sign_up_button");ty0g(a.toString());break;
case "account-type-changed":case "unauthenticated-user":this.dispatchEvent("Gc");break;case "other-authenticated-user":this.dispatchEvent("Dc");break;case "generic-playback-error":this.dispatchEvent("Hc")}};ty.df=function(a){tyT(this.ia,"yb",!a);tyT(this.R,"yb",!a)};var tylq=function(a){tyq.call(this,"Tc");this.delta=a};tyj(tylq,tyq);var tymq=function(a){tyq.call(this,"Ic");this.Uu=a};tyj(tymq,tyq);var tynq=function(a){ty2.call(this);this.T=a.get(tyYf);this.np=!1};tyj(tynq,ty2);tynq.prototype.F=function(){this.C=ty0m(new ty_m,tyHp)};tynq.prototype.H=function(){tynq.B.H.call(this);this.Ue=this.J("Pb");this.Ze=this.J("Qb");this.Aa=this.J("Cb-Nb");tyDd(this.Aa,{title:tyyn});this.Fa=this.J("Sb");this.kb=this.J("Rb");this.getHandler().listen(this.A(),"click",this.eg)};var tyoq=function(a,b){a.np=b;var c=tyyn;a.np?tyR(a.Aa,"Ob"):(c=tyzn,tyS(a.Aa,"Ob"));tyDd(a.Aa,{title:c})};
tynq.prototype.Pw=function(a){switch(a){case 1:typq(this);break;case 2:this.Fa.disabled=!1;this.Fa.value="SINGLE_REPEAT";tyDd(this.Fa,{title:tyEn});break;case 3:this.Fa.disabled=!1;this.Fa.value="LIST_REPEAT";tyDd(this.Fa,{title:tyDn});break;case 4:this.Fa.disabled=!0}};tynq.prototype.setShuffle=function(a){switch(a){case 1:tyqq(this);break;case 2:this.kb.disabled=!1;this.kb.value="ALL_SHUFFLE";tyDd(this.kb,{title:tyBn});break;case 4:this.kb.disabled=!0}};
var typq=function(a){a.Fa.disabled=!1;a.Fa.value="NO_REPEAT";tyDd(a.Fa,{title:tyCn})},tyqq=function(a){a.kb.disabled=!1;a.kb.value="NO_SHUFFLE";tyDd(a.kb,{title:tyAn})};
tynq.prototype.eg=function(a){var b,c;switch(a.target){case this.Ue:b="$c";c="Next";break;case this.Ze:b="ad";c="Previous";break;case this.Aa:b="bd";c="PlayPause Toggle";break;case this.Fa:b="cd";c="Repeat Toggle";break;case this.kb:b="dd",c="Shuffle Toggle"}b&&c&&(tyK(this.T,"Button Clicked",c),this.dispatchEvent(b));a.preventDefault();a.target.blur()};var tyrq=new tyI("ha");var tysq=function(a){ty2.call(this);this.T=a.get(tyYf)};tyj(tysq,ty2);
tysq.prototype.H=function(){tysq.B.H.call(this);var a=new typp(document);a.$a("Esc",27);a.$a("Close Window",92,87);a.$a("Close Window",91,87);a.$a("Play/Pause",80);a.$a("Play/Pause",32);a.$a("Stop",88);a.$a("Previous",66);a.$a("Previous",37);a.$a("Next",78);a.$a("Next",39);a.$a("Repeat",82);a.$a("Shuffle",83);a.$a("Thumbs Up",107);a.$a("Thumbs Up",187);a.$a("Thumbs Down",109);a.$a("Volume Down",40);a.$a("Volume Up",38);this.xp=a;this.getHandler().listen(this.xp,"shortcut",this.vu)};
tysq.prototype.Ha=function(){this.xp.W();tysq.B.Ha.call(this)};tysq.prototype.vu=function(a){tyK(this.T,"Shortcut Typed",a.identifier);this.dispatchEvent(a.identifier)};var tytq=chrome.i18n.getMessage("5128240607770067472"),tyuq=chrome.i18n.getMessage("4275466320467620600");var tyvq=!tys,tywq=function(a,b){tyvq&&a.dataset?a.dataset.menuKey=b:a.setAttribute("data-"+"menuKey".replace(/([A-Z])/g,"-$1").toLowerCase(),b)},tyxq=function(a){return tyvq&&a.dataset?"menuKey"in a.dataset?a.dataset.menuKey:null:a.getAttribute("data-"+"menuKey".replace(/([A-Z])/g,"-$1").toLowerCase())};var tyyq=function(a,b,c){ty6.call(this,a,b,c);this.pg(!0)};tyj(tyyq,ty6);tykm("u-n-v",function(){return new tyyq(null)});var tyzq=function(a){ty2.call(this);this.T=a.get(tyYf);this.Ck=!1};tyj(tyzq,ty2);var tyAq=55/3E3,tyBq=chrome.i18n.getMessage("2056726623536384731");ty=tyzq.prototype;ty.F=function(){this.C=ty0m(new ty_m,tyFp)};
ty.H=function(){tyzq.B.H.call(this);var a=this.getHandler();this.fq=this.N("Cb-z-x");tyDd(this.fq,{title:tyBq});this.nr=this.N("Db-Eb");this.zs=this.N("Hb");this.xe=this.N("Hb-Gb");this.la=this.N("Fb");this.nf=this.N("Fb-Gb");this.Ls=this.N("Jb");this.jg=this.N("Ib");this.Tu=this.N("hc-Fb");var b=new tyXm,c=new ty6(tytq);this.yc=new tyyq(tyuq);b.um=!0;0<=tyKa(tywi,34)&&(b.Ka(this.yc,!0),b.Ka(new tyVm,!0));b.Ka(c,!0);b.render(tyQd(this.A()));tyR(b.C,"u-t-gb");tywq(c.A(),"about");0<=tyKa(tywi,34)&&
tywq(this.yc.A(),"always-on-top");this.Gp=b;a.listen(this.A(),"click",this.eg);a.listen(this.A(),"mouseover",this.wq);a.listen(this.Gp,"action",this.Iv)};ty.setTitle=function(a){this.of!=a&&(this.of=a,tyE(this.nf,a),tyCq([this.tm,this.sm]),this.tm=tyDq(this,this.nf,!1),this.sm=tyDq(this,this.nf,!0))};ty.hl=function(a){this.Wm!=a&&(this.Wm=a,tyE(this.xe,a),tyCq([this.zj,this.yj]),this.zj=tyDq(this,this.xe,!1),this.yj=tyDq(this,this.xe,!0))};ty.ug=function(a){tyT(this.Tu,"xb",a)};
var tyCq=function(a){tym(a,function(a){null!=a&&a.stop()})};tyzq.prototype.eg=function(a){var b;switch(a.target){case this.fq:a="Play Music Icon";b="kd";break;case this.nf:a="Title";b="hd";break;case this.xe:a="Artist";b="id";break;case this.Ls:a="Close";b="fd";break;case this.jg:a="3 Dot Menu";this.fx();break;default:return}tyK(this.T,"Button Clicked",a);b&&this.dispatchEvent(b)};tyzq.prototype.fx=function(){tyS(this.jg,"zb");tyYm(this.Gp,new tyCm(this.jg,1,!0),2,null)};
var tyDq=function(a,b,c){var d=tyQd(b);a=b.offsetWidth<=a.nr.offsetWidth?0:b.offsetWidth-a.nr.offsetWidth+3;var e=a/tyAq;b=b.offsetLeft-3;return c?new tyhn(d,[b-a,0],[b,0],e):new tyhn(d,[b,0],[b-a,0],e)};tyzq.prototype.wq=function(){!this.Ck&&this.Wm&&this.of&&(tyEq(this,this.zj,this.yj),tyEq(this,this.tm,this.sm))};var tyEq=function(a,b,c){tyx(b,"finish",function(){c.play()});tyx(c,"finish",function(){this.Ck=!1},!1,a);a.Ck=!0;b.play()};
tyzq.prototype.Iv=function(a){a=tyxq(a.target.A());tyK(this.T,"Menu Item Clicked",String(a));var b;switch(a){case "about":b="gd";break;case "always-on-top":tyK(this.T,"Changed Always On Top Setting",this.yc.Wc()?"On":"Off");b="ed";break;case "copy-debug-file":b="jd"}b&&this.dispatchEvent(b)};var tyFq=function(a){ty2.call(this);this.T=a.get(tyYf);this.Sa=!1;this.lc=this.Fg=0;this.Wk=!1;this.M=new ty_m;this.ua=new tylp;this.Ja=new tyzq(a);this.xb=new ty$p(a);this.Da=new tynq(a);this.fc=new ty8p(a);this.Bc=new tykq(a,!1);this.ge=new tykq(a,!0);this.fa=a.get(tyrq);this.Ka(this.ua);this.Ka(this.Da);this.Bk=this.Zd=!1;this.ha=a;tya.uuddlrlrba=tyh(this.Lq,this);tyK(this.T,"Miniplayer Window Opened")};tyj(tyFq,ty2);ty=tyFq.prototype;
ty.F=function(){this.C=ty0m(this.M,tyIp);this.bt=tyzd(document,"title",void 0,document)[0];this.lm=this.N("cc-q");this.jm=this.N("cc");this.km=this.N("ec-cc");this.N("u-cc-dc");this.gq=this.N("wb-Bb");this.Lu=this.N("Ab-Bb");this.Hs=this.N("Zb-ac");this.gd=this.N("mc");this.Ka(this.fc);this.fc.render(this.gd);this.Uj=this.N("sb-tb");this.Ka(this.Bc);this.Bc.render(this.Uj);this.Rk=this.N("Hc-sb");this.Ka(this.Bc);this.ge.render(this.Rk)};
ty.H=function(){tyFq.B.H.call(this);var a=this.getHandler();this.ua=new tylp;this.hx=new tyGq(this.ua,this.km);this.ua.setOrientation("horizontal");this.ua.wj=this.hx;this.ua.Kp=!0;this.ua.Ri(0);var b=this.ua;b.S&&0!=b.ai&&ty8o(b,!1);b.ai=!1;this.Ka(this.ua);this.ua.ba(this.jm);a.listen(this.ua,"change",this.Pv);a.listen(this.ua,"fc",this.Mr);this.Ja.ba(this.Lu);a.listen(this.Ja,"kd",this.Td);a.listen(this.Ja,"hd",this.nk);a.listen(this.Ja,"id",this.pk);a.listen(this.Ja,"fd",this.zf);a.listen(this.Ja,
"ed",this.rk);a.listen(this.Ja,"jd",this.Lq);a.listen(this.Ja,"gd",this.dx);this.xb.ba(this.Hs);a.listen(this.xb,"Cc",this.sq);a.listen(this.xb,"Bc",this.rq);a.listen(this.xb,"Ac",this.Fi);this.Da.ba(this.gq);a.listen(this.Da,"$c",this.Gi);a.listen(this.Da,"ad",this.Hi);a.listen(this.Da,"bd",this.oq);a.listen(this.Da,"cd",this.pq);a.listen(this.Da,"dd",this.qq);a.listen(this.Bc,"Fc",this.Vo);a.listen(this.Bc,"Hc",this.Td);a.listen(this.Bc,"Gc",this.Wo);a.listen(this.Bc,"Dc",this.No);a.listen(this.ge,
"Fc",this.Vo);a.listen(this.ge,"Hc",this.Td);a.listen(this.ge,"Gc",this.Wo);a.listen(this.ge,"Dc",this.No);a.listen(this.ge,"Ec",this.zf);this.fa.ba(this.A());a.listen(this.fa,"Esc",this.xk);a.listen(this.fa,"Close Window",this.zf);a.listen(this.fa,"Play/Pause",this.oq);a.listen(this.fa,"Stop",this.$k);a.listen(this.fa,"Repeat",this.pq);a.listen(this.fa,"Shuffle",this.qq);a.listen(this.fa,"Previous",this.qu);a.listen(this.fa,"Next",this.lu);a.listen(this.fa,"Thumbs Down",this.rq);a.listen(this.fa,
"Thumbs Up",this.sq);a.listen(this.fa,"Volume Down",this.al);a.listen(this.fa,"Volume Up",this.bl);a.listen(tya.document.body,"mouseover",this.Bv);a.listen(tya.document.body,"mouseout",this.Av);a.listen(this.fc,"yc",this.yv);a.listen(this.fc,"zc",this.Rs);a.listen(this.fc,"click",this.xk);this.Da.Aa.focus();this.Vh();tyHq(this)};ty.zf=function(){tya.close()};
ty.Xa=function(a,b){if(b)switch(this.Vh(),a.getState()){case 1:tyIq();tyJq(this);this.Zd&&tyKq(this);break;case 2:case 3:case 4:this.Da.Aa.disabled=!1;var c=this.mr,d=ty3f(a,tygg,2);this.mr=d.getId()||"";this.Ja.hl(d.ek()||"");this.Ja.setTitle(d.getName()||"");this.xb.Fq(d.po()||0);this.xb.zq(tyN(d,11)||"");this.lc=a.getCurrentTime()||0;this.Fg=tyN(d,10)||0;this.xb.setCurrentTime(this.lc);this.xb.Hq(this.Fg);tyLq(this);this.Da.Pw(a.qo()||1);this.Da.setShuffle(a.Ao()||1);tyoq(this.Da,3==a.getState());
c!==this.mr&&(c=this.Ja,c.zs.style.left="0px",c.la.style.left="0px",c.wq(),ty7(this.M,this.bt,ty2p,{ix:d.getName(),artistName:d.ek()}));2==a.getState()&&(this.Da.Aa.disabled=!0);this.Sa||(this.Sa=!0,this.Ja.ug(this.Sa),this.xb.ug(this.Sa),d=this.Da,d.Aa.disabled=!1,d.Fa.disabled=!1,d.kb.disabled=!1,d.Ue.disabled=!1,d.Ze.disabled=!1,this.Da.Aa.disabled=!1,tyS(this.lm,"xb"),tyR(this.A(),"W"));this.Zd&&tyKq(this);break;case 5:this.uk(a)}else this.xg("offline")};
ty.uk=function(a){tyIq();tyJq(this);var b=a.mk();a=!this.Zd;switch(b){case 1:b="account-type-changed";break;case 2:b="another-stream-being-played";break;case 6:b="segment-streaming-rate-limit-reached";break;case 7:b="stream-rate-limit-reached";break;case 9:b="unauthenticated-user";break;case 12:b="other-authenticated-user";break;default:a=!1,b="generic-playback-error"}a?this.xg(b):this.ub(b)};
var tyJq=function(a){if(a.Sa){a.Sa=!1;a.Ja.ug(a.Sa);a.Ja.hl("");a.Ja.setTitle("");a.xb.ug(a.Sa);a.xb.fn();tyoq(a.Da,!1);var b=a.Da;b.Aa.disabled=!0;b.Fa.disabled=!0;b.kb.disabled=!0;b.Ue.disabled=!0;b.Ze.disabled=!0;b.Fa.value="NO_REPEAT";b.kb.value="NO_SHUFFLE";typq(b);tyqq(b);tyR(a.lm,"xb");tyS(a.A(),"W")}},tyIq=function(){var a=chrome.i18n.getMessage("3645577032204040606");tya.document.title=a};ty=tyFq.prototype;ty.Vo=function(){this.dispatchEvent("Rc")};ty.Wo=function(){};ty.No=function(){};
ty.Oq=function(){this.ub("user-not-logged-into-skyjam")};ty.Pq=function(){this.ub("user-not-logged-into-chrome")};ty.Qq=function(){this.ub("verified-user-not-logged-in")};ty.Kq=function(a,b){this.ub("could-not-connect",{Kk:a,Dm:b})};ty.Yl=function(){this.ub("offline")};ty.Mq=function(){this.ub("no-music-account")};ty.xg=function(a,b){this.ge.sg(a,b);tyV(this.Rk,!0)};ty.Vh=function(){tyV(this.Rk,!1)};ty.ub=function(a,b){this.Bc.sg(a,b);tyJq(this);this.Zd=!0;tyMq(this);tyT(this.Uj,"xb",!1)};
var tyKq=function(a){a.Zd=!1;tyMq(a);tyT(a.Uj,"xb",!0)};ty=tyFq.prototype;ty.sq=function(){this.dispatchEvent("Xc")};ty.rq=function(){this.dispatchEvent("Wc")};ty.al=function(){this.dispatchEvent("Yc")};ty.bl=function(){this.dispatchEvent("Zc")};ty.oq=function(){this.Sa?this.dispatchEvent("Pc"):this.Fi()};ty.pq=function(){this.dispatchEvent("Sc")};ty.qq=function(){this.dispatchEvent("Uc")};ty.qu=function(){ty2d()==this.jm?this.bf(-5E3):this.Hi()};ty.lu=function(){ty2d()==this.jm?this.bf(5E3):this.Gi()};
ty.bf=function(a){if(0!==a){var b=this.lc+a;b>this.Fg?a=this.Fg-this.lc:0>b&&(a=0-this.lc);this.dispatchEvent(new tylq(a))}};ty.Fi=function(){this.dispatchEvent("Lc")};ty.Gi=function(){tyoq(this.Da,!1);this.Da.Aa.disabled=!0;this.dispatchEvent("Oc")};ty.Hi=function(){tyoq(this.Da,!1);this.Da.Aa.disabled=!0;this.dispatchEvent("Qc")};ty.$k=function(){this.dispatchEvent("Vc")};ty.Td=function(){this.dispatchEvent("Nc")};ty.nk=function(){this.dispatchEvent("Jc")};ty.pk=function(){this.dispatchEvent("Kc")};
ty.Rs=function(){this.dispatchEvent("Mc")};var tyLq=function(a){a.ua.Vf()||(a.Wk=!0,a.ua.Qi(a.Fg),a.ua.Eb(a.lc),a.Wk=!1)};ty=tyFq.prototype;ty.setAlwaysOnTop=function(a){this.Ja.yc.cf(a)};ty.rk=function(){this.dispatchEvent(new tymq(this.Ja.yc.Wc()))};ty.Bv=function(){tyS(this.Ja.jg,"zb")};ty.Av=function(){tyR(this.Ja.jg,"zb")};ty.Pv=function(){this.km.style.width=this.ua.U.style.left;this.Wk||this.ua.Vf()||this.bf(this.ua.va()-this.lc)};
ty.Mr=function(){this.km.style.width=this.ua.U.style.left;this.bf(this.ua.va()-this.lc)};ty.yv=function(){tyK(this.T,"Button Clicked","About Page Close");this.xk()};ty.dx=function(){this.Bk=!0;tyMq(this);tyS(this.gd,"xb");this.gd.focus()};ty.xk=function(){this.Bk=!1;tyMq(this);tyR(this.gd,"xb")};ty.Lq=function(){tyb(this.tn)||(this.tn=new tyfq(this.ha));this.tn.qa(!0)};
var tyNq=function(a,b){tyT(a.gq,"yb",!b);tyT(a.lm,"yb",!b)},tyMq=function(a){a.Bk?(a.Bc.df(!1),a.xb.df(!1),tyNq(a,!a.Zd)):a.Zd?(a.Bc.df(!0),a.xb.df(!1),tyNq(a,!1)):(a.xb.df(!0),tyNq(a,!0))};tyFq.prototype.Hd=function(a){this.fc.Hd(a)};
var tyGq=function(a,b){this.ua=a;this.$v=b},tyHq=function(a){tyRe(function(){tyT(this.A(),"xb",!1);var a=tya.outerHeight/tya.innerHeight,c=this.A().offsetWidth*a,a=this.A().offsetHeight*a;chrome.app.window.current().resizeTo(c,a);c=this.Ja;c.tm=tyDq(c,c.nf,!1);c.sm=tyDq(c,c.nf,!0);c.zj=tyDq(c,c.xe,!1);c.yj=tyDq(c,c.xe,!0);c=this.lc;this.lc=this.ua.Wa();tyLq(this);this.lc=c;tyLq(this)},100,a)},tykp=function(a,b,c){return[new tyin(a.$v,tyhp(a.ua,b).x,tyhp(a.ua,c+2).x,100)]};var tyOq=function(a,b){ty2.call(this);this.T=a.get(tyYf);this.M=new ty_m;this.Qf=a.get(ty0f);this.Re=a.get(tyzp).hk();this.di=b};tyj(tyOq,ty2);ty=tyOq.prototype;ty.eb=function(a){this.C=a;this.wd=this.J("sb-x");this.la=this.J("sb-Fb");this.ia=this.J("sb-i");this.R=this.J("sb-ub");this.If=this.J("sb-Ac")};ty.H=function(){tyOq.B.H.call(this);this.Qf.Nf().addCallback(function(a){this.Pj(a)},this);this.getHandler().listen(this.ia,"click",this.Fj)};
ty.sg=function(a,b){this.Lb=a;switch(a){case "could-not-connect":this.Vl(b.Kk,b.Dm);break;case "no-music-account":this.Xl();break;case "offline":this.Zl();break;case "user-not-logged-into-chrome":this.gm();break;case "user-not-logged-into-skyjam":this.fm();break;case "verified-user-not-logged-in":this.hm();break;case "account-type-changed":this.Tl();break;case "another-stream-being-played":this.Ul();break;case "generic-playback-error":this.Wl();break;case "segment-streaming-rate-limit-reached":this.am();
break;case "stream-rate-limit-reached":this.bm();break;case "other-authenticated-user":this.$l();break;case "unauthenticated-user":this.em()}};ty.hm=function(){this.ea(null);this.Z(tyWp);this.ga(!0);ty7(this.M,this.R,tyQp);this.aa(tyOp);tyK(this.T,"Showing ErrorViewMaterial",this.Lb)};ty.gm=function(){this.ea("sj:headphones");this.Z(tyZp);this.ga(!1);ty7(this.M,this.R,tyRp);this.aa(null);tyK(this.T,"Showing ErrorViewMaterial",this.Lb)};
ty.fm=function(){this.ea("sj:headphones");this.Z(tyYp);this.ga(!1);ty7(this.M,this.R,tySp);this.aa(null);tyK(this.T,"Showing ErrorViewMaterial",this.Lb)};ty.Vl=function(a){this.ea(null);tyb(a)&&0!=a&&2!=a?(a=tyXg(a),ty7(this.M,this.R,tyVp),tyE(tyOd(this.R),a),this.Z(tyXp),this.aa(tyOp)):(ty7(this.M,this.R,tyUp),this.Z(null),this.aa(tyMp));this.ga(!1);tyK(this.T,"Showing ErrorViewMaterial",this.Lb)};
ty.Zl=function(){this.ea(this.di?null:"device:signal-wifi-0-bar");this.aa(tyKp);ty7(this.M,this.R,tyPp);this.Z(null);this.ga(!1)};ty.Xl=function(){this.Qf.Nf().addCallback(function(a){this.ea("sj:note");this.aa(null);ty7(this.M,this.R,tyNp,{Ff:a});this.Z(ty_p);this.ga(!1)},this)};ty.Tl=function(){this.ea(null);this.aa(null);tyE(this.R,ty4k);this.Z(ty1k);this.ga(!1)};
ty.Ul=function(){this.ea(null);this.aa(ty5k);ty7(this.M,this.R,ty1m,{$f:"http://www.google.com/support/music/bin/answer.py?answer=1229932"});this.Z(null);this.ga(!1)};ty.am=function(){this.ea(null);this.aa(ty6k);ty7(this.M,this.R,ty3m,{});this.Z(null);this.ga(!1)};ty.bm=function(){this.ea(null);this.aa(ty6k);ty7(this.M,this.R,ty2m,{$f:"http://www.google.com/support/music/bin/answer.py?answer=1248948"});this.Z(null);this.ga(!1)};
ty.em=function(){this.ea(null);this.aa(null);tyE(this.R,ty7k);this.Z(ty1k);this.ga(!1)};ty.$l=function(){this.ea(null);this.aa(null);tyE(this.R,ty8k);this.Z(ty2k);this.ga(!1)};ty.Wl=function(){this.ea("sj:album-error");this.aa(tyLp);ty7(this.M,this.R,tyTp);this.Z(ty0p);this.ga(!1)};ty.ea=function(a){null===a?tyV(this.wd,!1):(this.wd.icon=a,tyV(this.wd,!0))};ty.aa=function(a){null===a?tyV(this.la,!1):(tyf(a)?ty7(this.M,this.la,a):tyE(this.la,a),tyV(this.la,!0))};
ty.Z=function(a){null===a?tyV(this.ia,!1):(tyf(a)?ty7(this.M,this.ia,a):tyE(this.ia,a),tyV(this.ia,!0))};ty.ga=function(a){tyV(this.If,a)};ty.Pj=function(a){ty7(this.M,this.If,ty1p,{Ff:a})};
ty.Fj=function(){tyK(this.T,"Button Clicked",this.Lb);switch(this.Lb){case "verified-user-not-logged-in":ty0g("https://support.google.com/chrome/answer/185277?hl="+this.Re);break;case "could-not-connect":case "user-not-logged-into-chrome":this.dispatchEvent("Rc");break;case "user-not-logged-into-skyjam":var a=tyMa(tyyi("chrome_app_unconnected"));ty0g(a);break;case "no-music-account":a=tyRf(tyMa(tyyi("chrome_app")));tyQf(a,"utm_campaign","get_started_sign_up_button");ty0g(a.toString());break;case "generic-playback-error":this.dispatchEvent("Nc")}};var tyQq=function(){var a=tyQ,b="",c=chrome.i18n.getMessage("5501301484140201550"),b='<div class="vb-wb-e"><core-animated-pages valueattr="label" transitions="cross-fade-all" selected="hc-tb" class="tb-d" fit>'+tyQ(b+('<div class="hc-tb" label="hc-tb" fit><div class="hc-Sc-d" fit layout vertical><div flex></div><div class="hc-Sc" self-center></div><div class="hc-C" flex self-center>'+c+"</div></div></div>"))+tyQ('<div class="z-Ob-tb" label="z-Ob-tb"><core-animated-pages valueattr="class" transitions="ripple" selected="Tc-Uc-bc-Vc" class="Uc-bc-switcher" fit><section class="Tc-Uc-bc-Vc"><img class="Tc-Uc-bc"></img></section><section class="Wc-Uc-bc-Vc"><img class="Wc-Uc-bc"></img></section></core-animated-pages><div class="z-Ob-y" layout vertical fit><core-animated-pages valueattr="class" transitions="cross-fade-all" selected="Tc-Db-g" class="Db-g-switcher"><div class="Tc-Db-g"><a class="Tc-Db-L-Gb"></a><a class="Tc-Hb-L-Gb"></a></div><div class="Wc-Db-g"><a class="Wc-Db-L-Gb"></a><a class="Wc-Hb-L-Gb"></a></div></core-animated-pages><div flex></div><div class="Cc-Wb"><div class="Tb-hc-i-d" layout horizontal justified><sj-icon-button class="Sb-i" icon="av:repeat"></sj-icon-button><div flex></div><sj-icon-button class="hc-Sc-i" icon="sj:dice"></sj-icon-button><div flex></div><sj-icon-button class="Rb-i" icon="av:shuffle"></sj-icon-button></div>'+
tyQ('<div class="wb-Bb" layout horizontal><div class="Lb-cc-d"><paper-slider class="Lb-cc" min="0" max="100" value="20"></paper-slider></div><div class="Lb-g-d" horizontal justified layout><div class="Lb-ad"></div><div class="bd-Lb"></div></div><div class="Wb-d" layout horizontal justified><sj-icon-button class="dc-Ub-i" icon="thumb-up" self-center></sj-icon-button><div flex></div><div layout horizontal center self-center><sj-icon-button class="previous-i" icon="av:skip-previous"></sj-icon-button><sj-icon-button class="Cb-Nb-i" icon="av:play-circle-fill"></sj-icon-button><sj-icon-button class="next-i" icon="av:skip-next"></sj-icon-button></div><div flex></div><sj-icon-button class="dc-s-i" icon="thumb-down" self-center></sj-icon-button></div></div>')+
"</div></div></div>")+tyPq()+'</core-animated-pages><div class="Hc-sb-tb-d" fit>'+tyPq()+'</div><div class="mc-tb" fit></div>',c="",d=chrome.i18n.getMessage("3339989424930162325"),e=chrome.i18n.getMessage("2102825898069375693"),d=tyKi(""+d),c=c+'<div class="Hc-Wb" layout horizontal end-justified><div relative>'+('<sj-icon-button class="show-main-wb-x" icon="open-in-browser" title='+tyTi(d)+" aria-label="+tyTi(d)+"></sj-icon-button>"),e=tyKi(""+e),c=c+('<sj-icon-button class="k-t-x" icon="more-vert" title='+
tyTi(e)+" aria-label="+tyTi(e)+"></sj-icon-button></div></div>"),c=tyQ(c);return a(b+c+"</div>")},tyPq=function(){return tyQ('<div class="sb-tb" label="sb-tb" layout vertical center fit><div flex></div><core-icon class="sb-x"></core-icon><div class="sb-Fb"></div><div class="sb-ub"></div><paper-button class="sb-i"></paper-button><div class="sb-Ac"></div><div flex></div></div>')};var tySq=function(a){tyXm.call(this);this.T=a.get(tyYf);a=tyRq(tytq);a=new ty6(a);var b=tyRq(tyuq);this.yc=new tyyq(b);this.um=!0;this.Ka(this.yc,!0);this.Ka(new tyVm,!0);this.Ka(a,!0);tyR(this.C,"u-t-gb");tywq(a.A(),"about");0<=tyKa(tywi,34)&&tywq(this.yc.A(),"always-on-top")};tyj(tySq,tyXm);ty=tySq.prototype;ty.H=function(){tySq.B.H.call(this);this.getHandler().listen(this,"action",this.eu)};
ty.eu=function(a){a=tyxq(a.target.A());tyK(this.T,"Menu Item Clicked",String(a));switch(a){case "about":this.dispatchEvent("ld");break;case "copy-debug-file":this.dispatchEvent("md");break;case "always-on-top":this.dispatchEvent("nd")}};ty.toggle=function(){this.ja()?this.hide():tyYm(this,new tyCm(this.us,1,!0),2,null)};ty.setAlwaysOnTop=function(a){this.yc.cf(a)};ty.isAlwaysOnTop=function(){return this.yc.Wc()};var tyRq=function(a){var b=[];b.push(tyId("paper-ripple"));b.push(a);return b};var tyTq=function(){ty2.call(this);this.Wf=this.$h=!1};tyj(tyTq,ty2);var tyUq=1.5<tya.devicePixelRatio?"resources/images/miniplayer/default_album_art_296_card_x2.png":"resources/images/miniplayer/default_album_art_296_card.png";ty=tyTq.prototype;
ty.eb=function(a){this.C=a;this.Qg=this.J("Uc-bc-switcher");this.Zj=this.J("Tc-Uc-bc");this.el=this.J("Wc-Uc-bc");this.rx=this.J("Db-g-switcher");this.En=this.J("Tc-Db-L-Gb");this.Dn=this.J("Tc-Hb-L-Gb");this.yq=this.J("Wc-Db-L-Gb");this.xq=this.J("Wc-Hb-L-Gb");this.rm=this.J("dc-Ub-i");this.Qu=this.J("hc-Sc-i");this.pm=this.J("dc-s-i");this.kf=this.J("Lb-cc");this.er=this.J("Lb-ad");this.kr=this.J("bd-Lb");this.Fa=this.J("Sb-i");this.Ze=this.J("previous-i");this.Aa=this.J("Cb-Nb-i");this.Ue=this.J("next-i");
this.kb=this.J("Rb-i")};
ty.H=function(){tyTq.B.H.call(this);this.Zj.src=tyUq;this.el.src=tyUq;this.Rm();var a=this.getHandler(),b=ty7i();a.listen(b,"resize",this.Rm);a.listen(this.En,"click",this.Yo);a.listen(this.Dn,"click",this.Oo);a.listen(this.yq,"click",this.Yo);a.listen(this.xq,"click",this.Oo);a.listen(this.rm,"click",this.Bu);a.listen(this.Qu,"click",this.bu);a.listen(this.pm,"click",this.Au);a.listen(this.kf,"change",this.Du);a.listen(this.Fa,"click",this.su);a.listen(this.Ze,"click",this.pu);a.listen(this.Aa,"click",
this.ou);a.listen(this.Ue,"click",this.ku);a.listen(this.kb,"click",this.wu)};ty.Rm=function(){var a=1>ty7i().ud().As();tyT(this.Zj,"Xc-Uc-bc",a);tyT(this.el,"Xc-Uc-bc",a)};ty.Yo=function(){this.dispatchEvent("Jc")};ty.Oo=function(){this.dispatchEvent("Kc")};ty.Bu=function(){this.dispatchEvent("Xc")};ty.bu=function(){this.dispatchEvent("Lc")};ty.Au=function(){this.dispatchEvent("Wc")};
ty.Du=function(){var a=this.kf.immediateValue-this.oh;if(0!=a){var b=this.oh+a;b>this.jr?a=this.jr-this.oh:0>b&&(a=-this.oh);this.dispatchEvent(new tylq(a))}};ty.su=function(){this.dispatchEvent("Sc")};ty.pu=function(){this.dispatchEvent("Qc")};ty.ou=function(){this.dispatchEvent("Pc")};ty.ku=function(){this.dispatchEvent("Oc")};ty.wu=function(){this.dispatchEvent("Uc")};
var tyVq=function(a,b){if(a.Xs!=b){a.Xs=b;a.Qg.nA&&a.Qg.complete();a.$h=!a.$h;var c=a.$h?a.Zj:a.el,d=a.$h?"Tc-Uc-bc-Vc":"Wc-Uc-bc-Vc",e=tyh(function(){c.src=tyUq;this.Qg.selected=d},a);if(tysa(b))e();else{var f=tyRf(tylk(b));tyCf(f,"https");tyA(tytk(f.toString()),function(a){c.src=a;this.Qg.selected=d},e,a)}}};var tyWq=function(a){ty2.call(this);this.M=new ty_m;this.ui=new tyTq;this.Ka(this.ui);this.th=new tyOq(a,!1);this.Ka(this.th);this.sh=new tyOq(a,!0);this.Ka(this.sh);this.fc=new ty8p(a);this.Ka(this.fc);this.fa=a.get(tyrq);this.be=new tySq(a)};tyj(tyWq,ty2);ty=tyWq.prototype;
ty.F=function(){this.C=ty0m(this.M,tyQq);this.Vg=this.J("tb-d");this.ex=this.J("show-main-wb-x");this.zn=this.J("k-t-x");this.Ru=this.J("hc-Sc");this.aq=this.J("Hc-sb-tb-d");var a=this.J("z-Ob-tb");this.ui.ba(a);var a=this.A().querySelector(".tb-d .sb-tb"),b=this.A().querySelector(".Hc-sb-tb-d .sb-tb");this.th.ba(a);this.sh.ba(b);this.fa.ba(this.A());var a=this.be,b=this.zn,c=ty1d(b);a.render(c);a.us=b;this.gd=this.J("mc-tb");this.fc.render(this.gd)};
ty.H=function(){tyWq.B.H.call(this);var a=this.getHandler();a.listen(this.ex,"click",this.Td);a.listen(this.zn,"click",this.Zt);a.listen(this.be,"nd",this.Ut);a.listen(this.be,"ld",this.Tt);a.listen(this.Ru,"click",this.cu);a.listen(this.ui,"Jc Kc Lc Oc Pc Qc Sc Tc Uc Wc Xc".split(" "),this.dk);a.listen(this.th,["Nc","Rc"],this.dk);a.listen(this.sh,["Nc","Rc"],this.dk);a.listen(this.fc,"zc",this.tw);a.listen(this.fc,"yc",this.gn);a.listen(this.fa,"Esc",this.gn);a.listen(this.fa,"Close Window",this.zf);
a.listen(this.fa,"Play/Pause",function(){this.dispatchEvent("Pc")});a.listen(this.fa,"Stop",function(){this.dispatchEvent("Vc")});a.listen(this.fa,"Repeat",function(){this.dispatchEvent("Sc")});a.listen(this.fa,"Shuffle",function(){this.dispatchEvent("Uc")});a.listen(this.fa,"Previous",function(){this.dispatchEvent("Qc")});a.listen(this.fa,"Next",function(){this.dispatchEvent("Oc")});a.listen(this.fa,"Thumbs Down",function(){this.dispatchEvent("Wc")});a.listen(this.fa,"Thumbs Up",function(){this.dispatchEvent("Xc")});
a.listen(this.fa,"Volume Down",function(){this.dispatchEvent("Yc")});a.listen(this.fa,"Volume Up",function(){this.dispatchEvent("Zc")})};ty.dk=function(a){this.dispatchEvent(a);a.stopPropagation()};ty.ub=function(a,b){this.th.sg(a,b);this.Vg.selected="sb-tb"};ty.xg=function(a){this.sh.sg(a);tyR(this.aq,"Hc-cd")};ty.Vh=function(){tyS(this.aq,"Hc-cd")};ty.Td=function(){this.dispatchEvent("Nc")};ty.Zt=function(){this.be.toggle()};ty.Ut=function(){this.dispatchEvent(new tymq(this.be.isAlwaysOnTop()))};
ty.Tt=function(){tyR(this.gd,"mc-cd")};ty.gn=function(){tyS(this.gd,"mc-cd")};ty.zf=function(){tya.close()};ty.tw=function(){this.dispatchEvent("Mc")};ty.cu=function(){this.dispatchEvent("Lc")};ty.Hd=tyc;
ty.Xa=function(a,b){if(b)switch(this.Vh(),a.getState()){case 1:this.Vg.selected="hc-tb";break;case 2:case 3:case 4:this.Vg.selected="z-Ob-tb";var c=this.ui,d=ty3f(a,tygg,2);tyVq(c,tyN(d,11)||"");var e=a.getState()||1;c.Ze.disabled=5==e;c.Ue.disabled=5==e;3==e?(c.Aa.icon="av:pause-circle-fill",c.Aa.disabled=!1,e=tyyn):(4==e?(c.Aa.icon="av:play-circle-fill",c.Aa.disabled=!1):(c.Aa.icon="av:play-circle-fill",c.Aa.disabled=!0),e=tyzn);tyDd(c.Aa,{title:e,"aria-label":e});var e=d.getName()||"",f=d.ek()||
"";if(c.Ys!=e||c.Ws!=f){c.Ys=e;c.Ws=f;c.Wf=!c.Wf;var g=c.Wf?"Tc-Db-g":"Wc-Db-g",h=c.Wf?c.Dn:c.xq;tyE(c.Wf?c.En:c.yq,e);tyE(h,f);c.rx.selected=g}e=d.po()||0;c.pm.icon=1==e?"thumb-down":"sj:thumb-down-outline";f=1==e?tyHn:tyIn;tyDd(c.pm,{title:f,"aria-label":f});c.rm.icon=5==e?"thumb-up":"sj:thumb-up-outline";e=5==e?tyFn:tyGn;tyDd(c.rm,{title:e,"aria-label":e});e=a.getCurrentTime()||0;d=tyN(d,10)||0;c.oh=e;c.jr=d;c.kf.dragging||(c.kf.min=0,c.kf.max=d,c.kf.value=e,tyE(c.er,ty4p({ag:e}).toString()),c.er.setAttribute("aria-label",
tyJn(e)),tyE(c.kr,ty4p({ag:d}).toString()),c.kr.setAttribute("aria-label",tyKn(d)));d=a.qo()||1;e=a.Ao()||1;tyT(c.Fa,"i-Yc",1!=d&&4!=d);tyT(c.kb,"i-Yc",1!=e&&4!=e);var k;if(1==e)k=tyAn;else if(2==e||3==e)k=tyBn;k&&tyDd(c.kb,{title:k,"aria-label":k});1==d?k=tyCn:2==d?(c.Fa.icon="av:repeat-one",k=tyEn):(c.Fa.icon="av:repeat",k=tyDn);k&&tyDd(c.Fa,{title:k,"aria-label":k});c.Fa.hidden=4==d;c.kb.hidden=4==e;break;case 5:this.uk(a)}else this.Yl(!0)};
ty.uk=function(a){var b="sb-tb"==!this.Vg.selected;switch(a.mk()){case 1:a="account-type-changed";break;case 2:a="another-stream-being-played";break;case 6:a="segment-streaming-rate-limit-reached";break;case 7:a="stream-rate-limit-reached";break;case 9:a="unauthenticated-user";break;case 12:a="other-authenticated-user";break;default:b=!1,a="generic-playback-error"}b?this.xg(a):this.ub(a)};ty.Qq=function(){this.ub("verified-user-not-logged-in")};ty.Pq=function(){this.ub("user-not-logged-into-chrome")};
ty.Oq=function(){this.ub("user-not-logged-into-skyjam")};ty.Kq=function(a,b){this.ub("could-not-connect",{Kk:a,Dm:b})};ty.Yl=function(a){a?this.xg("offline"):this.ub("offline")};ty.Mq=function(){this.ub("no-music-account")};ty.setAlwaysOnTop=function(a){null!=this.be&&this.be.setAlwaysOnTop(a)};var tyXq=function(a,b){this.ha=a;this.qe=b;this.Fe=tyci();this.I=new tyF(this);this.Fe.tj?this.nq():this.I.listen(this.Fe,"f",this.nq)};tyXq.prototype.nq=function(){var a,b;(ty_g()?tyci().Ic.contains(8414):tyci().Ic.contains(8355))?(a=tyId("LINK",{rel:"import",href:"/polymer/polymer_srcs.html"}),tya.document.head.appendChild(a),a=new tyWq(this.ha),b=tyDp):(a=new tyFq(this.ha),b=tyCp);chrome.app.window.current().resizeTo(b.width,b.height);a.render(tyAd("mini-player-container"));tyYq(this.qe,a)};var tyZq=function(a){this.T=a.get(tyYf);this.Fe=tyci();this.sf=new tyz;this.Y=null;this.Ta=a.get(tyZh);this.Ta.sendMessage(309);this.ux=a.get(tyni);this.ad=a.get(tyYh);this.zi=a.get(tyUh);this.li=a.get(tyrh);this.Ei=new tyyg;this.ap=!0;this.I=new tyF(this);this.I.listen(this.Fe,["f","g"],this.te);this.I.listen(this.ad,"wa",this.te);this.I.listen(this.zi,["online","offline"],this.te)},tyYq=function(a,b){a.Y=b;a.I.listen(a.Y,"Rc",a.fw);a.I.listen(a.Y,"Mc",a.ew);a.I.listen(a.Y,"Tc",a.tu);a.I.listen(a.Y,
"Lc",a.Fi);a.I.listen(a.Y,"Oc",a.Gi);a.I.listen(a.Y,"Qc",a.Hi);a.I.listen(a.Y,"Vc",a.$k);a.I.listen(a.Y,"Pc",a.gw);a.I.listen(a.Y,"Sc",a.hw);a.I.listen(a.Y,"Uc",a.iw);a.I.listen(a.Y,"Xc",a.kw);a.I.listen(a.Y,"Wc",a.jw);a.I.listen(a.Y,"Jc",a.nk);a.I.listen(a.Y,"Kc",a.pk);a.I.listen(a.Y,"Nc",a.Td);a.I.listen(a.Y,"Yc",a.al);a.I.listen(a.Y,"Zc",a.bl);a.I.listen(a.Y,"Ic",a.rk);tywh(a.li).addCallback(function(a){this.Y.setAlwaysOnTop(!!a);a=!!a;tya.chrome.app.window.current().setAlwaysOnTop(a);tyvh(this.li,
a)},a);a.sf.callback()};ty=tyZq.prototype;ty.gw=function(){ty$h(this.Ta,1)};ty.hw=function(){ty$h(this.Ta,7)};ty.iw=function(){ty$h(this.Ta,6)};ty.kw=function(){ty$h(this.Ta,4)};ty.jw=function(){ty$h(this.Ta,5)};ty.al=function(){ty$h(this.Ta,15)};ty.bl=function(){ty$h(this.Ta,14)};ty.rk=function(a){a=a.Uu;tya.chrome.app.window.current().setAlwaysOnTop(a);tyvh(this.li,a)};ty.nk=function(){ty$h(this.Ta,13);ty_q()};ty.pk=function(){ty$h(this.Ta,12);ty_q()};
ty.$k=function(){tyK(this.T,"Button Clicked","Stop");ty$h(this.Ta,10)};ty.Hi=function(){ty$h(this.Ta,3)};ty.fw=function(){this.Ta.sendMessage(308)};ty.ew=function(){var a=this.ux,b=new tyz;b.addCallback(tyh(a.Cc.Io,a.Cc,!0,!1));b.addCallback(a.Ss,a);b.addCallback(a.Lt,a);b.addCallback(a.Ps,a);b.callback()};ty.tu=function(a){this.bf(a.delta)};ty.bf=function(a){ty$h(this.Ta,8,a)};ty.Fi=function(){ty$h(this.Ta,11)};ty.Gi=function(){ty$h(this.Ta,2,void 0,void 0,void 0,5)};
var ty_q=function(){1<tyEp().length&&tyEp()[1].focusWindow()};ty=tyZq.prototype;ty.Td=function(){if(1<tyEp().length)ty_q();else{var a=tyMa(tyyi("chrome_app_miniplayer_play_music_icon"));ty0g(a)}};ty.fj=function(a){this.Ei=a;this.te()};ty.Bm=function(a,b){this.ym=a;this.yx=b;this.te()};ty.Hd=function(a){this.cg=a;this.sf.addCallback(function(){this.Y.Hd(this.cg)},this)};
ty.te=function(){this.sf.addCallback(function(){1==this.Ng?this.zi.$d()?this.Y.Pq():this.Y.Yl():this.ap?2==this.ad.Hh()?this.Y.Xa(this.Ei,this.zi.$d()):4==this.Ng?this.Y.Qq():2==this.Ng?this.Y.Oq():tyb(this.ym)&&1!=this.ym?this.Y.Kq(this.ym,this.yx):this.Y.Xa(this.Ei,this.zi.$d()):this.Y.Mq()},this)};var ty1q=function(a){this.Cc=a.get(tyTh);this.Ta=a.get(tyZh);ty0q(this)},ty0q=function(a){var b=new tyz;b.addCallback(tyh(a.Cc.Io,a.Cc,!1,!0));tyA(b,function(a){var b=this.Ta;a=a.qw;var e=new tyeg;e.ne(a);b.sendMessage(303,e)},function(){return!0},a);b.addCallback(tya.window.close);b.callback()};var ty2q=chrome.i18n.getMessage("6502885021177224543"),ty3q=chrome.i18n.getMessage("1700078784075267898"),ty4q=chrome.i18n.getMessage("2246437904181111020");chrome.i18n.getMessage("7283335227149007409");var ty5q=function(){var a=new ty$g;this.ha=tya.APPCONTEXT=a};
ty5q.prototype.start=function(){tyqh(this.ha).addCallback(function(){var a;switch(tya.window.location.pathname){case "/dirchooser.html":a=this.ha;var b=new ty_f;tyP(a,tyYf,b);tyRh(this.ha);tySh(this.ha);tyWh(this.ha);tyai(this.ha,new tyyp("dc"));new ty1q(this.ha);a=ty2q;break;case "/miniplayer.html":a=new ty2g;tyP(tyfh(),tyZg,a);tybi=a;var b=this.ha,c=new ty_f;tyP(b,tyYf,c);tyRh(this.ha);tySh(this.ha);tyWh(this.ha);b=this.ha;tybh(b,tyni)||tyP(b,tyni,new tyoi(b));b.get(tyni);tyP(this.ha,tyzp,new tyAp);
b=this.ha;tybh(b,ty0f)||tyP(b,ty0f,new ty4g);b.get(ty0f);b=this.ha;c=chrome.storage.local;tybh(b,tyrh)||tyP(b,tyrh,new tyth(b,c));b.get(tyrh);c=this.ha;b=new ty2o;tyP(c,tyYh,b);var c=this.ha,d=new tyUe;tyP(c,tyUh,d);c.get(tyUh);c=this.ha;d=new tysq(c);tyP(c,tyrq,d);c=tyai(this.ha,new tyyp("mp"));d=new tyZq(this.ha);new tyXq(this.ha,d);new tyBp(c,d,a,b);c.sendMessage(306);c.sendMessage(304);c.sendMessage(107);c.sendMessage(301);c.sendMessage(312);c.sendMessage(315);a=ty3q;break;case "/picker.html":a=
ty4q}a&&(tya.document.title=a)},this)};var ty6q=function(a){a&&tyef().Iq()},ty7q=function(){tyef().Iq()};var ty8q=function(){(new ty5q).start()};new function(){for(var a=this.Ee=new ty1n(ty7q),b=tyba("window"),c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"],d=0;d<c.length;d++){var e=c[d];c[d]in b&&ty6n(a,e)}ty6n(this.Ee,"setTimeout");ty6n(this.Ee,"setInterval");tyuc=ty2n(this.Ee,tyuc);tyH.prototype.hg=ty2n(this.Ee,tyH.prototype.hg);a=this.Ee;tyHb=!0;b=tyh(a.yr,a);for(c=0;c<tyFb.length;c++)tyFb[c](b);tyGb.push(a);tym(tya,tyla(ty8e,ty6q,!1))};
tyIb(function(a){ty8q=a(ty8q)});tyx(tya,"load",ty8q);
