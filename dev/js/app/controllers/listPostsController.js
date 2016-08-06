angular.module('App.controllers')

.controller('listPostsController', ['$firebaseArray', '$state', function ($firebaseArray, $state) {
    'use strict';

    var vm = this,
        posts;
    vm.loaded = false;

    posts = firebase.database().ref().child('posts');
    vm.posts = $firebaseArray(posts);
    vm.posts.$loaded().then(function () {
        vm.loaded = true;
    });

    vm.showPost = function (postId) {
        $state.go('post', {
            postId: postId
        });
    };

}]);
