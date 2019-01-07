## Intro to JSX

## Overview

* Review Navbar - 5 minutes
* Talk Component Hierarchies and mockups - 5 minutes
* Introduce create-react-app - 10 minutes
* Write navbar using JSX - 10 minutes
* Move to a components folder, talk webpack/babel - 10 minutes
* Build out list and items. - 10 minutes

## Navbar Review

* Review navbar example in previous lecture folder.
* Let's create a "orange", "beer" nav real quick. Cool!
  * So, pros and cons of components so far:
    * Kinda hard to read and write. Lots of .createElement T_T
    * Nice to be able to write a component once and reuse in different ways.
    * But oof, having a bunch of these in one file sounds awful.
  * JSX solves the pain points!
    * Gives us a special syntax that turns into plain .createElement calls.
    * Now we can have a component per file and use them from the rest of our code!

## Component Hierarchies

The very first bullet point on the "Understanding React" list of
objectives for mod 4 is:

> Drawing a component hierarchy.

A few bullets down is:

> Creating reusable components.

So, we're building a dog rescue website.
We have to make layout/design decisions before we start coding.
I like using a tool called awwapp.com to put together quick mockups.
There are many good mockup tools, you may prefer others.

Here's a mock I put together... [aww-board.png]

Note the component tree on the right.
This is how React wants you to organize and think about your problems.

We organize around reusable _pieces of a page_. That's a component.

Question: Why did I make a PaintingListItem component but no PaintingDetailItem or PaintingImage?

* Because you can take the image and description and stuff as props.
* Doesn't seem like DogDetail needs event listeners / behavior.
* DogDetail seems like the last useful piece. No subpieces.

Two good reasons:
* Don't yet need anything in the Detail anywhere else.
* Don't yet need multiple Detail components on a page.


It's actually really nice that React likes us think in components.
... If we get more detailed, it leads us to the data needed for them.
That can lead us to getting a rough idea of our models and migrations!
Start making a habit of building component hierarchies!

## Create-React-App

At this point, we'll shift from hand rolling a react app like we did this morning to using create-react-app.

Builds upon several other important parts of the modern JS ecosystem:

* webpack
  * lets us `import` files from other files, like ruby `require`
  * turns all our JS files into one big JS file when we're ready to deploy
* babel
  * a "transpiler" or tool for rewriting code as its imported/read
  * does the magic of reading JSX code and turning it into normal React.createElement calls

### Install

`npm install --global create-react-app`

### Make a New Project

`create-react-app restcue`

A dog adoption app. 😎

**NOTE**: Now that we're using webpack, we won't just open an index.html file in the browser.

Instead, we use a dev server that rebuilds/translates the code when we save and reloads the page.

So, let's look around... 😱

* Hella node_modules
* src folder with a bunch of js, imports and magic (magic to be discussed next week)
* public folder with our "production"/deploy-ready js and html

### Run

Use `npm run start` or, more commonly, `yarn start`.

Whoa!

* Change code, recompiles on the fly, and reloads in the browser.
* Note that if we inspect the page, the script tags for all our files aren't there!
  * Remember webpack is combining all our code into one file.
  * It does that by starting from an entry point
    * create-react-app defaults to index.js)

## JSX code...

Now, let's look at the App.js file more closely.
It look like it has not a string, but real HTML!

It's actually JSX. JSX is translated by babel into regular React.createElement calls.
We can see that if we open the `bundle.js` file in the sources tab and search for App.
*NOTE:* You don't need to actually dive into bundle.js in day to day work. It's under the covers. :)

### Port the Navbar

We'll need to `yarn add semantic-ui-css` right quick.
And we can't directly link it in index.html!
(Because that is now served by webpack's dev server.)
Instead, we'll `import "semantic-ui-css/semantic.min.css"` in index.js
which will get webpack to look in node_modules.

* Let's write it as a function that takes props and returns JSX!
  * We'll then replace the logo in the App component with a call to it.
  * Syntax to use a component:
    * no children: `<MyComponent />`
    * children: `<MyComponent> <div>blah blah</div> </MyComponent>`
  * Props syntax: `propName="foo"` or `propName={value}`
  * We can "interpolate" javascript inside JSX by using curly bois.
  * If you forget to close a tag, it will break! (But you'll get warnings in terminal) 👌

OMG, so much nicer than writing createElement by hand.
Such wow. 😍

### Our First component

* Make a components folder.
* Make a navbar.js file.
* Put the code in there.
* Done! 😎

JK. 😩

* `export default foo` to make it easy to pull into another file.
* `import Navbar from './path/to/file'` to pull it in

Still errors? 😭

Wait .... useful errors? 👀 👀 👀

Okay, cool. It works.


## DogsList and DogsListItem

Cool. Let's make some components right quick and add them to the App.

To prep you for labs and tomorrow, I'll even do one as a class component! The function components we've been using so far are great
for lots of things, but they can only use props, not `state`!

*NOTE:* There is always a `props.children` value with any child components. `{props.children}` in your component if you expect
it to receive children!

... *brit makes components*
