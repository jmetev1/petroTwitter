angular.module('app').component('comments', {
  templateUrl: 'src/templates/comments.html',
  require: {
    videoCtrl: '^app'
  },
  controller: commentsController,
  bindings: {
    comment: '<',
  }
});
commentsController.$inject = ['dataservice'];

function commentsController(dataservice) {
  let vm = this;
  vm.singleModel = 'Like';
  vm.unliked = 'Like';
  vm.liked = 'Liked';
  vm.status = 'unset'
}
