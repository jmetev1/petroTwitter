angular.module('a-new-scope')
.controller('AppCtrl', function($window, youTube) {
  var self = this;

  // TODO: what is the starting point for this sprint?
  this.videos = $window.exampleVideoData;
  this.currentVideo = self.videos[0];

  /* START SOLUTION */
  this.searchService = youTube;
  this.searchResults = function(data){
    self.videos = data;
    self.currentVideo = self.videos[0];
  }

  this.selectVideo = function(video){
    self.currentVideo = video
  }
  /* END SOLUTION */
})
.directive('app', function() {
  /* START SOLUTION */
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  }
  /* ELSE
  // TODO
  END SOLUTION */
});
