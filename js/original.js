$(function() {
    $('.skills-slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        arrows:false,
        centerMode: true,
        initialSlide: 3,
        variableWidth: true
    });
});

$(function() {
    $('.works-slider').slick({
        autoplay: true,
        fade: true,
        prevArrow: '<img src="../img/prev.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="../img/next.svg" class="slide-arrow next-arrow">'
    });
});