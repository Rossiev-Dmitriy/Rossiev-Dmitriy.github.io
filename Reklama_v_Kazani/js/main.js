$(document).ready(function(){
		/*Наведение на стренд*/
			$('.header-stend').hover(
			function(){
			  $('.header-stend > img').attr('src', 'img/1header/stend-1.png');
			},
			function(){
			  $('.header-stend > img').attr('src', 'img/1header/stend.png');
			});
		/*Наведение на navigation*/
			/*box1*/
			$('.box-1').hover(
			function(){
			  $('.shadow-1').attr('src', 'img/2navigation/1-outadver-cola-shadow.png');
			  $('.lime-1').attr('src', 'img/2navigation/1-outadver-cola.png');
			},
			function(){
			  $('.shadow-1').attr('src', 'img/2navigation/1-outadver-pepsi-shadow.png');
			  $('.lime-1').attr('src', 'img/2navigation/1-outadver-pepsi.png')
			});
			/*box2*/
			$('.box-2').hover(
			function(){
			  $('.shadow-2').attr('src', 'img/2navigation/2-inneradvert-cola-shadow.png');
			  $('.lime-2').attr('src', 'img/2navigation/2-inneradvert-cola.png')
			},
			function(){
			  $('.shadow-2').attr('src', 'img/2navigation/2-inneradvert-pepsi-shadow.png');
			  $('.lime-2').attr('src', 'img/2navigation/2-inneradvert-pepsi.png')
			});
			/*box3*/
			$('.box-3').hover(
			function(){
			  $('.shadow-3').attr('src', 'img/2navigation/3-advert-cola-shadow.png');
			  $('.lime-3').attr('src', 'img/2navigation/3-advert-cola.png')
			},
			function(){
			  $('.shadow-3').attr('src', 'img/2navigation/3-advert-pepsi-shadow.png');
			  $('.lime-3').attr('src', 'img/2navigation/3-advert-pepsi.png')
			});
			/*box4*/
			$('.box-4').hover(
			function(){
			  $('.shadow-4').attr('src', 'img/2navigation/4-advert-cola-shadow.png');
			  $('.lime-4').attr('src', 'img/2navigation/4-advert-cola.png')
			},
			function(){
			  $('.shadow-4').attr('src', 'img/2navigation/4-advert-pepsi-shadow.png');
			  $('.lime-4').attr('src', 'img/2navigation/4-advert-pepsi.png')
			});
			/*Анимация*/
			function animateCSS(element, animationName, callback) {
			    const node = document.querySelector(element)
			    node.classList.add('animated', animationName)
			    function handleAnimationEnd() {
			        node.classList.remove('animated', animationName)
			        node.removeEventListener('animationend', handleAnimationEnd)
			        if (typeof callback === 'function') callback()
			    }

			    node.addEventListener('animationend', handleAnimationEnd)
			}
		/* Модальные окна */
			/* Видео о нас */
			$('.ourvideo-btn').on('click', function(event){
				event.preventDefault();
				$('.ourvideo').fadeIn();
				animateCSS('.ourvideo-close', 'rotateIn');
			});
			$('.ourvideo-close').on('click', function(event){
				event.preventDefault();
				$('.ourvideo').fadeOut();
				$('#ourv').attr('src', $('#ourv').attr('src'));
			});
			/*Заказать прайс-лист*/
			$('.all-services-btn').on('click', function(event){
				event.preventDefault();
				$('.price').fadeIn();
				animateCSS('.price-close', 'rotateIn');
			});
			$('.price-close').on('click', function(event){
				event.preventDefault();
				$('.price').fadeOut();
			});
			/*Спасибо за обращение(заказ прайс листа)*/
			$('.price-btn').on('click', function(event){
				event.preventDefault();
				$('.price').fadeOut();
				$('.thanks').fadeIn();
				animateCSS('.thanks-close', 'rotateIn');
				$('.thanks-text').html("Прайс-лист отправлен <br class='hidden-sm'> на Ваш e-mail");
			});
			$('.thanks-close').on('click', function(event){
				event.preventDefault();
				$('.thanks').fadeOut();
				setTimeout(function () {
				$('.thanks-text').html("Наш специалист свяжется <br> с Вами в ближайшее время");
				}, 1000); 
			});
			/*заказать выезд замерщика*/
			$('.freeserv-btn').on('click', function(event){
				event.preventDefault();
				$('.order').fadeIn();
				animateCSS('.order-close', 'rotateIn');
			});
			$('.order-close').on('click', function(event){
				event.preventDefault();
				$('.order').fadeOut();
			});
			/*Спасибо за обращение(выезд замерщика)*/
			$('.order-btn').on('click', function(event){
				event.preventDefault();
				$('.order').fadeOut();
				$('.thanks').fadeIn();
				animateCSS('.thanks-close', 'rotateIn');
			});
			$('.thanks-close').on('click', function(event){
				event.preventDefault();
				$('.thanks').fadeOut();
			});
			/*Заказать бесплатную консультацию*/
			$('.contacts-btn').on('click', function(event){
				event.preventDefault();
				$('.consultation').fadeIn();
				animateCSS('.consultation-close', 'rotateIn');
			});
			$('.consultation-close').on('click', function(event){
				event.preventDefault();
				$('.consultation').fadeOut();
			});
			/*спасибо за обращение(бесплатная консультация)*/
				$('.consultation-btn').on('click', function(event){
					event.preventDefault();
					$('.consultation').fadeOut();
					$('.thanks').fadeIn();
					animateCSS('.thanks-close', 'rotateIn');
				});
				$('.thanks-close').on('click', function(event){
					event.preventDefault();
					$('.thanks').fadeOut();
				});
		});
		/*Плавный скролл страницы*/
		$('a[href*="#"]').on('click', function (e) {
		  e.preventDefault();
		 
		  $('html, body').animate({
		    scrollTop: $($(this).attr('href')).offset().top
		  }, 1000, 'linear');
		});
		/*Вертикальное меню*/
		$('.header-nav-vertical-btn').click(function(event) {
			if($('.header-nav-vertical-menu').css('display') == 'none')
			{	
				if ($(window).width() < 767){
					$('.hed1').hide();   
					}
				$('.header-nav-vertical-menu').fadeIn();
				$('.menuopen').hide();
				$('.menuclose').show();
			} else {
				if ($(window).width() < 767){
					$('.hed1').show(300);   
					}
				$('.header-nav-vertical-menu').fadeOut();
				$('.menuopen').show();
				$('.menuclose').hide();
			}
		});
		$(window).resize(function(){
		  if ($(window).width() > 991){
		  	$('.header-vertical-nav').hide();   
		  	}
		});
		/*Слик лайдер для секции портфолио*/
		$(document).ready(function(){
			/*Слайдер портфолио */
			$('.portfolio-slider_top').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			});
		});
		function portfolioSliderBottom(){
		    $('.portfolio-slider_bottom').slick({
		    	slidesToShow: 8,
		    	slidesToScroll: 1,
		    	asNavFor: '.portfolio-slider_top',
		    	infinite: true,
		    	variableWidth: true,
		    	focusOnSelect: true,
		    	prevArrow:'<button class="prew arrow"></button>',
				nextArrow:'<button class="next arrow"></button>'
		    });
		}
		portfolioSliderBottom();
		$(window).resize(function(){
		    var $windowWidth = $(window).width();
		    if ($windowWidth > 576) {
		        portfolioSliderBottom();   
		    }
		});