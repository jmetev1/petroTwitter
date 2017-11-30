angular.module('appWrapper').component('listEntry', {
  templateUrl: 'src/templates/listEntry.html',
  controller: listController,
  bindings: {
    post: '<',
    user: '='
  }
});

function listController() {
  let vm = this;
  vm.unliked = 'Like';
  vm.liked = 'Liked';
}

