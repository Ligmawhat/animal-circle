import { useParams } from "react-router-dom";
// components
import { MessageForm } from "./MessageForm/MessageForm";
import { MessageList } from "./MessageList/MessageList";
import { UserList } from "./UserList/UserList";
// styles
import { Container } from "react-bootstrap";
import { useChat, useLocalStorage } from "../../../hooks";

export function ChatRoom() {
  const { roomId } = useParams();
  const [username] = useLocalStorage("username");
  const { users, messages, sendMessage, removeMessage } = useChat(roomId);

  return (
    <>
      <Container>
        <h2 className="text-center">Room: {roomId === "job" ? "Job" : "Free"}</h2>
        {/*<UserList users={users} />*/}
        <MessageList messages={messages} removeMessage={removeMessage} />
        <MessageForm username={username} sendMessage={sendMessage} />
      </Container>
    </>
  );
}
