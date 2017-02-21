app.service("StudentService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"post",

					url:API_BASE.toString()+"insert.php",
					
					params:params

				});
			}


		}; 

});