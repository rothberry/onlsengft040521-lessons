/* eslint-disable */
import "./App.css"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StoryForm from "./containers/StoryForm"
import Nav from "./components/Nav"
import Home from "./components/Home"
import StoryContainer from "./containers/StoryContainer"
import { Story, Story2 } from "./containers/Story"
// import { stories } from "./data"

// console.log(stories)
class App extends Component {
  state = {
    stories: [],
  }

  componentDidMount() {
    this.fetchStories()
  }

  fetchStories = () => {
    fetch("http://localhost:3001/stories")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stories: data,
        })
      })
  }

  addStory = (newStory) => {
    // pass down to the storyfrom comp, and add newly created story to state
    this.setState({
      stories: [...this.state.stories, newStory],
    })
  }
  render() {
    console.log(this.state)
    return (
      <Router>
        <Nav />
        <div className='App'>
          {/* need to add our routing here */}
          <Switch>
            {/* route for the home page */}
            <Route exact path='/' component={Home} />

            {/* <Route exact path='/' render={() => <Home testo={"testo"} />} />
            <Route exact path='/'>
              <Home testo={"testo"} />
            </Route> */}

            {/* route for the storyindex (or the story container) */}
            <Route
              exact
              path='/stories'
              render={(routeProps) => {
                {
                  /* ! REMEMBER ! Is you need to use the router properties (history, location, match) you must pass the routeProps down to the component */
                }
                return (
                  <StoryContainer
                    stories={this.state.stories}
                    {...routeProps}
                  />
                )
              }}
            />
            {/* route for the newStoryForm */}
            <Route
              exact
              path='/stories/new'
              render={(routeProps) => {
                return <StoryForm addStory={this.addStory} {...routeProps} />
              }}
            />
            {/* route for the story show page (or just one story) */}
            <Route path='/stories/:id' component={Story} />
            {/* <Route
              path='/stories/:id'
              render={(routeProps) => {
                return <Story2 stories={this.state.stories} {...routeProps} />
              }}
            /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
