(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.hotelPage',[]);

	stayAt.controller('HotelPageController', ['$scope','$firebaseArray','$localstorage','$ionicSlideBoxDelegate','$timeout', function($scope,$firebaseArray,$localstorage,$ionicSlideBoxDelegate,$timeout) {
		var userId = $localstorage.get('userId');
		$scope.hotelname = $localstorage.get('hotelName');
		//console.log(userId);
		//console.log($scope.hotelname);

		var url = "https://hotelboard.firebaseio.com/";
		var ref = new Firebase(url + 'users/' + userId + '/pictures');
				$scope.pictures = $firebaseArray(ref);
			
	}]);

})(angular);