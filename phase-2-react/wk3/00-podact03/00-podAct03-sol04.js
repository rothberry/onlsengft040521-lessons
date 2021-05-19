// ? Questions

/**
 * What is the difference between Props and State?
 * - Props  => passed down from parent to child component
 * - State  => Can be changed throughout the component
 * 
 * What are some React LifeCycle Methods?
 * - constructor
 * - staticGetDerivedStateFromProps
 * - render
 * - componentDidMount
 * - render
 * - shouldComponentUpdate(nextProps, nextState)
 * - componentWillUnMount
 * 
 * Where should fetches be called?
 * - componentDidMount
 * 
 * What are some ways to handle form data?
 * - onChange, with constantly updating the state
 * - this.input = React.createRef() in the constructor
 * 
 * What's the difference between Presentational vs Container Components?
 * - Pres => Displays the data
 * - Cont => holding onto a group of components
 * 
 * How do we get access to React Router routing?
 * - import { BrowserRouter as Router, Route } from 'react-router-dom'
 * - <Router><App /></Router>
 * 
 * How do we attach a component to a route/url?
 */

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!


/**
 * Goals:
 - Create a React app that a user can add new coffees to our state using forms and adding the new coffee to the container
  1. Assign state to the correct components (May need to change type of components from func to class)
  2. Create the form for a new coffee (name, size)
  3. Assign event handlers where needed

  Stretch:
  Adding react-router for the `new` form and redirecting to the `coffee-container` page

 */