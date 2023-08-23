<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>



// import '@/assets/beone/assets/js/jquery-3.4.1.min.js'
// import '@/assets/beone/assets/js/popper.min.js'
import '@/assets/beone/assets/js/vendor/modernizr-3.5.0.min.js'
import '@/assets/beone/assets/js/vendor/owl.carousel-2.3.4.min.js'
import '@/assets/beone/assets/js/vendor/owl.carousel2.thumbs.min.js'
import '@/assets/beone/assets/js/vendor/waypoints-4.0.1.min.js'
// import '@/assets/beone/assets/js/vendor/colornip.min.js'
import '@/assets/beone/assets/js/vendor/slicknav.min.js'
import '@/assets/beone/assets/js/vendor/jquery.scrollUp.min.js'
import '@/assets/beone/assets/js/vendor/magnific-popup.min.js'
import '@/assets/beone/assets/js/main.js'

import { onMounted } from "vue";

onMounted(() => {
    // runMainScript()
})

const runMainScript = () => {
    (function ($) {
        "use strict";
        $(document).ready(function ($) {

            // tooltip
            // $('[data-toggle="tooltip"]').tooltip()

            // Sticky Menu
            $('.js--sticky-menu').waypoint(function (direction) {
                if (direction == 'down') {
                    $('.header-area').addClass('sticky');
                } else {
                    $('.header-area').removeClass('sticky');
                }
            });
            // Active Menu Color
            $('.main-menu li').on('click', function () {
                $('.main-menu li').removeClass('active');
                $(this).addClass('active');
            });



            // Search Trigger
            $('.search-trigger').on('click', function () {
                $('#search-modal').addClass('show');
                $('.search-overlay').addClass('show');
            });
            $('.search-overlay').on('click', function () {
                $(this).removeClass('show');
                $('#search-modal').removeClass('show');
            });
            // Search Trigger

            // Start Slider Carousel
            $('.slider-carousel').owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                thumbs: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,

            });
            // End Slider Carousel

            // Start Project Carousel
            $('.project-carousel').owlCarousel({
                loop: true,
                dots: false,
                thumbs: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: false,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    992: {
                        items: 4
                    },
                },
            });
            // End Project Carousel //
            // Start Carousel Area
            $('.blog-carousel, .testimonial-carousel').owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                thumbs: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            });
            // End Carousel Area //
            // Start Brand Carousel
            $('.brand-carousel').owlCarousel({
                loop: true,
                dots: false,
                thumbs: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 6
                    },
                },
            });
            // End Brand Carousel

            // Start Slick Nav
            $('#mobile-menu').slicknav({
                prependTo: '.show-mobile-menu',
                allowParentLinks: true
            });
            // End Slick Nav

            //  Scroll Up
            $.scrollUp({
                scrollName: 'scrollUp', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
                activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            });
            //   Scroll Up

            //   Magnific Popup
            $(".video-play").magnificPopup({
                type: 'iframe',
            });
            //   End  Magnific Popup

            // Smooth Scroll for IE/ EDGE/ SAFARI
            $('a').on('click', function (event) {
                if (this.hash !== '') {
                    event.preventDefault();

                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                }
            });
            // End Smooth Scroll for IE/ EDGE/ SAFARI

        });

    })(jQuery);
}



</script>


<style lang="css">
@import '@/assets/beone/assets/css/bootstrap-4.3.1.min.css';
@import '@/assets/beone/assets/css/magnific-popup.css';
@import '@/assets/beone/assets/css/slicknav.min.css';
@import '@/assets/beone/assets/css/owl.carousel-2.3.4.min.css';
@import '@/assets/beone/assets/css/fontawesome-free-5.12.0.min.css';
@import '@/assets/beone/assets/css/default.css';
@import '@/assets/beone/assets/css/style.css';
@import '@/assets/beone/assets/css/responsive.css';
@import '@/assets/beone/assets/css/colornip.min.css';
@import '@/assets/beone/assets/css/theme-colors/theme-default.css';

</style>
