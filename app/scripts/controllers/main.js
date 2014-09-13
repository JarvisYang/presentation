'use strict';

/**
 * @ngdoc function
 * @name presentationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the presentationApp
 */
var presentationApp = angular.module('presentationApp');

  presentationApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    	$scope.screenEnter = ['',''];
	$scope.transfer = '';

 	$scope.screenClick1 = function(){
		$scope.screenEnter[0] = 'screenEnter0';
		$scope.screenEnter[1] = 'screenEnter1';
		//$scope.transfer = 'transferEnter';
		$scope.screenEnter2 = 'screenEnter2';
		$scope.webTextBoxDisplay = {'display':'inline-block'};
		$scope.webTextBoxEnter = 'webTextBoxEnter';
		$scope.textWEnter = 'textWEnter';
		$scope.textEEnter = 'textEEnter';
		$scope.textBEnter = 'textBEnter';
	};
  });
