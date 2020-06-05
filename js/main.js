$(document).ready(function(){
    
    // slick slider

$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    pauseOnDotsHover: true,
    arrows: false,
    rows: 1
});

// to reveal the side menu
    
$('.menu').click(function(){
    $('.sidebar').fadeIn(500, function(){
        $('.menu').fadeOut(500);
    }).addClass('activeSideBar'); 
});
$('.sidebar .fa-times').click(function(){
    $('.sidebar').fadeOut(500, function(){
        $('.menu').fadeIn(500);
    }).removeClass('activeSideBar');
});

// sliders values

var slider = document.querySelectorAll('.input');
var fill = document.querySelectorAll('.hello');
var value = document.querySelectorAll('.skillsValue');

slider.forEach(loop);

function loop(item, i){

    value[i].innerHTML = slider[i].value + '%';
    fill[i].style.width = slider[i].value + '%';
    value[i].style.color = '#fff';

    slider[i].oninput = function() {
        value[i].innerHTML = this.value + '%';
        fill[i].style.width = this.value + '%';
    }
}

// main content's width - sidebar
    var mainWidth = $('.header').css('width');
    var sideWidth = $('.sidebar').css('width');
    var colculatedWidth = parseInt(mainWidth) - parseInt(sideWidth);
$('.menu').click(function (){
    $('.header').animate({width: colculatedWidth});
    $('.header').animate({marginLeft: `${sideWidth}`});
    $('.container').animate({paddingLeft: `${sideWidth}`});
    $('.mySkills .container').animate({margin: '0 0 0 auto'});
    $('.mySkills .container').css({gridTemplateColumns: '270px 270px'});
    $('.mySkills .container').css({gridTemplateRows: '150px repeat(6, 65px)'});
    $('.mySkills_h3').css({gridColumn: '1 / span 2'});
    $('.myAddress .container').css({columnGap: '100px'});
    
})
$('.sidebar .fa-times').click(function(){
    $('.header').css({width: '100%'});
    $('.header').animate({marginLeft: `0px`});
    $('.container').animate({paddingLeft: `0px`});
    $('.mySkills .container').animate({margin: '0 100px 0px auto'});
    $('.mySkills .container').css({gridTemplateColumns: '270px 270px 270px'});
    $('.mySkills .container').css({gridTemplateRows: '165px repeat(4, 65px)'});
    $('.mySkills_h3').css({gridColumn: '1 / span 3'});
    $('.myAddress .container').css({columnGap: '50px'});
})

})

// margin': '0px auto 0px'