angular.module('a-new-scope')
.directive('videoListEntry', function() {
  return {
    /* START SOLUTION */
    scope: {
      video: '<',
      onClick: '<'
    },
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
    /* ELSE
    // TODO
    END SOLUTION */
  };
});
