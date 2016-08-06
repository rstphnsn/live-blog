angular.module('App.controllers')

.controller('navigationController', ['$state', function ($state) {
    'use strict';

    var vm = this;

    vm.login = function () {
        $state.go('login');
    };

    vm.addPost = function () {
        $state.go('add-post');
    };


}]);
