$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
        $('.navbar-brand').on("click", function() {
            $(".navbar-brand").removeClass("active");
            $(this).toggleClass('active');
    });
        $('a').on("click", function() {
            $("a").removeClass("active");
            $(this).toggleClass('active');
    });
        $(' .link').on("click", function() {
            $(".link").removeClass("active");
            $(this).toggleClass('active');
    });
        $(' .link-nav').on("click", function() {
            $(".link-nav").removeClass("active");
            $(this).toggleClass('active');
    });
        $(' .link-item').on("click", function() {
            $(".link-item").removeClass("active");
            $(this).toggleClass('active');
    });
});
