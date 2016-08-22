angular.module('addyFunkApp', [])
	   .controller('profileController', function($scope) {
	   	var detail = $scope;
	   	detail.show = 1;

      //detail.see = fe;
      $scope.fe = function() {
        document.getElementsByClassName('feList')[0].style.visibility = 'show';
        document.getElementsByClassName('pm')[0].style.visibility = 'hidden';
      };

      $scope.fe_list = function () {
      }

      function startScrolling(e) {
        console.log(e);
          var top = 400;
          var duration = 2000;

          $scope.scrollTop(top, duration).then(function() {
            console && console.log('You just scrolled to the top!');
          });

          var offset = 30;
          var someElement = angular.element(document.getElementById("second_block"));
          $scope.scrollToElement(someElement, offset, duration);
      };
	});


