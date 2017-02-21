app.component('list', {

  templateUrl: 'js/components/list/list.html',
 
  controller:function($scope,$state,ListService) {
  	 $scope.records=[];
 	
 	 $scope.msg = [];

 
 	ListService.find().then(
		function(res){
			console.log(res.data.data);
			$scope.records = res.data.data;		
	});
 	
 	$scope.delete=function(id){
 		 var r = confirm("Do you want to delete record ?");
	    if (r == true) {
		   
		    ListService.delete({del_id:id}).then(
			function(res){
				alert(res.data.message);
				$state.reload();
			});
	    
	    } else {
	        
	        
	    }
 		
 	

 	}	 	

 	}
});