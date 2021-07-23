import { useEffect, useState } from "react"
import Instrument from "./Instrument"

// mapp over our instruments related to our current user
const InstrumentContainer = () => {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    fetch("/instruments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setInstruments(data)
      })
  }, [])

  return (
    <div className='inst-container'>
      {instruments.length > 0
        ? instruments.map(({ name, section, rating }, idx) => {
            return (
              <Instrument
                name={name}
                section={section}
                rating={rating}
                key={idx}
              />
            )
          })
        : null}
    </div>
  )
}

export default InstrumentContainer
