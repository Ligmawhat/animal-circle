import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// styles
import { Form, Button } from 'react-bootstrap'
import {useLocalStorage} from "../../hooks";

export function Home() {
  const [username, setUsername] = useLocalStorage('username', 'John')
  const [roomId, setRoomId] = useState('free')
  const linkRef = useRef(null)

  const handleChangeName = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeRoom = (e) => {
    setRoomId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(linkRef.current.click())
    linkRef.current.click()
  }

  const trimmed = username?.trim()

  return (
    <Form
      className='mt-5'
      style={{ maxWidth: '320px', margin: '0 auto' }}
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control value={username} onChange={handleChangeName} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Room:</Form.Label>
        <Form.Control as='select' value={roomId} onChange={handleChangeRoom}>
          <option value='free'>Free</option>
          <option value='job' disabled>
            Job
          </option>
        </Form.Control>
      </Form.Group>
      {trimmed && (
        <Button variant='success' as={Link} to={`/apishka/${roomId}`} ref={linkRef}>
          Chat
        </Button>
      )}
    </Form>
  )
}
