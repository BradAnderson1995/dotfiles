// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'jquery_cookie'], function($, jquery_cookie){
var E = {};
var inited, storage;
var cookie_opt = {domain: '.hola.org', path: '/', expires: 30};

function init(use_cookie){
    var error;
    try { storage = localStorage; }
    catch(e){ error = 1; }
    if (error || use_cookie)
    {
        storage = {getItem: $.cookie,
            setItem: function(key, val){ $.cookie(key, val, cookie_opt); },
            removeItem: function(key){ $.removeCookie(key, cookie_opt); },
        };
        console.error('cant load localStorage, using cookies instead');
    }
    inited = 1;
}
init();

E.set = function(key, val){
    try { storage.setItem(key, val); }
    catch(err){ E.on_err('storage_set', key, err); }
};

E.get = function(key){
    try { return storage.getItem(key); }
    catch(err){ E.on_err('storage_get', key, err); }
};

E.get_int = function(key){ return +E.get(key)||0; };

E.clr = function(key){
    try { storage.removeItem(key); }
    catch(err){ E.on_err('storage_clr', key, err); }
};

E.set_json = function(key, val){
    return E.set(key, JSON.stringify(val||null)); };

E.get_json = function(key){
    var val = E.get(key);
    if (!val)
	return val;
    return JSON.parse(val);
};

// The try block is necessary since any referecne to localStorage in Chrome
// throws an exception
try { E.sync_supported = !!window.localStorage;
} catch(e){ E.sync_supported = false; }

return E; });
