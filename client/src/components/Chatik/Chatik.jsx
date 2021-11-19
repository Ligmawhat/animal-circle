import React, {useEffect, useState} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from './TextInput';
import { MessageLeft, MessageRight } from "./Message";
const URL = 'ws://localhost:3001'




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: "80vw",
            height: "80vh",
            maxWidth: "500px",
            maxHeight: "700px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
        },
        paper2: {
            width: "80vw",
            maxWidth: "500px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
        },
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 80px )"
        }
    })
);



export default function Chatik() {
    const classes = useStyles();
    const ws = new WebSocket(URL)

// const [user, setUser] = useState('John');
// const [message, setMessage] = useState([]);
const [messages, setMessages] = useState([]);
// const [ws, setWs] = useState(new WebSocket(URL));
    function messageHandler(e) {
        setMessages(e.target.value);
    }

    console.log(messages)
    function sendMessage(e) {
        e.preventDefault();
        // socket.emit("message", { username, text, id: 0 });
        // setText("");
    }
    useEffect(()=>{
        ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')}
    },[])


    return (
        <div className={classes.container}>
            <Paper className={classes.paper} zDepth={2}>
                <Paper id="style-1" className={classes.messagesBody}>
                    <MessageLeft
                        message="あめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName=""
                        avatarDisp={true}
                    />
                    <MessageRight
                        message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="まさりぶ"
                        avatarDisp={false}
                    />
                </Paper>
                <TextInput sendMessage={sendMessage} messageHandler={messageHandler}/>
            </Paper>
        </div>
    );
}