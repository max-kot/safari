$(function () {
	$('.first-slider').slick({
		dots: true,
		infinite: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/first/arrow-prev.svg" alt="Previos"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/first/arrow-next.svg" alt="Next"></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					prevArrow: '<button type="button" class="slick-prev"><img src="img/first/arrow-prev-grey.svg" alt="Previos"></button>',
					nextArrow: '<button type="button" class="slick-next"><img src="img/first/arrow-next-grey.svg" alt="Next"></button>',
				}
			},
		],
	});

	/*--- Product sliders ----*/
	$('.product-slider-info').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.product-slider-title',
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					vertical: false,
					swipe: false,
				}
			},
		],

	});
	$('.product-slider-title').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-slider-info',
		arrows: true,
		focusOnSelect: true,
		centerMode: true,
		vertical: true,
		prevArrow: '<button type="button" class="product-slider-title__prev slick-prev"><img src="img/product/prev.svg" alt="Previos"></button>',
		nextArrow: '<button type="button" class="product-slider-title__next slick-next"><img src="img/product/next.svg" alt="Next"></button>',
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					vertical: false,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					vertical: false,
				},

			},
		],
	});

})


/*---Menu---*/
const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu a')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menu.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active');
	})
})

/*---Footer Menu
const footerMenuBtn = document.querySelector('.menu-btn');
const footerMenu = document.querySelector('.footer__menu');

footerMenuBtn.addEventListener('click', function () {
	footerMenu.classList.toggle('active');
	footerMenuBtn.classList.toggle('active');

})---*/

/*-- Video btn ---*/
const videoBtn = document.querySelector('.about__play-btn');
const videoBox = document.querySelector('.about__video-box');
const videoBtnIcon = document.querySelector('.about__play-btn img');
const videoOverlay = document.querySelector('.about__video-overlay')

videoBtn.addEventListener('click', function () {
	// оверлэй c кнопкой исчезает при отводе мыши от видео, а появляется при поялении мыши на видео
	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	};

	if (videoBox.paused) {
		videoBox.play();
		videoBtnIcon.src = 'img/about/pause.svg'; // меняет картинку на картинку с паузой
		videoOverlay.onmouseleave = toggleOverlay; // события мыши при покидании мыши видео
		videoOverlay.onmouseenter = toggleOverlay; // события мыши при появлении мыши на видео

	} else {
		videoBox.pause();
		videoBtnIcon.src = 'img/about/play.svg'; // меняет картинку на картинку с плэем
		videoBox.onmouseleave = null; // отменяет событие
		videoBox.onmouseenter = null; // отменяет событие
	}

})