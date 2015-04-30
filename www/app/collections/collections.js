angular.module('app.collection', ['app.community.services'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.collection-detail', {
                url: '/collections/:collectionId',
                views: {
                    'communities-tab': {
                        templateUrl: 'app/collections/collections.html',
                        controller: 'CollectionDetailCtrl'
                    }
                }

            });
    })

.controller('CollectionDetailCtrl', ['$scope', '$stateParams', 'CollectionService', 'ItemService', function ($scope, $stateParams, CollectionService, ItemService) {
    console.log('CollectionDetailCtrl called');
    var collection = CollectionService.getById($stateParams.collectionId);
    var items = ItemService.get(collection.items);

    $scope.collection = collection;
    $scope.items = items;
}]);