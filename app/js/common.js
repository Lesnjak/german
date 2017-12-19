'use strict';
$(".change-language li").click(function () {
    var val=$(this).html();
    $(".select-button ").html(val);


});
$(".change-month li").click(function () {
    var val=$(this).html();
    $(".select-month ").html(val);
    $('#month-checked').click();


});
$(".change-year li").click(function () {
    var val=$(this).html();
    $(".select-year ").html(val);
    $('#year-checked').click();


});
// $('.change-language').on('mouseleave',function () {
//     $('#menu-open').click();
//     $('#menu-open-footer').click();
// });
// $('form').on('mouseleave',function () {
//     $('.close-form').click();
// });
$('form input').on('mouseover',function () {
    $(this).css('border','none');
});

$('.header-form-top .callBack').on('click',function () {
    var inputName=$('.header-form-top input[name="name"]').val();
    var inputPhone=$('.header-form-top input[name="phone"]').val();
    console.log(inputName);
    if(inputName==""){
        $('.head-name').css('border','1px solid red');
    }
    if(inputPhone==""){
        $('.head-phone').css('border','1px solid red');
    }
    if(inputName && inputPhone){
        event.preventDefault();
        // var http = new XMLHttpRequest(), f = this;
        // http.open("POST", "http://prototypes.agency/contacts.php", true);
        // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // http.send("name=" + f.name.value + "&phone=" + f.phone.value );
        $('form .callBack').parent()[0].click();

    }

});
$('#contacts-form').on('click',function (event) {

    var inputName=$('.contacts-form input[name="name"]').val();
    var inputPhone=$('.contacts-form input[name="phone"]').val();
    if(inputName==""){
        $('.contacts-form input[name="phone"]').css('border','1px solid red');
    }
    if(inputPhone==""){
        $('.contacts-form input[name="name"]').css('border','1px solid red');
    }
    if(inputName && inputPhone){
        event.preventDefault();
     //    var http = new XMLHttpRequest(), f = this;
     //    http.open("POST", "http://prototypes.agency/contacts.php", true);
     //    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     //    http.send("name=" + f.name.value + "&phone=" + f.phone.value + "&email=" + f.email.value + "&area=" + f.area.value );
     $('.popup-window').css('display','block')

    }

});
$('.krest-block img').on('click',function () {
    $('.popup-window').css('display','none')
})

$('.close-menu').on('click',function () {
    $('#input-open-menu').click();
});
//////////////////////slider/////////////////////
$('.service-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,

    responsive: [

        {
            breakpoint: 993,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});
$(' .service-slider1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,

    responsive: [

        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});


///////////////////////////////////paginations//////////////////////////
window.onload = function(){
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
        var go = $(this).attr('href').replace('#!', '');
        if (go === '+1') {
            paginationPage++;
        } else if (go === '-1') {
            paginationPage--;
        }else{
            paginationPage = parseInt(go, 10);
        }
        $('.cdp').attr('actpage', paginationPage);
    });
};

