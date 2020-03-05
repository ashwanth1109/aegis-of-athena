# Dependency Injection

Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.
The AngularJS injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.

## Declaring dependencies

For a directive:

```js
angular.module("myModule", []).directive("dirName", [
  "depName",
  depName => {
    // ...
  }
]);
```

For a service:

```js
angular.module("myModule", []).factory("serName", [
  "depName",
  depName => {
    // ...
  }
]);
```

For a filter:

```js
angular.module("myModule", []).filter("filName", [
  "depName",
  depName => {
    // ...
  }
]);
```

Module method to specify function to run at configuration time:

```js
angular.module("myModule", []).config([
  "depProvider",
  depProvider => {
    // ...
  }
]);
```

Module method to specify function to run at run time:

```js
angular.module("myModule", []).run([
  "depProvider",
  depProvider => {
    // ...
  }
]);
```

For controllers (using the array notation):

```js
angular.module("myModule", []).controller("MyController", [
  "$scope",
  "dep1",
  "dep2",
  ($scope, dep1, dep2) => {
    // ...
  }
]);
```

Important notes:

- Unlike services, there can be many instances of the same type of controller in an application.
- Controllers are associated with an element in the DOM and so are provided with access to the scope.
- Other components (like services) only have access to the \$rootScope service.

## Dependency Annotation

AngularJS invokes certain functions (like service factories and controllers) via the injector. You need to annotate these functions so that the injector knows what services to inject into the function.

3 ways of Annotation:

- From function parameter names (has caveats)

1. Inline Array (preferred):

```js
someModule.controller("MyController", [
  "$scope",
  "greeter",
  function($scope, greeter) {
    // ...
  }
]);
```

2. Inject Property Annotation:

```js
var MyController = function($scope, greeter) {
  // ...
};
MyController.$inject = ["$scope", "greeter"];
someModule.controller("MyController", MyController);
```

Allows minifiers to rename the services and still be able to inject the right services. Ordering of values in the \$inject array must match the ordering of the parameters in the Controller.

3. Implicit Annotation (has caveats):

```js
someModule.controller("MyController", function($scope, greeter) {
  // ...
});
```

Given a function, the injector can infer the names of the services to inject by examining the function declaration and extracting the parameter names. You can freely reorder dependencies. However this method will not work with JavaScript minifiers/obfuscators because of how they rename parameters.

## Strict Dependency Injection

TODO: Add notes here

## Why Dependency Injection & its motivation

TODO: Add notes here
