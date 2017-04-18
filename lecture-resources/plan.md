### Core Concepts Live Lecture

- add ng-app
- add ng-controller with a myTodos scope var
- update <pre> to show todos as json
- add ng-click with addTodo()
- write addTodo so it adds the same item each time
- add ng-model to input, update addTodo()
- notice input doesn't clear. fix it.
- discuss the use of <ul><li> for displaying the todo list
- refactor to <todo-list>
- add some defautl values to the todo list:
    'wake up',
    'put on a black t-shirt',
    'conquer angular'
- add a simple directive with <ul><li> and static text
- add a controller to the directive and console log $scope
- show myTodos in scope
- add ng-repeat on myTodos
- THIS IS UGLY - why? - this is not a reusable component
- introduce the idea of an isolate scope, show in console
- show how it's still possible to reach parent scope -- bad idea
- add an isolate scope variable todos, show in scope
- link it to the parent using html attribute
- demo adding a 2nd identical item
- demo dev docs, fix problem
- demo $index
- add ng-click with a removeTodo()
- add a removeTodo function in scope with generic message
- How do you remove a specific item? - remember $index?
- add index argument to removeTodo in ng-click
- update removeTodo() to splice index out of $scope.todos
- add bindToController update controller to use this instead of $scope
- console.log(this) to show we haven't lost the data
- why did we loose the items?? -- no $scope anymore!
- add controllerAs syntax, update view to use props
- rename props to ctrl
- add restrict 'E'
