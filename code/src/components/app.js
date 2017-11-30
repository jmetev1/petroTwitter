angular.module('appWrapper').component('app', {
  templateUrl: 'src/templates/app.html',
  controller: appController,
  bindings: {
    posts: '=',
    users: '='
  }
});

appController.$inject = ['dataservice'];

function appController(dataservice) {
  var vm = this;
  vm.user = post => vm.users.filter(u => u.id === post.userId)[0];
}
