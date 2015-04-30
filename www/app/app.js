angular.module('app', [
  'ionic',
  'ngResource',
  'ngCordova',
  'app.services',
  'app.community.services',
  'app.login',
  'app.oauth.ctrl',
  'app.pets',
  'app.subscribe',
  'app.communities',
  'app.collection',
  'app.item',
  'app.about'
])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'app/app.html'
            });
        $urlRouterProvider.otherwise('/login');

    }]);