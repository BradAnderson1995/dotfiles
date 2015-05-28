// this script should be added to config.json after the jquery plugin is loaded to assign our own jquery alias:

// give jquery an alias to not conflict with page's scripts since IE is not sandboxed:
// new JQUERY variable:
var pns$ = {};

var pns$ = $.noConflict();


// if there was no previous version of jquery on the page, assign $ to our version:

$ = $ || pns$;