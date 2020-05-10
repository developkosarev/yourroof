
    
    jQuery(document).ready(function() {

	jQuery(".sidebar ul ul").addClass("nav-list");
	
	// Fixes default classes not applied to Joomal contact forms for open items
	jQuery(".zenslider").addClass("start");
	jQuery(".zenslider h3").click(function () {
		jQuery(this).parent().removeClass("start");
	});
	
	// Fixes default classes not applied to Joomal contact forms for open items
		jQuery(".accordion-toggle").prepend("<span class='accordion-icon'></span>");
		jQuery(".accordion-toggle").not(":first").addClass("collapsed");


		
	jQuery('#zen-slider').liquidSlider({
		panelTitleSelector: "h3.title",
		slideEaseDuration: 600,
		mobileNavigation: false
	});
	
	
	jQuery('#banner .zentext').addClass('animated bounceInLeft');
	jQuery('#banner .zenitem2 .zentext,#banner .zenitem4 .zentext,#banner .zenitem6 .zentext').addClass('animated bounceInUp').removeClass('bounceInLeft');
	jQuery('#banner .zenimage').addClass('animated bounceInUp');
	jQuery('#banner .zenmore').addClass('animated fadeInDown');
	jQuery('#banner .zenitem2 .zenimage,#banner .zenitem4 .zenimage,#banner .zenitem6 .zenimage').addClass('animated bounceInRight');
	
	
	function addIcons() {
		jQuery("#zen-slider-nav-ul li a").addClass("icon-check-empty").removeClass("icon-check");
		jQuery("#zen-slider-nav-ul li a.current").addClass("icon-check").removeClass("icon-check-empty");
	}
	
	addIcons();
	
	jQuery("#zen-slider-nav-ul li a").click(function () {
			jQuery("#zen-slider-nav-ul li a").addClass("icon-check-empty").removeClass("icon-check");
			jQuery(this).addClass("icon-check").removeClass("icon-check-empty");	
	});
	
	
	
	
	
});


(function($) {

	


      
    $.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options);}
    var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear");}else{if(counter++>settings.failurelimit){return false;}}});var temp=$.grep(elements,function(element){return!element.loaded;});elements=$(temp);});}
    return this.each(function(){var self=this;$(self).attr("original",$(self).attr("src"));if("scroll"!=settings.event||$.belowthefold(self,settings)||$.rightoffold(self,settings)){if(settings.placeholder){$(self).attr("src",settings.placeholder);}else{$(self).removeAttr("src");}
    self.loaded=false;}else{self.loaded=true;}
    $(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))
    [settings.effect](settings.effectspeed);self.loaded=true;}).attr("src",$(self).attr("original"));};});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear");}});}});};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop();}
    else{var fold=$(settings.container).offset().top+$(settings.container).height();}
    return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft();}
    else{var fold=$(settings.container).offset().left+$(settings.container).width();}
    return fold<=$(element).offset().left-settings.threshold;};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"});
    

    
    		
})(jQuery);