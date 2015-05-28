// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define([], function(){
var E = sprintf;
E.sprintf = sprintf;
function sprintf(fmt /* args... */){
    var _fmt = ':'+fmt; // protect against __proto__
    if (!E.cache[_fmt])
    {
	E.cache[_fmt] = E.parse(fmt);
	E.cache_n++;
	if (E.cache_cb)
	    E.cache_cb(fmt);
    }
    return E.cache[_fmt](arguments);
}
E.cache = {};
E.cache_n = 0;
E.to_int = function(num){
    num = +num;
    return num>=0 ? Math.floor(num) : -Math.floor(-num); };
var chr_repeat_cache = {};
E.chr_repeat = function(chr, n){
    var r = chr_repeat_cache[chr];
    if (r && r.length>=n)
	return r.slice(0, n);
    r = chr;
    for (; r.length<n; r += r);
    chr_repeat_cache[chr] = r;
    return r.slice(0, n);
};
E.thousand_grouping = function(num_s){
    var m = /^([-+])?(\d*)(\.\d*)?$/.exec(num_s);
    if (!m)
        return num_s;
    m[2] = (m[2]||'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'+',');
    return (m[1]||'')+m[2]+(m[3]||'');
};

E.parse_fast = function(fmt){
    var _fmt = fmt, match = [], arg_names = 0, cursor = 1;
    var pad_chr, pad_chrs, arg_padded, f, s = JSON.stringify;
    f = 'var out = "", arg, arg_s;\n';
    for (; _fmt; _fmt = _fmt.substring(match[0].length))
    {
	if ((match = /^[^%]+/.exec(_fmt)))
	    f += 'out += '+s(match[0])+';\n';
	else if ((match = /^%%/.exec(_fmt)))
	    f += 'out += "%";\n';
	else if ((match =
	    /^%(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?(')?([bcdefoOsuxX])/
	    .exec(_fmt)))
	{
	    var positional = match[1], keyword = match[2], sign = match[3];
	    var pad_zero = match[4], pad_min = match[5], pad_max = match[6];
            var precision = match[7], thousand_grouping = match[8]=="'";
            var conversion = match[9], keyword_list = [];
	    if (keyword)
	    {
		arg_names |= 1;
		var _keyword = keyword, kmatch;
		if (!(kmatch = /^([a-z_][a-z_\d]*)/i.exec(_keyword)))
		    throw 'sprintf: invalid keyword property name '+_keyword;
		keyword_list.push(kmatch[1]);
		while ((_keyword = _keyword.substring(kmatch[0].length)))
		{
		    if ((kmatch = /^\.([a-z_][a-z_\d]*)/i.exec(_keyword)))
			keyword_list.push(kmatch[1]);
		    else if ((kmatch = /^\[(\d+)\]/.exec(_keyword)))
			keyword_list.push(kmatch[1]);
		    else
			throw 'sprintf: invalid keyword format '+_keyword;
		}
	    }
	    else
		arg_names |= 2;
	    if (arg_names===3)
	    {
		throw 'sprintf: mixing positional and named placeholders is '
		    +'not (yet) supported';
	    }
	    if (keyword_list.length) // keyword argument
	    {
		f += 'arg = argv['+cursor+']';
		for (var k = 0; k < keyword_list.length; k++)
		    f += '['+s(keyword_list[k])+']';
		f += ';\n';
	    }
	    else if (positional) // positional argument (explicit)
		f += 'arg = argv['+positional+'];\n';
	    else // positional argument (implicit)
		f += 'arg = argv['+(cursor++)+'];\n';
	    if (/[^sO]/.test(conversion))
		f += 'arg = +arg;\n';
	    switch (conversion)
	    {
	    case 'b': f += 'arg_s = arg.toString(2);\n'; break;
	    case 'c': f += 'arg_s = String.fromCharCode(arg);\n'; break;
            case 'd':
                f += 'arg = sprintf.to_int(arg); arg_s = ""+arg;\n';
                if (thousand_grouping)
                    f += 'arg_s = sprintf.thousand_grouping(arg_s);\n';
                break;
	    case 'e':
	        f += 'arg_s = arg.toExponential('
		+(precision ? s(precision) : '')+');\n';
	        break;
	    case 'f':
		if (precision)
		    f += 'arg_s = arg.toFixed('+precision+');\n';
		else
                    f += 'arg_s = ""+arg;\n';
		break;
	    case 'o': f += 'arg_s = arg.toString(8);\n'; break;
	    case 'O': f += 'arg_s = JSON.stringify(arg);\n'; break;
            case 'u': f += 'arg = arg >>> 0; arg_s = ""+arg;\n'; break;
	    case 'x': f += 'arg_s = arg.toString(16);\n'; break;
	    case 'X': f += 'arg_s = arg.toString(16).toUpperCase();\n'; break;
	    case 's':
	        f += 'arg_s = ""+arg;\n';
		if (precision)
                    f += 'arg_s = arg_s.substring(0, '+precision+');\n';
	        break;
	    }
	    if (/[def]/.test(conversion) && sign)
		f += 'if (arg>=0) arg_s = "+"+arg_s;\n';
	    pad_chr = pad_zero ? pad_zero=='0' ? '0' : pad_zero[1] : ' ';
	    pad_chrs = '('+s(E.chr_repeat(pad_chr, +pad_max))
	        +".slice(0, "+(+pad_max)+"-arg_s.length))";
	    arg_padded = !pad_max ? 'arg_s' :
	        pad_min ? 'arg_s+'+pad_chrs : pad_chrs+'+arg_s';
	    f += 'out += '+arg_padded+';\n';
	}
	else
	    throw 'sprintf invalid format '+_fmt;
    }
    f += 'return out;\n';
    /*jshint evil: true*/
    return new Function(['sprintf', 'argv'], f).bind(null, sprintf);
};

E.parse_slow = function(fmt){
    var _fmt = fmt, match = [], arg_names = 0, cursor = 1;
    var _f = [], out, arg, arg_s, argv;
    function f(fn){ _f.push(fn); }
    for (; _fmt; _fmt = _fmt.substring(match[0].length))
    (function(){
	if ((match = /^[^%]+/.exec(_fmt)))
        {
            var _match = match;
	    f(function(){ return out += _match[0]; });
        }
	else if ((match = /^%%/.exec(_fmt)))
	    f(function(){ return out += '%'; });
	else if ((match =
	    /^%(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?(')?([bcdefoOsuxX])/
	    .exec(_fmt)))
	{
	    var positional = match[1], keyword = match[2], sign = match[3];
	    var pad_zero = match[4], pad_min = match[5], pad_max = match[6];
            var precision = match[7], thousand_grouping = match[8]=="'";
            var conversion = match[9], keyword_list = [], _cursor = cursor;
	    if (keyword)
	    {
		arg_names |= 1;
		var _keyword = keyword, kmatch;
		if (!(kmatch = /^([a-z_][a-z_\d]*)/i.exec(_keyword)))
		    throw 'sprintf: invalid keyword property name '+_keyword;
		keyword_list.push(kmatch[1]);
		while ((_keyword = _keyword.substring(kmatch[0].length)))
		{
		    if ((kmatch = /^\.([a-z_][a-z_\d]*)/i.exec(_keyword)))
			keyword_list.push(kmatch[1]);
		    else if ((kmatch = /^\[(\d+)\]/.exec(_keyword)))
			keyword_list.push(kmatch[1]);
		    else
			throw 'sprintf: invalid keyword format '+_keyword;
		}
	    }
	    else
		arg_names |= 2;
	    if (arg_names===3)
	    {
		throw 'sprintf: mixing positional and named placeholders is '
		    +'not (yet) supported';
	    }
	    if (keyword_list.length) // keyword argument
	    {
		f(function(){
                    arg = argv[_cursor];
                    for (var k = 0; k < keyword_list.length && arg!=null; k++)
                        arg = arg[keyword_list[k]];
                });
	    }
	    else if (positional) // positional argument (explicit)
		f(function(){ arg = argv[positional]; });
	    else // positional argument (implicit)
            {
		f(function(){ arg = argv[_cursor]; });
                cursor++;
            }
	    if (/[^sO]/.test(conversion))
		f(function(){ return arg = +arg; });
	    switch (conversion)
	    {
	    case 'b': f(function(){ arg_s = arg.toString(2); }); break;
	    case 'c':
                  f(function(){ arg_s = String.fromCharCode(arg); });
                  break;
            case 'd':
                f(function(){ arg = sprintf.to_int(arg); arg_s = ""+arg; });
                if (thousand_grouping)
                    f(function(){ arg_s = sprintf.thousand_grouping(arg_s); });
                break;
	    case 'e':
	        f(function(){ arg_s = arg.toExponential(
                    precision ? precision : undefined); });
	        break;
	    case 'f':
		if (precision)
		    f(function(){ arg_s = arg.toFixed(precision); });
		else
                    f(function(){ arg_s = ""+arg; });
		break;
	    case 'o': f(function(){ arg_s = arg.toString(8); }); break;
	    case 'O': f(function(){ arg_s = JSON.stringify(arg); }); break;
            case 'u': f(function(){ arg = arg >>> 0; arg_s = ""+arg; }); break;
	    case 'x': f(function(){ arg_s = arg.toString(16); }); break;
	    case 'X':
                f(function(){ arg_s = arg.toString(16).toUpperCase(); });
                break;
	    case 's':
	        f(function(){ arg_s = ""+arg; });
		if (precision)
                    f(function(){ arg_s = arg_s.substring(0, precision); });
	        break;
	    }
	    if (/[def]/.test(conversion) && sign)
		f(function(){ if (arg>=0) arg_s = "+"+arg_s; });
	    var pad_chr = pad_zero ? pad_zero=='0' ? '0' : pad_zero[1] : ' ';
	    pad_chr = E.chr_repeat(pad_chr, +pad_max);
	    f(function(){
                var pad_chrs = pad_chr.slice(0, +pad_max-arg_s.length);
                var arg_padded = !pad_max ? arg_s :
                    pad_min ? arg_s+pad_chrs : pad_chrs+arg_s;
                out += arg_padded;
            });
	}
	else
	    throw 'sprintf invalid format '+_fmt;
    })();
    return function(_argv){
        argv = _argv;
        out = '';
        for (var i=0; i<_f.length; i++)
            _f[i](argv);
        return out;
    };
};
E.parse = (function(){
    try {
        /*jshint evil:true*/
        new Function();
        return E.parse_fast;
    } catch(e){ return E.parse_slow; } // capp does not support new Function()
})();

E.vsprintf = function(fmt, argv){
    var _argv = [fmt];
    _argv.push.apply(_argv, argv);
    return E.sprintf.apply(null, _argv);
};

return E; }); }());
