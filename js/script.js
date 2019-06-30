$ (function(){
$('.next').click(function(){
	var currentImage = $('.curry');
	var currentImageIndex = $('.curry').index();
	var nextImageIndex = currentImageIndex + 1;
	var nextImage = $('.slider__item').eq(nextImageIndex);
	currentImage.fadeOut(700);
	currentImage.removeClass('curry');
	

if (nextImageIndex == $('.slider__item:last').index()+1){
	$('slider__item').eq(0).fadeIn(700);
	$('slider__item').addClass('curry');
} else {
	nextImage.fadeIn(700);
	nextImage.addClass('curry');
   }
 });

$('.prev').click(function(){
	var currentImage = $('.curry');
	var currentImageIndex = $('.curry').index();
	var nextImageIndex = currentImageIndex - 1;
	var nextImage = $('.slider__item').eq(nextImageIndex);
	currentImage.fadeOut(700);
	currentImage.removeClass('curry');

if (nextImageIndex == $('.slider__item:first').index()-1){
	$('slider__item').eq(3).fadeIn(700);
	$('slider__item').addClass('curry');
} else {
	nextImage.fadeIn(700);
	nextImage.addClass('curry');
   }
 });

// медленно выезжающая менюшка
});
$ (function(){
$ ('.navi__item--menu').click(function(){
$ ('.modal-content__show').hide(10).delay(10).show(500);
  });

$ ('.navi__item--face').click(function(){
$ ('.login__show').hide(10).delay(10).show(500);
  });

$ ('.comments__popup').click(function(){
$ ('.comments__show').hide(10).delay(10).show(500);
  });
});

// popup-menu
 var link = document.querySelector('.navi__item--menu');
 var popup = document.querySelector('.popup-block');
 var close = document.querySelector('.popup-block__close')

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.toggle('modal-content__show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
});

//popup-form-login
 var linkLogin = document.querySelector('.navi__item--face');
 var popupLogin = document.querySelector('.login-popup');
 var closeLogin = document.querySelector('.close-login')

linkLogin.addEventListener("click" , function(event){
	event.preventDefault();
	popupLogin.classList.toggle('login__show');
});
closeLogin.addEventListener("click" , function(event){
	event.preventDefault();
	popupLogin.classList.remove('login__show');
});

 var linkLogin2 = document.querySelector('.popup-block__link--popup');
 var popupLogin2 = document.querySelector('.login-popup');
 var closeLogin2 = document.querySelector('.close-login')

linkLogin2.addEventListener("click" , function(event){
	event.preventDefault();
	popupLogin2.classList.toggle('login__show');
});
closeLogin2.addEventListener("click" , function(event){
	event.preventDefault();
	popupLogin2.classList.remove('login__show');
});

// popup-comments
 var linkComments = document.querySelector('.comments__popup');
 var popupComments = document.querySelector('.comments__form');
 var closeComments = document.querySelector('.comments__close')

linkComments.addEventListener("click" , function(event){
	event.preventDefault();
	popupComments.classList.toggle('comments__show');
});
closeComments.addEventListener("click" , function(event){
	event.preventDefault();
	popupComments.classList.remove('comments__show');
});

