
angular.module('appWrapper', ['ui.bootstrap', 'ui.router'])
.config(function($stateProvider) {
  const states = {}
  states.coreState = {
    abstract:true,
    name: 'core',
    url: '',
    component: 'core',
    resolve: {
      posts: dataservice => dataservice.allByType('posts')
      .then(data => {
        data.forEach(p => p.liked = 'Like')
        return data
      }),
      users: dataservice => dataservice.allByType('users').then(data => data)
    }
  }
  states.postState = {
    name: 'core.post',
    url: '/post/{postId}',
    component: 'post',
    resolve: {
      user: (users, posts, $stateParams) => {
        let userId = posts.find(p => {
          return p.id === Number($stateParams.postId)
        }).userId;
        return users.find((user) => {
          return user.id === userId
        })
      },
      post: (posts, $stateParams) => posts.find(p => {
        return p.id === Number($stateParams.postId)
      }),
      comments: (dataservice, $stateParams) => {
        return dataservice.getComments($stateParams.postId).then(
          data => data
        );
      }
    }
  }

  states.appState = {
    name: 'core.app',
    url: '',
    component: 'app',
    resolve: {
      posts: posts => posts,
      users: users => users
    }
  }
  states.userState = {
    name: 'core.user',
    url: '/user/{userId}',
    component: 'userView',
    resolve: {
      user: (users, $stateParams) => users.find((user) => {
        return user.id === Number($stateParams.userId);
      }),
      posts: (posts, $stateParams) => {
        return posts.filter(p => {
          return p.userId === Number($stateParams.userId)
        });
      },
    }
  }
  for (state in states) $stateProvider.state(states[state])
})

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'http://jsonplaceholder.typicode.com/*'
  ]);
})