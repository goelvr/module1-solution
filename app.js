(function() {
'use strict';
angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.LunchCheckerMessage = "";
  $scope.excludeBlankItems = true;

  $scope.checkIfTooMuch = function() {
    var message = "";
    var maxItems = 3;
    var totalItems = 0;
    if ($scope.LunchMenu) {
      var items = $scope.LunchMenu.split(",");
      totalItems = getTotalItems(items);
    }

    if (totalItems == 0) {
      message = "Please enter data first";
    } else {
      if (totalItems > maxItems) {
        message = "Too much!";
      } else {
        message = "Enjoy!";
      }
    }

    $scope.LunchCheckerMessage = message;
  };

  function getTotalItems(strArray) {
    var itemCount = 0;
    if ($scope.excludeBlankItems) {
      for (var i=0; i<strArray.length; i++) {
        if (strArray[i]) itemCount++;
      }
    } else {
      itemCount = strArray.length;
    }
    return itemCount;
  }

}


})();
