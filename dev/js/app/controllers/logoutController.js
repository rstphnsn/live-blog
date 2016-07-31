angular.module('App.controllers')

.controller('logoutController', ['$state', 'Auth', function ($state, Auth) {
    'use strict';

    var vm = this;

    vm.logout = function () {
        Auth.logout().then(
            function () {
                $state.go('home');
            }
        );
    };

}]);
