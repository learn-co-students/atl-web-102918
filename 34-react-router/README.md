## React Router

## Overview

- Routing Intro
- History API
- React Router Library
- Building with React Router
- `withRouter` and HOCs?


### Objectives

* I should be able to add a dog to our app.
* Crap! This app is so good. How can I share dogs with friends?
* I need routes!
  * Add an about page component and route.
  * Add dogList nav entry / route. Why are both showing?
  * Make a route for DogDetail.

### Client-Side Routing

Server-side routing exists to show us different pages or data.
  * I.e. Different controller methods.
What does routing mean in the context of a "single page app"?



### Problems with our almost perfect app

Problems we need to solve:

1. The browser's back/forward buttons do nothing useful.
2. Can't link to anything other than initial app state.
3. RESTful URLs should describe application state. Ours don't.



### What does Vanilla JS do?

#### Browser APIs

How does client-side routing _work_?

Ultimately, we're still in a Single-Page application. We can use the `location` and `history` APIs to interact with the url displayed in the top bar and interact with the stack of pages in the browser's history.

```js
window.history.pushState({}, null, 'page');
window.history.back();
```

React Router wraps this functionality in components that make it easy to transform the browser's URL.

### What about React?

Add the package
```sh
yarn add react-router-dom
```

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```


## React Router Components

### Router

We'll use this in one place in our application (and one place only). It sets up the 'plumbing' for the rest of the components. It makes route info accessible to all of the children below it in the React tree, and updates them when the url changes.

**TASK**: Let's add it to index.js and just wrap the whole App!

### Link

Changes the url we see in the browser, must have a 'to' prop.

Variant `NavLink` also takes a prop `activeClassName` and renders differently when the link matches the current url.

**TASK**: Change our Nav to have an about page.

### Route

Huh, seems links only change the window.history/location stuff.
Guess we need a Route!

Routes conditionally render a certain component based on what the route looks like.

```js
<Route path="/login" component={LoginForm} />
{ url matches '/login' ? show LoginForm component : null }
```

**TASK**: Make our about component show.
**TASK**: Add a route for DogsList and attach to Nav.
  * Probably talk about exact a little...

### Switch

Renders only one Route. Picks the first that matches, (doesn't look at the others) - like an if/ else if/ else if.

```
// switch
if (path matches) {
  render component
} else if (path matches){
  render other component
}

// using multiple exact paths, but no switch
if (matches){
  render component
}

if (matches) {
  render component
}

```

**TASK**: Figure out what other routes our app might need.


### Redirect
Forces a redirect to a particular route. We won't use this here.

## Route Child Props

In rails, we had params from the url:

```ruby
# config/routes.rb

get '/users/:id', to: 'users#show'

# users_controller.rb

def show
  User.find(params[:id])
end
```

We need to access information from the 'match' data in React Router.

```js
// Parent

render() {
  ...
  <Route path='/painting/:id' component={PaintingDetail} />
  ...
}

// PaintingDetail

componentDidMount() {
  console.log(this.props.match.params.id)
}
```

### Route `render` prop

If we want to pass other props into a component through a Route, instead of passing `component`, we can pass a prop called `render`. The render prop is a function that the Route calls to decide what to show.

```js
<Route
  path="/paintings/:id"
  render={() =>
    <PaintingDetail painting={selectedPainting} edit={this.edit} />}
  />
```

If we want to access the match or location data, we can! It comes in as the argument to the render prop.


```js
<Route
  path="/paintings/:id"
  render={({match, location, history}) =>
    <PaintingDetail id={match.params.id} edit={this.edit} />}
  />
```

### Other render props

We have access to more than just `match`!

`location` tells us about the current url.

`history` is a wrapped-up version of the `window.history` API. It gives us:
- previous locations the browser has been to
- functions to push a location onto the history stack

### `withRouter`

If we want access to `location`, `match`, and `history` in some other component, we can use the `withRouter` function to pass them in as props.

```js
import { withRouter } from 'react-router-dom'

class NeedsTheInfo extends React.Component {
  render() {
    <div>{this.props.location}</div>
  }
}

export default withRouter(NeedsTheInfo);
```

A function that takes in a component and returns a specialized version of that component - is called the 'Higher Order Component' pattern.
