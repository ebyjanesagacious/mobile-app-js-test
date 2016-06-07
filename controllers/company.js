'use strict';
spaApp_company.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/company/index', {
		templateUrl: 'views/company/index.html',
		controller: 'index'
	})
	.when('/company/create', {
		templateUrl: 'views/company/create.html',
		controller: 'create',
		resolve: {
			company: function(services, $route){
				return services.getCompanies();
			}
        }
	})
	.when('/company/update/:companyId', {
		templateUrl: 'views/company/update.html',
		controller: 'update',
		resolve: {
          company: function(services, $route){
            var companyId = $route.current.params.companyId;
            return services.getCompany(companyId);
          }
        }
	})
	.when('/company/delete/:companyId', {
		templateUrl: 'views/company/index.html',
		controller: 'delete',
	})
	.otherwise({
		redirectTo: '/company/index'
	});
}]);

spaApp_company.controller('index', ['$scope', '$http', 'servicesCompany', 
	function($scope,$http,servicesCompany) {
	$scope.message = 'Everyone come and see how good I look!';
	//alert(services.getBooks());
	servicesCompany.getCompanies().then(function(data){
		//alert(data.data);
        $scope.companies = data.data;
    });	
	$scope.deleteCompany = function(companyID) {
		if(confirm("Are you sure to delete company number: " + companyID)==true && companyID>0){
			servicesCompany.deleteCompany(companyID);	
			$route.reload();
		}
	};
}])
.controller('create', ['$scope', '$http', 'servicesCompany','$location','company', 
	function($scope,$http,servicesCompany,$location,company) {
	$scope.message = 'Look! I am an about page.';
	$scope.createCompany = function(company) {
        var results = servicesCompany.createBook(company);
    }  
}])
.controller('update', ['$scope', '$http', '$routeParams', 'servicesCompany','$location','company', 
	function($scope,$http,$routeParams,servicesCompany,$location,company) {
	$scope.message = 'Contact us! JK. This is just a demo.';
	var original = company.data;
	$scope.company = angular.copy(original);
	$scope.isClean = function() {
		return angular.equals(original, $scope.company);
	}
	$scope.updateCompany = function(company) {	
        var results = servicesCompany.updateCompany(company);
    } 
}]);/**/