
angular.module('video-player')
  .controller('Player', function(videoService) {
    this.current = videoService.playing;
    this.chooseThis = function(video) {
      this.current = video;
      console.log(video.snippet.title);
      // console.log(videoService.playing.snippet.title)
    };
  })
  .directive('videoPlayer', function() { 
    return {
      controller: 'Player',
      controllerAs: 'ctrl2',
      bindToController: true,
      templateUrl: 'src/templates/videoPlayer.html',
      restrict: 'E'
    };
  });
