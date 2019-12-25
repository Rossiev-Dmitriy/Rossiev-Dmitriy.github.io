/*Слик cлайдер для секции main*/
function mainSlider(){
    $('.main-slider').slick({
        infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
    	responsive: [
            {
    			breakpoint: 1200,
    			settings: {
    				slidesToShow: 1,
    				slidesToScroll: 1
            	}	
            },
            {
                breakpoint: 768,
                settings: "unslick"
            },
        ]
    });
}

mainSlider();
$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth > 769) {
        mainSlider();   
    }
});
/*Слик лайдер для секции производство*/
$('.production-slider_top').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
		responsive: [
	        {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					prevArrow:'<button class="prev arrow production-slider_top__arrow"></button>',
					nextArrow:'<button class="next arrow production-slider_top__arrow"></button>',
	        	}	
	        },
	    ]
});

function productionSliderBottom(){
    $('.production-slider_bottom').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	asNavFor: '.production-slider_top',
    	infinite: true,
    	variableWidth: true,
    	focusOnSelect: true,
    	prevArrow:'<button class="prev arrow"></button>',
    	nextArrow:'<button class="next arrow"></button>',
    	responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
            	}	
            },
            {
                breakpoint: 576,
                settings: "unslick"
            },
        ]
    });
}

productionSliderBottom();
$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth > 576) {
        productionSliderBottom();   
    }
});
/*Слик лайдер для секции отзывы*/
$('.feedback-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	arrows: false,
	responsive: [
		{
		  breakpoint: 991,
		  settings: {
		    centerMode: true,
		    centerPadding: '0px',
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:'<button class="prev arrow feedback-slider__arrow feedback-slider__arrow__left"></button>',
		    nextArrow:'<button class="next arrow feedback-slider__arrow feedback-slider__arrow__right"></button>'
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    centerMode: true,
		    centerPadding: '0px',
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:'<button class="prev arrow feedback-slider__arrow feedback-slider__arrow__left"></button>',
		    nextArrow:'<button class="next arrow feedback-slider__arrow feedback-slider__arrow__right"></button>'
		  }
		}
	]
});
/*Модальные окна*/
/*Форма обратной связи (Получит рассчет)*/
$(document).ready(function(){
	$('.products-button').on("click", function(){
		$('.overlay').show();
	});
	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});
});
/* Заявка на консультацию менеджера (заказать звонок) */
$(document).ready(function(){
	$('.contacts-button').on("click", function(){
		$('.request').show();
	});
	$('.request-close').on("click", function(){
		$('.request').hide();
	});
});
/* Заявка на консультацию менеджера (заказать звонок) */
$(document).ready(function(){
	$('.header-contacts__button').on("click", function(){
		$('.request').show();
	});
	$('.request-close').on("click", function(){
		$('.request').hide();
	});
});
/* Описание продукции */
var modalHeader = document.querySelector('.productDescription-block__header');
var modalImg = document.querySelector('.modal-img');
var textTop = document.querySelector('.productDescription-block__descr__top');
var textBottom = document.querySelector('.productDescription-block__descr__bottom');

	/* Гофрокороб */
$(document).ready(function(){
	$('.product1-btn').on("click", function(){
		//Замена текста и картинки
		modalHeader.innerHTML = "Гофрокороб 4-х клапанный";
		modalImg.src= "img/4_products/box-1.jpg";
		textTop.innerHTML = "<strong>Гофрокороб 4-х клапанный </strong>является самым распространённым и универсальным видом упаковки из гофрокартона, подходящим для хранения и транспортировки продукции. Гофрокороба такого типа бывают стандартными, без верхних клапанов, с перекрывающимися клапанами, короб в составе «крышка – дно». Короба подходят как для ручной сборки, так и для автоматических линий упаковки.";
		textBottom.innerHTML = "При заказе данного вида коробов важно указывать основные параметры:<br>длина (L) х ширина (В) х высота (H) внутренние размеры короба, указанные в миллиметрах.";
		//Появление модального окна
		$('.productDescription').show();
	});
	$('.productDescription-close').on("click", function(){
		$('.productDescription').hide();
	});
});
	/* Гофролоток */
$(document).ready(function(){
	$('.product2-btn').on("click", function(){
		//Замена текста и картинки
		modalHeader.innerHTML = "Гофролоток";
		modalImg.src= "img/4_products/box-2.jpg";
		textTop.innerHTML = "<strong>Гофролоток </strong> - один самых распространённых видов самосборных коробов, который представляет собой поддон с небольшой высотой открытого типа, т.е. не имеющего крышки.";
		textBottom.innerHTML = "Благодаря высокой прочности данной упаковки продукция в гофролотках выдерживает большие нагрузки при штабелировании и ее можно перевозить на большие расстояния без потерь товарного вида.<br>Продукцию в гофролотке удобно представлять в торговом зале для конечного потребителя. Основное распространение получили гофролотки овощные, под птицу, под рыбу, под кондитерские изделия.";
		//Появление модального окна
		$('.productDescription').show();
	});
	$('.productDescription-close').on("click", function(){
		$('.productDescription').hide();
	});
});
	/* Гофрокороб самосборный (сложная высечка) */
$(document).ready(function(){
	$('.product3-btn').on("click", function(){
		//Замена текста и картинки
		modalHeader.innerHTML = "Гофрокороб самосборный <span>(сложная высечка)</span>";
		modalImg.src= "img/4_products/box-3.jpg";
		textTop.innerHTML = "<strong>Гофрокороб самосборный </strong> – вид упаковки из гофрокартона, который представляет собой высеченный по чертежу гофролист. При сборке таких коробов нет необходимости применять дополнительные материалы (как клей, скотч, скобы), что удобно для открывания-закрывания гофрокороба без потери внешнего вида упаковки из картона.";
		textBottom.innerHTML = "Распространённые типы самосборных коробов – короб с крышкой на фиксаторах, лотки с отрытым верхом, короба типа «телевизор», гофроподдоны, короба по типу «крышка - дно», телескопические короба, короба оберточного типа.";
		//Появление модального окна
		$('.productDescription').show();
	});
	$('.productDescription-close').on("click", function(){
		$('.productDescription').hide();
	});
});
	/* Листовой гофрокартон */
$(document).ready(function(){
	$('.product4-btn').on("click", function(){
		//Замена текста и картинки
		modalHeader.innerHTML = "Листовой гофрокартон";
		modalImg.src= "img/4_products/box-4.jpg";
		textTop.innerHTML = "<strong>Производство листового гофрокартона </strong> является основой производственного цикла в «Добрый картон», который в дальнейшем идет на переработку и выпуск изделий таких как гофрокороб, гофролоток, проктадка и т.д.";
		textBottom.innerHTML = "Мы предлагаем к продаже 3-х слойный листовой гофрокартон в листах марок Т21-Т27 профиль С (высота профиля 4 мм) бурого или белого цветов.";
		//Появление модального окна
		$('.productDescription').show();
	});
	$('.productDescription-close').on("click", function(){
		$('.productDescription').hide();
	});
});
