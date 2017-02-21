app.service("ListService",function($http,API_BASE){
		return {
			find:function(){
				return $http({
					method:"get",
					url:API_BASE.toString()+"list.php",
				});
			},
			delete:function(params){
				return $http({
					method:"post",
					url:API_BASE.toString()+"edit.php",
					params:params,
				});
			}


		}; 

});