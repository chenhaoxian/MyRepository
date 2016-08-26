/**
 * Created by linxf on 2016/8/21.
 */
angular.module('merchant_app',[]).controller('mainController',['$scope','$http','$rootScope',function mainController($scope,$http,$rootScope) {
    $scope.formData = {};
    $scope.firstName = 'avril';


    $http.get('/user')
        .then(function (res) {
            var body = res.data;
            if (body.msg == 'SUCCESS') {
                $scope.todos = body.data;
            } else {
                alert('get todos error : ' + body.error);
            }
        }, function (err) {
            console.error('get todos error : ' + err);
    });


    $scope.createTodo = function () {
        $http.post('/user',$scope.formData)
            .then(function (res) {
                var body = res.data;
                if (body.msg == 'SUCCESS') {
                    $scope.formData = {};
                    $scope.todos.push(body.data);
                } else {
                    alert('get todos error : ' + body.error);
                }
            }, function (err) {
                console.error('get todos error : ' + err);
            });
    }

    $scope.delFun = function (id,index) {
        $http.delete("/user/"+id)
            .then(function (res) {
                var body = res.data;
                if (body.msg == 'SUCCESS') {
                    $scope.formData = {};
                    $scope.todos.splice(index,1);
                } else {
                    alert('get todos error : ' + body.error);
                }
            }, function (err) {
                console.error('get todos error : ' + err);
            });

    }

    $scope.itemId = '';
    $scope.updateFun = function (uname,age,id) {
        $scope.formData = {uname:uname,age:age};
        $scope.itemId = id;
    }

    $scope.updateTodo = function (id) {
        $http.put('/user/'+id,$scope.formData)
            .then(function (res) {
                var body = res.data;
                if (body.msg == 'SUCCESS') {
                    $scope.todos = body.data;
                } else {
                    alert('get todos error : ' + body.error);
                }
            }, function (err) {
                console.error('get todos error : ' + err);
            });
    }



}]);



