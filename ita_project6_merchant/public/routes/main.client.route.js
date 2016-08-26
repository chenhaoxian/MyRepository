/**
 * Created by LIAV2 on 8/23/2016.
 */

angular.module('detail')
    .config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'/views/message.html',
            controller: 'mainController'
        })
        .when('/home/info',{
            templateUrl : '/views/info.html',
            controller: 'merchantController'
        })
        .when('/home/grade',{
            templateUrl : '/views/grade.html',
            controller: 'merchantController'
        })
        .when('/home/pwd',{
            templateUrl : '/views/changePwd.html',
            controller : 'merchantController'
        })
        .when('/food/list',{
            templateUrl:'/views/listFood.html',
            controller: 'foodController'
        })
        .when('/food/new',{
            templateUrl : '/views/addFood.html',
            controller: 'foodController'
        })
        .when('/order',{
            templateUrl:'/views/listOrder.html',
            controller: "orderController"
        })
        .when('/order/pick',{
            templateUrl : '/views/pickOrder.html',
            controller: "handleOrderController"
        })
        .when('/order/complain',{
            templateUrl : '/views/complainOrder.html',
            controller: "complainController"
        }).otherwise({
            redirectTo: '/home'
        });

}]);