/**
 * Created by LIAV2 on 8/23/2016.
 */

angular.module('detail')
    .controller('handleOrderController',['$scope','$http','$rootScope','merchantService',function ($scope,$http,$rootScope,merchantService) {
        merchantService.merchantInfo();
        // if(!$rootScope.permission){
        //     window.location = "./access.html";
        // }

        var req = {
            method:"get",
            url:"order/new"
        };

        $http(req)
            .then(function (res) {
                $scope.orders = res.data.data;
            });

        $scope.sumFun = function (foodList,index) {
            console.log($scope.orders[index]);
            console.log(foodList);
        }
        
        $scope.updateOrderStatus = function (_id,oStatus,index) {
            console.log(_id+"...."+oStatus);
            var req={
                method:"PUT",
                url:"order/"+_id,
                data:{
                    "oStatus":oStatus
                },
                headers:{"Content-type":"application/json"}
            };
            $http(req).then(function (res) {
                console.log(res.data.msg);
                $scope.orders.splice(index,1);
            });
        }
    }])

    .controller('orderController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
        var req = {
            method:"get",
            url:"order"
        };
        $http(req)
            .then(function (res) {
                $scope.myOrders = res.data.data;
            });
        $scope.ishowDetail = false;
        $scope.pointer = -1;
        $scope.showOrhidd = function (index) {
            $scope.total = 0;
            $scope.myOrders[index].foodInfo.forEach(function (f) {
                $scope.total += f.item.fPrice*f.num;
            })
            $scope.ishowDetail = !$scope.ishowDetail;
            $scope.pointer = index;
        }
    }])

    .controller('complainController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
        var req = {
            method:"get",
            url:"order/complaint"
        };
        $http(req)
            .then(function (res) {
                $scope.cOrders = res.data.data;
                console.log("...." +$scope.cOrders);
            });
        $scope.ishowDetail = false;
        $scope.pointer = -1;
        $scope.showOrhidd = function (index) {
            $scope.total = 0;
            $scope.cOrders[index].foodInfo.forEach(function (f) {
                $scope.total += f.item.fPrice*f.num;
            })
            $scope.ishowDetail = !$scope.ishowDetail;
            $scope.pointer = index;
        }

        $scope.ishowComplaint = false;
        $scope.handleResult = 0;
        $scope.complain = function (id, index,msg) {
            $scope.complaintMsg = msg;
            $scope.ishowComplaint = true;
            // console.log(id+"-----"+index);
            var req = {
                method:"get",
                url:"order/"+id
            };
            $http(req)
                .then(function (res) {
                    $scope.handleResult = res.data.data;
                    console.log($scope.handleResult);
                    // console.log("...." +res.data.data);
                });
        }
        $scope.closeModal = function () {
            $scope.ishowComplaint = false;
        }
    }])
