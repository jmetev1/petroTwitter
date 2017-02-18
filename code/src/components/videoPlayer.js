angular.module('a-new-scope')
.directive('videoPlayer', function() {
  return {
    scope: {
      'props': '<video'
    },
    restrict: 'E',
    controller: function() {
      this.videoUrl = function(videoId){
        return `https://www.youtube.com/embed/${videoId}`
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  }
});
