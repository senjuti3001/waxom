$(function(){
 // service slider
 $('.service-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

 // service slider
 $('.brand-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

// back to top
$('.back-to-top').click(function(){
$('html, body').animate({scrollTop:0}, 1500);
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 300){
    $('.back-to-top').fadeIn(500);
  }
  else {
    $('.back-to-top').fadeOut(500);
  }

  if(scrolling > 200){
    $('.navbar').addClass('bg');
  }
  else {
    $('.navbar').removeClass('bg');
  }
});


// video
$('.venobox').venobox(); 

var scroll = new SmoothScroll('a[href*="#"]');

// counter
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// gallery filter
var containerEl = document.querySelector('.filters');
var mixer = mixitup(containerEl);




})