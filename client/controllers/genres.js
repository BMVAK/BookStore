var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {

  $scope.getGenres = function() {
    $http.get('/api/genre').success(function(response) {
      $scope.genres = response;
    });
  }

  $scope.addGenre = function() {
    $http.post('/api/genre/', $scope.genre).success(function(response) {
      window.location.href = '#/genre';
    });
  }

}]);
