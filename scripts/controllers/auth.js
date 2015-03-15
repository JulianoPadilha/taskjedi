'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

	if(Auth.signedIn()) {
		$location.path('/');
	}
	
	$scope.register = function(user) {
		Auth.register(user).then(function() {
			toaster.pop('success', "Register sucessfully!");
			$location.path('/');
		}, function(err) {
			toaster.pop('error', "Oops, something went wrong!");
		});
	};

	$scope.login = function(user) {

		Auth.login(user)
		.then(function() {
			toaster.pop('success', "Logged in sucessfully!");
			$location.path('/');
		}, function(err) {
			toaster.pop('error', "Oops, something went wrong!");
		});
	};

	$scope.changePassword = function(user) {

		Auth.changePassword(user)
		.then(function() {

			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';

			toaster.pop('success', "Password changed sucessfully!");
		}, function(err) {
			toaster.pop('error', "Oops, something went wrong!");
		});
	};
})