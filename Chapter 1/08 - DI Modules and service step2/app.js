'use strict'

var app = angular.module("myApp", [
    'notifications',
    'Cars'
])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.timeUp = new Date();
    }]);


//registering providers - module as a variable

app.controller("myCtrl", ['$scope', 'Car', function ($scope, Car) {
    Car.start();
}]);


angular.module("Cars", [])
    .factory("Car", function ($log, getNotification) {
        return {
            start: function () {
                $log.info('Starting...' + getNotification.getType);
            }
        }
    });

angular.module("notifications", [])
    .factory("getNotification", function () {
        return {
            getType: 'Car get ready step 2!!!'
        }
    })