app.service("FetchService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({

					method:"POST",
					url:API_BASE.toString()+"edit.php",
					params:params
				});
			},

			edit:function(params){
				return $http({
					method:"POST",
					url:API_BASE.toString()+"edit.php",
					params:params
				});
			}

		}; 
});