angular.module('App.controllers')

.controller('editPostController', ['$firebaseObject', '$state', function ($firebaseObject, $state) {
    'use strict';

    var vm = this,
        post;
    vm.loaded = false;
    vm.errorMessage = false;

    post = firebase.database().ref().child('posts/' + $state.params.postId);
    vm.post = $firebaseObject(post);
    vm.post.$loaded().then(function () {
        vm.loaded = true;
    });

    vm.submitHandler = function (editPostForm) {
        if (editPostForm.$valid) {
            vm.post.$save().then(
                function () {
                    $state.go('post', {
                        postId: $state.params.postId
                    });
                },
                function (error) {
                    vm.errorMessage = error;
                }
            );
        }
    };

}]);
