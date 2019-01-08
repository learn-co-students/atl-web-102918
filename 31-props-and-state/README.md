### Intro to State lecture

I'm really excited. State is hard in all apps because it's
thinking about your data flow. React forces you to encounter
this in a good way. I'm pretty excited/comfortable with it.

It will probably be one of the harder parts of React for you.
Please ask me to explain wherever you need to.
Also, tell me to speed up or slow down/pause.

#### Outline

* Quick peek at mockup, Navbar and App from yesterday

* Great, now let's actually flesh out DogDetail!
  * Start by making mock dog data to process!
    * This is super cool because we don't need an API.
    * Build component, then hook it up to a real backend later.
  * What's some information we need for a nice dog detail page?
    * (Maybe also look at Semantic UI's card component)



* Start by making a few "empty" functional components:
  * DogsList, DogsListItem, DogDetail, DogsContainer
* Let's briefly _try_ to style DogsContainer, DogsList, DogsContainer
  * (Not to be beautiful, just want a grid/split layout)





* Now let's mock up a few dogs in an array for our list.
* Hand the dogs to the list and have it render a bunch of list items.
* Now, add an onClick handler so clicking a dog changes the detail!





* Huh, our listitem is supposed to control our detail.
  * How are we supposed to do this without manually grabbing it?
    * Cause React only re-renders when props or state changes?
  * ... I don't want to nest the components. How do I do this? :-(
  * The question of where state goes is a deep question!

Two related and _SUPER IMPORTANT_ questions:
  * What state do we need? (to render the page/a single component)
  * Where should the state live? (to support the flow)



The only state we need is a dog ID.
If we have an ID, we can pass the dog as a prop to detail.

But that means listitem needs to update state on its grandparent?
This is fine, it just requires ... passing a callback! 😱 😱 😱

We can define a chooseDog method on the container and just pass it with props. Then the detail only is there if a dog is set. 🐶


### This Afternoon!

* Add a button to make the dog like count go up.
* Make the dog editable! DogForm!
  * Does this require more state? 🤔
