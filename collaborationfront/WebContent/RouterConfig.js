alert("angular js");
var myApp=angular.module("myApp",['ngRoute','ngCookies']);
myApp.config(function($routeProvider){
	
	$routeProvider.when("/Login",{templateUrl:"c_user/Login.html"})
	.when("/signin",{templateUrl:"c_user/Register.html"})
});

alert("create app");