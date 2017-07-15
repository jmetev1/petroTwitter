angular.module('video-player')
  .controller('ListControl', function() {
    this.data = window.exampleVideoData;

  })

  .directive('videoList', function() {
    return {
      controller: 'ListControl',
      controllerAs: 'ctrl',
      bindToController: true,      
      templateUrl: 'src/templates/videoList.html',      
      restrict: 'E'
    };
  });
