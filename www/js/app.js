(function (angular) {
  'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var stayAt = angular.module('StayAt', [
      'ionic',
      'firebase',
      'myApp.maps',
      'myApp.hotelCode',
      'myApp.hotelPage',
      'myApp.facilities',
      'myApp.offers',
      'myApp.events',
      'myApp.restaurant',
      'ngCordova',
      'ngIOS9UIWebViewPatch'

  ]);

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
      templateUrl: 'templates/home.html'
      
      
    })

    .state('hotelCode', {
      url: '/hotelCode',
      templateUrl: 'templates/hotelCode.html',
      controller: 'HotelCodeController'
      
    })

    .state('aroundYou', {
      url: '/aroundYou',
      templateUrl: 'templates/aroundYou.html',
      controller: 'MapController'
        
      
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
        
    })

    .state('hotelPage', {
      url: '/hotelPage',
      templateUrl: 'templates/hotelPage.html',
      controller: 'HotelPageController'
    })

    .state('facilities', {
      url: '/facilities',
      templateUrl: 'templates/facilities.html',
      controller: 'FacilitiesController'
    })

    .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'EventsController'
    })

    .state('offers', {
      url: '/offers',
      templateUrl: 'templates/offers.html',
      controller: 'OffersController'
    })

    .state('restaurant', {
      url: '/restaurant',
      templateUrl: 'templates/restaurant.html',
      controller: 'RestaurantController'
    });

    $urlRouterProvider.otherwise('/home');
});

stayAt.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    remove: function () {
            $window.localStorage.clear();
        }
  }
}]);


})(angular);
