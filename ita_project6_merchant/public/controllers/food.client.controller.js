/**
 * Created by LIAV2 on 8/23/2016.
 */

angular.module('detail').controller('foodController', ['$scope', '$http', '$rootScope', 'Upload', '$timeout', 'merchantService', function ($scope, $http, $rootScope, Upload, $timeout, merchantService) {
    merchantService.merchantInfo();

    $scope.addFoodSuccess = false;

    $scope.addFood = function () {
        var file = $scope.file;

        Upload.upload({
            url: '/food',
            method: "POST",
            data: {
                fName: $scope.fName,
                fPrice: $scope.fPrice
            },
            file: file
        }).then(function (res) {
            var body = res.data;
            if (body.msg == 'SUCCESS') {
                $scope.addFoodSuccess = true;
                // $scope.fName = null;
                // $scope.fPrice = null;
                $timeout(
                    function () {
                        window.location = '/#/food/list';
                    }, 3000);
            } else {
                $scope.addFoodSuccess = false;
            }
        }, function (res) {
            console.log('Error status: ' + res.status);
        }, function (evt) {
            file.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + file.progressPercentage + '% ' + evt.config.file.name);
        });

    }

    $scope.listFood = function () {
        $http.get('/food')
            .then(function (res) {
                var body = res.data;
                console.log(body.data);
                if (body.msg == 'SUCCESS') {
                    $scope.foods = body.data;
                } else {
                    console.log("list food error:" + body.error);
                }
            }, function (err) {
                console.error('list food error : ' + err);
            });
    }

    $scope.updateFoodStatus = function (fId, index) {
        console.log("Food" + fId);
        var req = {
            method: "put",
            url: "/food/" + fId,
        }
        $http(req)
            .then(function (res) {
                $scope.foods[index].fStatus = 2;
            })

    }


    $scope.deleteFood = function (fId, index) {
        var req = {
            method: "delete",
            url: "/food/" + fId,
        }
        $http(req)
            .then(function (res) {
                if (res.data.msg == 'SUCCESS') {
                    $scope.foods.splice(index,1);
                }
            })

    }


}]);