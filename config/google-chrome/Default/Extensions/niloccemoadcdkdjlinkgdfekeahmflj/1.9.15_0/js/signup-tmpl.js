(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['signup_shell'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h2 class=\"pkt_ext_logo\">Pocket</h2>\n<p class=\"pkt_ext_tagline\">"
    + escapeExpression(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tagline","hash":{},"data":data}) : helper)))
    + "</p>\n<a href=\"http://getpocket.com/signup?force=google&src=extension&route=/extension_login_success&forcevariant="
    + escapeExpression(((helper = (helper = helpers.variant || (depth0 != null ? depth0.variant : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"variant","hash":{},"data":data}) : helper)))
    + "\" target=_blank\" class=\"btn signup-btn-google\"><span class=\"logo\"></span><span class=\"text\">"
    + escapeExpression(((helper = (helper = helpers.signupgoogle || (depth0 != null ? depth0.signupgoogle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"signupgoogle","hash":{},"data":data}) : helper)))
    + "</span></a>\n<div class=\"signup-ordivider\">"
    + escapeExpression(((helper = (helper = helpers.or || (depth0 != null ? depth0.or : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"or","hash":{},"data":data}) : helper)))
    + "</div>\n<a href=\"http://getpocket.com/signup?force=email&src=extension&route=/extension_login_success&forcevariant="
    + escapeExpression(((helper = (helper = helpers.variant || (depth0 != null ? depth0.variant : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"variant","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"btn btn-secondary signup-btn-email signup-btn-initstate\">"
    + escapeExpression(((helper = (helper = helpers.signupemail || (depth0 != null ? depth0.signupemail : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"signupemail","hash":{},"data":data}) : helper)))
    + "</a>\n<p class=\"alreadyhave\">"
    + escapeExpression(((helper = (helper = helpers.alreadyhaveacct || (depth0 != null ? depth0.alreadyhaveacct : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"alreadyhaveacct","hash":{},"data":data}) : helper)))
    + " <a href=\"http://getpocket.com/login?ep=3&src=extension&route=/extension_login_success&forcevariant="
    + escapeExpression(((helper = (helper = helpers.variant || (depth0 != null ? depth0.variant : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"variant","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.loginnow || (depth0 != null ? depth0.loginnow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"loginnow","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"rarrow\">&#x27eb;</span></p>";
},"useData":true});
})();