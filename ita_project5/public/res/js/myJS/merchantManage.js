/**
 * Created by CHENHY on 8/23/2016.
 */

window.imagePathHeader = "";
var mainApp = angular.module("mainApp",[]);
mainApp.controller("MerchantController",function ($scope, $http) {
    var req = {
        method:"GET",
        url:"merchant"
    };
    $http(req)
        .then(function (res) {
            $scope.merchants = res.data;
        });

})