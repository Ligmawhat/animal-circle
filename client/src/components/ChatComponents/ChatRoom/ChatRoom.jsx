import { MessageForm } from "./MessageForm/MessageForm";
import { MessageList } from "./MessageList/MessageList";
import { Container } from "react-bootstrap";
import { useChat, useLocalStorage } from "../../../hooks";

export function ChatRoom({roomId}) {
  const [username] = useLocalStorage("username");
  const { messages, sendMessage, removeMessage } = useChat(roomId);



  return (
    <>
      <Container>
        <h2 className="text-center">Room: {roomId}</h2>
        <MessageList messages={messages} removeMessage={removeMessage} />
        <MessageForm username={username} sendMessage={sendMessage} />
      </Container>
    </>
  );
}
