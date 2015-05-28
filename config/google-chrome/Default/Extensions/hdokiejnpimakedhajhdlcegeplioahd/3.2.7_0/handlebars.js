var Handlebars=function(){var E=function(a){this.string=a};E.prototype.toString=function(){return""+this.string};var U=function(a){return T[a]||"&amp;"},m={},T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},V=/[&<>"'`]/g,W=/[&<>"'`]/;m.extend=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};var F=Object.prototype.toString;m.toString=F;var l=function(a){return"function"===typeof a};l(/x/)&&(l=function(a){return"function"===typeof a&&"[object Function]"===
F.call(a)});m.isFunction=l;var L=Array.isArray||function(a){return a&&"object"===typeof a?"[object Array]"===F.call(a):!1};m.isArray=L;m.escapeExpression=function(a){if(a instanceof E)return a.toString();if(!a&&0!==a)return"";a=""+a;return!W.test(a)?a:a.replace(V,U)};m.isEmpty=function(a){return!a&&0!==a?!0:L(a)&&0===a.length?!0:!1};var q=function(){for(var a=Error.prototype.constructor.apply(this,arguments),b=0;b<G.length;b++)this[G[b]]=a[G[b]]},G="description fileName lineNumber message name number stack".split(" ");
q.prototype=Error();var l=function(a,b){this.helpers=a||{};this.partials=b||{};var c=this;c.registerHelper("helperMissing",function(a){if(2!==arguments.length)throw Error("Missing helper: '"+a+"'");});c.registerHelper("blockHelperMissing",function(a,b){var e=b.inverse||function(){},h=b.fn;B(a)&&(a=a.call(this));return!0===a?h(this):!1===a||null==a?e(this):M(a)?0<a.length?c.helpers.each(a,b):e(this):h(a)});c.registerHelper("each",function(a,b){var c=b.fn,h=b.inverse,g=0,j="",n;B(a)&&(a=a.call(this));
b.data&&(n=N(b.data));if(a&&"object"===typeof a)if(M(a))for(var k=a.length;g<k;g++)n&&(n.index=g,n.first=0===g,n.last=g===a.length-1),j+=c(a[g],{data:n});else for(k in a)a.hasOwnProperty(k)&&(n&&(n.key=k,n.index=g,n.first=0===g),j+=c(a[k],{data:n}),g++);0===g&&(j=h(this));return j});c.registerHelper("if",function(a,b){B(a)&&(a=a.call(this));return!b.hash.includeZero&&!a||u.isEmpty(a)?b.inverse(this):b.fn(this)});c.registerHelper("unless",function(a,b){return c.helpers["if"].call(this,a,{fn:b.inverse,
inverse:b.fn,hash:b.hash})});c.registerHelper("with",function(a,b){B(a)&&(a=a.call(this));if(!u.isEmpty(a))return b.fn(a)});c.registerHelper("log",function(a,b){var e=b.data&&null!=b.data.level?parseInt(b.data.level,10):1;c.log(e,a)})},j=function(a,b){y.log(a,b)},p={},u=m;p.VERSION="1.2.0";p.COMPILER_REVISION=4;p.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};var M=u.isArray,B=u.isFunction,O=u.toString;p.HandlebarsEnvironment=l;l.prototype={constructor:l,logger:y,
log:j,registerHelper:function(a,b,c){if("[object Object]"===O.call(a)){if(c||b)throw new q("Arg not supported with multiple helpers");u.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){"[object Object]"===O.call(a)?u.extend(this.partials,a):this.partials[a]=b}};var y={methodMap:{"0":"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(y.level<=a){var c=y.methodMap[a];"undefined"!==typeof console&&console[c]&&console[c].call(console,
b)}}};p.logger=y;p.log=j;var N=function(a){var b={};u.extend(b,a);return b};p.createFrame=N;var H=function(a,b,c){var d=function(a,d){d=d||{};return b(a,d.data||c)};d.program=a;d.depth=0;return d},v={},I=p.COMPILER_REVISION,P=p.REVISION_CHANGES;v.checkRevision=function(a){var b=a&&a[0]||1;if(b!==I){if(b<I)throw Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+P[I]+") or downgrade your runtime to an older version ("+
P[b]+").");throw Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").");}};v.template=function(a,b){if(!b)throw Error("No environment passed to template");var c={escapeExpression:m.escapeExpression,invokePartial:function(a,c,e,h,g,j){var n=b.VM.invokePartial.apply(this,arguments);if(null!=n)return n;if(b.compile)return n={helpers:h,partials:g,data:j},g[c]=b.compile(a,{data:void 0!==j},b),g[c](e,n);throw new q("The partial "+
c+" could not be compiled when running in runtime-only mode");},programs:[],program:function(a,b,c){var h=this.programs[a];c?h=H(a,b,c):h||(h=this.programs[a]=H(a,b));return h},merge:function(a,b){var c=a||b;a&&(b&&a!==b)&&(c={},m.extend(c,b),m.extend(c,a));return c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(d,f){f=f||{};var e=f.partial?f:b,h,g;f.partial||(h=f.helpers,g=f.partials);e=a.call(c,e,d,h,g,f.data);f.partial||b.VM.checkRevision(c.compilerInfo);
return e}};v.programWithDepth=function(a,b,c){var d=Array.prototype.slice.call(arguments,3),f=function(a,f){f=f||{};return b.apply(this,[a,f.data||c].concat(d))};f.program=a;f.depth=d.length;return f};v.program=H;v.invokePartial=function(a,b,c,d,f,e){d={partial:!0,helpers:d,partials:f,data:e};if(void 0===a)throw new q("The partial "+b+" could not be found");if(a instanceof Function)return a(c,d)};v.noop=function(){return""};j=function(){var a=new p.HandlebarsEnvironment;m.extend(a,p);a.SafeString=
E;a.Exception=q;a.Utils=m;a.VM=v;a.template=function(b){return v.template(b,a)};return a};l=j();l.create=j;var x,Q={ProgramNode:function(a,b,c){this.type="program";this.statements=a;this.strip={};c?(this.inverse=new Q.ProgramNode(c,b),this.strip.right=b.left):b&&(this.strip.left=b.right)},MustacheNode:function(a,b,c,d){this.type="mustache";this.hash=b;this.strip=d;null!=c&&c.charAt?(c=c.charAt(3)||c.charAt(2),this.escaped="{"!==c&&"&"!==c):this.escaped=!!c;c=this.id=a[0];a=this.params=a.slice(1);
this.isHelper=(this.eligibleHelper=c.isSimple)&&(a.length||b)},PartialNode:function(a,b,c){this.type="partial";this.partialName=a;this.context=b;this.strip=c},BlockNode:function(a,b,c,d){if(a.id.original!==d.path.original)throw new q(a.id.original+" doesn't match "+d.path.original);this.type="block";this.mustache=a;this.program=b;this.inverse=c;this.strip={left:a.strip.left,right:d.strip.right};(b||c).strip.left=a.strip.right;(c||b).strip.right=d.strip.left;c&&!b&&(this.isInverse=!0)},ContentNode:function(a){this.type=
"content";this.string=a},HashNode:function(a){this.type="hash";this.pairs=a},IdNode:function(a){this.type="ID";for(var b="",c=[],d=0,f=0,e=a.length;f<e;f++){var h=a[f].part,b=b+((a[f].separator||"")+h);if(".."===h||"."===h||"this"===h){if(0<c.length)throw new q("Invalid path: "+b);".."===h?d++:this.isScoped=!0}else c.push(h)}this.original=b;this.parts=c;this.string=c.join(".");this.depth=d;this.isSimple=1===a.length&&!this.isScoped&&0===d;this.stringModeValue=this.string},PartialNameNode:function(a){this.type=
"PARTIAL_NAME";this.name=a.original},DataNode:function(a){this.type="DATA";this.id=a},StringNode:function(a){this.type="STRING";this.original=this.string=this.stringModeValue=a},IntegerNode:function(a){this.type="INTEGER";this.original=this.integer=a;this.stringModeValue=Number(a)},BooleanNode:function(a){this.type="BOOLEAN";this.bool=a;this.stringModeValue="true"===a},CommentNode:function(a){this.type="comment";this.comment=a}};x=Q;var w=function(a,b){return{left:"~"===a.charAt(2),right:"~"===b.charAt(0)||
"~"===b.charAt(1)}},j=function(){this.yy={}},C={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,inMustache_repetition0:28,inMustache_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,
BOOLEAN:34,hash:35,hash_repetition_plus0:36,hashSegment:37,ID:38,EQUALS:39,DATA:40,pathSegments:41,SEP:42,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],
[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],performAction:function(a,b,c,d,f,e){a=e.length-1;switch(f){case 1:return new d.ProgramNode(e[a-1]);case 2:return new d.ProgramNode([]);case 3:this.$=new d.ProgramNode([],e[a-1],e[a]);break;case 4:this.$=new d.ProgramNode(e[a-2],e[a-1],e[a]);break;case 5:this.$=new d.ProgramNode(e[a-1],
e[a],[]);break;case 6:this.$=new d.ProgramNode(e[a]);break;case 7:this.$=new d.ProgramNode([]);break;case 8:this.$=new d.ProgramNode([]);break;case 9:this.$=[e[a]];break;case 10:e[a-1].push(e[a]);this.$=e[a-1];break;case 11:this.$=new d.BlockNode(e[a-2],e[a-1].inverse,e[a-1],e[a]);break;case 12:this.$=new d.BlockNode(e[a-2],e[a-1],e[a-1].inverse,e[a]);break;case 13:this.$=e[a];break;case 14:this.$=e[a];break;case 15:this.$=new d.ContentNode(e[a]);break;case 16:this.$=new d.CommentNode(e[a]);break;
case 17:this.$=new d.MustacheNode(e[a-1][0],e[a-1][1],e[a-2],w(e[a-2],e[a]));break;case 18:this.$=new d.MustacheNode(e[a-1][0],e[a-1][1],e[a-2],w(e[a-2],e[a]));break;case 19:this.$={path:e[a-1],strip:w(e[a-2],e[a])};break;case 20:this.$=new d.MustacheNode(e[a-1][0],e[a-1][1],e[a-2],w(e[a-2],e[a]));break;case 21:this.$=new d.MustacheNode(e[a-1][0],e[a-1][1],e[a-2],w(e[a-2],e[a]));break;case 22:this.$=new d.PartialNode(e[a-2],e[a-1],w(e[a-3],e[a]));break;case 23:this.$=w(e[a-1],e[a]);break;case 24:this.$=
[[e[a-2]].concat(e[a-1]),e[a]];break;case 25:this.$=[[e[a]],null];break;case 26:this.$=e[a];break;case 27:this.$=new d.StringNode(e[a]);break;case 28:this.$=new d.IntegerNode(e[a]);break;case 29:this.$=new d.BooleanNode(e[a]);break;case 30:this.$=e[a];break;case 31:this.$=new d.HashNode(e[a]);break;case 32:this.$=[e[a-2],e[a]];break;case 33:this.$=new d.PartialNameNode(e[a]);break;case 34:this.$=new d.PartialNameNode(new d.StringNode(e[a]));break;case 35:this.$=new d.PartialNameNode(new d.IntegerNode(e[a]));
break;case 36:this.$=new d.DataNode(e[a]);break;case 37:this.$=new d.IdNode(e[a]);break;case 38:e[a-2].push({part:e[a],separator:e[a-1]});this.$=e[a-2];break;case 39:this.$=[{part:e[a]}];break;case 42:this.$=[];break;case 43:e[a-1].push(e[a]);break;case 46:this.$=[e[a]];break;case 47:e[a-1].push(e[a])}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],
22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,
14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:29,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:30,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:31,21:24,30:25,38:[1,28],40:[1,27],41:26},{21:33,26:32,32:[1,34],33:[1,35],38:[1,28],41:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],
19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,38:[1,28],40:[1,27],41:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,42],24:[2,42],28:43,32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,25],24:[2,25]},{18:[2,37],24:[2,37],32:[2,37],
33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[1,44]},{21:45,38:[1,28],41:26},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],40:[2,39],42:[2,39]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,40],21:50,27:49,38:[1,28],41:26},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{18:[2,35],38:[2,35]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,38:[1,28],41:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,
14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,44],21:56,24:[2,44],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:55,36:61,37:62,38:[1,63],40:[1,27],41:26},{38:[1,
64]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,65]},{18:[2,41]},{18:[1,66]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24]},
{18:[2,43],24:[2,43],32:[2,43],33:[2,43],34:[2,43],38:[2,43],40:[2,43]},{18:[2,45],24:[2,45]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],38:[2,30],40:[2,30]},{18:[2,31],24:[2,31],37:67,38:[1,68]},{18:[2,46],
24:[2,46],38:[2,46]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],39:[1,69],40:[2,39],42:[2,39]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{18:[2,47],24:[2,47],38:[2,47]},{39:[1,69]},{21:56,30:60,31:70,32:[1,57],33:[1,58],34:[1,59],38:[1,28],40:[1,27],41:26},{18:[2,
32],24:[2,32],38:[2,32]}],defaultActions:{3:[2,2],16:[2,1],50:[2,41]},parseError:function(a){throw Error(a);},parse:function(a){var b=[0],c=[null],d=[],f=this.table,e="",h=0,g=0,j=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});a=this.lexer.yylloc;d.push(a);var n=this.lexer.options&&this.lexer.options.ranges;"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var k,
p,l,r,m={},q,s;;){l=b[b.length-1];if(this.defaultActions[l])r=this.defaultActions[l];else{if(null===k||"undefined"==typeof k)k=void 0,k=this.lexer.lex()||1,"number"!==typeof k&&(k=this.symbols_[k]||k);r=f[l]&&f[l][k]}if("undefined"===typeof r||!r.length||!r[0]){var t="";if(!j){s=[];for(q in f[l])this.terminals_[q]&&2<q&&s.push("'"+this.terminals_[q]+"'");t=this.lexer.showPosition?"Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+s.join(", ")+", got '"+(this.terminals_[k]||
k)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'");this.parseError(t,{text:this.lexer.match,token:this.terminals_[k]||k,line:this.lexer.yylineno,loc:a,expected:s})}}if(r[0]instanceof Array&&1<r.length)throw Error("Parse Error: multiple actions possible at state: "+l+", token: "+k);switch(r[0]){case 1:b.push(k);c.push(this.lexer.yytext);d.push(this.lexer.yylloc);b.push(r[1]);k=null;p?(k=p,p=null):(g=this.lexer.yyleng,e=this.lexer.yytext,h=this.lexer.yylineno,
a=this.lexer.yylloc,0<j&&j--);break;case 2:s=this.productions_[r[1]][1];m.$=c[c.length-s];m._$={first_line:d[d.length-(s||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(s||1)].first_column,last_column:d[d.length-1].last_column};n&&(m._$.range=[d[d.length-(s||1)].range[0],d[d.length-1].range[1]]);l=this.performAction.call(m,e,g,h,this.yy,r[1],c,d);if("undefined"!==typeof l)return l;s&&(b=b.slice(0,-2*s),c=c.slice(0,-1*s),d=d.slice(0,-1*s));b.push(this.productions_[r[1]][0]);
c.push(m.$);d.push(m._$);r=f[b[b.length-2]][b[b.length-1]];b.push(r);break;case 3:return!0}}return!0},lexer:{EOF:1,parseError:function(a,b){if(this.yy.parser)this.yy.parser.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&(this.yylloc.range=[0,0]);this.offset=
0;return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.offset++;this.match+=a;this.matched+=a;a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-b-1);this.offset-=b;a=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);c.length-1&&(this.yylineno-=c.length-1);var d=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-b};this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-b]);return this},more:function(){this._more=
!0;return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;
this._input||(this.done=!0);var a,b,c;this._more||(this.match=this.yytext="");for(var d=this._currentRules(),f=0;f<d.length;f++)if((b=this._input.match(this.rules[d[f]]))&&(!a||b[0].length>a[0].length))if(a=b,c=f,!this.options.flex)break;if(a){if(b=a[0].match(/(?:\r\n?|\n).*/g))this.yylineno+=b.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-b[b.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+
a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=a;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];a=this.performAction.call(this,this.yy,this,d[c],this.conditionStack[this.conditionStack.length-1]);this.done&&this._input&&(this.done=!1);if(a)return a}else return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+
this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!==typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},options:{},performAction:function(a,b,c){function d(a,
c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:"\\\\"===b.yytext.slice(-2)?(d(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(d(0,1),this.begin("emu")):this.begin("mu");if(b.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return d(0,4),this.popState(),15;case 4:return 25;case 5:return 16;case 6:return 20;case 7:return 19;case 8:return 19;case 9:return 23;case 10:return 22;case 11:this.popState();this.begin("com");break;case 12:return d(3,5),this.popState(),
15;case 13:return 22;case 14:return 39;case 15:return 38;case 16:return 38;case 17:return 42;case 19:return this.popState(),24;case 20:return this.popState(),18;case 21:return b.yytext=d(1,2).replace(/\\"/g,'"'),32;case 22:return b.yytext=d(1,2).replace(/\\'/g,"'"),32;case 23:return 40;case 24:return 34;case 25:return 34;case 26:return 33;case 27:return 38;case 28:return b.yytext=d(1,2),38;case 29:return"INVALID";case 30:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=([~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/,
/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},INITIAL:{rules:[0,1,30],inclusive:!0}}}};j.prototype=C;C.Parser=j;var D,J=new j;D=function(a){if(a.constructor===x.ProgramNode)return a;J.yy=x;return J.parse(a)};var z=function(a){this.value=a},t=function(){},R=p.COMPILER_REVISION,X=p.REVISION_CHANGES,S=p.log;t.prototype={nameLookup:function(a,
b){var c,d;0===a.indexOf("depth")&&(c=!0);d=/^[0-9]+$/.test(b)?a+"["+b+"]":t.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']";return c?"("+a+" && "+d+")":d},compilerInfo:function(){return"this.compilerInfo = ["+R+",'"+X[R]+"'];\n"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=
a;this.options=b||{};S("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!c;this.context=c||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileStack=[];this.inlineStack=[];this.compileChildren(a,b);a=a.opcodes;this.i=0;for(c=a.length;this.i<c;this.i++)b=a[this.i],"DECLARE"===b.opcode?this[b.name]=b.value:this[b.opcode].apply(this,b.args),b.opcode!==this.stripNext&&(this.stripNext=
!1);this.pushSource("");return this.createFunctionContext(d)},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = this.merge(helpers, "+b+".helpers);";this.environment.usePartial&&(c=c+" partials = this.merge(partials, "+b+".partials);");this.options.data&&(c+=" data = data || {};");a.push(c)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer());this.lastContext=0;this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);
0<b.length&&(this.source[1]=this.source[1]+", "+b.join(", "));if(!this.isChild)for(var c in this.context.aliases)this.context.aliases.hasOwnProperty(c)&&(this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c]);this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";");this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n");this.environment.isSimple||this.pushSource("return buffer;");b=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials",
"data"];c=0;for(var d=this.environment.depths.list.length;c<d;c++)b.push("depth"+this.environment.depths.list[c]);c=this.mergeSource();this.isChild||(c=this.compilerInfo()+c);if(a)return b.push(c),Function.apply(this,b);a="function "+(this.name||"")+"("+b.join(",")+") {\n  "+c+"}";S("debug",a+"\n\n");return a},mergeSource:function(){for(var a="",b,c=0,d=this.source.length;c<d;c++){var f=this.source[c];f.appendToBuffer?b=b?b+"\n    + "+f.content:f.content:(b&&(a+="buffer += "+b+";\n  ",b=void 0),a+=
f+"\n  ")}return a},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);this.replaceStack(function(b){a.splice(1,0,b);return"blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b);a[a.length-1]="options";this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+
a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a);this.stripNext&&(a=a.replace(/^\s+/,""));this.pendingContent=a},strip:function(){this.pendingContent&&(this.pendingContent=this.pendingContent.replace(/\s+$/,""));this.stripNext="strip"},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }");this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},
appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupOnContext:function(a){this.push(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(a){return"typeof "+
a+" === functionType ? "+a+".apply(depth0) : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(){this.push("data")},pushStringParam:function(a,b){this.pushStackLiteral("depth"+this.lastContext);this.pushString(b);"string"===typeof a?this.pushString(a):this.pushStackLiteral(a)},emptyHash:function(){this.pushStackLiteral("{}");this.options.stringParams&&(this.register("hashTypes","{}"),this.register("hashContexts",
"{}"))},pushHash:function(){this.hash={values:[],types:[],contexts:[]}},popHash:function(){var a=this.hash;this.hash=void 0;this.options.stringParams&&(this.register("hashContexts","{"+a.contexts.join(",")+"}"),this.register("hashTypes","{"+a.types.join(",")+"}"));this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){this.inlineStack.push(a);return a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=
a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b){this.context.aliases.helperMissing="helpers.helperMissing";var c=this.lastHelper=this.setupHelper(a,b,!0),d=this.nameLookup("depth"+this.lastContext,b,"context");this.push(c.name+" || "+d);this.replaceStack(function(a){return a+" ? "+a+".call("+c.callParams+") : helperMissing.call("+c.helperMissingParams+")"})},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+
c.callParams+")")},invokeAmbiguous:function(a,b){this.context.aliases.functionType='"function"';this.pushStackLiteral("{}");var c=this.setupHelper(0,a,b),d=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=this.nameLookup("depth"+this.lastContext,a,"context"),e=this.nextStack();this.pushSource("if ("+e+" = "+d+") { "+e+" = "+e+".call("+c.callParams+"); }");this.pushSource("else { "+e+" = "+f+"; "+e+" = typeof "+e+" === functionType ? "+e+".call("+c.callParams+") : "+e+"; }")},invokePartial:function(a){a=
[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&a.push("data");this.context.aliases.self="this";this.push("self.invokePartial("+a.join(", ")+")")},assignToHash:function(a){var b=this.popStack(),c,d;this.options.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&f.contexts.push("'"+a+"': "+c);d&&f.types.push("'"+a+"': "+d);f.values.push("'"+a+"': ("+b+")")},compiler:t,compileChildren:function(a,b){for(var c=a.children,
d,f,e=0,h=c.length;e<h;e++){d=c[e];f=new this.compiler;var g=this.matchExistingProgram(d);null==g?(this.context.programs.push(""),g=this.context.programs.length,d.index=g,d.name="program"+g,this.context.programs[g]=f.compile(d,b,this.context),this.context.environments[g]=d):(d.index=g,d.name="program"+g)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){this.context.aliases.self=
"this";if(null==a)return"self.noop";var b=this.environment.children[a];a=b.depths.list;for(var c=[b.index,b.name,"data"],d=0,f=a.length;d<f;d++)b=a[d],1===b?c.push("depth0"):c.push("depth"+(b-1));return(0===a.length?"self.program(":"self.programWithDepth(")+c.join(", ")+")"},register:function(a,b){this.useRegister(a);this.pushSource(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new z(a))},
pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0);a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();a&&this.pushSource(b+" = "+a+";");this.compileStack.push(b);return b},replaceStack:function(a){var b="",c=this.isInline(),d;c?(d=this.popStack(!0),d instanceof z?d=d.value:(b=this.stackSlot?this.topStackName():this.incrStack(),b="("+this.push(b)+" = "+d+"),",d=this.topStack())):
d=this.topStack();a=a.call(this,d);c?((this.inlineStack.length||this.compileStack.length)&&this.popStack(),this.push("("+b+a+")")):(/^stack/.test(d)||(d=this.nextStack()),this.pushSource(d+" = ("+b+a+");"));return d},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot);return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;
if(a.length){this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];d instanceof z?this.compileStack.push(d):this.pushStack(d)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof z)return c.value;b||this.stackSlot--;return c},topStack:function(a){var b=this.isInline()?this.inlineStack:this.compileStack,b=b[b.length-1];return!a&&b instanceof z?b.value:b},quotedString:function(a){return'"'+
a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(a,b,c){var d=[];this.setupParams(a,d,c);a=this.nameLookup("helpers",b,"helper");return{params:d,name:a,callParams:["depth0"].concat(d).join(", "),helperMissingParams:c&&["depth0",this.quotedString(b)].concat(d).join(", ")}},setupParams:function(a,b,c){var d=[],f=[],e=[],h,g;d.push("hash:"+this.popStack());h=this.popStack();if((g=
this.popStack())||h)g||(this.context.aliases.self="this",g="self.noop"),h||(this.context.aliases.self="this",h="self.noop"),d.push("inverse:"+h),d.push("fn:"+g);for(g=0;g<a;g++)h=this.popStack(),b.push(h),this.options.stringParams&&(e.push(this.popStack()),f.push(this.popStack()));this.options.stringParams&&(d.push("contexts:["+f.join(",")+"]"),d.push("types:["+e.join(",")+"]"),d.push("hashContexts:hashContexts"),d.push("hashTypes:hashTypes"));this.options.data&&d.push("data:data");d="{"+d.join(",")+
"}";c?(this.register("options",d),b.push("options")):b.push(d);return b.join(", ")}};for(var j="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),C=t.RESERVED_WORDS=
{},K=0,Y=j.length;K<Y;K++)C[j[K]]=!0;t.isValidJavaScriptVariableName=function(a){return!t.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?!0:!1};var A=function(){};A.prototype={compiler:A,disassemble:function(){for(var a=this.opcodes,b,c=[],d,f,e=0,h=a.length;e<h;e++)if(b=a[e],"DECLARE"===b.opcode)c.push("DECLARE "+b.name+"="+b.value);else{d=[];for(var g=0;g<b.args.length;g++)f=b.args[g],"string"===typeof f&&(f='"'+f.replace("\n","\\n")+'"'),d.push(f);c.push(b.opcode+" "+d.join(" "))}return c.join("\n")},
equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],f=a.opcodes[c];if(d.opcode!==f.opcode||d.args.length!==f.args.length)return!1;for(var e=0;e<d.args.length;e++)if(d.args[e]!==f.args[e])return!1}b=this.children.length;if(a.children.length!==b)return!1;for(c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=b;var c=
this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};if(c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.accept(a)},accept:function(a){var b=a.strip||{};b.left&&this.opcode("strip");a=this[a.type](a);b.right&&this.opcode("strip");return a},program:function(a){a=a.statements;for(var b=0,c=a.length;b<c;b++)this.accept(a[b]);this.isSimple=1===c;this.depths.list=this.depths.list.sort(function(a,b){return a-
b});return this},compileProgram:function(a){a=(new this.compiler).compile(a,this.options);var b=this.guid++,c;this.usePartial=this.usePartial||a.usePartial;this.children[b]=a;for(var d=0,f=a.depths.list.length;d<f;d++)c=a.depths.list[d],2>c||this.addDepth(c-1);return b},block:function(a){var b=a.mustache,c=a.program;a=a.inverse;c&&(c=this.compileProgram(c));a&&(a=this.compileProgram(a));var d=this.classifyMustache(b);"helper"===d?this.helperMustache(b,c,a):"simple"===d?(this.simpleMustache(b),this.opcode("pushProgram",
c),this.opcode("pushProgram",a),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousMustache(b,c,a),this.opcode("pushProgram",c),this.opcode("pushProgram",a),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue"));this.opcode("append")},hash:function(a){a=a.pairs;var b,c;this.opcode("pushHash");for(var d=0,f=a.length;d<f;d++)b=a[d],c=b[1],this.options.stringParams?(c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,
c.type)):this.accept(c),this.opcode("assignToHash",b[0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0;a.context?this.ID(a.context):this.opcode("push","depth0");this.opcode("invokePartial",b.name);this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){var b=this.options,c=this.classifyMustache(a);"simple"===c?this.simpleMustache(a):"helper"===c?this.helperMustache(a):this.ambiguousMustache(a);a.escaped&&!b.noEscape?
this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(a,b,c){a=a.id;var d=a.parts[0],f=null!=b||null!=c;this.opcode("getContext",a.depth);this.opcode("pushProgram",b);this.opcode("pushProgram",c);this.opcode("invokeAmbiguous",d,f)},simpleMustache:function(a){a=a.id;"DATA"===a.type?this.DATA(a):a.parts.length?this.ID(a):(this.addDepth(a.depth),this.opcode("getContext",a.depth),this.opcode("pushContext"));this.opcode("resolvePossibleLambda")},helperMustache:function(a,b,c){b=
this.setupFullMustacheParams(a,b,c);a=a.id.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",b.length,a);else{if(this.options.knownHelpersOnly)throw Error("You specified knownHelpersOnly, but used the unknown helper "+a);this.opcode("invokeHelper",b.length,a)}},ID:function(a){this.addDepth(a.depth);this.opcode("getContext",a.depth);a.parts[0]?this.opcode("lookupOnContext",a.parts[0]):this.opcode("pushContext");for(var b=1,c=a.parts.length;b<c;b++)this.opcode("lookup",a.parts[b])},
DATA:function(a){this.options.data=!0;if(a.id.isScoped||a.id.depth)throw new q("Scoped data references are not supported: "+a.original);this.opcode("lookupData");a=a.id.parts;for(var b=0,c=a.length;b<c;b++)this.opcode("lookup",a[b])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("pushLiteral",a.integer)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:[].slice.call(arguments,1)})},
declare:function(a,b){this.opcodes.push({opcode:"DECLARE",name:a,value:b})},addDepth:function(a){if(isNaN(a))throw Error("EWOT");0!==a&&!this.depths[a]&&(this.depths[a]=!0,this.depths.list.push(a))},classifyMustache:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;c&&!b&&(d.knownHelpers[a.id.parts[0]]?b=!0:d.knownHelpersOnly&&(c=!1));return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b=a.length,c;b--;)if(c=a[b],this.options.stringParams)c.depth&&this.addDepth(c.depth),
this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,c.type);else this[c.type](c)},setupMustacheParams:function(a){var b=a.params;this.pushParams(b);a.hash?this.hash(a.hash):this.opcode("emptyHash");return b},setupFullMustacheParams:function(a,b,c){var d=a.params;this.pushParams(d);this.opcode("pushProgram",b);this.opcode("pushProgram",c);a.hash?this.hash(a.hash):this.opcode("emptyHash");return d}};var Z=function(a,b){if(null==a||"string"!==typeof a&&a.constructor!==
x.ProgramNode)throw new q("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{};"data"in b||(b.data=!0);var c=D(a),c=(new A).compile(c,b);return(new t).compile(c,b)},$=l.create,j=function(){var a=$();a.compile=function(b,c){var d=c;if(null==b||"string"!==typeof b&&b.constructor!==x.ProgramNode)throw new q("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+b);d=d||{};"data"in d||(d.data=!0);var f;return function(c,h){if(!f){var g=D(b),
g=(new A).compile(g,d),g=(new t).compile(g,d,void 0,!0);f=a.template(g)}return f.call(this,c,h)}};a.precompile=Z;a.AST=x;a.Compiler=A;a.JavaScriptCompiler=t;a.Parser=J;a.parse=D;return a},l=j();l.create=j;return l}();
