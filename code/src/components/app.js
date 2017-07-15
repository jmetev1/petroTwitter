angular.module('video-player')
  .service('videoService', function() {
    this.videos = window.exampleVideoData;
    this.playing = window.exampleVideoData[0];
    return {
      videos: this.videos,
      playing: this.playing
    };
  })
  

  .controller('videoControl', function(youTube) {
    // var data = window.exampleVideoData;
    this.selectVideo = function() {};
    this.onClick = function(video) {
      this.currentVideo = video;     
    };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

  
    this.chooseThis = function(video) {
      this.current = video;
      // console.log(videoService.playing.snippet.title)
    };
    this.searchResults = function(q) {
      console.log(q);
      youTube.search({
        key: window.YOUTUBE_API_KEY, 
        query: q,
        maxResults: 5
      }, (data) => {
        this.currentVideo = data.data.items[0];
        this.videos = data.data.items;
      });
    }; 
  })


  .directive('app', function() { 
    return {
      scope: {
  
      },
      controller: 'videoControl',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/app.html',
      restrict: 'E'
    };
  });


