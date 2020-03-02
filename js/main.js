



$('.wrap-share').hide();
$('.i-share').click( function () {
    $('.wrap-share').slideToggle(1000);
});

$('nav a').click(function (e) {
    e.preventDefault();
    let mov = $(this).attr('href');
    $(mov).slideDown(1000).siblings().not('.minu').slideUp(1000);
    //$("nav li").addClass(".active").siblings().removeClass()
    
});


$("nav li").click(function (){
    $(this).addClass("active").siblings().removeClass("active");
});


// portfolio

$("#portfolio li").click(function() {

    $(this).addClass("selector").siblings().removeClass("selector");
});









var containerEl = document.querySelector('.myMixin');

var mixer = mixitup(containerEl, {
    animation: {
        effects: 'fade scale(.5)'
    }
});




//var config = document.querySelector('.myMixin');
//var mixer = mixitup(config);