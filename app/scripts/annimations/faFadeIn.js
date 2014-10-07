(function () {
    'use strict';
    angular.module('typesterApp')
        .animation('.fadeIn', function () {
            return {
                addClass: function (element, className) {
                    TweenLite.to(element, 1.5, {css: {alpha: 1, height: '100%'}});
                },
                removeClass: function (element, className) {
                    TweenLite.to(element, 1.5, {css: {alpha: 0, height: '0%'}});
                }
            };
        });
})();
