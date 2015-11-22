(function (angular) {
'use strict';
	var stayAt = angular.module('myApp.maps',[]);

	stayAt.controller('MapController', ['$scope','$ionicLoading', function($scope, $ionicLoading) {
 	$scope.initialize = function () {
    //google.maps.event.addDomListener(window, 'load', function() {
    	$scope.markers = [];
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
            $scope.markers.push(myLocation);
        });
 
        $scope.map = map;


    };
 		google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialize());


	 		var input = document.getElementById('mapsearch');
	  var searchBox = new google.maps.places.SearchBox(input);
	  //$scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	  // Bias the SearchBox results towards current map's viewport.
	  $scope.map.addListener('bounds_changed', function() {
	    searchBox.setBounds($scope.map.getBounds());
	  });

	  //var markers = [];
	  // Listen for the event fired when the user selects a prediction and retrieve
	  // more details for that place.
	  
	  searchBox.addListener('places_changed', function() {
	    var places = searchBox.getPlaces();

	    if (places.length == 0) {
	      return;
	    }

	    // Clear out the old markers.
	    $scope.markers.forEach(function(marker) {
	      marker.setMap(null);
	      //marker = null;
	    });
	    $scope.markers = [];

	    // For each place, get the icon, name and location.
	    var bounds = new google.maps.LatLngBounds();
	    places.forEach(function(place) {
	      var icon = {
	        url: place.icon,
	        size: new google.maps.Size(71, 71),
	        origin: new google.maps.Point(0, 0),
	        anchor: new google.maps.Point(17, 34),
	        scaledSize: new google.maps.Size(25, 25)
	      };

	      // Create a marker for each place.
	      $scope.markers.push(new google.maps.Marker({
	        map: $scope.map,
	        icon: icon,
	        title: place.name,
	        position: place.geometry.location
	      }));
	      

	      if (place.geometry.viewport) {
	        // Only geocodes have viewport.
	        bounds.union(place.geometry.viewport);
	      } else {
	        bounds.extend(place.geometry.location);
	      }
	    });
	    $scope.map.fitBounds(bounds);

	  });

}]);

})(angular);