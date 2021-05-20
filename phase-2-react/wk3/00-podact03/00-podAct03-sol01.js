// ? Questions

/**
 * What is the difference between Props and State?
 * State => Anything that's changing within a component
 * Props => Passed down from parent to child
 * <Comp1 newProps={this.props....}
 * <Comp2 moreNewProps={this.props.newProps}
 * <Comp3 evenMoreNewProps={this.props.moreNewProps}
 * 
 * What are some React LifeCycle Methods?
 * - state/constructor
 * - getStaticDerivedFromProps
 * - render
 * - componentDidMount
 * - render
 * - shouldComponentUpdate => return a boolean
 * - componentWillUnMount => cleanup methods
 * 
 * Where should fetches be called?
 * - componentDidMount
 * 
 * What are some ways to handle form data?
 * - onChange => update state on every change
 * - onSubmit/onClick => sends out the formData
 * - React.createRef() => in constructor, this.inputName.current.value, <input ref={this.inputName} />
 * 
 * constructor() {
 *  super()
 *  this.state = {...}
 *  this.inputName = React.createRef()
 * } 
 * !=== 
 * state = {...}
 * 
 * What's the difference between Presentational vs Container Components?
 * - Presentationl => simpler
 * - Container => holds the data for smaller comp, usually mapping presenational comps
 * 
 * How do we get access to React Router routing?
 * - import { BrowserRouter as Router } from 'react-router-dom'
 * - wrapp the whole app inside of <router
 * <Router>
 *  <App />
 * </Router>
 * 
 * How do we attach a component to a route/url?
 * - {Route}
 * - <Route path='/' component={Comp} />
 * - <Route path='/' render={() => <Comp newProps={this.props} />} />
 * - <Route path='/'>
 *      <Comp newProps={this.props} />  
 *   </Route>
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