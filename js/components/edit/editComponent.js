app.component('edit', {

  templateUrl: 'js/components/edit/edit.html',
 
  controller:function($scope,$state,FetchService) {
  	 $scope.data={};
 	
 	 $scope.msg = [];

 	 FetchService.find({id:$state.params.id}).then(
		function(res){

			$scope.data = res.data.data;

	});
 	 $scope.submitForm=function() {
 	 if ($scope.user.$valid) {  

 	 		FetchService.edit({data:$scope.data}).then(
			function(res){

//			$scope.msg = res.data.message;
			alert(res.data.message);
			$state.go('list');

		});
 	 
		}
	} 	

 	}
});