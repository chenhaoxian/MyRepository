/**
 * Created by LIAV2 on 8/23/2016.
 */

angular.module('detail').controller('mainController',['$scope','$http','$rootScope','Upload', '$timeout','merchantService',function ($scope,$http,$rootScope,Upload,$timeout,merchantService) {
   // merchantService.merchantInfo();
   //  $rootScope.permission = false;

    merchantService.merchantInfo();

    // var req = {
    //     method: "GET",
    //     url: "/merchant/loadMerchant"
    // };
    // $http(req)
    //     .then(function (res) {
    //         $rootScope.permission = true;
    //         $rootScope.merchantInfo = res.data;
    //     })

    // if(!$rootScope.permission){
    //     window.location = "./access.html";
    // }

    $scope.isUc = false;
    $scope.isFc = false;
    $scope.isOc = false;

    $scope.changeUc = function () {
        $scope.isUc = ! $scope.isUc;
    }

    $scope.changeFc = function () {
        $scope.isFc = !$scope.isFc;
    }

    $scope.changeOc = function () {
        $scope.isOc = !$scope.isOc;
    }

    $scope.logout = function () {
        $http.get('/merchant/logout')
            .then(function (res) {
                var body = res.data;
                if(body.msg == 'SUCCESS'){
                    window.location = "./access.html";
                }else {
                    console.log('logout error : ' + body.error);
                }
            }, function (err) {
                console.error('logout error : ' + err);
            });
    }


    // $scope.linkToLogin = function () {
    //     window.location = "./access.html";
    //     $scope.showLogin = true;
    // }

    /*$scope.linkToRegister = function () {
        window.location = "./access.html";
        $scope.showLogin = false;

    }*/


}]);


angular.module('detail').controller('indexController',['$scope','$http','$rootScope','Upload', '$timeout','merchantService',function ($scope,$http,$rootScope,Upload,$timeout,merchantService) {

    $scope.showLogin = true;
    $scope.validPwd = true;
    $scope.showLoginAlert = false;
    $scope.showRegisterAlert = false;
    $scope.isTelExist = false;

    $scope.linkAccess = function () {
        $scope.showLogin = !$scope.showLogin;
    }

    $scope.checkTel = function () {
        $http.get('/merchant/checkTel?mTel='+$scope.mTel)
            .then(function (res) {
                var body = res.data;
                if(body.msg == 'SUCCESS'){
                    $scope.isTelExist = true;
                }else{
                    $scope.isTelExist = false;
                    console.log('check tel error : ' + body.error);
                }
            }, function (err) {
                console.error('check tel error : ' + err);
            });
    }

    $scope.checkConfirmPwd = function () {
        $scope.validPwd = true;
        var p1 =  $scope.mPassword;
        var p2 = $scope.mPassword2;
        if(p1 != p2){
            $scope.validPwd = false;
        }
    }

    $scope.login = function () {
        // var tel = $scope.tel;
        // var pwd = $scope.pwd;
        console.log("in..");
        $http.post('/merchant/login',{mTel:$scope.tel,mPassword:$scope.pwd})
            .then(function (res) {
                var body = res.data;
                if (body.msg == 'SUCCESS') {
                    window.location = "/#/home";
                } else {
                    $scope.showLoginAlert = true;
                    $scope.showLogin = true;
                    console.log('login error : ' + body.error);
                }
            }, function (err) {
                console.error('login error : ' + err);
            });
    }


    $scope.signin = function () {
        // var cfile = $scope.file1;
        var bfile = $scope.file2;
        var mPersonName = $scope.mPersonName
        var mTel = $scope.mTel
        var mPassword = $scope.mPassword
        var mIdCard = $scope.mIdCard;
        var mLocation = $scope.mLocation
        var mBrand = $scope.mBrand


        console.log("000000"+ $scope.mPersonName);
        console.log("000000"+ $scope.mTel);
        console.log("000000"+ $scope.mPassword);
        console.log("000000"+ $scope.mIdCard);
        console.log("000000"+ $scope.mLocation);
        console.log("000000"+ $scope.mBrand);


        Upload.upload({
            url: '/merchant/regist',
            method: "POST",
            data: {
                mPersonName : mPersonName,
                mTel : mTel,
                mPassword : mPassword,
                mIdCard : mIdCard,
                mLocation : mLocation,
                mBrand : mBrand,
                mStark : 10
            },
            file:bfile
        }).then(function (res) {
            var body = res.data;
            // file.result = res.data;
            if(body.msg == 'SUCCESS'){
                window.location = "/#/home";
            }else{
                $scope.showRegisterAlert = true;
                $scope.showLogin = false;
                console.log('register errors : ' + body.error);
            }
        }, function (res) {
            console.log('Error status: ' + res.status);
        }, function (evt) {
            bfile.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + file.progressPercentage + '% ' + evt.config.file.name);
        });
    }




}]);