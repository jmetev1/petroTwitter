angular.module('video-player')
  .service('youTube', function($http) { 
    this.search = function(a, cb) {
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search/?key=${a.key}&type=video&part=snippet&q=${a.query}&maxResults=${a.maxResults}`        
      }).then(function(data) {
        cb(data);
      }, function(data) {
        console.log('yu failed', data);
      });   
    };
  });
