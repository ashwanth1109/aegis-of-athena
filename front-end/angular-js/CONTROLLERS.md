### Controllers

In AngularJS, a Controller is defined by a JavaScript constructor function that is used to augment the AngularJS Scope.

For each of them, AngularJS will instantiate a new Controller object, using the specified Controller's constructor function:

- the ngController directive. A new child scope will be created and made available as an injectable parameter to the Controller's constructor function as \$scope.
- a route controller in a \$route definition.
- the controller of a regular directive, or a component directive.

Controllers should only contain business logic. Putting any presentation logic into Controllers significantly affects its testability.

The most common way to keep Controllers slim is by encapsulating work that doesn't belong to controllers into services and then using these services in Controllers via dependency injection.

```html
<body ng-app="module1">
  <div ng-controller="controller1">{{val}}</div>
</body>
```

```js
const app = angular.module("module1", []);

app.controller("controller1", [
  "$scope",
  function($scope) {
    $scope.val = "Hello World!";
  }
]);
```

You can set up the initial state of a scope by attaching properties to the \$scope object. The scope is augmented (managed) by the controller. Assigning a property to \$scope creates or updates the model.

#### ng-click directive

```html
<div ng-controller="SpicyController">
  <button ng-click="chiliSpicy()">Chili</button>
  <button ng-click="jalapenoSpicy()">Jalapeño</button>
  <p>The food is {{spice}} spicy!</p>
</div>
```

```js
app.controller("SpicyController", [
  "$scope",
  function($scope) {
    $scope.spice = "very";

    $scope.chiliSpicy = function() {
      $scope.spice = "chili";
    };

    $scope.jalapenoSpicy = function() {
      $scope.spice = "jalapeño";
    };
  }
]);
```

#### Scope Inheritance

```html
<div ng-controller="MainController">
  <p>Good {{timeOfDay}}, {{name}}!</p>

  <div ng-controller="ChildController">
    <p>Good {{timeOfDay}}, {{name}}!</p>

    <div ng-controller="GrandChildController">
      <p>Good {{timeOfDay}}, {{name}}!</p>
    </div>
  </div>
</div>
```

```js
myApp.controller("MainController", [
  "$scope",
  function($scope) {
    $scope.timeOfDay = "morning";
    $scope.name = "Nikki";
  }
]);
myApp.controller("ChildController", [
  "$scope",
  function($scope) {
    $scope.name = "Mattie";
  }
]);
myApp.controller("GrandChildController", [
  "$scope",
  function($scope) {
    $scope.timeOfDay = "evening";
    $scope.name = "Gingerbread Baby";
  }
]);
```

It is common to attach controllers at different levels of the DOM hierarchy. The ng-controller directive creates a new child scope and we get a hierarchy of scopes that inherit from each other. The \$scope that each Controller receives will have access to properties and methods defined by Controllers higher up in the hierarchy.

#### Testing a Controller

```js
const app = angular.module("app", []);

app.controller("MyController", function($scope) {
  $scope.spices = [
    { name: "pasilla", spiciness: "mild" },
    { name: "jalapeno", spiciness: "hot hot hot!" },
    { name: "habanero", spiciness: "LAVA HOT!!" }
  ];
  $scope.spice = "habanero";
});
```

Test

```js
describe("myController function", function() {
  describe("myController", function() {
    var $scope;

    beforeEach(module("myApp"));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller("MyController", { $scope: $scope });
    }));

    it('should create "spices" model with 3 spices', function() {
      expect($scope.spices.length).toBe(3);
    });

    it("should set the default value of spice", function() {
      expect($scope.spice).toBe("habanero");
    });
  });
});
```

To test a nested controller,

```js
describe("state", function() {
  var mainScope, childScope, grandChildScope;

  beforeEach(module("myApp"));

  beforeEach(inject(function($rootScope, $controller) {
    mainScope = $rootScope.$new();
    $controller("MainController", { $scope: mainScope });
    childScope = mainScope.$new();
    $controller("ChildController", { $scope: childScope });
    grandChildScope = childScope.$new();
    $controller("GrandChildController", { $scope: grandChildScope });
  }));

  it("should have over and selected", function() {
    expect(mainScope.timeOfDay).toBe("morning");
    expect(mainScope.name).toBe("Nikki");
    expect(childScope.timeOfDay).toBe("morning");
    expect(childScope.name).toBe("Mattie");
    expect(grandChildScope.timeOfDay).toBe("evening");
    expect(grandChildScope.name).toBe("Gingerbread Baby");
  });
});
```
