(function ($) {
  "use strict";

  const classExist = function (className) {
    if ($(className).length) {
      return true;
    } else {
      return false;
    }
  };

  // Mobile Menu
  $(document).ready(function () {

    mobileAccordion();
    bannerProcedure()
    //
    const lnhr_new_navbar__nav_li = $(".lnhr_new_navbar__nav li");
    lnhr_new_navbar__nav_li.each(function () {
      if ($(this).children("ul").length > 0) {
        $(this).addClass("lnhr_new_has_children");
      }
    });

    //
    if(classExist('.lnhr_new_navbar')){
        $(".lnhr_new_navbar").meanmenu({
            meanScreenWidth: "1200",
            meanMenuOpen: `<span class="lnhr_new_menu_clicker"> <span class="lnhr_new_menu_text">Menu</span> <img class="lnhr_new_menu_img" src="assets/images/mobile_menu_bar.svg" alt="menu"></span>`,
            meanMenuClose: `<span class="lnhr_new_menu_clicker"><span class="lnhr_new_menu_text">Close</span> <span class="cl_icon">X</span></span>`,
            meanRevealColour: "tansparent",
          });
    }
    

    //
    if(classExist('.lnhr_set_bg')){
        $(".lnhr_set_bg").each(function (e) {
            let getImage = $(this).attr("data-bg-image");
            $(this).css({
              backgroundImage: "url(" + getImage + ")",
              backgroundSize: "cover",
            });
          });
    }

   
    $("img.ssvg").each(function(){var t=$(this),a=t.attr("id"),r=t.attr("class"),i=t.attr("src");$.get(i,function(i){var s=$(i).find("svg");void 0!==a&&(s=s.attr("id",a)),void 0!==r&&(s=s.attr("class",r)),s=s.removeAttr("xmlns:a"),t.replaceWith(s)},"xml")});
    
  

    //
    if (classExist(".lnhr_new_banner__slider")) {
      var swiper = new Swiper(".lnhr_new_banner__slider", {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
    }

    // Testimonial Slider
    if (classExist(".lnhr_new_testimonial__slider")) {
      var swiper = new Swiper(".lnhr_new_testimonial__slider", {
        slidesPerView: 1,
        loop: true,
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
    }

    // Testimonial Slider
    if (classExist(".lnhr_new_reviews__slider")) {
        var swiper = new Swiper(".lnhr_new_reviews__slider", {
          slidesPerView: 1,
          loop: true,
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
      }


    $(window).on("resize", function () {
      mobileAccordion();
      bannerProcedure()
    });

    //
    if (classExist(".wow")) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
      });
      wow.init();
    }

    //

    
  });

   // calculate height of Banner and Procedure
   function bannerProcedure(){
      let bannerHeight = $('.lnhr_new_banner').height();
      let procedureHeight = $('.lnhr_new_procedure_products').height();
      let extraGap = 0;
      $('.lnhr_new_banenr_procedure_wrapper').css({
          height: `${bannerHeight+procedureHeight+extraGap}`,
          width: `${$(window).width()}`,
          position: 'absolute',
          top: '0px',
          left: '0px',
          zIndex: '0'

      })
  }

  // Footer Accordion
  function mobileAccordion() {
    if (window.innerWidth < 768) {
      let accordionWidget = $(".lnhr_new_footer__widget");
      let accordionTitle = $(".lnhr_new_footer__widget_title");
      let accordionContent = $(".lnhr_new_footer__widget_content");
      accordionWidget
        .not(".lnhr_new_footer_social_widget")
        .addClass("lnhr_new_accordion_off");
      accordionWidget
        .not(".lnhr_new_footer_social_widget")
        .find(accordionContent)
        .slideUp();

        $('.lnhr_ac_parent').each(function(e){
            if(!$(this).find('.lnhr_new_footer__widget_content').length){
                $(this).addClass('lnhr_disable_accordion')
            }
        })
      
      accordionTitle.on("click touchend", function (e) {
        
        e.preventDefault();
        let __this = $(this);
        $(this)
          .parent(accordionWidget)
          .toggleClass("lnhr_new_accordion_off");
        $(this)
          .parent(accordionWidget)
          .toggleClass("lnhr_new_accordion_on");
        $(this).siblings(accordionContent).stop().slideToggle();
        $(this)
          .parents(".lnhr_ac_parent")
          .siblings(".lnhr_ac_parent")
          .find(accordionWidget)
          .removeClass("lnhr_new_accordion_on");
        $(this)
          .parents(".lnhr_ac_parent")
          .siblings(".lnhr_ac_parent")
          .find(accordionContent)
          .slideUp();
      });
    }
  }

  $(window).on('load',function () {
    //
    //mobileAccordion()
    //
    $(".lnhr_new_image_compare_loaded").imagesLoaded(function () {
      $(".lnhr_new_image_compare").twentytwenty();
      });
    
  });


})(jQuery);
