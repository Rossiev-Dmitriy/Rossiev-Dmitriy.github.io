ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        //myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Добрый картон',
            balloonContent: 'Производство упаковки из гофрокартона'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-icon.png',
            // Размеры метки.
            iconImageSize: [97, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});