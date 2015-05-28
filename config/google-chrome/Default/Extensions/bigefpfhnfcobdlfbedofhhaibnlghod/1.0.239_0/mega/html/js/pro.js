var pro_package;
var pro_packs = [];
var pro_balance = 0;
var pro_paymentmethod;
var pro_m;
var pro_usebalance=false;

function switch_pro(data)
{
	 if(data)
	 {
		$('#month').addClass('red');
		$('#year').removeClass('red');
		$('.reg-st3-save-icon').addClass('hidden');
		$('.pro-new-year').addClass('hidden');
		$('.pro-new-month').removeClass('hidden');			
		$('.pro1 .reg-st3-bott-title.right').html('9<span>.99 &euro;</span>');
		$('.pro2 .reg-st3-bott-title.right').html('19<span>.99 &euro;</span>');
		$('.pro3 .reg-st3-bott-title.right').html('29<span>.99 &euro;</span>');
		$('.pro1 .reg-st3-bandwidth .reg-st3-big-txt').html('1 <span>TB</span>');
		$('.pro2 .reg-st3-bandwidth .reg-st3-big-txt').html('4 <span>TB</span>');
		$('.pro3 .reg-st3-bandwidth .reg-st3-big-txt').html('8 <span>TB</span>');
	 } 
	 else 
	 {
		$('#month').removeClass('red');
		$('#year').addClass('red');
		$('.reg-st3-save-icon').removeClass('hidden');
		$('.pro-new-year').removeClass('hidden');
		$('.pro-new-month').addClass('hidden');			
		$('.pro1 .reg-st3-bott-title.right').html('99<span>.99 &euro;</span>');
		$('.pro2 .reg-st3-bott-title.right').html('199<span>.99 &euro;</span>');
		$('.pro3 .reg-st3-bott-title.right').html('299<span>.99 &euro;</span>');			
		$('.pro1 .reg-st3-bandwidth .reg-st3-big-txt').html('12 <span>TB</span>');
		$('.pro2 .reg-st3-bandwidth .reg-st3-big-txt').html('48 <span>TB</span>');
		$('.pro3 .reg-st3-bandwidth .reg-st3-big-txt').html('96 <span>TB</span>');			
	 }
}

var dcl=false;
function init_pro()
{
	/*
    Add this in when we want to redirect to the mega.nz/#pro page
    if (page!="key")
	{
		M.transferToMegaNz("pro");
		return;
	}*/

	api_req({a:'ufpq'},
	{
		callback: function(res)
		{
			if (typeof res == 'object')
			{
				for (var i in res)
				{
					if (res[i] == 7) dcl=true;
				}		
			}		
		}
	});

	var DEFAULT = 'monthly'; 
	
	if (DEFAULT == 'monthly') 
	{
		$('#reg-checkbox').attr('checked',true);
		switch_pro(true);
	}
	else
	{
		$('#reg-checkbox').attr('checked',false);
		switch_pro(false);	
	}

	if (u_type == 3)
	{
		api_req(
		{ a : 'uq',pro : 1,},
		{ 
			callback : function (res) 
			{
				if (typeof res == 'object' && res.balance && res.balance[0]) pro_balance = res.balance[0][0];
			}
		});	
	}	
	if (document.location.hash.indexOf('#pro/') > -1)
	{
		localStorage.affid = document.location.hash.replace('#pro/','');
		localStorage.affts = new Date().getTime();	
	}
	
	if (document.location.hash.indexOf('#pro#') > -1) sessionStorage.proref = document.location.hash.replace('#pro#','');
	
	
	$('body').addClass('pro');
	if (lang != 'en') $('body').addClass(lang);	
	json = JSON.parse(pro_json);				
	for (var i in json[0])
	{
		if      ((json[0][i][2] == '500') && (json[0][i][5] == '9.99')) 	pro_packs['pro1_month'] = json[0][i];
		else if ((json[0][i][2] == '500') && (json[0][i][5] == '99.99')) 	pro_packs['pro1_year'] 	= json[0][i];
		else if ((json[0][i][2] == '2048') && (json[0][i][5] == '19.99')) 	pro_packs['pro2_month'] = json[0][i];
		else if ((json[0][i][2] == '2048') && (json[0][i][5] == '199.99')) 	pro_packs['pro2_year'] 	= json[0][i];
		else if ((json[0][i][2] == '4096') && (json[0][i][5] == '29.99')) 	pro_packs['pro3_month'] = json[0][i];
		else if ((json[0][i][2] == '4096') && (json[0][i][5] == '299.99')) 	pro_packs['pro3_year'] 	= json[0][i];		
	}	
	if (!m)
	{
	   if (lang == 'fr') $('.reg-st3-big-txt').each(function(e,o){$(o).html($(o).html().replace('GB','Go').replace('TB','To'));});
	   if (lang !== 'en') $('.reg-st3-save-txt').addClass(lang);	   
	   $('.reg-checkbox :checkbox').iphoneStyle({resizeContainer:false,resizeHandle:false,onChange:function(elem, data)
	   {
		 switch_pro(data);	     
		 if (lang == 'fr') $('.reg-st3-big-txt').each(function(e,o){$(o).html($(o).html().replace('GB','Go').replace('TB','To'));});
		}
	   });
	   
	    $('.reg-st3-membership-bl').unbind('click');
		$('.reg-st3-membership-bl').bind('click',function(e)
		{		
			$('.reg-st3-membership-bl').removeClass('selected');
			$(this).addClass('selected');		
		});
		
		 $('.reg-st3-membership-bl').unbind('dblclick');
		$('.reg-st3-membership-bl').bind('dblclick',function(e)
		{		
			$('.reg-st3-membership-bl').removeClass('selected');
			$(this).addClass('selected');
			pro_proceed(e);
		});
		$('.pro-gray-block .register-st2-button-arrow').unbind('click');
		$('.pro-gray-block .register-st2-button-arrow').bind('click',function(e)
		{
			pro_proceed(e);
            return false;
		});		
		
		$('.key3 .register-st2-button-arrow').unbind('click');
		$('.key3 .register-st2-button-arrow').bind('click',function(e)
		{
			pro_proceed(e);
		});		
		
		$('.pro-bottom-button').unbind('click');
		$('.pro-bottom-button').bind('click',function(e)
		{
			document.location.hash = 'contact';
		});
	}
}

function pro_proceed(e)
{
	if (page == 'key') sessionStorage.proref = 'accountcompletion';

	var c = $('.reg-st3-membership-bl.selected').attr('class');
	if (c.indexOf('free') > -1)
	{
		if (page == 'fm') document.location.hash = '#start';
		else document.location.hash = '#fm';
		return false;
	}
	else if(c.indexOf('pro1') > -1 && $('#reg-checkbox').attr('checked')) pro_package = 'pro1_month';
	else if(c.indexOf('pro1') > -1) pro_package = 'pro1_year';
	else if(c.indexOf('pro2') > -1 && $('#reg-checkbox').attr('checked')) pro_package = 'pro2_month';		
	else if(c.indexOf('pro2') > -1) pro_package = 'pro2_year';
	else if(c.indexOf('pro3') > -1 && $('#reg-checkbox').attr('checked')) pro_package = 'pro3_month';
	else if(c.indexOf('pro3') > -1) pro_package = 'pro3_year';

    megaAnalytics.log("pro", "proc");

	if (pro_package) pro_continue();
}

function pro_continue()
{
	if(!u_handle) {
        megaAnalytics.log("pro", "loginreq");
        msgDialog('loginrequired', 'title', 'msg');
        return;
    } else if(isEphemeral()) {
        showRegisterDialog();
        return;
    }

    /*
    Re-add this when we want to redirect to mega.nz/#pro
    if (page!="key")
	{
		M.transferToMegaNz("pro");
		return;
	}
    */

	pro_paymentmethod='';
	if (u_type === false)
	{
		u_storage = init_storage(localStorage);
		loadingDialog.show();
		u_checklogin({ checkloginresult: function(u_ctx,r) 
		{ 
			pro_pay();
		}},true);
	}
	else if (parseFloat(pro_balance) >= parseFloat(pro_packs[pro_package][5]))
	{
		msgDialog('confirmation',l[504],l[5844],false,function(e)
		{
			if(e) 
			{
				pro_paymentmethod = 'pro_prepaid';
				pro_pay();
			}
			else if (dcl) propaymentDialog();
			else document.location.hash = 'resellers';
		});
	}
	else if (dcl) propaymentDialog();
	else document.location.hash = 'resellers';
}

function pro_pay()
{
	loadingDialog.show();
	var aff=0;	
	if (localStorage.affid && localStorage.affts > new Date().getTime()-86400000) aff = localStorage.affid;
    api_req({ a : 'uts', it: 0, si: pro_packs[pro_package][0], p: pro_packs[pro_package][5], c: pro_packs[pro_package][6], aff: aff, 'm':m},
	{
		callback : function (res)
		{ 
			if (typeof res == 'number' && res < 0)
			{
				loadingDialog.hide();
				alert(l[200]);
			}
			else
			{
				if (pro_paymentmethod == 'pro_voucher' || pro_paymentmethod == 'pro_prepaid') pro_m = 0;
				else if (dcl) pro_m =7;
				else pro_m = 1;
				
				var proref = '';
				if (sessionStorage.proref) proref = sessionStorage.proref;
				
				var apim = 0;				
				

				api_req({ a : 'utc', s : [res], m : pro_m, r: proref },
				{ 
					callback : function (res)
					{
						if (pro_paymentmethod == 'pro_prepaid')
						{							
							loadingDialog.hide();
							if (typeof res == 'number' && res < 0)
							{
								if (res == EOVERQUOTA) alert(l[514]);
								else alert(l[200]);
							}
							else
							{
								if (M.account) M.account.lastupdate=0;
								document.location.hash = 'account';								
							}
						}						
						else
						{
							if (res && res.EUR)
							{
								loadingDialog.hide();
							}
							else if (dcl)
							{
								loadingDialog.hide();
								if (res == EOVERQUOTA)
								{
									msgDialog('warninga', l[6827], l[6828],'',function()
 									{
 										pro_proceed();									
 									});
								}
								else
								{
									$('.fm-dialog-overlay').removeClass('hidden');
									$('.fm-dialog.payment-success').removeClass('hidden');
									$('.fm-dialog.payment-success .browsers-button').unbind('click');
									$('.fm-dialog.payment-success .browsers-button').bind('click',function()
									{
										$('.fm-dialog-overlay').addClass('hidden');
										$('.fm-dialog.payment-success').addClass('hidden');										
										u_attr.p = pro_package.substr(3,1);
										document.location.hash = 'fm';
									});
								}								
							}
							else
							{
								loadingDialog.hide();
								alert(l[200]);
							}
						}
					}
				});
			}
		}
	});	
}

function showLoginDialog() {
    megaAnalytics.log("pro", "loginDialog");
    $.dialog = 'pro-login-dialog';

    var $dialog = $('.pro-login-dialog');
    $dialog
        .removeClass('hidden')
        .addClass('active');

    $('.fm-dialog-overlay').removeClass("hidden");

    $dialog.css({
        'margin-left': -1 * ($dialog.outerWidth()/2),
        'margin-top': -1 * ($dialog.outerHeight()/2)
    });

    $('.top-login-input-block').removeClass('incorrect');


    // controls
    $('.fm-dialog-close', $dialog)
        .unbind('click.proDialog')
        .bind('click.proDialog', function() {
            closeDialog();
        });

    $('.input-email', $dialog)
        .data('placeholder', l[195])
        .val(l[195]);

    $('.input-password', $dialog)
        .data('placeholder', l[909])
        .val(l[909]);

    uiPlaceholders($dialog);
    uiCheckboxes($dialog);


    $('#login-password, #login-name', $dialog).unbind('keydown');
    $('#login-password, #login-name', $dialog).bind('keydown',function(e)
    {
        $('.top-login-pad', $dialog).removeClass('both-incorrect-inputs');
        $('.top-login-input-tooltip.both-incorrect', $dialog).removeClass('active');
        $('.top-login-input-block.password', $dialog).removeClass('incorrect');
        $('.top-login-input-block.e-mail', $dialog).removeClass('incorrect');
        if (e.keyCode == 13) doProLogin($dialog);
    });


    $('.top-login-forgot-pass', $dialog).unbind('click');
    $('.top-login-forgot-pass', $dialog).bind('click',function(e)
    {
        document.location.hash = 'recovery';
    });

    $('.top-dialog-login-button', $dialog).unbind('click');
    $('.top-dialog-login-button', $dialog).bind('click',function(e) {
        doProLogin($dialog);
    });
};

var doProLogin = function($dialog) {
    megaAnalytics.log("pro", "doLogin");

    loadingDialog.show();
    var ctx =
    {
        checkloginresult: function(ctx,r)
        {
            loadingDialog.hide();

            if (r == EBLOCKED)
            {
                alert(l[730]);
            }
            else if (r)
            {
                $('#login-password', $dialog).val('');
                $('#login-email', $dialog).val('');
                u_type = r;
                init_page();
                if(pro_package) {
                    var cls = pro_package
                        .replace("_month", "")
                        .replace("_year", "");

                    $('.reg-st3-membership-bl').removeClass('selected')
                    $('.reg-st3-membership-bl.' + cls).addClass('selected');
                }
                pro_continue();
            }
            else
            {
                $('#login-password', $dialog).val('');
                alert(l[201]);
            }
        }
    };


    var passwordaes = new sjcl.cipher.aes(prepare_key_pw($('#login-password', $dialog).val()));
    var uh = stringhash($('#login-name', $dialog).val().toLowerCase(),passwordaes);
    u_login(
        ctx,
        $('#login-name', $dialog).val(),
        $('#login-password', $dialog).val(),
        uh,
        $('#login-checkbox').is('.checkboxOn')
    );
};

function showRegisterDialog() {
    megaAnalytics.log("pro", "regDialog");
    $.dialog = 'pro-register-dialog';

    var $dialog = $('.pro-register-dialog');
    $dialog
        .removeClass('hidden')
        .addClass('active');

    $('.fm-dialog-overlay').removeClass("hidden");

    var reposition = function() {
        $dialog.css({
            'margin-left': -1 * ($dialog.outerWidth() / 2),
            'margin-top': -1 * ($dialog.outerHeight() / 2)
        });
    };

    reposition();

    $('*', $dialog).removeClass('incorrect'); // <- how bad idea is that "*" there?


    // controls
    $('.fm-dialog-close', $dialog)
        .unbind('click.proDialog')
        .bind('click.proDialog', function() {
            closeDialog();
        });

    $('#register-email', $dialog)
        .data('placeholder', l[95])
        .val(l[95]);

    $('#register-firstname', $dialog)
        .data('placeholder', l[1096])
        .val(l[1096]);

    $('#register-lastname', $dialog)
        .data('placeholder', l[1097])
        .val(l[1097]);

    $('#register-password', $dialog)
        .addClass('input-password')
        .data('placeholder', l[909])
        .val(l[909]);

    $('#register-password2', $dialog)
        .addClass('input-password')
        .data('placeholder', l[1114])
        .val(l[1114]);

    uiPlaceholders($dialog);
    uiCheckboxes($dialog);

    var registerpwcheck = function()
    {
        $('.login-register-input.password', $dialog).removeClass('weak-password strong-password');
        $('.new-registration', $dialog).removeClass('good1 good2 good3 good4 good5');
        if (typeof zxcvbn == 'undefined' || $('#register-password', $dialog).attr('type') == 'text' || $('#register-password', $dialog).val() == '') return false;
        var pw = zxcvbn($('#register-password', $dialog).val());
        if (pw.score > 3 && pw.entropy > 75)
        {
            $('.login-register-input.password', $dialog).addClass('strong-password');
            $('.new-registration', $dialog).addClass('good5');
            $('.new-reg-status-pad', $dialog).html('<strong>' + l[1105] + '</strong>' + l[1128]);
            $('.new-reg-status-description', $dialog).text(l[1123]);
        }
        else if (pw.score > 2 && pw.entropy > 50)
        {
            $('.login-register-input.password', $dialog).addClass('strong-password');
            $('.new-registration', $dialog).addClass('good4');
            $('.new-reg-status-pad', $dialog).html('<strong>' + l[1105] + '</strong>' + l[1127]);
            $('.new-reg-status-description', $dialog).text(l[1122]);
        }
        else if (pw.score > 1 && pw.entropy > 40)
        {
            $('.login-register-input.password', $dialog).addClass('strong-password');
            $('.new-registration', $dialog).addClass('good3');
            $('.new-reg-status-pad', $dialog).html('<strong>' + l[1105] + '</strong>' + l[1126]);
            $('.new-reg-status-description', $dialog).text(l[1121]);
        }
        else if (pw.score > 0 && pw.entropy > 15)
        {
            $('.new-registration', $dialog).addClass('good2');
            $('.new-reg-status-pad', $dialog).html('<strong>' + l[1105] + '</strong>' + l[1125]);
            $('.new-reg-status-description', $dialog).text(l[1120]);
        }
        else
        {
            $('.login-register-input.password', $dialog).addClass('weak-password');
            $('.new-registration', $dialog).addClass('good1');
            $('.new-reg-status-pad', $dialog).html('<strong>' + l[1105] + '</strong> ' + l[1124]);
            $('.new-reg-status-description', $dialog).text(l[1119]);
        }
        $('.password-status-warning', $dialog).html('<span class="password-warning-txt">' + l[34] + '</span> ' + l[1129] + '<div class="password-tooltip-arrow"></div>');
        $('.password-status-warning', $dialog).css('margin-left',($('.password-status-warning', $dialog).width()/2*-1)-13);
        reposition();
    };

    if (typeof zxcvbn == 'undefined' && !silent_loading)
    {
        $('.login-register-input.password', $dialog).addClass('loading');
        silent_loading=function()
        {
            $('.login-register-input.password', $dialog).removeClass('loading');
            registerpwcheck();
        };
        jsl.push(jsl2['zxcvbn_js']);
        jsl_start();
    }
    $('#register-password', $dialog).unbind('keyup.proRegister');
    $('#register-password', $dialog).bind('keyup.proRegister',function(e)
    {
        registerpwcheck();
    });
    $('.password-status-icon', $dialog).unbind('mouseover.proRegister');
    $('.password-status-icon', $dialog).bind('mouseover.proRegister',function(e)
    {
        if ($(this).parents('.strong-password').length == 0)
        {
            $('.password-status-warning', $dialog).removeClass('hidden');
        }

    });
    $('.password-status-icon', $dialog).unbind('mouseout.proRegister');
    $('.password-status-icon', $dialog).bind('mouseout.proRegister',function(e)
    {
        if ($(this).parents('.strong-password').length == 0)
        {
            $('.password-status-warning', $dialog).addClass('hidden');
        }
    });

    $('input', $dialog).unbind('keydown.proRegister');
    $('input', $dialog).bind('keydown.proRegister',function(e)  {
        if (e.keyCode == 13) {
            doProRegister($dialog);
        }
    });


    $('.register-st2-button', $dialog).unbind('click');
    $('.register-st2-button', $dialog).bind('click',function(e) {
        doProRegister($dialog);
        return false;
    });

    $('.new-registration-checkbox a', $dialog)
        .unbind('click.proRegisterDialog')
        .bind('click.proRegisterDialog',function(e) {
            $.termsAgree = function()
            {
                $('.register-check').removeClass('checkboxOff');
                $('.register-check').addClass('checkboxOn');
            };
            termsDialog();
            return false;
        });
};

var doProRegister = function($dialog) {
    megaAnalytics.log("pro", "doRegister");
    loadingDialog.show();

    if (u_type > 0)
    {
        msgDialog('warninga',l[135],l[5843]);
        loadingDialog.show();
        return false;
    }


    var registeraccount = function()
    {
        var ctx =
        {
            callback : function(res)
            {
                loadingDialog.hide();
                if (res == 0)
                {
                    var ops = {a:'up'};

                    ops.terms = 'Mq';
                    ops.firstname = base64urlencode(to8($('#register-firstname', $dialog).val()));
                    ops.lastname = base64urlencode(to8($('#register-lastname', $dialog).val()));
                    ops.name2 = base64urlencode(to8($('#register-firstname', $dialog) + ' ' + $('#register-lastname', $dialog).val()));
                    u_attr.terms=1;

                    api_req(ops);

                    proceedToPaypal();
                }
                else
                {
                    if (res == EACCESS) alert(l[218]);
                    else if (res == EEXIST)
                    {
                        if (m) alert(l[219]);
                        else
                        {
                            $('.login-register-input.email .top-loginp-tooltip-txt', $dialog).html(l[1297] + '<div class="white-txt">' + l[1298] + '</div>');
                            $('.login-register-input.email', $dialog).addClass('incorrect');
                            msgDialog('warninga','Error',l[219]);

                            loadingDialog.hide();
                        }
                    }
                }
            }
        };

        var rv={};

        rv.name = $('#register-firstname', $dialog).val() + ' ' + $('#register-lastname', $dialog).val();
        rv.email = $('#register-email', $dialog).val();
        rv.password = $('#register-password', $dialog).val();

        var sendsignuplink = function(name,email,password,ctx)
        {
            var pw_aes = new sjcl.cipher.aes(prepare_key_pw(password));
            var req = { a : 'uc', c : base64urlencode(a32_to_str(encrypt_key(pw_aes,u_k))+a32_to_str(encrypt_key(pw_aes,[rand(0x100000000),0,0,rand(0x100000000)]))), n : base64urlencode(to8(name)), m : base64urlencode(email) };

            api_req(req,ctx);
        };

        sendsignuplink(rv.name,rv.email,rv.password,ctx);
    };



    var err=false;

    if ($('#register-firstname', $dialog).val() == '' || $('#register-firstname', $dialog).val() == l[1096] || $('#register-lastname', $dialog).val() == '' || $('#register-lastname', $dialog).val() == l[1097])
    {
        $('.login-register-input.name', $dialog).addClass('incorrect');
        err=1;
    }
    if ($('#register-email', $dialog).val() == '' || $('#register-email', $dialog).val() == l[1096] || checkMail($('#register-email', $dialog).val()))
    {
        $('.login-register-input.email', $dialog).addClass('incorrect');
        err=1;
    }

    if ($('#register-email', $dialog).val() == '' || $('#register-email', $dialog).val() == l[1096] || checkMail($('#register-email', $dialog).val()))
    {
        $('.login-register-input.email', $dialog).addClass('incorrect');
        err=1;
    }

    var pw = zxcvbn($('#register-password', $dialog).val());
    if ($('#register-password', $dialog).attr('type') == 'text')
    {
        $('.login-register-input.password.first', $dialog).addClass('incorrect');
        $('.white-txt.password', $dialog).text(l[213]);
        err=1;
    }
    else if (pw.score == 0 || pw.entropy < 16)
    {
        $('.login-register-input.password.first', $dialog).addClass('incorrect');
        $('.white-txt.password', $dialog).text(l[1104]);
        err=1;
    }

    if ($('#register-password', $dialog).val() !== $('#register-password2', $dialog).val())
    {
        $('#register-password', $dialog)[0].type = 'password';
        $('#register-password2', $dialog)[0].type = 'password';
        $('#register-password', $dialog).val('');
        $('#register-password2', $dialog).val('');
        $('.login-register-input.password.confirm', $dialog).addClass('incorrect');
        err=1;
    }

    if (!err && typeof zxcvbn == 'undefined')
    {
        msgDialog('warninga',l[135],l[1115] + '<br>' + l[1116]);
        loadingDialog.hide();
        return false;
    }
    else if (!err)
    {
        if ($('.register-check', $dialog).attr('class').indexOf('checkboxOff') > -1)
        {
            msgDialog('warninga',l[1117],l[1118]);
            loadingDialog.hide();
        }
        else
        {
            if (localStorage.signupcode)
            {
                loadingDialog.show();
                u_storage = init_storage(localStorage);
                var ctx =
                {
                    checkloginresult: function(u_ctx,r)
                    {
                        if (typeof r[0] == 'number' && r[0] < 0) msgDialog('warningb',l[135],l[200]);
                        else
                        {
                            loadingDialog.hide();
                            u_type = r;
                            document.location.hash = 'fm'; //TODO: fixme
                        }
                    }
                }
                var passwordaes = new sjcl.cipher.aes(prepare_key_pw($('#register-password', $dialog).val()));
                var uh = stringhash($('#register-email', $dialog).val().toLowerCase(),passwordaes);
                u_checklogin(ctx,true,prepare_key_pw($('#register-password', $dialog).val()),localStorage.signupcode,$('#register-firstname', $dialog).val() + ' ' + $('#register-lastname', $dialog).val(),uh);
                delete localStorage.signupcode;
            }
            else if (u_type === false)
            {
                loadingDialog.show();
                u_storage = init_storage(localStorage);
                u_checklogin(
                    {
                        checkloginresult: function(u_ctx,r)
                        {
                            u_type = r;
                            registeraccount();
                        }
                    },true);
            }
            else if (u_type == 0) registeraccount();
        }
    }
    if(err) {
        loadingDialog.hide();
    }
};

var paypalTimeout = null;
function redirectToPaypal(url) 
{
	console.log(url);

	
    return false;
    
	/*	
    clearTimeout(paypalTimeout);
    $('.pro-register-dialog')
        .removeClass('active')
        .addClass('hidden');

    $('.fm-dialog-overlay').removeClass('hidden');
    var $dialog = $('.fm-dialog.pro-register-paypal-dialog');
    var reposition = function() {
        $dialog.css({
            'margin-left': -1 * ($dialog.outerWidth() / 2),
            'margin-top': -1 * ($dialog.outerHeight() / 2)
        });
    };
    reposition();
    var fadeOutInLoop = function($elm) {
        $elm
            .animate({
                'opacity': 0.2
            }, 600)
            .animate({'opacity': 1}, 1000, function() {
                fadeOutInLoop($elm);
            });
    };
    fadeOutInLoop($('.pro-register-paypal-dialog .reg-success-icon'));
    $dialog
        .addClass('active')
        .removeClass('hidden');
    if(url) {
        megaAnalytics.log("pro", "proceedingToPaypal");

        paypalTimeout = setTimeout(function () {
            document.location = url;
        }, 3000);
    }
	*/
}
function redirectToPaypalHide() {
    $('.fm-dialog.pro-register-paypal-dialog')
        .removeClass('active')
        .addClass('hidden');

    $('.fm-dialog-overlay').addClass('hidden');
}

var proceedToPaypal = function() {

    if(pro_package) {
        var cls = pro_package
            .replace("_month", "")
            .replace("_year", "");

        $('.reg-st3-membership-bl').removeClass('selected')
        $('.reg-st3-membership-bl.' + cls).addClass('selected');

        u_type=1;
    }

    pro_continue();
};

var cctoken=false;

function propaymentDialog()
{	
	$('.pro-register-dialog').addClass('hidden');
	$('#iframediv').html('<iframe src="https://payment.dclux.net/#' + pro_package + '" width="500" height="400" border="0" style="border:none;"></iframe>');
	$('.fm-dialog-overlay').removeClass('hidden');
	$.dialog = 'propayment';
	// add listener to receive feedback from iframe	once token is ready:
	if (!$.messagelistener)
	{
		window.addEventListener("message", function(event)
		{
			try
			{
				var data = JSON.parse(event.data);
				closeDialog();
				loadingDialog.show();
				api_req({ a : 'ufp7', fp : data.id },
				{
					callback: function(res)
					{
						if (res == 0) pro_pay();
						else
						{
							loadingDialog.hide();
							msgDialog('warninga', l[6827], l[6828],'',function()
 							{
 								pro_proceed();									
 							});
						}
					}
				});
			}
			catch(e)
			{
				console.log('unable to JSON decode',e);
			}
		}, false);
		$.messagelistener=true;
	}
	$('.fm-dialog.propayment-dialog').removeClass('hidden');	
	$('.fm-dialog.propayment-dialog .fm-dialog-close').unbind('click');
	$('.fm-dialog.propayment-dialog .fm-dialog-close').bind('click',function()
	{
		closeDialog();
	});
}





