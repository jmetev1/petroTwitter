angular.module('appWrapper').component('post', {
  templateUrl: 'src/templates/post.html',
  bindings: {
    post: '<',
    user: '<',
    comments: '<'
  }
});

