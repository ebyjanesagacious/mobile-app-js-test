'use strict';
var serviceBase = 'https://api.takeajob.com/v1/'
// Declare app level module which depends on views, and components
var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaApp.site',
  'spaApp.book',
  'spaApp.company',
  'spaApp.country',
  'spaApp.state',
]);
var spaApp_site = angular.module('spaApp.site', ['ngRoute'])
var spaApp_book = angular.module('spaApp.book', ['ngRoute'])
var spaApp_company = angular.module('spaApp.company', ['ngRoute'])
var spaApp_country = angular.module('spaApp.country', ['ngRoute'])
var spaApp_state = angular.module('spaApp.state', ['ngRoute']);

spaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/site/index'});
}]);