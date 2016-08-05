window.app.run(function ($rootScope, Auth, $state) {
    'use strict';
    console.log('App: Running');

    FastClick.attach(document.body);

    if (window.StatusBar) {
        StatusBar.styleBlackOpaque();
        StatusBar.backgroundColorByName('black');
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $rootScope.user = user;
        } else {
            console.log('Run: Not logged in');
            $rootScope.user = null;
            $state.go('home');
        }
    });

    $rootScope.$on('$stateChangeStart', function (event, next) {
        if (next.access && next.access.requiresLogin) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log('StateChangeStart: Logged in');
                    if (!$rootScope.user) {
                        $rootScope.user = user;
                    }
                    return true;
                } else {
                    event.preventDefault();
                    console.log('StateChangeStart: Not logged in');
                    $state.go('home');
                }
            });
        }
    });

});
