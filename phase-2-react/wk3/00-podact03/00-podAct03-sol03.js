// ? Questions

/**
 * What is the difference between Props and State?
 * - State => Changable, dynamic, properties
 * - Props => static, passed down from the parent comp
 * 
 * What are some React LifeCycle Methods?
 * - constructor
 * - render
 * - componentDidMount
 * - render
 * 
 * - componentWillUnMount
 * - shouldComponentUpdate(nextProps, nextState)
 * - static derivedStateFromProps
 * 
 * Where should fetches be called?
 * - componentDidMount
 * 
 * What are some ways to handle form data?
 * - onChange => constantly changing the state of the form with the current value of the inputs
 * - onSubmit => eventHandler the sends the state of the form to the API
 * - React.createRef() => places a tracker on each input; and onSubmit, it sends whatever the current values are
 * - needs to be initialized inside of the constructor
 * 
 * What's the difference between Presentational vs Container Components?
 * - Pres => simple component that displays a single piece of data
 * - Cont => more complex comp that maps over a bunch of presentational comps
 * 
 * How do we get access to React Router routing?
 * - Wrap the highest component (index.js) in BrowserRouter as Router
 * 
 * How do we attach a component to a route/url?
 * - <Route path='/comp1' component={myComp} />
 * - <Route path='/comp1' render={() => <myComp props={props} />}
 * - <Route path='/comp1'>
 * -    <myComp props={props} />
 * - </Route>
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


  