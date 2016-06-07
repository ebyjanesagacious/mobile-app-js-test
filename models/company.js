'use strict';
spaApp_company.factory("servicesCompany", ['$http','$location','$route', 
	function($http,$location,$route) {
    var obj = {};
    obj.getCompanies = function(){
        return $http.get(serviceBase + 'companies?access_token=4b58195dd5808ad99f4b0f1bc96e20731677392c');
    }	
	obj.createCompany = function (company) {
		return $http.post( serviceBase + 'companies?access_token=4b58195dd5808ad99f4b0f1bc96e20731677392c', company )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/company/index');			
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/company/create')
		}
	};	
	obj.getCompany = function(companyID){
        return $http.get(serviceBase + 'companies/' + companyID + '?access_token=4b58195dd5808ad99f4b0f1bc96e20731677392c');
    }
	
	obj.updateCompany = function (company) {
	    return $http.put(serviceBase + 'companies/' + company.id + '?access_token=4b58195dd5808ad99f4b0f1bc96e20731677392c', company )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			//alert(result);
			$location.path('/company/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/company/update/' + company.id )
		}	
	};	
	obj.deleteCompany = function (companyID) {
	    return $http.delete(serviceBase + 'companies/' + companyID + '?access_token=4b58195dd5808ad99f4b0f1bc96e20731677392c')
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$route.reload();
		}
		function errorHandler( result ){
			alert("Error data")
			$route.reload();
		}	
	};	
    return obj;   
}]);