(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.facilities',[]);

	stayAt.controller('FacilitiesController', ['$scope','$firebaseArray','$localstorage', function($scope,$firebaseArray,$localstorage) {
		var userId = $localstorage.get('userId');
		$scope.hotelname = $localstorage.get('hotelName');

			var url = "https://hotelboard.firebaseio.com/";
			var ref = new Firebase(url + 'users/' + userId + '/Category/Facilities');

			$scope.facilities = $firebaseArray(ref);
			
	}]);
})(angular);