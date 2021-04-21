// ? Questions

/**

  What is the DOM?
  - Document Object Model

  What are some node/document methods to find Nodes?
  - querySelector => used on any node
  - querySelectorAll => used on any node
  - getElementById => only on the document
  - getElementsByTagName
  - getElementsByClassName

  What are the query selectors for:
  - class   => ".btn"
  - id      => "#btn-id"
  - input   => 'input[name="name"]'

  How you we make sure that the DOM is fully loaded before we add our JavaScript?
  - Bottom of the HTML Body
  - defer
  - DOMContentLoaded
  
  What are Events?
  - User interactions
  
  What are some types of events?
  - click
  - hover
  - keypresses
  - DOMContentLoaded
  - submit
  - change
  - scroll

  How do we make sure that a <submit> btn doesn't reload the page?
  - event.preventDefault()

  Synchronous vs asynchronous?
  - Sync  => perform tasks in order
  - Async => perfom other tasks while running longer tasks

 */

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!


/**
 * Pair up for the interacting with the DOM Challenge!
 *  
 * Your goal:
 * 1. Add a button with id="fetch" to body
 * 2. Add a div at the end of the body of id="person-fetch"
 * 3. Add an event listener on the fetch button that fetches to https://randomuser.me/api/
 * 4. Take the response from the API and display the 
 * - Title. Firstname Lastname
 * - email
 * - Thumbnail picture
 * 5. Complete the rest of the challenge 
 * Step 1: Find all needed Nodes
 * Step 2: Create Event Handler functions
 * Step 3: Attach event listeners to each respective nodes with their event type and handling function
 * 
 */