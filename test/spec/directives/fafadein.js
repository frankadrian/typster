'use strict';

describe('Directive: faFadeIn', function () {

    // load the directive's module
    beforeEach(module('typesterApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        scope.timerRunning = true;
        element = angular.element('<div fa-fade-in="timerRunning"></div>');
        element = $compile(element)(scope);
        console.log(element);
        console.log('//TODO: make real test');
        //TODO make real test
        expect(element.length).toBe(1);
    }));
});
