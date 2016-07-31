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
            url: '/post/:postId',
            templateUrl: 'templates/post.html'
        }
    )

    .state('login',
        {
            url: '/login',
            templateUrl: 'templates/login.html'
        }
    )

    .state('add-post',
        {
            url: '/add-post',
            templateUrl: 'templates/add-post.html',
            access: {
                requiresLogin: true
            }
        }
    )

    .state('edit-post',
        {
            url: '/edit-post/:postId',
            templateUrl: 'templates/edit-post.html',
            access: {
                requiresLogin: true
            }
        }
    );

    $urlRouterProvider.otherwise('/');

}]);
