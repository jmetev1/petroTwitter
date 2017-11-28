angular.module('app', ['ui.bootstrap'])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'http://jsonplaceholder.typicode.com/*'
  ]);
});
