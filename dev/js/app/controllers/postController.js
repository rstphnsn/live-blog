angular.module('App.controllers')

.controller('postController', ['$firebaseObject', '$state', function ($firebaseObject, $state) {
    'use strict';

    var vm = this,
        post;
    vm.loaded = false;

    post = firebase.database().ref().child('posts/' + $state.params.postId);
    vm.post = $firebaseObject(post);
    vm.post.$loaded().then(function () {
        vm.loaded = true;
    });

}]);
