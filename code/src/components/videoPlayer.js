
angular.module('video-player')
  .controller('Player', function(videoService, youTube) {
    this.current = videoService.playing;
    this.data = videoService.videos;
    this.chooseThis = function(video) {
      this.current = video;
      // console.log(videoService.playing.snippet.title)
    };
    this.newSearch = function(q) {
      youTube.search({
        key: window.YOUTUBE_API_KEY, 
        query: q,
        maxResults: 5
      }, (data) => {
        this.current = data.data.items[0];
        this.data = data.data.items;
      });
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
