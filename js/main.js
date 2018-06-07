(function ($) {
    $(function () {
        const brusher = new Brusher({
            image: './img/avatar.png',
            keepCleared: true,
            stroke: 20,
            lineStyle: 'square',
            autoBlur: false,
            autoBlurValue: 15,
        });
        // brusher.init();
    });
})(jQuery);