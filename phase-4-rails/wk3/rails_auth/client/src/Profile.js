import React from "react"
import InstrumentContainer from "./InstrumentContainer"

const Profile = ({ user, url }) => {
  return (
    <div>
      Profile email: {user.email}
      <InstrumentContainer url={url} user={user} />
    </div>
  )
}

export default Profile
