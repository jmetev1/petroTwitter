angular.module('appWrapper')
  .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
    return {
        allByType: getAvengers,
        postsByUser: postsByUser,
        getComments: getComments,
        getUser: getUser,
        updateUser: updateUser
    };
    function updateUser(userId, updated) {
        const url = "http://jsonplaceholder.typicode.com/users/"
        return $http.patch(url+userId, JSON.stringify(updated))
        .then(data => data.status)
    }
    function getUser(userId) {
        return $http.get(`http://jsonplaceholder.typicode.com/users/${userId}`, {cache: true})
        .then(response => response.data)
        .catch(error => console.log(error))
    }
    function getComments(postId) {
        return $http.get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`, {cache: true})
        .then(response => response.data)
        .catch(error => console.log(error))
    }
    function postsByUser(userId) {
        return $http.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, {cache: true})
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
        return $http.get(`http://jsonplaceholder.typicode.com/${url}`, {cache: true})
            .then(function(response) {return response.data})
            .catch(getAvengersFailed);
        function getAvengersComplete(response) {
            return response.data;
        }
        function getAvengersFailed(error) {
          console.log('failed')
        }
    }
}