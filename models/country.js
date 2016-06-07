'use strict';
spaApp_country.factory("services", ['$http','$location','$route', 
	function($http,$location,$route) {
    var obj = {};
    obj.getCountries = function(){
        return $http.get(serviceBase + 'countries?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358');
    }	
	obj.createCountry = function (country) {
		return $http.post( serviceBase + 'countries?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358', country )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/country/index');			
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/country/create')
		}
	};	
	obj.getCountry = function(countryID){
        return $http.get(serviceBase + 'countries/' + countryID + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358');
    }
	
	obj.updateCountry = function (country) {
	    return $http.put(serviceBase + 'countries/' + country.id + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358', country )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			//alert(result);
			$location.path('/country/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/country/update/' + country.id )
		}	
	};	
	obj.deleteCountry = function (countryID) {
	    return $http.delete(serviceBase + 'countries/' + countryID + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358')
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