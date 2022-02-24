(function($){
    "use strict";



    // Mobile Menu
    $(document).ready(function () {

        // 
        const lnhr_new_navbar__nav_li = $('.lnhr_new_navbar__nav li');
        lnhr_new_navbar__nav_li.each(function(){
            if($(this).children('ul').length > 0){
                $(this).addClass('lnhr_new_has_children')
            }
        })

        //
	    $('.lnhr_new_navbar').meanmenu({
            meanScreenWidth: "1200",
            meanMenuOpen: `<span class="lnhr_new_menu_clicker"><span class="lnhr_new_menu_text">Menu</span> <img class="lnhr_new_menu_img" src="assets/images/mobile_menu_bar.svg" alt="menu"></span>`,
            meanRevealColour: "tansparent",

        });

        $(window).on('load resize', function () {
            mobileAccordion()
        });
       


        
        // Footer Accordion
        function mobileAccordion(){
            if (window.innerWidth < 768) { 
            let accordionWidget = $('.lnhr_new_footer__widget');
            let accordionTitle = $('.lnhr_new_footer__widget_title');
            let accordionContent = $('.lnhr_new_footer__widget_content');
            accordionWidget.not('.lnhr_new_footer_social_widget').addClass('lnhr_new_accordion_off')
            accordionWidget.not('.lnhr_new_footer_social_widget').find(accordionContent).slideUp();
            accordionTitle.on('click',function(e){
                e.preventDefault();
                let __this = $(this);
                $(this).parent(accordionWidget).stop().toggleClass('lnhr_new_accordion_off')
                $(this).parent(accordionWidget).stop().toggleClass('lnhr_new_accordion_on')
                $(this).siblings(accordionContent).stop().slideToggle();
                $(this).parents('.lnhr_ac_parent').siblings('.lnhr_ac_parent').find(accordionWidget).stop().removeClass('lnhr_new_accordion_on')
                $(this).parents('.lnhr_ac_parent').siblings('.lnhr_ac_parent').find(accordionContent).stop().slideUp()
            })
            }
        }
            
        




	});

})(jQuery)