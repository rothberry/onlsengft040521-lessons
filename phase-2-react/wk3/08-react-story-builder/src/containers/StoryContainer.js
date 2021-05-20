import React, { Component } from "react"
import { StoryLink } from "../components/StoryLink"

export default class StoryContainer extends Component {
  // state = {
  //   stories: [],
  // }

  componentDidMount() {
    console.log("cdm StoryContainer")
    // fetch("http://localhost:3001/stories")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({
    //       stories: data,
    //     })
    //   })
  }

  componentWillUnmount() {
    console.log("Story Container UnMounting")
  }

  render() {
    // console.log(this.props)
    const mappedStories = !!this.props.stories ? this.props.stories.map((story) => {
      return <StoryLink story={story} key={story.id} />
    }) : null
    return (
      <div>
        <h2>
          My Stories!
        </h2>
        {mappedStories}
      </div>
    )
  }
}
