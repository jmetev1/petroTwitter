angular.module('app')
  .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
    return {
        allPosts: getAvengers,
        postsByUser: postsByUser,
        getComments: getComments,
        getUser: getUser
    };
    function getUser(userId) {
        return $http.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.data)
        .catch(error => console.log(error))
    }
    function getComments(postId) {
        return $http.get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.data)
        .catch(error => console.log(error))
    }
    function postsByUser(userId) {
        return $http.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(getAvengersComplete)
          .catch(getAvengersFailed);
        function getAvengersComplete(response) {
            return response.data;
        }
        function getAvengersFailed(error) {
        console.log('failed')
        }
    }
    function getAvengers(url) {
        return $http.get(`http://jsonplaceholder.typicode.com/${url}`)
            .then(getAvengersComplete)
            .catch(getAvengersFailed);
        function getAvengersComplete(response) {
            return response.data;
        }
        function getAvengersFailed(error) {
          console.log('failed')
        }
    }
}
// all post 
// one post with comments
// all posts by a user