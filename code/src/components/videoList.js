angular.module('video-player')
  .directive('videoList', function() {
    
    return {
      controller: function($scope) {
        $scope.data = window.exampleVideoData;
        console.log($scope.data);
      },
      templateUrl: 'src/templates/videoList.html',      
      restrict: 'E'
    };
  });
