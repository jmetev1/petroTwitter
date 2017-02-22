angular.module('video-player')
/* START SOLUTION */
.controller('AppCtrl', function(youTube) {

  this.searchService = youTube;
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };

  this.selectVideo = (video) => {
    this.currentVideo = video;
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
