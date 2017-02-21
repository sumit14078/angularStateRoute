var app = angular.module('myApp',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider) {
		 $urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
	            url: '/home',
	            templateUrl: 'template/home.html',
        	})
			.state('about', {
				url:'/about',
				templateUrl : 'template/about.html',
				
			})
			.state('list', {
				url:'/list',
				templateUrl : 'template/list.html',
				
			})
			.state('edit', {
				url:'/edit',
				params: {
         		   id: null
        		},
				templateUrl : 'template/edit.html',
				 
				
			})
			.state('contact', {
				url:'/contact',
				templateUrl : 'template/contact.html',
				
			});
			$locationProvider.hashPrefix('');
			
}]);

app.constant({
  
  API_BASE:"http://localhost/webservice/",
//  IMG_BASE:"http://www.smartnarayangaon.com/",
})