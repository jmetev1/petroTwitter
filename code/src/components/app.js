angular.module('app').component('app', {
  templateUrl: 'src/templates/app.html',
  controller: appController
});

appController.$inject = ['dataservice'];

function appController(dataservice) {
  var vm = this;
  vm.updateuser = function(hero, prop, value) {
    hero[prop] = value;
  };
  vm.selectUser = function(s) {
    vm.selectedUser = s;
    dataservice.postsByUser(s.userId)
    .then((data) => vm.videos = data)
    dataservice.getUser(s.userId)
    .then((data) => vm.userDetails = data)
  };
  vm.selectPost = function(s) { //shows post and its comments
    vm.userDetails = {};
    vm.selectedPost = s;
    dataservice.getComments(s.id)
    .then(data => vm.comments = data)
  }

  dataservice.allPosts('posts')
  .then((data) => vm.posts = data)
  }
  