import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { MyPlacemark } from './components/MapTest2/MapTest2';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Logout from './components/auth/Logout';

import PlacemarkDemo from './components/MapTest2/MapTest2';

import HomePage from "./components/HomePage/HomePage";
import Prodavito from "./components/Prodavito/Prodavito";
import Meeting from "./components/Meeting/Meeting";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";



function App() {

    const dispatch = useDispatch()

    const url = 'ws://localhost:3001';

    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket(url)
    }, [])



  return (
    <div>
    <Router>
        {/*<Route exact path="/maps" component={MyPlacemark} />*/}
        {/* <Route exact path="/maps2" component={MyPlacemark} /> */}
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/prodavito" component={Prodavito}/>
        <Route exact path="/meeting" component={Meeting}/>
        <Route exact path="/apishka" component={PlacemarkDemo}/>
    </Router>
    </div>
  );
}

export default App;
