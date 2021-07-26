import { useState, useRef } from "react"
import { Form, Button } from "react-bootstrap"

const InstrumentForm = ({ user, addInstrument }) => {
  const nameRef = useRef("")
  const sectionRef = useRef("")
  const [rating, setRating] = useState(0)

  const createRadio = () => {
    return [0, 1, 2, 3, 4, 5].map((r) => {
      return (
        <Form.Check
          inline
          key={r}
          label={r}
          name='rating-radio'
          type='radio'
          id={`inline-radio-${r}`}
          defaultChecked={r === 0}
          onClick={handleRadio}
        />
      )
    })
  }

  const handleRadio = (e) => {
    setRating(e.target.id.slice(-1))
  }

  const handleSubmit = (e) => {
    // console.log(nameRef.current.value)
    // console.log(sectionRef.current.value)
    // console.log(rating)
    e.preventDefault()
    const formObj = {
      name: nameRef.current.value,
      section: sectionRef.current.value,
      rating: rating,
      user_id: user.id,
    }
    const postReq = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formObj),
    }
    console.log(formObj)
    fetch("/instruments", postReq)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        addInstrument(data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        {/* <input type='text' placeholder='Instrument Name' /> */}
        <Form.Control type='text' placeholder='Instrument Name' ref={nameRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Section</Form.Label>
        <Form.Control type='text' placeholder='Section' ref={sectionRef} />
      </Form.Group>
      <Form.Label>Rating</Form.Label>
      <div key='default-radio' className='mb-3'>
        {createRadio()}
      </div>
      <Button type='submit'>Add Instrument</Button>
    </Form>
  )
}

export default InstrumentForm
