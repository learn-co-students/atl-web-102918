## Redux Shelter

### Objectives


* How many lectures are left?
  * As few as possible. Y'all building is better than me talking.
  * Topics: Organizing Redux, Fetching & Redux Thunk, Deployment
  * This morning: Organizing Redux + more practice, maybe thunk.
  * Deployment lectures are just getting things on Heroku.
    * Almost would rather write a guide on this and
      spend any saved time on a lecture on: unit testing, algo, etc.


* **Reminder**: Adding redux to an existing app is trickier than starting an app with it.


* Get more practice with redux in a larger application:
  * store, reducers, actions, dispatch
  * connect, mapStateToProps, mapDispatchToProps





* Show some new tools: action creators, `combineReducers`, thunks
  * Maybe show `bindActionCreators` and connect sugar for it:
    * `connect(null, { updateSearchText })` etc
    * https://redux.js.org/api/bindactioncreators

* If we port the dog shelter to Redux, add voting on dogs for practice!




## Async actions in redux

In vanilla React, we'd do our fetch in componentDidMount. Now that we're using redux, we dispatch actions instead of setting the state:

```js
componentDidMount() {
  fetch(URL)
    .then(res => res.json())
    .then(Dogs => this.props.fetchedDogs(Dogs)))
}
```

We want to move our logic out of our components and into redux.

Why?

1. Components shouldn't know about state management logic. If we delete this component, we might still want to load the Dogs. One goal of redux is to decouple our components from our state.
2. We want more control over how our actions work. For instance, we want to dispatch a 'FETCHING' action before our fetch so that we can show a spinner
3. We might want to access something else in the store, just for the action. We don't want to pollute this component with extra data if we can avoid it

## Solution: Redux Thunk

- Thunk lets us write more complex action creators
- Instead of returning action objects, action creators can return _thunks_

**Thunk**: a function we can dispatch

Thunks get in the dispatch function as an argument, so they can dispatch further actions.

## Thunk Plumbing

`yarn add redux-thunk`

```
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
```

Now we can use thunks!

## Using Thunks

Now our actionCreators can return thunk actions - functions that will get called with `dispatch`.

```js
// plain old actionCreator
const fetchedDogs = (Dogs) => {
  return { type: "FETCHED_DOGS", Dogs }
}

// Thunk actionCreator
const fetchDogs = () => {
  return (dispatch) => {
    fetch(URL)
      .then(res => res.json())
      .then(Dogs => dispatch(fetchedDogs(Dogs)))
  }
}
```

Now, in our component, we can just call the prop function:

```js
componentDidMount() {
  this.props.fetchDogs();
}
```

## Spinner

We did all this thunking so that we could introduce a new state 'loading' - let's actually add that!

```js
const loadingDogs = () => {
  return {type: "LOADING_DOGS" }
}

const fetchDogs = () => {
  return (dispatch) => {
    dispatch(loadingDogs())
    fetch(URL)
      .then(res => res.json())
      .then(Dogs => dispatch(fetchedDogs(Dogs)))
  }
}
```

We can dispatch multiple times from a thunk! This is handy when we want to do something immediately, and something else async, or when we want to compose multiple actions into a single dispatch (e.g. "load and select user")

## Middleware Pattern

Let's take another look at this 'middleware' pattern.

All of redux-thunk:

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

The middleware - like our root reducer - gets called for each of the actions that get dispatched to the store. Instead of getting in the state, it gets in the `dispatch` and `getState` functions, as well as the `next` middleware in the sequence.

It can do whatever it wants with the action, and then call the `next` middleware in the line with the action. In this case, thunk takes any of the actions that are functions and invokes them. Any actions that aren't functions, it 'ignores' by passing them to the next middleware unchanged.

## More complex thunks

Now that we are loading our Dogs in from the server, lets make our increaseVotes and updateDog actions actually save the new data to our server.

With thunk action creators, we can change this logic 'under the hood' - without the components even knowing the difference.

```js
function increaseVotes(DogId) {
  // return { type: "INCREASE_VOTES", DogId }
  return (dispatch) => {
    // we need the Dog's votes!
    const votes = ???
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: DogId,
      votes
    })})
  }
}


Conveniently, thunk actions get called with not only the `dispatch` function, but also the `getState` function.

```js
function increaseVotes(DogId) {
  // return { type: "INCREASE_VOTES", DogId }
  return (dispatch, getState) => {
    // we need the Dog's votes!
    const votes = getState().Dogs.find(p => p.id === DogId).votes + 1;
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: DogId,
      votes
    })})
  }
}
```
