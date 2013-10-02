'use strict';
 /*
var app = angular.module('MyApp', ['ngResource']);
 
app.factory('UserFactory', function($resource){
    return $resource('Users/users.json')
});
 
app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.users = UserFactory.get();
});

*/
var myApp = angular.module('myApp', ['ngResource']);

myApp.factory('UserFactory', function () {
  return { message: "I'm data from a service" };
});

// function FirstCtrl($scope, UserFactory) {
//   $scope.data = UserFactory;
//   $scope.text = 'Hello World!';
// }
myApp.controller('FirstCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.data = UserFactory;
});
