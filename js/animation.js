//スライダーの設定
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1500,
    dotsClass: "slide-dots",
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

// ハンバーガー
$('.h-menu-toggle').on('click', function () {
    $('.h-menu-toggle, .h-menu').toggleClass('show');
    $('html').toggleClass('scroll');
});

//ページ内リンクスムーススクロール
$('a[href^="#"]').on('click', function () {
    // .h-menuと.h-menu-toggleのクラス'show'を取り除く
    $('.h-menu, .h-menu-toggle').removeClass('show');
    // スクロール制限を解除
    $('html').removeClass('scroll');
    
    // 以下は既存のスムーススクロールの処理
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 550, "swing");
    return false;
});

//タッチデバイスhover無効
addEventListener('DOMContentLoaded', function() {
    if (isTouchDevice()) {
        for (var i in document.styleSheets)
            if (document.styleSheets.hasOwnProperty(i)) {
                deleteRuleHover(document.styleSheets[i]);
            }
    }

    function isTouchDevice() {
        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints || navigator.msMaxTouchPoints;
    }

    function deleteRuleHover(styleSheet) {
        try {
            var rules = styleSheet.cssRules || styleSheet.rules;
            if (rules) {
                for (var i = rules.length; i--;) {
                    var text = rules[i].selectorText;
                    if (/:hover/.test(text)) {
                        //console.log(text);
                        styleSheet.deleteRule(i);
                    }
                }
                for (var i = rules.length; i--;) deleteRuleHover(rules[i]);
            }
        } catch (ex) {
            //console.log(ex);
        }
    }
});

//fadeInアニメーション
$(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            }
        });
    });
});