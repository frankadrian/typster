'use strict';

describe('Service: text', function () {

    // load the service's module
    beforeEach(module('typesterApp'));

    // instantiate service
    var text;
    beforeEach(inject(function (_Text_) {
        text = _Text_;
    }));

    it('should have 1 or more texts', function () {
        expect(text.getText().length).toBeGreaterThan(0);
    });

    it('should return a random text', function () {
        expect(typeof text.getRandomText()).toBe('string');
    });

});
