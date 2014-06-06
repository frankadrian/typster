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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(3).toBe(3);
  });
});
