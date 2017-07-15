angular.module('video-player')
  .controller('Search', function() {
    console.log(this.result);
  })
  
  .directive('search', function() {
    return {
      templateUrl: 'src/templates/search.html',
      restrict: 'E',
      scope: {
        result: '<'
      },
      controller: 'Search',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
