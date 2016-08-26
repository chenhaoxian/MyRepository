/**
 * Created by LIAV2 on 8/22/2016.
 */
// angular.module('node_test',['ngRoute']).config(['$routeProvider',function ($routeProvider) {
//     $routeProvider.when('/',{
//         templateUrl:'./main.html',
//         controller:'mainController'
//     });
// }])
var app = angular.module('node_route' , ['ngRoute','node_user']);

// angular.module('node_route',['ngRoute','node_user'])
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'message.html'
            })
            .when('/main',{
                templateUrl: 'main.html'
            });
    }]);



