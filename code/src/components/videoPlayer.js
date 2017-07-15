
angular.module('video-player')
  .controller('Player', function() {
  })

  .directive('videoPlayer', function() { 
    return {
      scope: {
        video: '<'
      },
      controller: 'Player',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'src/templates/videoPlayer.html',
      restrict: 'E'
    };
  });
