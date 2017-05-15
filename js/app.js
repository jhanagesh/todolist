
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '203667293476989',
      xfbml      : true,
      version    : 'v2.9',
      status     : true
    });
 	FB.getLoginStatus(function(response){

 		if(response.status==='connected'){
 			//alert("logedIn");
 		}else if(response.status==='not_authorized'){
 			//not auth
 			alert("not auth");
 		}else{
 			// Not logedIn
 			//alert("Not logedIn");
 		}

 	});
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
