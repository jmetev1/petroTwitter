angular.module('video-player')
  .controller('VideoListEntry', function($scope) {
    $scope.chooseThis = function() {
    };
    // $scope.title = 
    // $scope.desc = 'watch this hawk fail at life';
  })
  .directive('videoListEntry', function() {
    return {
      templateUrl: 'src/templates/videoListEntry.html',
      restrict: 'E'
    };
  });
