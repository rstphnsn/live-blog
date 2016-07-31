angular.module('App.services')

.factory('Auth', function ($q, $rootScope, $firebaseAuth) {

    var auth = $firebaseAuth(),

    login = function (email, password) {
        return auth.$signInWithEmailAndPassword(email, password).then(function (user) {
            $rootScope.user = user;
            return user;
        });
    },

    logout = function () {
        var deferred = $q.defer();
        if ($rootScope.user) {
            $rootScope.user = null;
        }
        deferred.resolve(auth.$signOut());
        return deferred.promise;
    },

    isLoggedIn = function () {
        var deferred = $q.defer();
        auth.$onAuthStateChanged(function (user) {
            if (user) {
                $rootScope.user = user;
                deferred.resolve($rootScope.user);
            } else {
            deferred.reject();
            }
        });
        return deferred.promise;
    },

    getUser = function () {
        return $rootScope.user;
    };

    return {
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getUser: getUser

    };

});