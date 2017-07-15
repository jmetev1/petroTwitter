angular.module('video-player')
  .service('youTube', function($http, $window) { 
    this.search = function(a, cb) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet', 
          q: a,
          type: 'video',
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
        }
      }).then(function(data) {
        cb(data);
      }, function(data) {
        console.log('yu failed', data);
      });   
    };
  });
