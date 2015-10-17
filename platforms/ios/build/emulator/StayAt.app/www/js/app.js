// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var stayAt = angular.module('StayAt', ['ionic','firebase']);

stayAt.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

stayAt.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
      
    })

    .state('hotelCode', {
      url: '/hotelCode',
      templateUrl: 'templates/hotelCode.html'
        
      
    })

    .state('aroundYou', {
      url: '/aroundYou',
      templateUrl: 'templates/aroundYou.html'
        
      
    })

    .state('about', {
      url: '/about',
      templateUrl: '../templates/about.html'
        
      
    });
    $urlRouterProvider.otherwise('/home');
});

stayAt.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});
