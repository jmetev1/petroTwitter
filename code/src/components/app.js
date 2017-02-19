angular.module('a-new-scope')

.controller('AppCtrl', function($window, youTube) {
  var self = this;

  this.videos = $window.exampleVideoData;
  this.currentVideo = self.videos[0];

  this.searchService = youTube;
  this.searchResults = function(data){
    self.videos = data;
    self.currentVideo = self.videos[0];
  }

  this.selectVideo = function(video){
    self.currentVideo = video
  }
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  }
});
