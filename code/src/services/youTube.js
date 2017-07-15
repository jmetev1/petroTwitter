angular.module('video-player')
  .service('youTube', function($http) { 
    this.search = function(a, cb) {
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?key={{a.key}}&type=video&parts=snippet&q={{a.query}}&maxResults={{a.maxResults}}`        
      }).success(function(data) {
        console.log(data);
        cb(data);
      });  
    };    
  });
