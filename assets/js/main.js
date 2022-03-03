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
            meanMenuClose: `<span class="lnhr_new_menu_clicker"><span class="lnhr_new_menu_text">Close</span> <span class="cl_icon">X</span></span>`,
            meanRevealColour: "tansparent",

        });

        //
        $('.lnhr_set_bg').each(function(e){
            let getImage = $(this).attr('data-bg-image');
            $(this).css({
                backgroundImage: 'url('+getImage+')',
                backgroundSize: 'cover'
            })
        })

        //
        // var swiper = new Swiper(".lnhr_new_banner__slider", {
        //     pagination: {
        //         el: ".swiper-pagination",
        //     },
        //     clickable: true,
        // });

        var swiper = new Swiper(".lnhr_new_banner__slider", {
            effect: "fade",
            slidesPerView: 1,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            },
            
          });

          // Testimonial Slider
          var swiper = new Swiper(".lnhr_new_testimonial__slider", {
            // effect: "fade",
            slidesPerView: 1,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            },
            
          });

        

        $(window).on('load resize', function () {
            mobileAccordion()
        });

        
       //
       var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();

      //
     

      



        
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


    //

    $(window).load(function() {

        $('.lnhr_new_image_compare').cross2({
            clickEnabled: true,
            easing: 'easeInBack',
            animationDuration: 500,
            mousewheelEnabled: false,
            titlesEnabled:false,
        });

        
        
    });

})(jQuery)