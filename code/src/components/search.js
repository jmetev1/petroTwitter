angular.module('a-new-scope')
/* START SOLUTION */
.controller('SearchController', function(){
  var context = this;
  this.handleClick = function(){
    context.service.search(context.input, function(data){
      context.result(data);
    })
  }
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
  }
});
