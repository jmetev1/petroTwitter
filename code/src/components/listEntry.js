angular.module('app').component('listEntry', {
  templateUrl: 'src/templates/listEntry.html',
  require: {
    videoCtrl: '^app'
  },
  controller: listController,
  bindings: {
    post: '<',
  }
});

function listController() {
  let vm = this;
  console.log(this)
  vm.singleModel = 'Like';
  vm.unliked = 'Like';
  vm.liked = 'Liked';
  vm.status = 'unset'
}
