(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.hotelCode',[]);

	stayAt.controller('HotelCodeController', ['$scope','$firebaseArray','$location','$ionicPopup','$localstorage', function($scope,$firebaseArray,$location,$ionicPopup,$localstorage) {
		
		//Check the hotel Code 
		$scope.Submit = function(code){

			var hotelcode =  $scope.code.val;

			//Connect to firebase as anonymous
			var ref = new Firebase("https://hotelboard.firebaseio.com/");
				ref.authAnonymously(function(error, authData) {
					  if (error) {
					    console.log("Login Failed!", error);
						  } else {
						    console.log("Authenticated successfully with payload:", authData);
						
						//retriev data from Firebase and check the code validation
						 ref.child('users').orderByChild('HotelCode').on('value',function(snap){
							var keep = false;

							snap.forEach(function(data){
									
									//If valid code, redirect to the Hotel page
									if(hotelcode === data.val().HotelCode){
										
										keep=true;

										$localstorage.set('userId', data.key());
										$localstorage.set('hotelName', data.val().HotelName);
										
										$location.path('/hotelPage');
										$scope.$apply();
										$scope.code.val = null;
									}
								
							});

							if(!keep){
								console.log('zzzzzzzzzz');
								$ionicPopup.alert({
								   	title: 'ERROR',
									template: 'The Code Is Invalid'
								});

							}
						})

						  } 
						  remember: "sessionOnly"
				});
						
		}


	}]);

})(angular);