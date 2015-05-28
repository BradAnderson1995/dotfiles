/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
var JsonQueue={};!function(){"use strict";function a(a){d[a]||(d[a]={expensiveOpInflight:!1,queue:[],timeout:0})}function b(a,b,e,f){d[b.shardId].expensiveOpInflight=!0,3==f.length&&c(null,a,b.shardId,e,f)}function c(a,b,c,e,f){if(a){for(var g in f)if("function"==typeof f[g])return void f[g](a)}else d[c].timeout=setTimeout(function(){JsonQueue.handleExpensiveOpComplete(c)},1e4),e.apply(b,f)}var d={};JsonQueue.handleExpensiveOpRequest=function(c,e){var f=Array.prototype.slice.call(arguments);f.shift(),f.shift();{var g=c.shardId;c.userId}a(g);for(var h in f)if("function"==typeof f[h]){var i=f[h];f[h]=function(a,b){clearTimeout(d[g].timeout),JsonQueue.handleExpensiveOpComplete(g),i(a,b)};break}d[g].expensiveOpInflight?d[g].queue.push({attrs:c,func:e,args:f}):d[g].queue.length>0?d[g].queue.push({attrs:c,func:e,args:f}):b(this,c,e,f)},JsonQueue.handleExpensiveOpComplete=function(a){if(d[a].queue.length>0){var c=d[a].queue.shift();b(this,c.attrs,c.func,c.args)}else d[a].expensiveOpInflight=!1},JsonQueue.getShards=function(){return d},Object.preventExtensions(JsonQueue)}();