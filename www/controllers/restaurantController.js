(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.restaurant',[]);

	stayAt.controller('RestaurantController', ['$scope','$firebaseArray','$localstorage', function($scope,$firebaseArray,$localstorage) {
		var userId = $localstorage.get('userId');
		$scope.hotelname = $localstorage.get('hotelName');
		
			var url = "https://hotelboard.firebaseio.com/";
			var ref = new Firebase(url + 'users/' + userId + '/Category/Restaurant');

			$scope.menus = $firebaseArray(ref);
		
	}]);
})(angular);