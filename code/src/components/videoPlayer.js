angular.module('video-player')
  .directive('videoPlayer', function() {
    return {
      controller: function($scope) {
        $scope.current = window.exampleVideoData[0];
      },
      templateUrl: 'src/templates/videoPlayer.html',
      restrict: 'E'
    };
  });
