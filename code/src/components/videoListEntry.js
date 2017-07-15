
angular.module('video-player')
  .controller('VideoListEntry', function(videoService) {
    
  })
  
  .directive('videoListEntry', function() {
    return {
      controller: 'VideoListEntry',
      controllerAs: 'ctrl3',
      bindToController: true,
      templateUrl: 'src/templates/videoListEntry.html',
      restrict: 'E'
    };
  });
  
  
  
