
angular.module('video-player')
  .controller('VideoListEntry', function(videoService) {
  })
  
  .directive('videoListEntry', function() {
    return {
      scope: {
        video: '<'
      },
      controller: 'VideoListEntry',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/videoListEntry.html',
      restrict: 'E',
    };
  });
  
  
  
