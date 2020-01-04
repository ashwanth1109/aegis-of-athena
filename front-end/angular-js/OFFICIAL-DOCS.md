# Angular JS

- A structural framework for dynamic web apps
- Use HTML as your template language
- Data binding and dependency injection eliminate much of the code you would otherwise write
- Belief that declarative code is better than imperative when building UI
- Decoupling DOM manipulation from app logic improves testability
- Regard app testing as equal in importance to app writing
- Decouple the client side from the server side

### Conceptual Overview

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Playground for Angular JS</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
  </head>
  <body>
    <div ng-app ng-init="qty=1;cost=2">
      <b>Invoice:</b>
      <div>Quantity: <input type="number" min="0" ng-model="qty" /></div>
      <div>Costs: <input type="number" min="0" ng-model="cost" /></div>
      <div><b>Total:</b> {{qty * cost | currency}}</div>
    </div>
  </body>
</html>
```

This looks like normal HTML with some new markup. In Angular, this is called a template. When Angular starts your application, it parses and processes this new markup from the template using the HTML compiler.

This loaded, transformed and rendered DOM is then called the view.

The two kinds of new markup you will see above are:

- Directives: markers on the DOM that tells AngularJS's HTML compiler (\$compile) to attach a specified behavior to that DOM element
- Double Curly Braces ( {{filter | expression}} ): the compiler will replace this with the evaluated value

### Contents

- [Data Binding]()
