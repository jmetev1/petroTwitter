angular.module('video-player')
/* START SOLUTION */
.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})
/* END SOLUTION */
.directive('search', function() {
  return {
    /* START SOLUTION */
    scope: {
      service: '<',
      result: '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
    /* ELSE
    // TODO
    END SOLUTION */
  };
});
