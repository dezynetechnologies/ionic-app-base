angular.module('app.subscribe', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('tab.subscribe', {
            url: '/subscribe',
            views: {
                'subscribe-tab': {
                    templateUrl: 'app/subscribe/subscribe.html'
                }
            }
        });
});
