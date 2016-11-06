var myApp = angular.module('myApp');

myApp.controller('PostsController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
  
  $scope.getPosts = function(){
    $http.get('/api/posts').success(function(response){
      $scope.posts = response;
    });
  }

  $scope.getPost = function(){
    var id = $routeParams.id;
    $http.get('/api/posts/'+id).success(function(response){
      $scope.post = response;
    });
  }

  $scope.addPost = function(){
    $http.post('/api/posts/', $scope.post).success(function(response){
      window.location.href='#/posts';
    });
  }

  $scope.editPost = function(){
    var id = $routeParams.id;
    $http.put('/api/posts/'+id, $scope.post).success(function(response){
      window.location.href='#/posts';
    });
  }

  $scope.deletePost = function(id){
    $http.delete('/api/posts/'+id).success(function(response){
      window.location.href='#/posts';
    });
  }
}]);
