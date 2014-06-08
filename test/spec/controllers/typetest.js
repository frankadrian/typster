'use strict';

describe('Controller: TypetestCtrl', function () {

    // load the controller's module
    beforeEach(module('typesterApp'));

    var TypetestCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TypetestCtrl = $controller('TypetestCtrl', {
            $scope: scope
        });
    }));

    it('should have a start timer function', function () {
        //expect(scope.awesomeThings.length).toBe(3);
        expect(scope.startTimer).toBeDefined();
    });

    it('should have a stop timer function', function () {
        //expect(scope.awesomeThings.length).toBe(3);
        expect(scope.stopTimer).toBeDefined();
    });
});
