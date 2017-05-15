var app = angular.module("loginApp",['ngRoute','ngCookies']);


app.config(function($routeProvider,$locationProvider) {
	$routeProvider
	.when('/',{
			templateUrl : 'login.html'
	})
	.when('/dashboard',{
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
	//$locationProvider.hashPrefix('');
});
app.controller("loginCtrl", function($scope,$location,loginlogoutService,$rootScope,$cookies){
		var imgsrc={
			name :'fbloginImg',
			flag : 'img/login-fb.png'
		};

		var imgsrclogout = {
			name :'fblogoutImg',
			flag : 'img/logout-fb.png'
		};

	$rootScope.imgsrc=imgsrc;
	$rootScope.imgsrclogout=imgsrclogout;

	$rootScope.facebook={
		username: "",
		email : "",
		fbpic:""
	};
	$scope.onFbLogin=function(){
		loginlogoutService.fbLogin($rootScope,$location,$cookies);
	}

	$scope.onFbLogout=function(){
		loginlogoutService.fbLogout($rootScope,$cookies);
	}	
});

