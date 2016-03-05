var myModule = angular.module('myApp', ['ngRoute'])

myModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/landing.html',
            controller: 'landingController',
            controllerAs: 'landingControl'
        })
})