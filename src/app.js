angular.module('WaitstaffCalculator', []);

angular.module('WaitstaffCalculator')
  .controller('WaitstaffCalculatorController', ['$scope', function($scope) {
    
    $scope.customerCharges = {};
    $scope.earningsInfo = {};
    $scope.earningsInfo.tipTotal = 0;
    $scope.earningsInfo.mealCount = 0;

    $scope.submitClicked = function() {
      console.log($scope.mealDetails.basePrice);
      $scope.customerCharges.subTotal = $scope.mealDetails.basePrice * (1 + $scope.mealDetails.taxRate / 100);
      $scope.customerCharges.tip = $scope.mealDetails.basePrice * ($scope.mealDetails.tipPercentage / 100);
      $scope.customerCharges.total = $scope.customerCharges.subTotal + $scope.customerCharges.tip;

      $scope.earningsInfo.tipTotal = $scope.earningsInfo.tipTotal + $scope.customerCharges.tip;
      $scope.earningsInfo.mealCount += 1;
      $scope.earningsInfo.averageTip = $scope.earningsInfo.tipTotal / $scope.earningsInfo.mealCount;
    };

  }]);
