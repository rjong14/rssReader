angular.module('rssReader.services', [])

    .factory('Users', ['$http', function($http) {

        var users = [];

        return {
            all : function($scope){
                $http.get('http://188.166.74.119:8080/users')
                    .success(function(data){
                        $scope.users = data.data;
                    })
                    .error(function(data){
                        console.log(data);
                    });
                return users;
            }
        }
    }])
