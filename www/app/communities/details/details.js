angular.module('app.communities.details', ['app.community.services'])

.config(function ($stateProvider) {
    $stateProvider
        .state('tab.communities-detail', {
            url: '/communities/:communityId',
            views: {
                'communities-tab': {
                    templateUrl: 'app/communities/details/details.html',
                    controller: 'CommunityDetailCtrl'
                }
            }
        });
})

.controller('CommunityDetailCtrl', function ($scope, $stateParams, CommunityService, CollectionService) {
    var community = CommunityService.get($stateParams.communityId);
    var collections = CollectionService.get(community.collections);
    $scope.community = community;
    $scope.collections = collections;
});