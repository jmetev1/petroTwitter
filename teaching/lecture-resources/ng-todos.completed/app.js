//app.js
angular.module('app', [])
.controller('TodoCtrl', function($scope){
  $scope.myTodos = [
    'wake up',
    'put on a black t-shirt',
    'conquer angular'
  ];

  $scope.addTodo = function(){
    $scope.myTodos.push($scope.newTodo);
    $scope.newTodo = "";
  }
})
.directive('todoList', function(){
  return {
    scope: {
      todos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){
      this.removeTodo = (index) => {
        this.todos.splice(index, 1);
      }
    },
    template: `
      <ul>
        <li
          ng-click="ctrl.removeTodo($index)"
          ng-repeat="todo in ctrl.todos track by $index"
        >
          {{todo}}
        </li>
      </ul>
    `
  }
})