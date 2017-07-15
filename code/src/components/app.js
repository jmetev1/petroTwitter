angular.module('video-player')
  .service('videoService', function() {
    this.videos = window.exampleVideoData;
    this.playing = window.exampleVideoData[0];
    return {
      videos: this.videos,
      playing: this.playing
    };
  })
  

  .controller('videoControl', function() {
    // var data = window.exampleVideoData;
    // this.selectVideo = function() {};
    // this.onClick = function(video)      
    // };
    // this.searchResults = function() {

    // };
    // this.currentVideo = {};
    // this.videos = data;
  })


  .directive('app', function() { 
    return {
      scope: {
        data: '<'
      },
      controller: 'videoControl',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/app.html',
      restrict: 'E'
    };
  });


