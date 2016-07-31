angular.module('App.controllers')

.controller('homeController', ['Auth', function (Auth) {
    'use strict';

    var vm = this;

    Auth.isLoggedIn().then(
        function () {
            vm.isLoggedIn = true;
        },
        function () {
            vm.isLoggedIn = false;
        }
    );

}]);
