/*
* TODO:
  - validate form fields for numbers as input
  - display numbers using angular filters
  - bootstrap column layout
  - use tables for layout of labels and numbers (e.g. percetages, amounts, etc)
  - push to gh-pages
*/

angular.module('WaitstaffCalculator', ['ngRoute']);

angular.module('WaitstaffCalculator')
  .config(function($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl : './../partials/home.html',
          controller : 'WaitstaffCalculatorController'
      })
      .when('/newMeal', {
          templateUrl : './../partials/newMeal.html',
          controller : 'WaitstaffCalculatorController'
      })
      .when('/myEarnings', {
        templateUrl : './../partials/myEarnings.html',
        controller : 'WaitstaffCalculatorController'
      })
      .when('/error', {
        template : '<p>Error Page Not Found</p>'
      })
      .otherwise({
        redirectTo : '/error'
      })
  })

angular.module('WaitstaffCalculator')
  .controller('WaitstaffCalculatorController', ['$scope', function($scope) {
    
    function intialize() {
      $scope.mealDetails = {};
      $scope.customerCharges = {};
      $scope.earningsInfo = {};
      $scope.earningsInfo.tipTotal = 0;
      $scope.earningsInfo.mealCount = 0;
      $scope.earningsInfo.averageTip = 0;
    }
    intialize();

    $scope.submitClicked = function() {
      $scope.form.submitAttempted = true;
      if($scope.form.$valid) {
        $scope.customerCharges.subTotal = $scope.mealDetails.basePrice * (1 + $scope.mealDetails.taxRate / 100);
        $scope.customerCharges.tip = $scope.mealDetails.basePrice * ($scope.mealDetails.tipPercentage / 100);
        $scope.customerCharges.total = $scope.customerCharges.subTotal + $scope.customerCharges.tip;

        $scope.earningsInfo.tipTotal = $scope.earningsInfo.tipTotal + $scope.customerCharges.tip;
        $scope.earningsInfo.mealCount += 1;
        $scope.earningsInfo.averageTip = $scope.earningsInfo.tipTotal / $scope.earningsInfo.mealCount;
        
        $scope.mealDetails = {};
      }
    };

    $scope.cancelClicked = function() {
      $scope.mealDetails = {};
      $scope.customerCharges = {};
    };

    $scope.resetClicked = function() {
      intialize();
    };

  }]);
