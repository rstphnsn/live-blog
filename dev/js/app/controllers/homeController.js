angular.module('App.controllers')

.controller('HomeController', ['$firebaseArray', 'store', function ($firebaseArray, store) {
    'use strict';

    var vm = this,
        users;
    vm.title = 'Login';
    vm.login = true;
    vm.thanks = false;
    vm.position = '';

    var updatePosition = function (key) {
        vm.position = vm.users.$indexFor(key);
    };

    var init = function () {
        updatePosition(store.get('userKey'));
    };

    var cleanup = function () {
        console.log(store.get('userKey'), vm.position);
        if (store.get('userKey') && vm.position === -1) {
            store.remove('userKey');
            vm.thanks = true;
        } else {
            vm.thanks = false;
        }
    };

    vm.addUser = function () {
        if (vm.newUser !== '') {
            vm.users.$add({
                "name": vm.newUser.name,
                "problem": vm.newUser.problem
            }).then(function (ref) {
                store.set('userKey', ref.key);
                updatePosition(ref.key);
            });
        }
        vm.newUser = {};
    };

    users = firebase.database().ref().child('users');
    vm.users = $firebaseArray(users);
    vm.users.$loaded().then(function () {
        init();
    });
    
    vm.users.$watch(function (e) {
        if (e.event === 'child_removed') {
            updatePosition(store.get('userKey'));
            cleanup();            
        } else {
            vm.thanks = false;
        }
    });
    
}]);
