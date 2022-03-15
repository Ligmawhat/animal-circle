import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocalStorage } from "../../../hooks";
import { useSelector } from "react-redux";
import { ChatRoom } from "../ChatRoom";

export function Home() {
  const { currUser } = useSelector((state) => state);
  const { map } = useSelector((state) => state);
  const [username, setUsername] = useLocalStorage("username", `${currUser.login}`);
  const [roomId, setRoomId] = useState("");
  const linkRef = useRef(null);
  const [openChat, setOpenChat] = useState(false);

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeRoom = (e) => {
    setRoomId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(linkRef.current.click());
    linkRef.current.click();
  };

  const trimmed = username?.trim();

  return (
    <div className='chat_form'>
      {openChat ? (
        <ChatRoom roomId={roomId} />
      ) : (
        <Form
          className="mt-5"
          style={{ maxWidth: "320px", margin: "0 auto" }}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control value={currUser.login} onChange={handleChangeName} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Room:</Form.Label>
            <Form.Control as="select" value={roomId} onChange={(e) => handleChangeRoom(e)}>
              {map?.map((el) => (
                <option value={el.geotags_title}>{el.geotags_title}</option>
              ))}
            </Form.Control>
          </Form.Group>
          {trimmed && (
            <Button variant="success" onClick={(e) => setOpenChat(true)}>
              Chat
            </Button>
          )}
        </Form>
      )}
    </div>
  );
}
