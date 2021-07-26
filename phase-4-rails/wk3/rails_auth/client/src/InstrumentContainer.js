import { useEffect, useState } from "react"
import Instrument from "./Instrument"
import InstrumentForm from "./InstrumentForm"

// mapp over our instruments related to our current user
const InstrumentContainer = ({ user }) => {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    fetch("/instruments")
      .then((res) => res.json())
      .then((data) => {
        setInstruments(data)
      })
  }, [])

  const addInstrument = (instrument) => {
    setInstruments([...instruments, instrument])
  }
  return (
    <div className='inst-container'>
      <InstrumentForm user={user} addInstrument={addInstrument} />
      <h3>Your Instruments!</h3>
      {instruments.length > 0 ? (
        instruments.map(({ name, section, rating }, idx) => {
          return (
            <Instrument
              name={name}
              section={section}
              rating={rating}
              key={idx}
            />
          )
        })
      ) : (
        <strong>Looks like you don't have any instruments yet</strong>
      )}
    </div>
  )
}

export default InstrumentContainer
