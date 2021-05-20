import React from "react"
import { Link } from "react-router-dom"

export const StoryLink = ({ story }) => {
  return (
    <div>
      {/* link to story show page */}
      <Link to={`/stories/${story.id}`} key={story.id}>
        {/* When we click the Link to, it run this.props.history.push(newUrl) */}
        <li>{story.title}</li>
      </Link>
    </div>
  )
}
