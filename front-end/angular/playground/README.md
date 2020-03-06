# Playground

Initialize app with @angular/cli: `ng new project-name`

Launch the app: `ng serve -o` (serves at `http://localhost:4200/`)

### Component

Root: App Component

- `app.component.ts` [Script]
- `app.component.html` [Template]
- `app.component.css` [Styles]

Interpolation Binding: `{{ variable }}`

@Component: decorator function that specifies the Angular metadata for the component

```js
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes", // element selector
  templateUrl: "./heroes.component.html", // location of template
  styleUrls: ["./heroes.component.css"] // location of css styles
})
export class TestComponent implements OnInit {
  constructor() {} // standard class constructor
  // lifecycle hook - called shortly after creating a component
  ngOnInit() {
    // put your initialization logic here
  }
}
```

Generate new components using CLI: `ng g c component-name`

#### Using interfaces:

```js
export interface Hero {
  id: number;
  name: string;
}
```
 Type checking in TypeScript focuses on the shape that values have - duck typing (or) structural subtyping
 Interfaces fill the role of naming these types and are a powerful way of defining contracts within your code
 
