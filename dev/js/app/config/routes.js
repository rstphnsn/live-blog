window.app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider

    .state('home',
        {
            url: '/',
            templateUrl: 'templates/home.html'
        }
    )

    .state('page',
        {
            url: '/page',
            templateUrl: 'templates/page.html'
        }
    );

    $urlRouterProvider.otherwise('/');

}]);
