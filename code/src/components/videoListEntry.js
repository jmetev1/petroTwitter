angular.module('a-new-scope')
.directive('videoListEntry', function() {
  /* START SOLUTION */
  return {
    scope: {
      video: '=',
      onClick: '<'
    },
    restrict: 'E',
    controller: function(){},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
  }
  /* ELSE
  // TODO
  END SOLUTION */
});
