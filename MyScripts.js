jQuery(function($){
   // $ = jQuery regardless of what it means
   // outside this DOM ready function
});

new VenoBox({
  selector: '.my-link',
  numeration: true,
  infinigall: false,
  maxWidth: '40%',
  share: true,
  spinner: 'rotating-plane'
});

var primary_color = $(':root').css('--primary-color')
var secondary_color = $(':root').css('--secondary-color')
var bg_white = $(':root').css('--bg-white')
var bg_grey = $(':root').css('--bg-grey')
var text_grey = $(':root').css('--text-grey')
var links = $(':root').css('--links')
var flag1 = true
var flag2 = true
$('#navLogoImg').click(function changeColors() {

  if (flag1) {
    $(':root').css('--primary-color', $(':root').css('--primary-colorDark'));
    $(':root').css('--secondary-color', $(':root').css('--secondary-colorDark'));
    $(':root').css('--links', '#e58c12');
    flag1 = false
  }
  else {
    $(':root').css('--primary-color', primary_color);
    $(':root').css('--secondary-color', secondary_color);
    flag1 = true
  }
})



$('#DarkMode').click(function changeTheme() {
  if (flag2) {
    $(':root').css('--bg-white', $(':root').css('--bg-dark-white'));
    $(':root').css('--bg-grey', $(':root').css('--bg-dark-grey'));
    $(':root').css('--text-grey', $(':root').css('--text-white'));
    $(':root').css('--links', '#e58c12');
    flag2 = false
  }
  else {
    $(':root').css('--bg-white', bg_white);
    $(':root').css('--bg-grey', bg_grey);
    $(':root').css('--text-grey', text_grey);
    $(':root').css('--links', links);
    flag2 = true
  }
})



let abtOffset = $('#about').offset().top
function ToggleThis(button) {
  var container = button.parentNode;
  var iframe = container.querySelector('.MyIframe');
  var iframeId = iframe.id;
  $('#' + iframeId).toggle(1000)
}

particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

var prevScrollPos = window.pageYOffset;
var navbar = $('.navbar');

$(window).scroll(function () {
  var currentScrollPos = $(window).scrollTop();

  if (prevScrollPos > currentScrollPos) {
    navbar.removeClass('navbar-hidden').addClass('navbar-visible');

  } else {
    navbar.removeClass('navbar-visible').addClass('navbar-hidden');
  }

  prevScrollPos = currentScrollPos;

  if (currentScrollPos >= abtOffset) {
    $('#MyNav').css('backgroundColor', 'rgba(0, 0, 0, 0.9)')
    $('#scroller').fadeIn()
    $('#scroller2').fadeIn()
  }
  else {
    $('#MyNav').css('backgroundColor', 'transparent')
    $('#scroller').fadeOut()
    $('#scroller2').fadeOut()
  }
});


$(".TitleLink").hover(function (e) {
  $(this).toggleClass('animated tada', e.type === 'mouseenter');
});
$(".scroller").hover(function (e) {
  $(this).toggleClass('animated tada', e.type === 'mouseenter');
});
$(".scroller2").hover(function (e) {
  $(this).toggleClass('animated tada', e.type === 'mouseenter');
});

var audio = document.getElementById("myAudio");
var audFlag = false
$('#scroller2').click(function playAudio() {
  if (audFlag == false) {
    audio.play();    
    audFlag = true;
  }else{
    audio.pause();  
    audFlag = false;
  }
})



function firstAnim() {
  $('#navLogoImg').addClass('animated rollIn')
  $('#ImgLogo').addClass('animated rollIn')
  $('#MyH1').addClass('animated zoomInDown')
  $('#HeadDesc').addClass('animated zoomInDown')

}











$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});

$(document).ready(() => {
  new WOW().init();
  
  $('#loading').fadeOut(500, firstAnim())
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
})
