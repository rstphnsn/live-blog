angular.module('App.services')

.factory('VersionFactory', function VersionFactory($q) {
    'use strict';

    var getVersion = function () {
        var versionObj = {
                'version': '0.0.1'
            },
            deferred = $q.defer();
        deferred.resolve(versionObj);
        return deferred.promise;
    };

    return {
        getVersion: getVersion
    };

});
