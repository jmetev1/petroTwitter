angular.module('a-new-scope')
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
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach((err) =>
        console.error(err.message)
      );
    });
  };
});
/* ELSE
.service('youTube', function(){
  // TODO
});
END SOLUTION */
