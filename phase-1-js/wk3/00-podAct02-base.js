// ? Questions

/**

  What is the DOM?
  - Tree model of all your html nodes/css
  - Document Object Model

  What are some node/document methods to find Nodes?
  - .getElementById   => document.getElementById("button-1234")
  - .querySelector    => node/document.querySelector()
  - .querySelectorAll
  - .getElementsByClassName
  - .getElementsByTagName

  What are the query css selectors for:
  - class   => node.querySelector(".class-name")
  - id      => node.querySelector("#id-name")
  - body    => document.querySelector("body") | document.body
  - input   => node.querySelector('input[name="input-name"]')

  How you we make sure that the DOM is fully loaded before we add our JavaScript?
  - defer
  - DOMContentLoaded
  - place our script tag at thebottom of the HTML

  What are Events?
  - User interactions
  
  What are some types of events?
  - click
  - submit
  - mouse events
  - key events
  - scroll
  - hover
  - onchange
  - audio events
  - DOMContentLoaded

  How do we make sure that a <submit> btn doesn't reload the page?
  - event.preventDefault()

  Synchronous vs asynchronous code?
  - Sync    => Code that waits for the previous line to resolve before starting
    -- code that has to run in sequence
    let x = 0
    let y = 1
    let z = x + y
  - Async   => Longer Code that can run in the background while other code can run
    -- Code that can run in the background
    fetch(url) => returns a Promise
  - EX: A Chef in the kitchen.

 */

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!


/**
 * Pair up for the interacting with the DOM Challenge!
 *  
 * Your goal:
 * 1. Add a button with id="fetch" to body (using js or html)
 * 2. Add a div at the end of the body of id="person-fetch" (using js or html)
 * 3. Add an event listener on the fetch button that fetches to https://randomuser.me/api/
 * 4. Take the response from the API and display the 
 * - Title. Firstname Lastname
 * - email
 * - Picture
 * 5. Complete the rest of the challenge 
 * Step 1: Find all needed Nodes
 * Step 2: Create Event Handler functions
 * Step 3: Attach event listeners to each respective nodes with their event type and handling function
 * 
 */