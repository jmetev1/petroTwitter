angular.module('video-player')
/* START SOLUTION */
.controller('VideoPlayerController', function() {
  var self = this;
  this.videoUrl = function() {
    if (self.video) {
      return 'https://www.youtube.com/embed/' + self.video.id.videoId;
    }
  };
})
/* END SOLUTION */
.directive('videoPlayer', function() {
  return {
    /* START SOLUTION */
    scope: {
      video: '<'
    },
    restrict: 'E',
    controller: 'VideoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
    /* ELSE
    // TODO
    END SOLUTION */
  };
});
