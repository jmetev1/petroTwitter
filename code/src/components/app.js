angular.module('a-new-scope')

.controller('app-ctrl', function($window, youTube) {

      var self = this;
      this.currentVideos = [];

      this.currentVideo = $window.exampleVideoData[0];
      this.searchService = youTube;
      this.searchResults = function(data){
        self.currentVideos = data;
        console.log('currentVideos = ', data);
        // do something.
      }
})

.directive('app', function() {
  return {
    scope: {
      'props': '<video'
    },
    restrict: 'E',
    controller: 'app-ctrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  }
});
