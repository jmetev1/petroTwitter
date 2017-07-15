angular.module('video-player')
  
  .controller('ListControl', function(videoService) {
    // this.data = videoService.videos;
  })

  .directive('videoList', function() {
    return {
      controller: 'ListControl',
      controllerAs: 'ctrl',
      bindToController: true,      
      templateUrl: 'src/templates/videoList.html',      
      restrict: 'E'
    };
  });
