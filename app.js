var app = angular.module('myapp', []);

app.controller('mainCtrl', function ($scope) {
  $scope.name = 'jared';
  $scope.friends = ['frank', 'ted', 'steve'];

  $scope.handle = '';
  $scope.addFriend = function () {
    $scope.friends.push($scope.handle);
    $scope.handle = '';
  }
});