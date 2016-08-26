/**
 * Created by CHENHY on 8/24/2016.
 */
angular.module("detail")
    .config(function ($routeProvider) {
        $routeProvider
            .when("/",{templateUrl:"./detail/home.html",controller:"Home"})
            .when("/product",{templateUrl:"./detail/product.html",controller:"Product"})
            .when("/about",{templateUrl:"./detail/about.html",controller:"About"})
            .otherwise({redirectTo:"/"})
    });