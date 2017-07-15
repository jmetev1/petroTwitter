angular.module('video-player')
  .controller('Search', function($scope) {
    //new search with
    $scope.newSearch = function(input) {
      //the value

      // alert('newsearch called with', $scope.query);
      // $scope.query
      //after
      $scope.query = '';
    }; 



  }
  )

  
  .directive('search', function() {
    return {
      templateUrl: 'src/templates/search.html',
      restrict: 'E'
    };
  });
