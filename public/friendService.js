angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('http://localhost:3000/api/login', {user: user}).then(function(response) {
        return response
      })
    };


    this.getFriends = function() {
    	return $http.get('http://localhost:3000/api/profile').then(function(response) {
        console.log(response)
        return response.data
      })
    };

    this.deleteFriend = function( removedUser) {
      console.log('service', removedUser);
      return $http.put('http://localhost:3000/api/profile', {thing: removedUser}).then(function(response) {
        return response
      })
    }

});
