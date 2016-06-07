'use strict';
spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'index'
	})
	/*.when('/site/login', {
		templateUrl: 'views/site/login.html',
		controller: 'login'
	})*/
	.when('/site/login', {
		templateUrl: 'views/site/login.html',
		controller: 'loginController'
	})	
	.when('/site/about', {
		templateUrl: 'views/site/about.html',
		controller: 'about'
	})
	.when('/site/contact', {
		templateUrl: 'views/site/contact.html',
		controller: 'contact'
	})
	.otherwise({
		redirectTo: '/site/index'
	});
}])
.controller('index', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
}])
.controller('about', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Look! I am an about page.';
}])
.controller('contact', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Contact us! JK. This is just a demo.';
}])

/*.controller('login', ['$scope', '$resource', '$http', '$httpParamSerializer', '$cookies', function($scope, $resource, $http, $httpParamSerializer, $cookies) {
    $scope.data = 
      {grant_type:"password", username: "", password: "", client_id: "clientIdPassword"};
    $scope.encoded = btoa("clientIdPassword:secret");
	
	alert($scope.encoded);
     
    $scope.login = function() {   
        var req = {
            method: 'POST',
            url: "https://api.takeajob.com/oauth2/token?grant_type=client_credentials",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }
        $http(req).then(function(data){
            $http.defaults.headers.common.Authorization= 'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            window.location.href="index";
        });   
   } 
   }]);   */
   		.controller("loginController",function($scope, $location){
   $scope.login = function() {
   	if($scope.emailorphone == 'admin' && $scope.password == 'admin'){
   		$location.path("site/index");
   }
   //window.history.back();
};
   		$(".emailId").click(function(){
			$(".phone").attr('src', 'assets/images/email.png');
			$('.mobile').addClass("emailId");
			$('.mobile').removeClass("mobile");
			$(this).removeClass("emailId");
			$(this).addClass("mobile");
			$('.emailorphone').attr('type','email');
			$('.emailorphone').attr('placeholder','Enter Your Email Address');
		});

		$(".mobile").click(function(){
			$(".phone").attr('src', 'assets/images/mobile.png');
			$('.mobile').addClass("emailId");
			$('.emailId').removeClass("mobile");
			$(this).removeClass("emailId");
			$(this).addClass("mobile");
			$('.emailorphone').attr('type','tel');
			$('.emailorphone').attr('placeholder','Enter Your Mobile Number');
		});

		$('.showhidepwd').click(function(){
			var toggleText = $('.password').attr('type');
			alert(toggleText);
			if(toggleText == 'password'){
				$('.password').attr('type','text');
				$('.showhidepwd').text('Hide');
			}else{
				$('.password').attr('type','password');
				$('.showhidepwd').text('Show');
			}
		});

		
		$(document).on('focusout', '.emailorphone', function(){
			var emailorphone = $('.emailorphone').val();
			if(emailorphone == ''){
				//$('.formfields').closest('.emailorphone').find('.ep-message').text('Phone or email cannot be empty');
				$('.ep-message').text('Phone or email cannot be empty');
				$('.ep-message').css('color', 'red');
			}else{
				//$('.formfields').closest('.emailorphone').find('.ep-message').text('');
				$('.ep-message').text('');
			}
		});

		$(document).on('focusout', '.password', function(){
			var password = $('.password').val();
			if(password == ''){
				//$('.formfields2').closest('.password').find('.password-message').text('Password cannot be empty');
				$('.password-message').text('Password cannot be blank');
				$('.password-message').css('color', 'red');
			}else{
				//$('.formfields2').closest('.password').find('.password-message').text('');
				$('.password-message').text('');
			}
		});
		$('.login2').click(function(){
			var emailorphone = $('.emailorphone').val();
			if(emailorphone == ''){
				//$('.formfields').closest('.emailorphone').find('.ep-message').text('Phone or email cannot be empty');
				$('.ep-message').text('Phone or email cannot be empty');
				$('.ep-message').css('color', 'red');
			}else{
				//$('.formfields').closest('.emailorphone').find('.ep-message').text('');
			/*	var type = $('.emailorphone').attr('type');
				if(type == 'email'){
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
				var epb =regex.test(emailorphone);
				alert(epb)
				if(epb){
					alert(456)
					$('.ep-message').text('Email is not a valid email address.');
					$('.ep-message').css('color', 'red');
				}else{
					$('.ep-message').text('Email is not a valid email address.');
					$('.ep-message').css('color', 'red');
				}
			}*/
				
				$('.ep-message').text('');
			}
			var password = $('.password').val();
			if(password == ''){
				//$('.formfields2').closest('.password').find('.password-message').text('Password cannot be blank');
				$('.password-message').text('Password cannot be empty');
				$('.password-message').css('color', 'red');
			}else{
				//$('.formfields2').closest('.password').find('.password-message').text('');
				$('.password-message').text('');
			}
		});
	});