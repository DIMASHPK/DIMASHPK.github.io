
$(document).ready(function(){
    $('.slider_wrap').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        speed: 1000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }

            }
        ]
    });

    //burger//
    $(".burger button").on("click", function() {
        $(this).toggleClass("active");
        $("header .nav-panel").slideToggle("slow");
        return false;
    });

});
