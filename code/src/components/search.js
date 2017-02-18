angular.module('a-new-scope')

.controller('SearchController', function(){
  var context = this;
  this.handleClick = function(){
    context.service.search(context.input, function(data){
      context.result(data);
    })
  }
})

.directive('search', function() {
  return {
    scope: {
      'service': '<',
      'result': '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  }
});
