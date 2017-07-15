angular.module('video-player')
  .controller('VideoListEntry', function() {
    this.chooseThis = function() {
    };
  })
  .directive('videoListEntry', function() {
    return {
      controller: 'VideoListEntry',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/videoListEntry.html',
      restrict: 'E'
    };
  });
