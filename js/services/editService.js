app.service("EditService",function($http,API_BASE){
	
			find:function(params){
				return $http({

					method:"POST",
					url:API_BASE.toString()+"edit.php",
					params:params
				});
			}

		 
});