angular.module('App.controllers')

.controller('loginController', ['$state', 'Auth', function ($state, Auth) {
    'use strict';

    var vm = this;
    vm.errorMessage = false;

    vm.submitHandler = function (loginForm, user) {
        if (loginForm.$valid) {
            vm.errorMessage = false;
            Auth.login(user.email, user.password).then(
                function () {
                    $state.go('home');
                },
                function (error) {
                    vm.errorMessage = error;
                }
            );
        }
    };

}]);
