

$(function () {
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });
    //
    AOS.init({
        once: true,
    });
    //
    $('.totop').tottTop({
        duration: 500,
        scrtollTopBtnDuration: 50,
        scrollTop: 500


    });
    //

    $('.menu-toggle-btn').click(function () {
        $('.menu-toggle-btn').toggleClass("effect");
        $('.menu-list').toggleClass("effect");
    });

    //
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            10000: {
                items: 1
            }
        }
    });
    //Gán số vào phần dots
    $('.testimonial-carousel .owl-dot span').each(function (index, elem) {
        $(elem).html(index + 1);
    });
    //
    $(function () {
        $('.rotating-slider').rotatingSlider({
            slideHeight: Math.min(360, window.innerWidth - 80),
            slideWidth: Math.min(480, window.innerWidth - 80),
        });
    });
    //
    var timer = 4000;
    var i = 0;
    var max = $('#myCarousel > li').length;

    $("#myCarousel > li").eq(i).addClass('active').css('left', '0');
    $("#myCarousel > li").eq(i + 1).addClass('active').css('left', '25%');
    $("#myCarousel > li").eq(i + 2).addClass('active').css('left', '50%');
    $("#myCarousel > li").eq(i + 3).addClass('active').css('left', '75%');


    setInterval(function () {

        $("#myCarousel > li").removeClass('active');

        $("#myCarousel > li").eq(i).css('transition-delay', '0.25s');
        $("#myCarousel > li").eq(i + 1).css('transition-delay', '0.5s');
        $("#myCarousel > li").eq(i + 2).css('transition-delay', '0.75s');
        $("#myCarousel > li").eq(i + 3).css('transition-delay', '1s');

        if (i < max - 4) {
            i = i + 4;
        }

        else {
            i = 0;
        }

        $("#myCarousel > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
        $("#myCarousel > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
        $("#myCarousel > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
        $("#myCarousel > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');

    }, timer);

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })
    //

    
})



