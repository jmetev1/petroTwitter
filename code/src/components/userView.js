angular.module('appWrapper').component('userView', {
  templateUrl: 'src/templates/userView.html',
  controller: userViewController,
  bindings: {
    user: '=',
    posts: '<'
  }
});
userViewController.$inject = ['dataservice'];

function userViewController(dataservice) {
  let vm = this;
  vm.username = 'username';
  vm.modulename = 'name';
  vm.edit = (field, newValue, cb) => {
    dataservice.updateUser(vm.user.id, {[field]: newValue})
    .then(data => data === 200 ? cb() : console.log('failed'))
  }
}
