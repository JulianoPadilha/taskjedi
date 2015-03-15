'use strict';

app.controller('BrowseController', function($scope, $routeParams, toaster, Task, Auth) {
    
    $scope.searchTask = '';
    $scope.tasks = Task.all;
    $scope.signedIn = Auth.signedIn;
    $scope.listMode = true;

    if($routeParams.taskId) {
        var task = Task.getTask($routeParams.taskId).$asObject();
        $scope.listMode = false; 
        setSelectedTest(task);
    }

    function setSelectedTask(task) {
    	$scope.selectedTask = Task;

    	if($scope.signedIn()) {
    		$scope.isTaskCreator = Task.isCreator;
    		$scope.isOpen = Task.isOpen;
    	}
    }


});