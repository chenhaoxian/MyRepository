/**
 * Created by LIAV2 on 8/24/2016.
 */
angular.module("detail",['ngRoute','ngAnimate','ngFileUpload'])
    .service('merchantService', function ($http, $rootScope) {
        var service = {
            merchantInfo: function () {
                $rootScope.imgPath = 'http://zha-ita112-w7:8080/';
                // $rootScope.permission = false;
                var req = {
                    method: "GET",
                    url: "/merchant/loadMerchant"
                };
                $http.get('/merchant/loadMerchant')
                    .then(function (res) {
                        // if(res.data){
                        //     $rootScope.permission = true;
                            $rootScope.merchantInfo = res.data;
                        // }
                        // console.log("service:....."+ $rootScope.merchantInfo);
                    });

            }
        };
        return service;
    })