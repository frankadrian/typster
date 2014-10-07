'use strict';

/**
 * @ngdoc directive
 * @name typesterApp.directive:faFadeIn
 * @description
 *
 */
angular.module('typesterApp')
    .directive('faFadeIn', function ($animate) {
        return function (scope, element, attrs) {
            scope.$watch(attrs.faFadeIn, function (timerRunning) {
                if (timerRunning) {
                    $animate.addClass(element, 'fadeIn');
                } else {
                    $animate.removeClass(element, 'fadeIn');
                }
            });
        };
    });
