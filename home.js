$(document).ready(function () {
    navbarController();
});

var OFFSET = 400;
function navbarController() {
    var triggerPosition = $('.nav-trigger').position().top + OFFSET;
    console.log(triggerPosition)
    $(window).on("scroll", function () {
            var scrollPosition = scrollY || pageYOffset;
            if (scrollPosition > triggerPosition) {
                console.log("triggered!")

                $('nav').addClass('navbar-fixed-top').removeClass('navbar');
            } else {
                $('nav').addClass('navbar').removeClass('navbar-fixed-top');
            }


        }
    )
    ;
}