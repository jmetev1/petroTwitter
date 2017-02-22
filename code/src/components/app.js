angular.module('video-player')
/* START SOLUTION */
.controller('AppCtrl', function($window, youTube) {
  var self = this;

  this.searchService = youTube;
  this.searchResults = function(data) {
    self.videos = data;
    self.currentVideo = self.videos[0];
  };

  this.selectVideo = function(video) {
    self.currentVideo = video;
  };

  youTube.search('javascript tutorial', this.searchResults);
})
/* END SOLUTION */
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
