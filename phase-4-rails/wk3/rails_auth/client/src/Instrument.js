import React from 'react'

const Instrument = ({name, section, rating}) => {
  return (
    <li>
      {name}, {section}, {rating}
    </li>
  )
}

export default Instrument
