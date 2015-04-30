angular.module('app.login', [])

.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController'

            });
}])
    .controller('LoginController', ['$scope', '$location', function ($scope, $location) {

        $scope.login = function (username, password) {
            $location.path('/tab/about');
        };
        $scope.register = function (username, password) {
            $scope.username = username;
            $scope.password = password;
        };
        //Authenticate with facebook
        //Authenticate with twitter
        //Authenticate with App Server


}]);
