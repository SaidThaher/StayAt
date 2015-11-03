(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.events',[]);

	stayAt.controller('EventsController', ['$scope','$firebaseArray','$localstorage', function($scope,$firebaseArray,$localstorage) {
		var userId = $localstorage.get('userId');
		$scope.hotelname = $localstorage.get('hotelName');
		
			var url = "https://hotelboard.firebaseio.com/";
			var ref = new Firebase(url + 'users/' + userId + '/Category/Events');

			$scope.events = $firebaseArray(ref);
			
	}]);
})(angular);