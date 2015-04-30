angular.module('app.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var pets = [
            {
                id: 0,
                title: 'Cats',
                description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.'
        },
            {
                id: 1,
                title: 'Dogs',
                description: 'Lovable. Loyal almost to a fault. Smarter than they let on.'
        },
            {
                id: 2,
                title: 'Turtles',
                description: 'Everyone likes turtles.'
        },
            {
                id: 3,
                title: 'Sharks',
                description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        }
  ];

        return {
            all: function () {
                return pets;
            },
            get: function (petId) {
                // Simple index lookup
                return pets[petId];
            }
        };
    })
    .factory('DSpaceTestService', ['$http', '$q', function ($http, $q) {

        var getApiData = function () {
            var q = $q.defer();
            $http.get('https://demo.dspace.org/rest/test')
                .success(function (data) {
                    console.log('Got some data:', data);
                    q.resolve(data);
                })
                .error(function (error) {
                    console.log('Had an error');
                    q.reject(error);
                });
            return q.promise;
        };
        return {
            getApiData: getApiData
        };


}])
    .factory('DSpaceLoginService', ['$http', function ($http) {
        var dspaceKey = "STORAGE.DSPACE.KEY";

        function storeUserToken(data) {
            window.localStorage.setItem(dspaceKey, JSON.stringify(data));
        }

        function getStoredToken() {
            return window.localStorage.getItem(dspaceKey);
        }
        return {
            authenticate: function (username, password) {

            }
        };


}]);