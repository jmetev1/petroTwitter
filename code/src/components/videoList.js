angular.module('video-player')
  
  .controller('ListControl', function(videoService, $scope) {
    // this.videos = [];
    // this.onClick = function() {

    // };
  })

  .directive('videoList', function() {
    return {
      scope: {
        videos: '<',
        onClick: '<'
      },
      controller: 'ListControl',
      controllerAs: 'ctrl',
      bindToController: true,      
      templateUrl: 'src/templates/videoList.html',      
      restrict: 'E'
 
    };
  });
