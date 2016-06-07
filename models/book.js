'use strict';
spaApp_book.factory("services", ['$http','$location','$route', 
	function($http,$location,$route) {
    var obj = {};
    obj.getBooks = function(){
        return $http.get(serviceBase + 'books?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358');
    }	
	obj.createBook = function (book) {
		return $http.post( serviceBase + 'books?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358', book )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/book/index');			
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/book/create')
		}
	};	
	obj.getBook = function(bookID){
        return $http.get(serviceBase + 'books/' + bookID + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358');
    }
	
	obj.updateBook = function (book) {
	    return $http.put(serviceBase + 'books/' + book.id + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358', book )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			//alert(result);
			$location.path('/book/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/book/update/' + book.id )
		}	
	};	
	obj.deleteBook = function (bookID) {
	    return $http.delete(serviceBase + 'books/' + bookID + '?access_token=b4a6481882a9f4c6d5822a3f8326243cb80ce358')
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