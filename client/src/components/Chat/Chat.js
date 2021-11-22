import React from 'react';
import {Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "../Home";
import {ChatRoom} from "../ChatRoom";

const routes = [
    { path: '/apishka', name: 'Home', Component: Home },
    { path: '/apishka/:roomId', name: 'ChatRoom', Component: ChatRoom }
]

const Chat = () => {
    return (
        <div>
            <Container style={{ maxWidth: '512px' }}>
                <h1 className='mt-2 text-center'>React Chat App</h1>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} exact>
                        <Component />
                    </Route>
                ))}
            </Container>
        </div>
    );
};

export default Chat;