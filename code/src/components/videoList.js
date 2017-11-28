angular.module('app')
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
