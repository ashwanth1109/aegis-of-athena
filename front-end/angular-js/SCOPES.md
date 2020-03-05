# Scopes

Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application.

- Scopes provide APIs (\$watch) to observe model mutations
- Scopes provide APIs (\$apply) to propagate any model changes through the system into the view
- Scopes can be nested to limit access to the properties of application components while providing access to shared model properties.
- Scopes provide context against which expressions are evaluated

Nested scopes are either "child scopes" or "isolate scopes". A "child scope" (prototypically) inherits properties from its parent scope. An "isolate scope" does not.

Scope is the glue between application controller and the view. During the template linking phase the directives set up $watch expressions on the scope. The $watch allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.

Both controllers and directives have reference to the scope, but not to each other. This arrangement isolates the controller from the directive as well as from the DOM. This is an important point since it makes the controllers view agnostic, which greatly improves the testing story of the applications.

You can think of the scope and its properties as the data which is used to render the view. The scope is the single source-of-truth for all things view related.

## Unit Testing the scope

```html
<div ng-controller="MyController">
  Your name:
  <input type="text" ng-model="username" />
  <button ng-click="sayHello()">greet</button>
  <hr />
  {{greeting}}
</div>
```

```js
angular.module("scopeExample", []).controller("MyController", [
  "$scope",
  function($scope) {
    $scope.username = "World";

    $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.username + "!";
    };
  }
]);
```

Unit Test:

```js
it("should say hello", function() {
  var scopeMock = {};
  var cntl = new MyController(scopeMock); // TODO: what is this for?

  // Assert that username is pre-filled
  expect(scopeMock.username).toEqual("World");

  // Assert that we read new username and greet
  scopeMock.username = "angular";
  scopeMock.sayHello();
  expect(scopeMock.greeting).toEqual("Hello angular!");
});
```

## Scope Hierarchies

Each AngularJS application has exactly one root scope, but may have any number of child scopes.

The application can have multiple scopes, because directives can create new child scopes. When new scopes are created, they are added as children of their parent scope. This creates a tree structure which parallels the DOM where they're attached.

When AngularJS evaluates an expression, it looks for the property in the current element's scope and it searches the parent scope if not found and so on. In JavaScript this behavior is known as prototypical inheritance, and child scopes prototypically inherit from their parents.

Setting rootScope with value example:

```html
<div>
  <div ng-controller="GreetController">
    Hello {{name}}!
  </div>
  <div ng-controller="ListController">
    <ol>
      <li ng-repeat="name in names">{{name}} from {{department}}</li>
    </ol>
  </div>
</div>
```

```js
angular
  .module("scopeExample", [])
  .controller("GreetController", [
    "$scope",
    "$rootScope",
    function($scope, $rootScope) {
      $scope.name = "World";
      $rootScope.department = "AngularJS"; // RootScope (the parent scope) is set the department value
    }
  ])
  .controller("ListController", [
    "$scope",
    function($scope) {
      $scope.names = ["Igor", "Misko", "Vojta"];
    }
  ]);
```

## Retrieving Scopes & Event Propagation

Scopes are attached to the DOM as \$scope data property, and can be retrieved for debugging purposes. The location where the root scope is attached to the DOM is defined by the location of ng-app directive.

To retrieve, the scope: `angular.element($ELEMENT).scope()`

You can propagate events up/down scopes.

- \$broadcast('EventName'): Dispatches an event name downwards to all child scopes (and their children)
- \$emit('EventName'): Dispatches an event name upwards through the scope hierarchy

These events can be triggered:

```html
<button ng-click="$emit('EventName')">Emitter</button>
```

The triggered event can be handled:

```js
$scope.$on("EventName", function() {
  // Do something here on event
});
```

## Scope Life Cycle

The normal flow of a browser receiving an event is that it executes a corresponding JavaScript callback. Once the callback completes the browser re-renders the DOM and returns to waiting for more events.

TODO: Understand the following statements. Learn more about the $apply and $digest methods
TODO: Checkout https://docs.angularjs.org/guide/scope#scope-life-cycle
TODO: What is template linking?

When the browser calls into JavaScript the code executes outside the AngularJS execution context, which means that AngularJS is unaware of model modifications. To properly process model modifications the execution has to enter the AngularJS execution context using the $apply method. Only model modifications which execute inside the $apply method will be properly accounted for by AngularJS. For example if a directive listens on DOM events, such as ng-click it must evaluate the expression inside the \$apply method.

After evaluating the expression, the $apply method performs a $digest. In the $digest phase the scope examines all of the $watch expressions and compares them with the previous value. This dirty checking is done asynchronously. This means that assignment such as $scope.username="angular" will not immediately cause a $watch to be notified, instead the $watch notification is delayed until the $digest phase. This delay is desirable, since it coalesces multiple model updates into one $watch notification as well as guarantees that during the $watch notification no other $watches are running. If a $watch changes the value of the model, it will force additional \$digest cycle.

- Creation: The root scope is created during the application bootstrap by the \$injector. During template linking, some directives create new child scopes.
- Watcher registration: During template linking, directives register watches on the scope. These watches will be used to propagate model values to the DOM.
- Model mutation: For mutations to be properly observed, you should make them only within the scope.$apply(). AngularJS APIs do this implicitly, so no extra $apply call is needed when doing synchronous work in controllers, or asynchronous work with $http, $timeout or \$interval services.
- Mutation observation: At the end of $apply, AngularJS performs a $digest cycle on the root scope, which then propagates throughout all child scopes. During the $digest cycle, all $watched expressions or functions are checked for model mutation and if a mutation is detected, the \$watch listener is called.
- Scope Destruction: When child scopes are no longer needed, it is the responsibility of the child scope creator to destroy them via scope.$destroy() API. This will stop propagation of $digest calls into the child scope and allow for memory used by the child scope models to be reclaimed by the garbage collector.

## Scopes and Directives

During the compilation phase, the compiler matches directives against the DOM template. The directives usually fall into one of two categories:

- Observing directives (e.g. {{expression}}) register listeners using the \$watch() method.
- Listener directives (such as "ng-click"), register a listener with the DOM. When DOM listener fires, view is updated using \$apply method

In most cases, directives and scopes interact but do not create new instances of scope. However, some directives, such as ng-controller and ng-repeat, create new child scopes and attach the child scope to the corresponding DOM element.

A special type of scope is the isolate scope, which does not inherit prototypically from the parent scope. This type of scope is useful for component directives that should be isolated from their parent scope.

Note also that component directives, which are created with the .component() helper always create an isolate scope.

## Scope \$watch performance & depth

TODO: https://docs.angularjs.org/guide/scope#scope-watch-performance-considerations
What is dirty checking?

Dirty checking the scope for property changes is a common operation in AngularJS and for this reason the dirty checking function must be efficient. Care should be taken that the dirty checking function does not do any DOM access, as DOM access is orders of magnitude slower than property access on JavaScript object.

Dirty checking can be done with three strategies: By reference, by collection contents, and by value. The strategies differ in the kinds of changes they detect, and in their performance characteristics.

- Watching by reference (scope.\$watch (watchExpression, listener))
  - detects a change when the whole value returned by the watch expression switches to a new value.
  - If the value is an array or an object, changes inside it are not detected.
  - This is the most efficient strategy.
- Watching collection contents (scope.\$watchCollection (watchExpression, listener))
  - detects changes that occur inside an array or an object: When items are added, removed, or reordered.
  - The detection is shallow - it does not reach into nested collections.
  - Watching collection contents is more expensive than watching by reference, because copies of the collection contents need to be maintained.
  - However, the strategy attempts to minimize the amount of copying required.
- Watching by value (scope.\$watch (watchExpression, listener, true))
  - detects any change in an arbitrarily nested data structure.
  - It is the most powerful change detection strategy, but also the most expensive.
  - A full traversal of the nested data structure is needed on each digest, and a full copy of it needs to be held in memory.

TODO: Does the usage of immutable structures hold any value in these situations?

## The event loop with Angular's Digest Loop

TODO: Make notes for these here

### Event Loop

- Event loop waits for an event (user interaction, network event, timer event etc.)
- Enters JS context and event callback gets executed (modify DOM structure if needed)
- Leaves JS context and re-renders view based on DOM changes

### Angular JS event loop

Two contexts: (1) Classical JS context (2) Angular JS execution context

Only operations which are applied in the AngularJS execution context will benefit from AngularJS data-binding, exception handling, property watching, etc...

You can also use $apply() to enter the AngularJS execution context from JavaScript. Keep in mind that in most places (controllers, services) $apply has already been called for you by the directive which is handling the event. An explicit call to \$apply is needed only when implementing custom event callbacks, or when working with third-party library callbacks.

You can enter AngularJS execution context with `$scope.$apply(func1)` (func1 is the fn you want to run in the angular context)

- AngularJS enters the $digest loop (contains the $evalAsync queue and the \$watch list)
- The $digest loop keeps iterating until the model stabilizes, which means that the $evalAsync queue is empty and the \$watch list does not detect any changes.
- The \$evalAsync queue is used to schedule work which needs to occur outside of current stack frame, but before the browser's view render.
- The $watch list is a set of expressions which may have changed since last iteration. If a change is detected then the $watch function is called which typically updates the DOM with the new value.
- Once the AngularJS \$digest loop finishes, the execution leaves the AngularJS and JavaScript context. This is followed by the browser re-rendering the DOM to reflect any changes.
