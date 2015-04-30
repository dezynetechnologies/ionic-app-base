angular.module('app.communities', [
  'app.communities.details',
  'app.community.services'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('tab.communities-index', {
            url: '/communities',
            views: {
                'communities-tab': {
                    templateUrl: 'app/communities/communities.html',
                    controller: 'CommunityIndexCtrl'
                }
            }
        });
})

.controller('CommunityIndexCtrl', ['$scope', 'CommunityService', function ($scope, CommunityService) {
    $scope.communities = CommunityService.all();
}]);
