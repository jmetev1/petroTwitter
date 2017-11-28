angular.module('app').component('userView', {
  templateUrl: 'src/templates/userView.html',
  controller: userViewController,
  bindings: {
    user: '=',
  }
});


function userViewController() {
  let vm = this;
  console.log(vm)
  vm.change = function(user) {
    user.name='ronald'
  }
}
