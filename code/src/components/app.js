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
    // this.onClick = function(video) {
    //   this.currentVideo = video;     
    // };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

  
    this.result = function(data) {  
      console.log(this, data);
      this.currentVideo = data.data.items[0];
      this.videos = data.data.items;
    }.bind(this);
    // this.searcher = function(q, cb) {
    //   youTube.search({
    //     key: window.YOUTUBE_API_KEY, 
    //     query: q,
    //     maxResults: 5
    //   }, cb);
    // }; 
    this.searcher = youTube.search;
  })
  .directive('app', function() { 
    return {
      scope: {},
      controller: 'videoControl',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/app.html',
      restrict: 'E'
    };
  });


