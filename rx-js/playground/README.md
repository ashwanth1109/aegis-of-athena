# Learning Reactive Programming with Angular Projects

- [Alphabet Invasion](./src/app/pages/alphabet-invasion/README.md)


## BASICS

References:
- https://www.learnrxjs.io/
- https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
 https://www.youtube.com/watch?v=KOOT7BArVHQ

Thinking in Reactive takes a while to get used to. You need to let go of the deeply entrenched habits of imperative
and stateful programming. It requires a shift in paradigm.

### What is Reactive Programming?

- Style of programming with asynchronous data streams - observe it and trigger a sequence of side effects
- You can create data streams from anything (streams are cheap and ubiquitous)
- A powerful, functional approach to dealing with events
- Steep learning curve - multitude of concepts, large API surface (so many tools to work with your streams)
- Fundamental mindset shift from imperative to declarative

### Some basic concepts

Observable: stream or source of data that can arrive over time
Subscription: this is where you decide how to react to each event

A simple example:

```js
import { fromEvent } from "rxjs";

const button = document.getElementById("myButton");
const myObservable = fromEvent(button, "click");
// just an observable does nothing -> because observables are cold
// they do not activate a producer (like wiring up an event listener)
const subscription = myObservable.subscribe(event => console.log(event));
// you need a subscription to activate a producer
// here, subscribe() (1) sets up ane event listener (2) links function param to event listener
// (3) returns a subscription object with an unsubscribe() method
```

- Each subscription will create a new execution context
- Calling subscribe a second time will create a new event listener

```js
const secondSubscription = myObservable.subscribe({
  next: e => console.log(e),
  error: e => console.log(e),
  complete: () => console.log("complete")
});
```

- You can also pass an object into the subscribe method
- By default, a subscription creates a one on one, one-sided conversation between the observable and observer
  (unicasting)
- You can also have - one observable, many observers (multicasting)
- An Observable source emitting data to observers is a push based model

Operators: offer a way to manipulate values from a source, returning an observable of the transformed values
Pipe: is the assembly line from your observable data source through your operators (an observable chain)

### Finding the correct operator

- First, you find the right category - e.g. filtering or utility operators

Categories:

- Creation operators: creation of an observable from nearly anything
  e.g. `of`, `from` and `fromEvent`
- Combination operators: joining of information from multiple observables (order, time and structure of emitted values)
  e.g. `combineLatest`, `concat`, `merge`, `startWith`, `withLatestFrom`
- Error handling operators: provide effective ways to gracefully handle errors and perform retries
  e.g. `catchError`
- Filtering operators: provide techniques for accepting or declining values from an observable source
  e.g. `take`, `takeUntil`, `debounceTime`, `distinctUntilChanged`, `filter`
- Multicasting operators: make an observable hot or multicast, allowing side-effects to be shared among multiple
  subscribers
  e.g. `shareReplay`
- Transformation operators: transform values as they pass through the operator
  e.g. `concatMap`, `map`, `mergeMap`, `scan`, `switchMap`


### General principles

- Treat events as collections/set
- Manipulate these sets of events with operators

### Comparing Promises and Observables

#### What are promises?

- Read-only view to a single future value
- Success, mapping and error semantics via then()
- Not lazy -> by the time you have a promise, they are on its way to resolving or rejecting
- Immutable and uncancellable -> your promise will resolve or reject eventually and only once (advantage of using
  promises?)

#### What are observables?

- Streams or sets - of 0 to n things over any amount of time
- Lazy -> will not generate values via an underlying producer until they are subscribed to
- Can be unsubscribed from -> the underlying producer will be torn down (powerful feature)
- All values are pushed to the next handler
- All observables are "cold" by default -> create a new producer each time a consumer subscribes to them (as opposed
 to hot observables -> share a single producer with every consumer that subscribes to them)

#### Async in modern web applications

- DOM events (0 to N values)
- Animations (cancelable)
- AJAX (1 value)
- WebSockets (0 to N values)
- SSE (Server Sent Events) (0 to N values)
- Alternative inputs (voice, joystick etc) (0 to N values)

#### Promises are only good for the following:

- AJAX -> because 1 value

But sometimes, it doesn't make sense for AJAX either.

SPAs load data via AJAX for each view.
When the view is changed, the new view does not care about the previous views data.
Promise based AJAX implementations cannot be aborted, because promises cannot be cancelled.

#### Similarities

- Both were built to solve problems around async (to avoid callback hell)
- Some similar semantics:
- - `x.then(valueFn,errorFn)`: Promise
- - `x.subscribe(valueFn,errorFn,completeFn)`: Observables
- Creating them is similar
  Promise Creation:

```js
let p = new Promise((res, rej) => {
  doAsync((err, val) => {
    if (err) rej(err);
    else res(val);
  });
});
```

Observable Creation (not going to be doing this very often though):

```js
let o = new Observable(observer => {
  // executed only when subscribe is called
  const token = doAsync((err, val) => {
    if (err) observer.error(err);
    else {
      observer.next(val);
      observer.complete(); // Optional: you can have an observable that never ends
    }
  });
  return () => {
    // unsubscribe method
    cancelAsync(token);
  };
});
```

- Error handling & finally is also similar -> .catch() and .finally()

#### Differences

- Observables have cancellation semantics: `sub.unsubscribe()`
- Observables can be retried => `myObservable.retry(3)`

#### Observable creation helpers in RxJS

The reason you do not create Observables in the manner shown above is because RxJS provides several creation helpers

Examples:

- `Observable.of(val1,val2,...)`
- `Observable.from(promise/iterable/observable)` - pass it any promise/iterable (like a generator or an array) and it
  will work here
- `Observable.fromEvent(item,eventName)`
- Angular's HTTP and Realtime Data services
- Many community driven RxJS modules and libraries

#### What are operators?

- Operators are Methods on Observable that allow you to compose new observables

- How operators work?

```js
let result = source.myOperator();
```

result is an Observable -> which when subscribed to, subscribes to source,
then transforms its values in some way and emits them

- Operators pass each value from one operator to the next, before proceeding to the next value in the set* (one by one).

Note: This is different from array operators - like array and map which will process the entire array at each step
 and produce a new array and so on.

*You can change the sequential behavior of operators with Schedulers
 
```js
// TODO: Add animation gif here from Ben Lesh talk
// TODO: Check out the different operators that are available
```
