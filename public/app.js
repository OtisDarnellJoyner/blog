var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'PostsController',
    templateUrl: 'views/posts.html'
  })
  .when('/posts', {
    controller:'PostsController',
    templateUrl: 'views/posts.html'
  })
  .when('/posts/details/:id', {
    controller:'PostsController',
    templateUrl:'views/post_details.html'
  })
  .when('/posts/add', {
    controller:'PostsController',
    templateUrl:'views/add_posts.html'
  })
  .when('/posts/edit/:id', {
    controller:'PostsController',
    templateUrl:'views/edit_posts.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
