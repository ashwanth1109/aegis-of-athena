# Angular - The Big Picture

- Framework to build SPA
- Misko Hevery -> prototype faster with HTML -> AngularJS

### Benefits

- 10x+ reduction cost
- Standard Compliance: ES6+, Modules, Internationalization & Accessibility
- Performance
- Open Source
- Documentation
- Framework with in-build Router, http, forms, rxjs etc.
- Less Decisions bcuz its Framework (React is a library where you need to put together your own framework)
- Uniformity across diff apps developed in framework
- Typescript

### Features

- PWAs
- Lazy Loading
- Fully featured forms library
- RXJS: handle async data
- Fully featured Router
- Fully featured Animations
- Server Side Rendering
- Mobile friendly
- Angular Language Service: Intellisense and Debugging
- ngUpgrade for migrating one file at a time

### Architecture

- One way data flow (one of the major performance improvements)

One of the key improvements in modern Javascript frameworks. It is an architectural construct that is really about
 change detection more than data flow. With this system, some kind of change happens in a component (for example
 , parent component). This causes all child components to also execute a change detection cycle. Each one checks its
  state. Components are then rerendered with the new state. This flow always goes down from parent to child and never
   up.


- Dependency Injection
- Components
- Directives: add new capabilities to an element
- Templates: decide how components display

- Zone.js & Change Detection
You want component to rerender when the state changes
State changes during some event
During these events, change detection kicks in to rerender anything that has changed
Zone creates a wrapper around all async operations/event in the browser (which typically cause changes in state)
Zone knows when any of these operations complete
Angular subscribes to Notifications from zone for whenever any of these operations complete
This lets Angular know when to run its change detection
 
- Rendering Targets
Browser-platform: JIT + Pre-Compilation
Browser-platform-dynamic
Angular Universal (Server side)
Mobile & Native

### Why the CLI?

- Module Handling
- Bundling
- Minifying
- Typescript Transpilation
- Browser Shims
- Zone.js

For a production grade application, this can lead to javascript fatigue

- New Components/Servies/Pipes etc.
- Serve the Application
- Lint
- Test
- Build

Mobile: Ionic, NativeScript
Desktop: Electron

Testing: Karma (UT), Protractor (Web Automation Tool)
Other alternative: Jest, theIntern, Cypress.io
Angular Testing Utilities: TestBed, Async & fakeAsync, MockBackend

AOT Compiler: Saves Download Size

Editors: 
Typescript (improves intellisense), catch typing related bugs
Angular Language Service: for templates (where intellisense doesnt kick in?)

### Gotchas

- Decorators: different syntax (can be confusing)
- Typescript: has a learning curve (so you have to learn it)
- Pipes/Custom pipes: Pure (only evaluated when input changes - performant) vs impure (evaluated on every change
 detection cycle - non-performant) be careful when you use what
- Module API - knowing what goes where (imports, declarations etc)
- Cryptic Error Messages
- Build: Complex & can affect performance is not done correctly
- Delivery size: > 1 MB (improving)
- RxJS: Complex - paradigm shift, self subscribe or not, forgetting to subscribe, accidentally subscribe multiple
 times, hot vs cold observables, shared observables
 
### Tips

- Use the CLI
- Follow the style guide
- Sorting and filtering in your component
- Learn and use TS
- Learn & use ngrx (for state management)
- Learn webpack
- Use lazy loading
- Dont touch the DOM directly
- Use immutable or observable data to maximize performance where appropriate

### Future Improvement
- Angular Labs
- Elements
- Schematics
- Universal
- Migrations
- Build (Targets, Options, Optimizations, ABC)
