angular.module('a-new-scope')
.service('appConfig', function($window){
  this.key = $window.YOUTUBE_API_KEY;
  this.max = 5;
});
