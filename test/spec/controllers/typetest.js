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

    it('should start the timer', function () {
        scope.startTimer();
        expect(scope.timerRunning).toBe(true);
    });

    it('should have a text the user can type', function () {
        expect(scope.previewText.length).toBeGreaterThan(0);
    });

    it('should stop the timer', function () {
        scope.stopTimer();
        expect(scope.timerRunning).toBe(false);
    });
});
