'use strict';

/**
 * @ngdoc function
 * @name presentationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the presentationApp
 */
var presentationApp = angular.module('presentationApp');

  presentationApp.controller('MainCtrl', function ($scope,$timeout,$interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    	$scope.screenClickCount2 = 0;
    	$scope.screenClickCount3 = 0;
    	$scope.screenClickCount4 = 0;
    	$scope.screenEnter = ['',''];
	$scope.transfer = '';

	

 	$scope.screenClick1 = function(){
		$scope.screenEnter[0] = 'screenEnter0';
		$scope.screenEnter[1] = 'screenEnter1';
		//$scope.transfer = 'transferEnter';
		$timeout(function(){
			$scope.screenHide1 = {'display':'none'};
		},1000);
		// $scope.screenStyle2 = {'display':'inline-block'};
		$scope.screenEnter2 = 'screenEnter2';
		$scope.webTextBoxEnter = 'webTextBoxEnter';
		$scope.textWEnter = 'textWEnter';
		$scope.textBEnter = 'textBEnter';

		$timeout($scope.screenClick2,3000);
	};

	$scope.screenClick2 = function(){
		switch($scope.screenClickCount2){
			case 0 :
				$scope.webTextBoxEnter = 'webTextBoxMove';
				$scope.changeTime();
				$scope.screenClickCount2++;
				$timeout($scope.screenClick2,2500);
				break;
			case 1:
				$scope.ieEnter = 'ieEnter';
				$scope.screenClickCount2++;
				$timeout($scope.screenClick2,2000);
				break;
			case 2:
				$scope.screenLeave20 = {'padding':'0px','opacity':'0!important','transform': 'scale(0)','transition':' all 0.5s ease-out'};
				$scope.screenLeave21 =  {'padding':'0px','opacity':0,'transform': 'scale(0)','transition':' all 0.5s ease-out'};
				$scope.screenLeave22 = {'padding':'0px','opacity':0,'transform': 'scale(0)','transition':' all 0.5s ease-out'};
				$timeout(function(){
					$scope.screenStyle2 = {'display':'none'};
					$scope.screenStyle3 = {'top':'0'};
					$scope.screenTextEnter3 = 'screenTextEnter3';
				},500);
				$timeout($scope.screenClick3,3000);
				break;
			}
	};

	$scope.screenClick3 = function(){
		switch($scope.screenClickCount3){
			case 0:
				$scope.screenTextBoxLeave3 = 'screenTextBoxLeave3';
				$scope.product1 = 'productEnter';
				$scope.screenClickCount3++;
				$timeout($scope.screenClick3,1000);
				break;
			case 1:
				$scope.linkShow = 'linkShow';
				$scope.screenClickCount3++;
				$timeout($scope.screenClick3,1500);
			 	break;
			case 2:
				$scope.product1 = '';
				$scope.linkShow = '';
				$scope.product2 = 'productEnter';
				$scope.screenClickCount3++;
				$timeout($scope.screenClick3,1500);
				break;
			case 3:
				$scope.product2 = '';
				$scope.product3 = 'productEnter';
				$scope.screenClickCount3++;
				$timeout($scope.screenClick3,1500);
				break;
			case 4:
				$scope.product3 = '';
				$scope.product4 = 'productEnter';
				$scope.screenClickCount3++;
				$timeout($scope.screenClick3,1500);
				break;
			case 5:
				$scope.product4 = '';
				$timeout(function(){
					$scope.screenStyle3 = {'display':'none'};
					$scope.screenStyle4 = {'top':0};
					$scope.screenTextEnter4 = 'screenTextEnter4';
				},500);
				$timeout($scope.screenClick4,3000);
			}
	};

	$scope.screenClick4 = function(){
		switch($scope.screenClickCount4){
			case 0:
				$scope.screenTextBoxLeave4 = 'screenTextBoxLeave4';
				$scope.future1 = 'productEnter';
				$scope.screenClickCount4++;
				$timeout($scope.screenClick4,1500);
				break;
			case 1:
				$scope.future1 = '';
				$scope.future2 = 'productEnter';
				$scope.screenClickCount4++;
				$timeout($scope.screenClick4,1500);
				break;
			case 2:
				$scope.future2 = '';
				$scope.future3 = 'productEnter';
				$scope.screenClickCount4++;
				$timeout($scope.screenClick4,2000);
				break;
			case 3:
				$scope.future3 = '';
				$scope.screenTextEnter5 = 'screenTextEnter5';
				//$timeout(function(){
				// 	$scope.screenStyle3 = {'display':'none'};
				// 	$scope.screenStyle4 = {'top':0};
				// 	$scope.screenTextEnter4 = 'screenTextEnter4';
				// },500);
			}
	};

	$scope.changeTime = function(){
		var countTime = 120;
		var num = [1,2,3];
		$timeout(function() {
			var setTime = $interval(function(){
				if(countTime > 80){
					num[0] = num[0] === 1?9:num[0]-1;
				}
				else{
					num[0] = 4;
				}
				if(countTime > 40){
					num[1] = num[1] ===9?1:num[1]+1;
				}
				else{
					num[1] = 0;
				}
				if(countTime > 0){
					num[2] = num[2]?num[2]-1:9;
				}
				else{
					num[2] = 0;
				}
				if(countTime < 0){
					$interval.cancel(setTime);
				}
				else{
					$scope.screenChangeTime2 = String(num[0])+String(num[1])+String(num[2])+'kb/s';
				}
				countTime--;
			},5);
		}, 800);
	};

  });
