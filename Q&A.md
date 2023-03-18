# Redux Questions

> Redux is not great for making simple things quickly.
> It's great for making really hard things simple.
>
> -Jani Evakallio

### What is Redux?

Redux is an open-source library written in the JavaScript scripting language. Redux's primary purpose is to manage and centralise the application state, and it's generally used in conjunction with JavaScript libraries like React or Angular to create user interfaces (User Interfaces). It's a state container that's predictable for JavaScript apps. Redux is a lightweight application (about 2 kilobytes) with no dependencies.

### Redux's principles:

Redux's basic principles:

- Source of truth: Our application's global state is always stored in an object tree within a single store.
- The state is read-only: Our application's state can only be changed by issuing an action, which is an object that describes what happened.
- Pure functions are used to make changes: This principle dictates that we must construct pure reducers to define how the actions modify the state tree.

### Simplified Redux Principles:

- Single source of truth called the store
- State is read only and only changed by dispatching actions
- Changes are made using pure functions called reducers

# NgRx Questions

## General NgRx Questions

---

### What is NgRx?

NgRx is a framework for building reactive applications in Angular. NgRx provides state management, isolation of side effects, entity collection management, router bindings, code generation, and developer tools that enhance developers experience when building many different types of applications.

### What are some real-world use cases for NgRx?

NgRx is a great tool for managing state in large-scale applications. It can be used to keep track of user data, application settings, and even application state.

### What are some important mechanics of using NgRx?

NgRx is a library for Angular that helps to manage state in an application. When using NgRx, it is important to understand how to create actions, reducers, and selectors. Actions are used to describe what has happened in the application, and they are dispatched from components. Reducers take the actions and update the state accordingly. Selectors are used to select a slice of state from the store to be used in a component.

### Explain the Core Concept of ngRx.

- Store – We can say it database of the application. It is immutable and only altered by actions.
- Actions – dispatched from components and services.
- Reducers – Reducers are pure functions that are responsible for state changes. It takes the current state and the latest action to create a new state.
- Meta-reducers – These are similar to middleware used in Redux. It allows us to pre-process actions before normal reducers functions are called.
- Selectors – These are also pure functions to obtaining slices of store state instead of the full state.
- Effects – Without ngRx, components are responsible to connect with external APIs using services. So ngRx effects provide a way to interact with external sources (services, network requests, web sockets, etc.) and isolate them from the component.

### What is the difference between NgRX and RxJS?

Ngrx is a redux implementation using rxjs. Rxjs is for handling complex asynchronous work like handling communication between client and server. NgRx is for optimally storing data in the client and recalling them from all over the application, usually.

### Why would you want to use NgRx instead of Angular services or RxJS Subjects?

NgRx provides a way to manage state in Angular applications. This can be helpful for a number of reasons, including making it easier to debug application state, providing a more predictable way to manage state, and making it easier to unit test state management code.

### What are some common mistakes developers make when working with NgRx?

Some common mistakes developers make when working with NgRx include not unsubscribing from observables, mutating state instead of creating immutable state objects, and not using the NgRx devtools.

---

## NgRx Store Questions

---

### What is store in NgRx?

We can say its database of the application, It is immutable and only altered by actions

### Why use NgRx Store for State Management?

NgRx Store provides state management for creating high maintainable applications through the use of a single state. It provides actions in order to express state changes. In case, some components don’t need a wide state, ngRx use ComponentStore which provides a solution for local state management.

### What are benefits of using store (ngrx) in Angular?

- Centralized, Immutable State - All relevant application state exists in one location. This makes it easier to track down problems, as a snapshot of state at the time of an error can provide important insight and make it easy to recreate issues.
- Performance - Since state is centralized at the top of your application, data updates can flow down through your components relying on slices of store.
- Testability - All state updates are handled in reducers, which are pure functions. Pure functions are extremely simple to test, as it is simply input in, assert against output.

---

## NgRx Reducers Questions

---

### What are reducers in NgRx?

Pure Functions that take in the current state of your application action, and they return a new state object

### What are Reducers in NgRX?

Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the action's type. Reducers are pure functions that are the only ones that can change state. They are not really changing state but making a copy of existing state and changing one or more properties on the new state.

---

## NgRx Actions Questions

---

### What are Actions in NgRX?

Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. Actions are objects that extend the NgRx Action class with a 'type' property. They have an optional 'payload' property (naming is up to you but the standard is to name it 'payload') for sending in data to the effect/reducer and are dispatched by the store to either run an effect or change state in a reducer.

### How does an action differ from a reducer in NgRx?

An action is a function that is used to trigger a change in the state of an application, while a reducer is a function that is used to handle the changed state. In other words, an action is used to initiate a change, while a reducer is used to actually implement the change.

---

## NgRx States Questions

---

### What are States in NgRX?

State is a single, immutable data structure. Actions describe state changes. Pure functions called reducers take the previous state and the next action to compute the new state. State accessed with the Store, an observable of state and an observer of actions.

---

## NgRx Selectors Questions

---

### What is a selector in NgRx?

A selector is a function that selects a slice of state from the store. Selectors can be used to create derived data, such as a filtered list of items or a sum of items.

### When should I use selectors in my app?

Selectors are a powerful tool in NgRx, and they can be used in a variety of different ways. Generally speaking, you should use selectors any time you need to access data from the store outside of a component or effect. Selectors can be used to compute derived data, or to provide an easier way to access specific parts of the store.
