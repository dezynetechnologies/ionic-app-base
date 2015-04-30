angular.module('app.item', ['app.community.services'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.item-detail', {
                url: '/items/:itemId',
                views: {
                    'communities-tab': {
                        templateUrl: 'app/items/items.html',
                        controller: 'ItemDetailCtrl'
                    }
                }

            });
    })

.controller('ItemDetailCtrl', ['$scope', '$stateParams', 'CollectionService', 'ItemService', function ($scope, $stateParams, CollectionService, ItemService) {
    console.log('CollectionDetailCtrl called');
    $scope.item = ItemService.getById($stateParams.itemId);
}]);
