angular.module('addyFunkApp', [])
	   .controller('profileController', function($scope) {
	   	var detail = $scope;
	   	detail.show = 1;

      //detail.see = fe;
      $scope.fe = function() {
        document.getElementsByClassName('feList')[0].style.visibility = 'show';
        document.getElementsByClassName('pm')[0].style.visibility = 'hidden';
      };

      var frontEnd = document.getElementsByClassName("frontEnd");
      var backEnd = document.getElementsByClassName("backEnd");

	});


