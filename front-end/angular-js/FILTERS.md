# Filters

Filters format the value of an expression for display to the user. They can be used in view templates, controllers or services. AngularJS comes with a collection of built-in filters, but it is easy to define your own as well.

Filters can be applied to expressions in view templates using the following syntax:

```html
<div>{{ expression | filter:argument1:argument2:... }}</div>
```

In templates, filters are only executed when their inputs have changed. This is more performant than executing a filter on each \$digest as is the case with expressions.

Exceptions to this rule:

1. This applies only to filters that take primitive values as inputs. Filters that receive Objects as input are executed on each \$digest, as it would be too costly to track if the inputs have changed.
2. Filters that are marked as $stateful are also executed on each $digest. Note that no AngularJS core filters are \$stateful.

## Using filters in directives, controllers, and services

```html
<div ng-controller="FilterController as ctrl">
  <div>
    All entries:
    <span ng-repeat="entry in ctrl.array">{{entry.name}} </span>
  </div>
  <div>
    Entries that contain an "a":
    <span ng-repeat="entry in ctrl.filteredArray">{{entry.name}} </span>
  </div>
</div>
```

```js
someModule.controller("FilterController", [
  "filterFilter",
  function FilterController(filterFilter) {
    this.array = [
      { name: "Tobias" },
      { name: "Jeff" },
      { name: "Brian" },
      { name: "Igor" },
      { name: "James" },
      { name: "Brad" }
    ];
    this.filteredArray = filterFilter(this.array, "a");
  }
]);
```

Important Note: For this, inject a dependency with the name <filterName>Filter into your controller/service/directive. E.g. a filter called number is injected by using the dependency numberFilter. The injected argument is a function that takes the value to format as first argument, and filter parameters starting with the second argument.

TODO: Check if filterFilter is because of a predefined angular filter (I think its the full text search filter)

IMPORTANT (PERFORMANCE CONSIDERATION):
The filter can be applied in the view template with markup like {{ctrl.array | filter:'a'}}, which would do a fulltext search for "a". However, using a filter in a view template will reevaluate the filter on every digest, which can be costly if the array is big.
