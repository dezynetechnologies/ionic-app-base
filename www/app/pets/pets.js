angular.module('app.pets', [
  'app.pets.details',
  'app.services'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('tab.pet-index', {
            url: '/pets',
            views: {
                'pets-tab': {
                    templateUrl: 'app/pets/pets.html',
                    controller: 'PetIndexCtrl'
                }
            }
        });
})

.controller('PetIndexCtrl', ['$scope', 'PetService', 'DSpaceTestService', function ($scope, PetService, DSpaceTestService) {
    $scope.pets = PetService.all();
    DSpaceTestService.getApiData()
        .then(function (result) {
            $scope.dspaceRestApi = result.data;
        })
}]);
