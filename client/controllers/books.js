var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log('BooksController loaded');
  $scope.getBooks = function() {
    $http.get('/api/book').success(function(response) {
      $scope.books = response;
    });
  }

  $scope.getBook = function() {
    var id = $routeParams.id;
    $http.get('/api/book/' + id).success(function(response) {
      $scope.book = response;
    });
  }

  $scope.addBook = function() {
    $http.post('/api/book/', $scope.book).success(function(response) {
      window.location.href = '#/book';
    });
  }

}]);
