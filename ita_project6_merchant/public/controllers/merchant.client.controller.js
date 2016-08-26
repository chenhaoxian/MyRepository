/**
 * Created by LIAV2 on 8/23/2016.
 */

angular.module('detail').controller('merchantController',['$scope','$http','$rootScope','$location','Upload', '$timeout','merchantService','$window',function ($scope,$http,$rootScope,$location,Upload,$timeout,merchantService,$window) {
    merchantService.merchantInfo();
    // if($rootScope.merchantInfo){
    //      window.location = './access.html';
    // }

    // if(!$rootScope.permission){
    //    window.location = "./access.html";
    // }

    $scope.isCorrect =  true;
    $scope.showUpdateSuccess = false;
    $scope.showChangePwdSuccess = false;


    $scope.loadInfo = function () {
        $http.get('/merchant')
            .then(function (res) {
                var body = res.data;
                if(body.msg == 'SUCCESS'){
                    $scope.mInfo = body.data;
                }else{
                    console.error('change password error : ' + body.error);
                }
            })
    }

    
    $scope.updateInfo = function () {
        var file = $scope.file;

        Upload.upload({
            url: '/merchant',
            method: "PUT",
            data: {
                mLocation : $scope.mInfo.mLocation,
                mBrand : $scope.mInfo.mBrand
            },
            file:file
        }).then(function (res) {
            var body = res.data;
            if(body.msg == 'SUCCESS'){
                $scope.showUpdateSuccess = true;
                $timeout(
                    function() {
                        $window.location.reload();
                    }, 3000);

            }else{
                $scope.showUpdateSuccess = false;
                console.log('update merchant info error : ' + body.error);
            }
        }, function (res) {
            console.log('Error status: ' + res.status);
        }, function (evt) {
            file.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + file.progressPercentage + '% ' + evt.config.file.name);
        });


        // var req = {
        //     method:"PUT",
        //     url: "/merchant/"+ $rootScope.merchantInfo._id,
        //     data: {
        //         mLocation : $scope.info.mLocation,
        //         mBrand : $scope.info.mBrand
        //     }
        // };
        // $http(req).then(function (res) {
        //     var body = res.data;
        //     if(body.msg == 'SUCCESS'){
        //         $scope.showUpdateSuccess = true;
        //     }else{
        //         $scope.showUpdateSuccess = false;
        //         console.log('update merchant info error : ' + body.error);
        //     }
        // }, function (err) {
        //     console.error('update merchant info error : ' + err);
        // });

    }

    $scope.checkOldPwd = function () {
        var formData = {mTel: $rootScope.merchantInfo.mTel,mPassword:$scope.oldPwd}
        $http.post('/merchant/checkPassword',formData)
            .then(function (res) {
                var body = res.data;
                if(body.msg == 'SUCCESS'){
                    $scope.isCorrect =  true;
                }else{
                    $scope.isCorrect =  false;
                }
            }, function (err) {
                console.error('check old password error : ' + err);
            });
    }

    $scope.validComPwd = true;
    $scope.checkNewPwd = function () {
        $scope.validComPwd = true;
        var p1 =  $scope.newPwd;
        var p2 = $scope.pwdCon;
        if(p1 != p2){
            $scope.validComPwd = false;
        }
    }


    $scope.changePwd = function () {
        $http.put('/merchant/resetPassword',{mPassword:$scope.newPwd})
            .then(function (res) {
                var body = res.data;
                if(body.msg == 'SUCCESS'){
                    $scope.showChangePwdSuccess = true;
                    $timeout(
                        function() {
                            window.location = '/#/home/info';
                        }, 3000);
                }else{
                    $scope.changeFaild = 'Change password faild!';
                }
            }, function (err) {
                console.error('change password error : ' + err);
            });
    }
}]);