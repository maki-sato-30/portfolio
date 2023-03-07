$(function() {
    $('.works-slider').slick({
        autoplay: true,
        fade: true,
        prevArrow: '<img src="img/prev.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="img/next.svg" class="slide-arrow next-arrow">'
    });
});


//hover無効
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) { }
}

//ページ内リンクスムーススクロール
$('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 550, "swing");
    return false;
});

//アニメーション
$(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
        $('.fade-top').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
        $('.fade-bottom').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
        $('.fade-left').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
        $('.fade-right').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
    });
});
