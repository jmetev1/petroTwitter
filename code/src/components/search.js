angular.module('video-player')
  .controller('Search', function() {
    this.clickHandler = (query) => {
      this.service(query, this.result);
    };

  })
  
  .directive('search', function() {
    return {
      templateUrl: 'src/templates/search.html',
      restrict: 'E',
      scope: {
        service: '<',
        result: '<'
      },
      controller: 'Search',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
