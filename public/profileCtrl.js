angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {

	$scope.getFriends = function() {
		friendService.getFriends().then(function(response) {
			$scope.currentUser = response.currentUser;
			$scope.friends = response.friends;
		})
	}

	$scope.getFriends();

	$scope.deleteFriend = function(removedUser) {
		console.log(removedUser)
		friendService.deleteFriend(removedUser).then(function(response) {
			return response;
			$scope.getFriends();
		})
	}

});
