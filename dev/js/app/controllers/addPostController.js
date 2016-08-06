angular.module('App.controllers')

.controller('addPostController', ['$firebaseArray', '$state', function ($firebaseArray, $state) {
    'use strict';

    var vm = this,
        posts,
        postsArray;
    vm.errorMessage = false;
    console.log('logging some shit');

    posts = firebase.database().ref().child('posts');
    postsArray = $firebaseArray(posts);

    vm.submitHandler = function (addPostForm, newPost) {
        if (addPostForm.$valid) {
            postsArray.$add(
                {
                    'title': newPost.title,
                    'body': newPost.body,
                    'timestamp': Date.now()
                }
            ).then(
                function () {
                    $state.go('home');
                },
                function (error) {
                    console.log(error);
                    vm.errorMessage = error;
                }
            );
        }
    };

}]);
