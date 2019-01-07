### General Mod 4 Notes - 2 minutes

* I'm working on getting sample projects for y'all
* I've heard mixed things about the Labs for this. Talk to Roni!
  * Good advice: Throw out the damn tests. Just get it working.
* Working through the React Tutorial is a super good use of your time.
* We need to get experience building apps and seeing me build apps.
* I may have to go off script from the planned lecture schedule.

## Mod 4 Overview - 3 minutes

### Mod 4 - Week 1
* Mon: React, new tools, JSX, Props
* Tue: State, Events, Forms
* Wed: "Thinking in React"
* Thu: Lifecycle Methods
* Fri: Review and "Best Practices"

### Mod 4 - Week 2
* Mon: Frontend/Client-Side Routing
* Tue: Review!
* Wed: Code Challenge
* Thu: Auth

## Today: Intro to React

DO:
- Talk Vanilla JS Challenges
- Brief History
- Project Setup/New Tools
- Recognize the concept of a _Component_

DO NOT:
- Deal with Events and Changing the Page
- Deal with Fetching Data

- Encounter JSX
- Briefly on Virtual DOM
- Navbar Student Exercise
- JSX

## Challenges in Mod 3 - 5 minutes
  * Updating the DOM to reflect changes in your data
    - Keeping Page in Sync with server and vice versa
    - HTML is a representation of the DOM but not the actual DOM
    - The DOM represents HTML but isn't actual HTML
    - Moving back and forth between representations kinda hurts T.T
  * Managing State - i.e. no models, really. data attributes?
  * Order of Evaluation - i.e. async and events
  * How to organize code - i.e how to break things up? multiple files?
  * How to organize apps - i.e. script tags? load order? libraries?

What were some challenges you faced?

* knowing how to structure your code
* new pieces of code can break working code
* tracing deeply nested callbacks
  * figuring out the order of events (especially with async)
* getting event listeners to ........ work







## Brief History/Context - 5 minutes
- React is made by Facebook, about 5.5 years old, breakout year ~2015.
- There are two libraries react, react-dom
  - Why? Because you might not want to only use React on the web!
  - You could build a javascript app to run on a phone or VR!
  - This is sometimes called different "backends" or "targets".
  - I.e. DOM Target, Mobile/Native target, etc.
- What about before React?
  - jQuery (2006) was the first thing besides "Vanilla JS"
    - ... but felt about the same. nicer way to write similar code
    - so it had the same pain points around order of evaluation
    - still easy to write "spaghetti code" and make a mess
  - Backbone and Angular (2010-2011) were the next wave
    - and felt much more organized with separate files and classes...
    - but also complicated build systems and designs
      - (modules, models, controllers, services, adapters, etc etc)

The problems React seeks to solve _are_ the challenges of mod 3.
The philosophy: Do as little _manual state management_ as possible.
More on that deep notion soon...

## New Tools / Project Setup - 5 minutes

We'll use a command line tool called `create-react-app` that
builds out a project structure for us much like `rails new` does.
But we should know what some of the pieces are:

* `npm install` - much like gem install
  * `npm install --save new-library` installs and adds to package.json
* `yarn` - much like bundle
* `node_modules` - where the js libs are installed. like $GEM_PATH
* `package.json` - dependencies like Gemfile + tasks like Rakefile
* `.gitignore` - important so we don't commit dependencies/library code

Wow! That's a lot of powerful stuff. Cool.

... But how do we write an app using React?

This afternoon, we'll see the usual way using `create-react-app`.
But that installs a loooooot of stuff and complicates our process.
It's worth it but it would take us longer to just build something.

This morning, we're going to look at the option with the fewest moving parts:

* Install React, ReactDOM, and I'm gonna grab Bulma for styling
  > `npm install --save react react-dom bulma`

Now I'll add them to the bottom of my body tag in `index.html`...
Remember that npm installs into node_modules.

```
<link rel="stylesheet" type="text/css" href="node_modules/bulma/css/bulma.min.css">
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
```

## Using ReactDOM for rendering - 10 minutes

* console.log react and reactDom
* Use ReactDOM.render() to put stuff on the page
* Boooooooring! Why do this over `.textContent = 'foo'` or
  `.innerText = 'foo'`?
* Well, let's see another example...
  * `const Article = React.createElement('article', {}, "Why use React?")`
  * createElement arguments: (kindOfTag, props, contents)

## Turning things into "components" - 10 minutes
  * Now let's turn Article into a function that takes text and
    builds an article element: `const Article = text => React...`
  * Now let's build a Page element that takes a list of articles as
    its content!
  * Now let's style the articles:
    * use `className` because HTMLElements don't have a `.class`
      they have a `.className`
      * https://developer.mozilla.org/en-US/docs/Web/API/Element/className
      * https://bulma.io/documentation/components/message/
  * Now let's style the Page:
    * https://bulma.io/documentation/layout/container/

* I just learned $0. That fucked me up. How did I not know this? 😭

## VirtualDOM magic - 10 minutes

Let's console log an article and the page for a second.
They look like just ... JS objects. With an interesting key or two.
It also seems like Components can _contain other components_.
That makes them a good representation for the DOM! (It's a tree too.)

When we say `ReactDOM.render(component, HTMLElement)`, React takes
over the HTMLElement and does magic under the hood to make the real
DOM in the browser _match_ the component tree we handed it.

The important thing is we no longer are responsible for changing the page! React wants to be declarative instead of imperative. Mod 3 was
imperative. We _manually_ shifted the DOM into shape. We thought about each step. Mod 4 is declarative. We tell React what things are. It figures out how to get them that way.

Declarative: "Here's how the page looks."
Imperative: "Here's how to build the page step by step."

## Make a navbar exercise - Remaining time

## Challenge

I'm going to commit and push. Then I'll post an example I put together last night.

* Clone down the link: `git clone git@gist.github.com:21fa7e8ba9dbd79ac1154f422698d59e.git`
* Run `npm install` inside it.
* Open the README to this last section.
* Implement a Navbar component in index.js and render it! :)

If we were able to write a function which returns a React element which produces some html, we should be able to continue building out functions which return React elements.

```html
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
```

Student Task: write a function called Navbar to be used like this:

```js
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: 'ZooKeepr',
    icon: 'paw',
    color: 'green',
    description: 'keep track of your animals'
  }),
  document.getElementById('main')
);
```
