$(function () {
    //스크롤이 됐을 때 header에 on을 붙인다.
    //스크롤이 0이면 header에서 on을 뺀다.
    //event : click, scroll, wheel, mouseenter, mouseleave, change

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
});

$(function () {

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
});

$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 1000,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });


    $('.main_product_slide').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ],

        arrows: false,
        dots: true,
    });


    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });

});


$(function () {
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_content .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_content .tab_content .con').removeClass('on');
        $('.main_content .tab_content .con').eq(idx).addClass('on');
    });
});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});

$(function () {
    $('.footer #lnk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
});
