angular.module('video-player')
.controller('AppCtrl', function($window/* START SOLUTION */, youTube/* END SOLUTION */) {

  // TODO: what is the starting point for this sprint?
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];

  /* START SOLUTION */
  var self = this;
  this.searchService = youTube;
  this.searchResults = function(data) {
    self.videos = data;
    self.currentVideo = self.videos[0];
  };

  this.selectVideo = function(video) {
    self.currentVideo = video;
  };
  /* END SOLUTION */
})
.directive('app', function() {
  return {
    /* START SOLUTION */
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
    /* ELSE
    // TODO
    END SOLUTION */
  };
});
