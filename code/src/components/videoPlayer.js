angular.module('a-new-scope')
/* START SOLUTION */
.controller('VideoPlayerController', function() {
  this.videoUrl = function(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
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
