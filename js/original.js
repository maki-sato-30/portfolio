$(function() {
    $('.works-slider').slick({
        autoplay: true,
        fade: true,
        prevArrow: '<img src="img/prev.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="img/next.svg" class="slide-arrow next-arrow">'
    });
});


//hover無効
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
            if (scroll > position - windowHeight + 20) {
                $(this).addClass('active');
            }
        });
        $('.fade-top').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 20) {
                $(this).addClass('active');
            }
        });
        $('.fade-bottom').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 20) {
                $(this).addClass('active');
            }
        });
        $('.fade-left').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 20) {
                $(this).addClass('active');
            }
        });
        $('.fade-right').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 20) {
                $(this).addClass('active');
            }
        });
    });
});
