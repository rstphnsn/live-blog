angular.module('App.controllers')

.controller('listPostsController', ['$firebaseArray', function ($firebaseArray) {
    'use strict';

    var vm = this,
        posts;
    vm.loaded = false;

    posts = firebase.database().ref().child('posts');
    vm.posts = $firebaseArray(posts);
    vm.posts.$loaded().then(function () {
        vm.loaded = true;
    });

}]);
