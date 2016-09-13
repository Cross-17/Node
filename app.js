(function () {
'use strict';

angular.module('lunch', [])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope) {
  $scope.input = "";
  $scope.output = "";
  $scope.calculate = function () {
    var temp = $scope.input.trim();
    if(temp.length == 0)
    {
    $scope.output = "Please enter data first";
    return;
  }
    var coma = 0;
    for (var i = 0; i < $scope.input.length; i++){
      if($scope.input.charAt(i) == ",")
             coma++;
    }
    if(coma>2)
 $scope.output = "Too much!";
else {
  $scope.output = "Enjoy!";
}
  };
}

})();
