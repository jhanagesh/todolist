app.factory('loginlogoutService',  function(){
return{

	fbLogin : function($rootScope,$location,$cookies){
	FB.login(function(response){
			if(response.authResponse){
				FB.api('/me','GET',{fields:'email,first_name,name,id,picture'},
						function(response){
							$rootScope.$apply(function(){
							$rootScope.facebook.username = response.name;
							$rootScope.facebook.email = response.email;
							$rootScope.facebook.fbpic = response.picture.data.url;
						});

					});

					//$window.location.assign('/');
					//$location.path('/dashboard').replace();
					//$scope.$apply();
					$cookies.put("isLoggedIn","loginSucess");
					window.location="http://localhost/todolist/dashboard.html";
					
					// $location.path('#/dashboard');

			}else{
				//Not authorized....
			}	
			},{
			$rootScope: 'email,user_likes',
			return_scopes: true
		});		
	},
	fbLogout : function($rootScop95e,$cookies){

		FB.getLoginStatus(function(response) {
			console.log(response);
			
if (response && response.status === 'connected') {

    FB.logout(function(response) {
        /*angular.forEach(response,function(res){
        		console.log(res);
        		res.accessToken="";
        });*/
        document.location.reload();

       
    });
} else if (response.status === 'not_authorized') 
    {
         FB.logout(function(response) {
         	alert(JSON.stringify(response));
        document.location.reload();
        });
         
    }
});
				//$location.path('/');
			
					
					$cookies.remove("isLoggedIn");
					
					
					/*var cookies = $cookies.getAll();
					
					angular.forEach(cookies,function(a,key){
						console.log(key);
						$cookies.remove(c_user);
					});*/
					//console.log();
					window.location="http://localhost/todolist/login.html";

	}
};

/*return{


};*/
			

})