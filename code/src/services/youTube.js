angular.module('a-new-scope')
.service('youTube', function($http, appConfig){
  this.search = function(query, callback){
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: appConfig.key,
        maxResults: appConfig.max,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}){
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}){
      data.error.errors.forEach((err) =>
        console.error(err.message)
      );
    });
  }
});