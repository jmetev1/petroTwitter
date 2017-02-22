angular.module('video-player')
/* START SOLUTION */
.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(function(res) {
      if (callback) {
        callback(res.data.items);
      }
    })
    .catch(function(res) {
      res.data.error.errors.forEach(function(err) { 
        console.error(err.message);
      }
      );
    });
  };
});
/* ELSE
.service('youTube', function(){
  // TODO
});
END SOLUTION */
