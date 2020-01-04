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

### Data Binding

Data-binding in AngularJS apps is the automatic synchronization of data between the model and view components. The way that AngularJS implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.

First the template (which is the uncompiled HTML along with any additional markup or directives) is compiled on the browser. The compilation step produces a live view. Any changes to the view are immediately reflected in the model, and any changes in the model are propagated to the view. The model is the single-source-of-truth for the application state, greatly simplifying the programming model for the developer. You can think of the view as simply an instant projection of your model.

Because the view is just a projection of the model, the controller is completely separated from the view and unaware of it. This makes testing a snap because it is easy to test your controller in isolation without the view and the related DOM/browser dependency.
