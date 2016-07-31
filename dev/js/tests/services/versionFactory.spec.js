describe('Factory: VersionFactory', function () {
    'use strict';

    var VersionFactory;

    beforeEach(module('App'));
    beforeEach(module('App.services'));

    beforeEach(inject(function (_VersionFactory_) {
        VersionFactory = _VersionFactory_;
    }));

    it('should exist', function () {
        expect(VersionFactory).toBeDefined();
    });

    it('should have a method called "getVersion"', function () {
        expect(VersionFactory.getVersion).toBeDefined();
        expect(typeof VersionFactory.getVersion).toBe('function');
    });

});
