angular.module('video-player')
  .controller('videoControl', function() {
    var data = window.exampleVideoData;
    this.selectVideo = function() {
      
    };
    this.searchResults = function() {

    };
    this.currentVideo = {};
    this.videos = data;
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


