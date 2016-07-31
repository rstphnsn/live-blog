window.app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider

    .state('home',
        {
            url: '/',
            templateUrl: 'templates/home.html'
        }
    )

    .state('post',
        {
            url: '/post/:id',
            templateUrl: 'templates/post.html'
        }
    )

    .state('login',
        {
            url: '/',
            templateUrl: 'templates/login.html'
        }
    )

    .state('admin',
        {
            url: '/',
            templateUrl: 'templates/admin.html',
            access: {
                requiresLogin: true
            }
        }
    )

    .state('add-post',
        {
            url: '/',
            templateUrl: 'templates/add-post.html',
            access: {
                requiresLogin: true
            }
        }
    )

    .state('edit-post',
        {
            url: '/',
            templateUrl: 'templates/edit-post.html',
            access: {
                requiresLogin: true
            }
        }
    );

    $urlRouterProvider.otherwise('/');

}]);
