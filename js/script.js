$(function () {
    if($('.slick').length) {
        $('.slick.main-owl').slick({
            draggable: true,
            arrows: true,
            dots: true,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        });
        $('.slick.dynamics-slick').slick({
            draggable: true,
            arrows: true,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        });
    }

    $('.slick-control .prev').on('click',function(e){
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('.slick-control .next').on('click',function(e){
        e.preventDefault();
        $('.slick-next').trigger('click');
    });
    $('.btn-menu-open').on('click',function(e){
        e.preventDefault();
        $('.wrapper').addClass('menu-open');
        $('.kor-menu ul.menu > li.folder').removeClass('open');
    });

    $('.kor-menu .btn-menu-close').on('click',function(e){
        e.preventDefault();
        $('.wrapper').removeClass('menu-open');
        $('.kor-menu ul.menu > li.folder').removeClass('open');
    });

    $('.kor-menu ul.menu > li.folder').on('click', function (e) {
        e.preventDefault();
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
        }else
        {
            $(this).addClass('open');
            $(this).siblings().removeClass('open');
        }
    });
    $('.show-map').on('click',function(e){
        e.preventDefault();
        $('.map-block').addClass('open');
    });
    $('.map-block .tour-close').on('click',function(e){
        e.preventDefault();
        $('.map-block').removeClass('open');
    });

    $('.kor-news .title').on('click', function () {
        $(this).parent('.news-item').addClass('open');
        $(this).parent('.news-item').siblings().removeClass('open');
    });
    $('.kor-news .btn-menu-close').on('click', function () {
        $(this).parent('.news-item').removeClass('open');
    });
    $('.choise-year li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.dynamics .dynamics-item .zoom').on('click', function () {
        $(this).parents('.dynamics-item').addClass('active');
        $(this).parents('.dynamics-item').siblings().removeClass('active');
    });
    $('.dynamics .dynamics-popup .btn-menu-close').on('click', function () {
        $(this).parents('.dynamics-item').removeClass('active');
    });
    $('.plans__help-icon').on('click', function () {
        $(this).parents('.pano_place').addClass('hidden');
    });
    if($('.bg-tour').length) {
        $('.bg-tour').mCustomScrollbar({
            axis: "x"
        });
        setTimeout(function () {
            $('.bg-tour').mCustomScrollbar('scrollTo','50%');
        },2500);
    }
    if($('.news-item').length) {
        AOS.init();
    }
    if($('.dynamics-item').length) {
        AOS.init();
    }
    $('.flat .bron').on('click',function(e){
        e.preventDefault();
        $('.lw-modal-body.bron-modal').addClass('open');
    });
    $('.lw-modal-body.bron-modal .btn-menu-close').on('click',function(e){
        e.preventDefault();
        $('.lw-modal-body.bron-modal').removeClass('open');
    });
    $('.lw-modal-close').on('click',function(){
        $(this).parents().removeClass('open');
    });

    $('.cont-linck.feedback').on('click',function(){
        $('.contacts-letter-form').parents('.lw-modal-body').addClass('open');
    });
    $('.modal-btn').on('click',function(){
        $('.lw-modal-body').addClass('open')
    });

    if ($( ".ui-slider" ).length) {

        $( "#slider_1" ).slider({
            range: true,
            min:0,
            max: 3,
            step: 1,
            values: [ 1, 2 ],
            slide: function( event, ui ) {
                if(ui.values[ 0 ] === 0)
                {
                    $( "#rooms-min" ).text('Ст.');
                }else
                {

                    $( "#rooms-min" ).text( ui.values[ 0 ] );
                }
                if(ui.values[ 1 ] === 0)
                {
                    $( "#rooms-max" ).text('Ст.');
                }else
                {

                    $( "#rooms-max" ).text( ui.values[ 1 ] );
                }
                setTimeout(function(){
                    $("#rooms-min").attr('style', $('#slider_1 .ui-slider-handle').eq(0).attr('style'));

                    $("#rooms-max").attr('style', $('#slider_1 .ui-slider-handle').eq(1).attr('style'));
                }, 10);

            }
        });
        $("#rooms-min" ).text( $( "#slider_1" ).slider( "values",0 ) );
        $("#rooms-max" ).text( $( "#slider_1" ).slider( "values",1 ) );
        setTimeout(function(){
            $("#rooms-min").attr('style', $('#slider_1 .ui-slider-handle').eq(0).attr('style'));
            $("#rooms-max").attr('style', $('#slider_1 .ui-slider-handle').eq(1).attr('style'));
        }, 10);

        $( "#slider_2" ).slider({
            range: true,
            min: 1,
            max: 17,
            step: 1,
            values: [3, 11 ],
            slide: function( event, ui ) {
                $( "#floor-min" ).text( ui.values[ 0 ] );
                $( "#floor-max" ).text( ui.values[ 1 ] );
                setTimeout(function(){
                    $("#floor-min").attr('style', $('#slider_2 .ui-slider-handle').eq(0).attr('style'));
                    $("#floor-max").attr('style', $('#slider_2 .ui-slider-handle').eq(1).attr('style'));
                }, 10);
            }
        });
        $("#floor-min" ).text( $( "#slider_2" ).slider( "values",0 ) );
        $("#floor-max" ).text( $( "#slider_2" ).slider( "values",1 ) );
        setTimeout(function(){
            $("#floor-min").attr('style', $('#slider_2 .ui-slider-handle').eq(0).attr('style'));
            $("#floor-max").attr('style', $('#slider_2 .ui-slider-handle').eq(1).attr('style'));
        }, 10);

        $( "#slider_3" ).slider({
            range: true,
            min: 18,
            max: 130,
            step: 1,
            values: [ 36, 99 ],
            slide: function( event, ui ) {
                $( "#area-min" ).text( ui.values[ 0 ] );
                $( "#area-max" ).text( ui.values[ 1 ] );
                setTimeout(function(){
                    $("#area-min").attr('style', $('#slider_3 .ui-slider-handle').eq(0).attr('style'));
                    $("#area-max").attr('style', $('#slider_3 .ui-slider-handle').eq(1).attr('style'));
                }, 10);
            }
        });
        $("#area-min" ).text( $( "#slider_3" ).slider( "values",0 ) );
        $("#area-max" ).text( $( "#slider_3" ).slider( "values",1 ) );
        setTimeout(function(){
            $("#area-min").attr('style', $('#slider_3 .ui-slider-handle').eq(0).attr('style'));
            $("#area-max").attr('style', $('#slider_3 .ui-slider-handle').eq(1).attr('style'));
        }, 10);

        $( "#slider_4" ).slider({
            range: "max",
            min: 10000,
            max: 2000000,
            step: 10000,
            value: 500000,
            slide: function( event, ui ) {
                $( "#amount-price" ).text( ui.value );
            }
        });
        $("#amount-price" ).text( $( "#slider_4" ).slider( "value" ) );

        $( "#slider_5" ).slider({
            range: "max",
            min: 0,
            max: 1500000,
            step: 10000,
            value: 200000,
            slide: function( event, ui ) {
                $( "#amount-max" ).val( ui.value );
            }
        });
        $("#amount-max" ).val( $( "#slider_5" ).slider( "value" ) );

        $( "#slider_6" ).slider({
            range: "max",
            min: 0,
            max: 1500000,
            step: 1000,
            value: 50000,
            slide: function( event, ui ) {
                $( "#amount-max-first" ).val( ui.value );
            }
        });
        $("#amount-max-first" ).val( $( "#slider_6" ).slider( "value" ) );

        $( "#slider_7" ).slider({
            range: "max",
            min: 0,
            max: 30,
            step: 1,
            value: 5,
            slide: function( event, ui ) {
                $( "#amount-max-year" ).val( ui.value );
            }
        });
        $("#amount-max-year" ).val( $( "#slider_7" ).slider( "value" ) );


    }


    if($('.sum-credit.price').length) {
        $('.sum-credit.price').each(function(){
            var price=$(this).text();
            if(price)
            {
                price=price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ');
                $(this).text(price);
            }
        });
    }
    if($('.tbody .price.td').length) {
        $('.tbody .price.td').each(function(){
            var price=$(this).text();
            if(price)
            {
                price=price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ');
                $(this).text(price);
            }
        });
    }
});
