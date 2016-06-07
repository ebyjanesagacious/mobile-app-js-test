'use strict';
spaApp_state.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/state/index', {
		templateUrl: 'views/state/index.html',
		controller: 'index'
	})
	.when('/state/create', {
		templateUrl: 'views/state/create.html',
		controller: 'create',
		resolve: {
			country: function(services, $route){
				return services.getCountries();
			}
        }
	})
	.when('/country/update/:countryId', {
		templateUrl: 'views/country/update.html',
		controller: 'update',
		resolve: {
          country: function(services, $route){
            var countryId = $route.current.params.countryId;
            return services.getCountry(countryId);
          }
        }
	})
	.when('/country/delete/:countryId', {
		templateUrl: 'views/country/index.html',
		controller: 'delete',
	})
	.otherwise({
		redirectTo: '/country/index'
	});
}]);

spaApp_country.controller('index', ['$scope', '$http', 'services', 
	function($scope,$http,services) {
	$scope.message = 'Everyone come and see how good I look!';
	//alert(services.getBooks());
	services.getCountries().then(function(data){
		//alert(data.data);
        $scope.countries = data.data;
    });	
	$scope.deleteCountry = function(countryID) {
		if(confirm("Are you sure to delete country number: " + countryID)==true && countryID>0){
			services.deleteCountry(countryID);	
			$route.reload();
		}
	};
}])
.controller('create', ['$scope', '$http', 'services','$location','country', 
	function($scope,$http,services,$location,country) {
	$scope.message = 'Look! I am an about page.';
	$scope.createCountry = function(country) {
        var results = services.createCountry(country);
    }  
}])
.controller('update', ['$scope', '$http', '$routeParams', 'services','$location','country', 
	function($scope,$http,$routeParams,services,$location,country) {
	$scope.message = 'Contact us! JK. This is just a demo.';
	var original = country.data;
	$scope.country = angular.copy(original);
	$scope.isClean = function() {
		return angular.equals(original, $scope.country);
	}
	$scope.updateCountry = function(country) {	
        var results = services.updateCountry(country);
    } 
}]);