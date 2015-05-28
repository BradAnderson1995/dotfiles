if(!window.ni) {
    ni = {
		movieTitle: '',
		year: null,
		retry: 1,
        starsTmpl: '<div class="ni-star-img"></div><div class="ni-gstar ni-star-img"></div>',
        containerTmpl: '<div id="ni-container" class="ni-whitebg"></div>',
        contentTmpl:
            '<div id="ni-content">\
				<div style="width:10%;float:left;">&nbsp;</div>\
				<div style="float:left;width:80%">\
        		<div id="ni-title"><a href="http://www.imdb.com/title/${id}" target="_blank">${title}</a></div>\
            	<div id="ni-rating">\
	                <div id="ni-rating-stars">\
	                    <div class="ni-star-img"></div>\
	                    <div id="ni-star-bar" class="ni-gstar ni-star-img" style="width:${rating * 20}px"></div>\
	                </div>\
	                <div id="ni-rating-value"><span class="ni-gold">${rating}</span> / 10</div>\
	                <div class="clear"></div>\
        		</div>\
				</div>\
				<div id="ni-more-details">\
					<table style="margin:0px;padding:0px;">\
						<tr>\
							<td align="right">Votes:</td>\
							<td style="padding-left:10px;">${votes}</td>\
						</tr>\
						<tr>\
							<td align="right">Run Time:</td>\
							<td style="padding-left:10px;padding-top:2px;">${runtime}</td>\
						</tr>\
						<tr>\
							<td align="right">Released:</td>\
							<td style="padding-left:10px;padding-top:2px;">${released}</td>\
						</tr>\
					</table>\
				</div>\
				<div style="clear:both;"></div>\
            </div>',
        getImdbRatings: function(movieTitle, year, callback) {
        	ni.movieTitle = movieTitle;
			ni.year = year;
        	this.loading(true);
            chrome.extension.sendRequest({action:'getRatings', movieTitle:ni.movieTitle, year:ni.year}, callback || $.proxy(this.gotIt, this));
        },
        gotIt: function(data) {
        	this.loading(false);
            if($.isPlainObject(data)) {
                if('success' in data && data.success) {
                    this.render(data);
                } else {
                    // TODO: handle failure
                }
            }
        },
        findYear: function(movieTitle, element) {
			var year = null;
        	var yearParent = element.closest(':has(.year)');
			var yearElem = null;
			if(yearParent.length > 0) {
				yearElem = yearParent.find('.year');
				year = yearElem.text();
				var yearTitleParent = yearElem.closest(':has(.title)');
				var yearTitle = null;
				if(yearTitleParent.length > 0) {
					yearTitle = yearTitleParent.find('.title').text();
				}
				if(yearTitle && yearTitle.trim() != movieTitle) {
					year = null;
				}
			}
			return year;
        },
        loading: function(show) {
        	if(show) {
        		if($('#ni-content').length > 0) {
        			$('#ni-content').addClass('ni-bg');
        		}
        		if($('#ni-container').length > 0) {
        			$('#ni-container').addClass('ni-loader');
        		}
        	} else {
        		if($('#ni-content').length > 0) {
        			$('#ni-content').removeClass('ni-bg');
        		}
        		if($('#ni-container').length > 0) {
        			$('#ni-container').removeClass('ni-loader');
        		}
        	}
        },
        render: function(data) {
        	if($('#ni-container').length == 0) {
				var fixedElems = $('*').filter(function() {
				    return $(this).css('position') === 'fixed'; //&& $(this).parent().prop('tagName') == 'BODY';
				});
        		$(this.containerTmpl).insertAfter('head');
                $('<div id="ni-header"></div>').insertAfter('#ni-container');
				fixedElems.each(function() {
					var originalTop = $(this).css('top');
					var top = isNaN(parseInt(originalTop)) ? 51 : parseInt(originalTop) + 51;
					var marginTop = parseInt($(this).css('margin-top'));
					marginTop = isNaN(marginTop) ? 51 : marginTop + 51;
					$(this).css('top', '0');
					if(parseInt($(this).css('top')) > 0) {
						$(this).animate({'margin-top': marginTop + 'px'}, 'slow');
					} else {
						$(this).css('top', originalTop);
						$(this).animate({'top': top + 'px'}, 'slow');
					}
				});
                $('#ni-container').html($.tmpl(this.contentTmpl, data));
                $('#ni-header').slideDown('slow');
                $('#ni-container').slideDown('slow');
        	} else {
        		$('#ni-container').html($.tmpl(this.contentTmpl, data));
        	}
        }
    }
}

$('img').each(function(index) {
	$.proxy(listener, $(this))();
    if(index == 0) {
    	$(this).trigger('mouseenter');
    }
});

$('body').bind('DOMNodeInserted', function(objEvent) {
	$(objEvent.target).find('img').each(function(index) {
		$.proxy(listener, $(this))();
	});
});

function listener() {
	var isLeft = false;
    $(this).parent().mouseenter($.proxy(function() {
    		isLeft = false;
    		setTimeout($.proxy(function() {
    			if(!isLeft) {
                    var movieTitle = $(this).attr('alt');
					var year = null;
                    if(typeof movieTitle != 'undefined') {
                        movieTitle = movieTitle.trim();
                        if($('#ni-title').length == 0 || $('#ni-title').text() != movieTitle) {
							year = ni.findYear(movieTitle, $(this));
							ni.getImdbRatings(movieTitle, year, $.proxy(function(data) {
								if($.isPlainObject(data) && data.success && data.year && year == null) {
					                setTimeout($.proxy(function() {
										year = ni.findYear(movieTitle, $(this));
										if(year != null && year.indexOf(data.year) == -1 && data.year.indexOf(year) == -1) {
											ni.getImdbRatings(movieTitle, year, function(data) {
												if(!$.isPlainObject(data) || !data.success) {
													year = null;
													ni.getImdbRatings(movieTitle, year);
												} else {
													ni.gotIt(data);
												}
											});
										} else {
											ni.gotIt(data);
										}
									}, $(this)), 400);
					            } else {
									ni.gotIt(data);
								}
							}, $(this)));
                        }
                    }
    			}
    		}, $(this)), 500);
        }, $(this)));
    $(this).parent().mouseleave(function() {
		isLeft = true;
    });
}
