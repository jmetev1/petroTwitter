angular.module('a-new-scope')
.directive('videoList', function() {
  return {
    /* START SOLUTION */
    scope: {
      videos: '=',
      onClick: '<'
    },
    restrict: 'E',
    controller: function(){},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html'
    /* ELSE
    // TODO
    END SOLUTION */
  }
});
