$(document).ready(function(){
		/*Наведение на стренд*/
			$('.header-stend').hover(
			function(){
			  $('.header-stend > img').attr('src', 'assets/img/1header/stend-1.png');
			},
			function(){
			  $('.header-stend > img').attr('src', 'assets/img/1header/stend.png');
			});
		/*Наведение на navigation*/
			/*box1*/
			$('.box-1').hover(
			function(){
			  $('.shadow-1').attr('src', 'assets/img/2navigation/1-outadver-cola-shadow.png');
			  $('.lime-1').attr('src', 'assets/img/2navigation/1-outadver-cola.png');
			},
			function(){
			  $('.shadow-1').attr('src', 'assets/img/2navigation/1-outadver-pepsi-shadow.png');
			  $('.lime-1').attr('src', 'assets/img/2navigation/1-outadver-pepsi.png')
			});
			/*box2*/
			$('.box-2').hover(
			function(){
			  $('.shadow-2').attr('src', 'assets/img/2navigation/2-inneradvert-cola-shadow.png');
			  $('.lime-2').attr('src', 'assets/img/2navigation/2-inneradvert-cola.png')
			},
			function(){
			  $('.shadow-2').attr('src', 'assets/img/2navigation/2-inneradvert-pepsi-shadow.png');
			  $('.lime-2').attr('src', 'assets/img/2navigation/2-inneradvert-pepsi.png')
			});
			/*box3*/
			$('.box-3').hover(
			function(){
			  $('.shadow-3').attr('src', 'assets/img/2navigation/3-advert-cola-shadow.png');
			  $('.lime-3').attr('src', 'assets/img/2navigation/3-advert-cola.png')
			},
			function(){
			  $('.shadow-3').attr('src', 'assets/img/2navigation/3-advert-pepsi-shadow.png');
			  $('.lime-3').attr('src', 'assets/img/2navigation/3-advert-pepsi.png')
			});
			/*box4*/
			$('.box-4').hover(
			function(){
			  $('.shadow-4').attr('src', 'assets/img/2navigation/4-advert-cola-shadow.png');
			  $('.lime-4').attr('src', 'assets/img/2navigation/4-advert-cola.png')
			},
			function(){
			  $('.shadow-4').attr('src', 'assets/img/2navigation/4-advert-pepsi-shadow.png');
			  $('.lime-4').attr('src', 'assets/img/2navigation/4-advert-pepsi.png')
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
				animateCSS('.ourvideo-close', 'bounce');
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
				animateCSS('.price-close', 'bounce');
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
				animateCSS('.thanks-close', 'bounce');
				$('.thanks-text').text("Прайс-лист отправлен на Ваш e-mail");
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
				animateCSS('.order-close', 'bounce');
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
				animateCSS('.thanks-close', 'bounce');
			});
			$('.thanks-close').on('click', function(event){
				event.preventDefault();
				$('.thanks').fadeOut();
			});
			/*Заказать бесплатную консультацию*/
			$('.contacts-btn').on('click', function(event){
				event.preventDefault();
				$('.consultation').fadeIn();
				animateCSS('.consultation-close', 'bounce');
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
					animateCSS('.thanks-close', 'bounce');
				});
				$('.thanks-close').on('click', function(event){
					event.preventDefault();
					$('.thanks').fadeOut();
				});
			

		});
		/* Скрытые секции*/
		/* Наши услуги*/
		$(document).ready(function(){
			$(".all-services").hide();
			$(".services-box").click(function(){
				$(".all-services").slideToggle(1500);
				/*setTimeout(function () {
					var scrollTop = $('#allserv').offset().top;
				$(document).scrollTop(scrollTop);
				}, 1000);*/
				var offset = 0;
				$('html, body').animate({
					scrollTop: $('#allserv').offset().top - offset 
				    }, 1000);
				         return false; 
			});
			$('.all-services').mouseleave(function(){
				setTimeout(function () {
			  $('.all-services').stop().slideUp(1500);
			}, 1000);
			});
		});
		/* О компании*/
		$(document).ready(function(){
			$(".about-us").hide();
			$(".company-btn").click(function(){
				$(".about-us").slideToggle(2500);
				var offset = 0;
				$('html, body').animate({
					scrollTop: $('#aboutus').offset().top - offset 
				    }, 1000);
				         return false; 
			});
			/*$('.about-us').mouseleave(function(){
				setTimeout(function () {
			  $('.about-us').stop().slideUp(1500);
			 }, 1000);
			});*/
		});
		/* Портфолио */
		$(document).ready(function(){
			$(".portfolio").hide();
			$(".portfolio-btn").click(function(){
				$(".portfolio").slideToggle(3500);
				var offset = 0;
				$('html, body').animate({
					scrollTop: $('#ourportfol').offset().top - offset 
				    }, 1000);
				         return false; 
			});
			$('.portfolio').mouseleave(function(){
				setTimeout(function () {
			  $('.portfolio').stop().slideUp(1500);
			  }, 1000);
			});
		});
		/*Плавный скролл страницы*/
		$('a[href*="#"]').on('click', function (e) {
		  e.preventDefault();
		 
		  $('html, body').animate({
		    scrollTop: $($(this).attr('href')).offset().top
		  }, 500, 'linear');
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