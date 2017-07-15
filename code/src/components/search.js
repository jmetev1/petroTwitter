angular.module('video-player')
  .controller('Search', function() {
    
    
    $scope.newSearch = function(input) {
    
    }; 



  }
  )

  
  .directive('search', function() {
    return {
      templateUrl: 'src/templates/search.html',
      restrict: 'E'
    };
  });
