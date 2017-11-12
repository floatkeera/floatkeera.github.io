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

                $('nav').css("top" , "0px")
            } else {
                $('nav').css("top" , "-66px")
            }


        }
    )
    ;
}