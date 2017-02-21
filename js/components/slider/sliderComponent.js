app.component('sliderSlider', {

  templateUrl: 'js/components/slider/slider.html',
 
  controller:function($scope,StudentService) {
  	 $scope.data={}
 	 $scope.name = 'slider';
 	 $scope.msg = [];
 	 console.log($scope.name);
 	 $scope.submitForm=function() {
 	 if ($scope.user.$valid) {  

 	 StudentService.find({data: $scope.data}).then(
				function(res){
					console.log(res.data.status);
					$scope.msg = res.data.status;
					//$scope.submitForm.$setPristine();
				});
 	 	
 	 }
 	}

 	}
});