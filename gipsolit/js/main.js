$(document).ready(function(){
				/* Модальные окна */
				/* Получить консультацию */
				$('.popup-btn').on('click', function(event){
					event.preventDefault();
					$('.popup').fadeIn();
				});
				$('.popup-close').on('click', function(event){
					event.preventDefault();
					$('.popup').fadeOut();
				});
				/* Спасибо */
				$('.thanks-btn').on('click', function(event){
					event.preventDefault();
					$('.thanks').fadeIn();
				});
				$('.thanks-close').on('click', function(event){
					event.preventDefault();
					$('form[name=application-form]').trigger('reset');/*Очистка форм*/
					$('.thanks').fadeOut();
				});
				/*Скрытие модального окна для спасибо*/
				$('.selfclose-btn').on('click', function(event){
					event.preventDefault();
					$('.popup').fadeOut();
				});
				/*Монтаж электропроводки*/
				$('.electro-btn').on('click', function(event){
					event.preventDefault();
					$('.electro').fadeIn();
				});
				$('.electro-close').on('click', function(event){
					event.preventDefault();
					$('.electro').fadeOut();
				});
				/*Стяжка пола*/
				$('.floor-btn').on('click', function(event){
					event.preventDefault();
					$('.floor').fadeIn();
				});
				$('.floor-close').on('click', function(event){
					event.preventDefault();
					$('.floor').fadeOut();
				});
				/*Сантехнические услуги*/
				$('.santeh-btn').on('click', function(event){
					event.preventDefault();
					$('.santeh').fadeIn();
				});
				$('.santeh-close').on('click', function(event){
					event.preventDefault();
					$('.santeh').fadeOut();
				});

				/*Калькулятор окно*/
				$('.calculate-btn').on('click', function(event){
					event.preventDefault();
					$('.calculate').fadeIn();
					$('.slide1').show();
				});
				$('.calculate-close').on('click', function(event){
					event.preventDefault();
					$('.calculate').fadeOut();
					/*Прячем слайды, чтобы не появились при повторном открытии калькулятора*/
					$('.slide1').hide();
					$('.slide2').hide();
					$('.slide3').hide();
					$('.slide4').hide();
					/*Прячем li элементы по закрытию*/
					$('.calculate-result').hide();
					$('#zavozmat').hide();
					$('#garant').hide();
					$('#wallpapertoshow').hide();
					/*Сбрасываем выбранные значения*/
					$('#moskow').prop('checked', false);
					$('#oblast').prop('checked', false);
					$('#shpat').prop('checked', false);
					$('#wallp').prop('checked', false);
					$('#mm20').prop('checked', false);
					$('#mm30').prop('checked', false);
					$('#mm40').prop('checked', false);
					$('#clientmat').prop('checked', false);
					$('#ourmat').prop('checked', false);
				});
				$('.calculator-close').on('click', function(event){
					event.preventDefault();
					$('.calculate').fadeOut();
					/*Прячем слайды, чтобы не появились при повторном открытии калькулятора*/
					$('.slide1').hide();
					$('.slide2').hide();
					$('.slide3').hide();
					$('.slide4').hide();
					/*Прячем li элементы по закрытию*/
					$('.calculate-result').hide();
					$('#zavozmat').hide();
					$('#garant').hide();
					$('#wallpapertoshow').hide();
					/*Сбрасываем выбранные значения*/
					$('#moskow').prop('checked', false);
					$('#oblast').prop('checked', false);
					$('#shpat').prop('checked', false);
					$('#wallp').prop('checked', false);
					$('#mm20').prop('checked', false);
					$('#mm30').prop('checked', false);
					$('#mm40').prop('checked', false);
					$('#clientmat').prop('checked', false);
					$('#ourmat').prop('checked', false);
				});
				/*Слайдер калькулятора*/
				$('.slide1-btn').on('click', function(event){
					event.preventDefault();
					if ($('#oblast').is(':checked')||$('#moskow').is(':checked')) {
						$('.slide1').hide();
						$('.slide2').show();
					} else {
						alert("Выберите Ваше расположение");
					}
				});
				$('.slide2-btn').on('click', function(event){
					event.preventDefault();
					if ($('#clientmat').is(':checked')||$('#ourmat').is(':checked')) {
						$('.slide2').hide();
						$('.slide3').show();
					} else {
						alert('Выберите чей материал будем использовать');
					}
				});
				$('.slide3-btn').on('click', function(event){
					event.preventDefault();
					if ($('#shpat').is(':checked')||$('#wallp').is(':checked')) {
						$('.slide3').hide();
						$('.slide4').show();
					} else {
						alert('Выберите как будем штукатурить')
					}
				});
				$('.slide4-btn').on('click', function(event){
					event.preventDefault();
					if ($('#mm20').is(':checked')||$('#mm30').is(':checked')||$('#mm40').is(':checked')) {
					$('.slide4').hide();
					$('.calculate-result').show();
					} else {
						alert('Выберите неровность стен')
					}
				});

				/*Калькулятор*/
				$('.slide4-btn').click(function(){
					var Res = 0;

					var Obl1 = 0;
					var Mat1K = 0;
					var Mat2O = 0;
					var spak1 = 0;
					var oboi1 = 0;
					var ner20 = 0;
					var ner30 = 0;
					var ner40 = 0;

					if ($('#oblast').is(':checked')){
						Obl1 = 50;
					} else {
						Obl1 = 0;
					}
					if ($('#clientmat').is(':checked')){
						Mat1K = 300;
					} else {
						Mat1K = 0;
					}
					if ($('#ourmat').is(':checked')){
						Mat2O = 500;
					} else {
						Mat2O = 0;
					}
					if ($('#shpat').is(':checked')){
						spak1 = 30;
					} else {
						spak1 = 0;
					}
					if ($('#wallp').is(':checked')){
						oboi1 = 60;
					} else {
						oboi1 = 0;
					}
					if ($('#mm20').is(':checked')){
						ner20 = 50;
					} else {
						ner20 = 0;
					}
					if ($('#mm30').is(':checked')){
						ner30 = 100;
					} else {
						ner30 = 0;
					}
					if ($('#mm50').is(':checked')){
						ner40 = 150;
					} else {
						ner40 = 0;
					}

					Res = Obl1 + Mat1K + Mat2O + spak1 + oboi1 + ner20 + ner30 + ner40;
					document.getElementById("results").innerHTML=(Res);
				});   

				/*Выбор москва и область*/
				$(function(){
				    $("#moskow").on("click", function(){
				        document.getElementById("placework").innerHTML="Москва";
				    });
				});
				$(function(){
				    $("#oblast").on("click", function(){
				        document.getElementById("placework").innerHTML="Московская область";
				    });
				});
				/*Выбор материала*/
				$(function(){
				    $("#clientmat").on("click", function(){
				        document.getElementById("materialwork").innerHTML="материал клиента";
				    });
				});
				$(function(){
				    $("#ourmat").on("click", function(){
				        document.getElementById("materialwork").innerHTML="материал фирмы";
				        document.getElementById("zavozmat").style.display="block";
				        document.getElementById("garant").style.display="block";
				    });
				});
				/*Выбор под шпаклевку или под обои*/
				$(function(){
				    $("#shpat").on("click", function(){
				        document.getElementById("methodst").innerHTML="под шпаклевку";
				    });
				});
				$(function(){
				    $("#wallp").on("click", function(){
				        document.getElementById("methodst").innerHTML="под обои";
				        document.getElementById("wallpapertoshow").style.display="block";
				    });
				});
				/*Выбор неровности*/
				$(function(){
				    $("#mm20").on("click", function(){
				        document.getElementById("nerown").innerHTML="20 мм";
				    });
				});
				$(function(){
				    $("#mm30").on("click", function(){
				        document.getElementById("nerown").innerHTML="30 мм";
				    });
				});
				$(function(){
				    $("#mm40").on("click", function(){
				        document.getElementById("nerown").innerHTML="40 мм";
				    });
				});

				/*Слайдер с преимуществами*/
				$('.features-slider').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							prevArrow:'<button class="prev arrow"></button>',
							nextArrow:'<button class="next arrow"></button>'
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							prevArrow:'<button class="prev arrow"></button>',
							nextArrow:'<button class="next arrow"></button>'
						}
					},
						{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							prevArrow:'<button class="prev arrow"></button>',
							nextArrow:'<button class="next arrow"></button>'
						}
					},
					]
				});
				/*Перезапуск анимации при изменении ширины экрана*/
				$(window).resize(function(){
					new WOW().init();
				});
				/*Слайдер с отзывами*/
				$('.feedback-slider').slick({
					prevArrow:'<button class="feedback-slider-btn feedback-prew-btn"><img src="img/feedback/prewArrow.svg"></button>',
					nextArrow:'<button class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/nextArrow.svg"></button>',
					responsive: [
					{
						breakpoint: 524,
						settings: {
							arrows: false,
							dots: true,
						}
					},
					]
				});
				
				/*Слайдер с материалами*/
				$('.materials-slider').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true
						}
					},
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							prevArrow:'<button class="prev arrow"></button>',
							nextArrow:'<button class="next arrow"></button>'
						}
					},
						{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							prevArrow:'<button class="prev arrow"></button>',
							nextArrow:'<button class="next arrow"></button>'
						}
					},
					]
				});
			});