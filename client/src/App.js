import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import PlacemarkDemo from './components/MapTest2/MapTest2';
import HomePage from "./components/HomePage/HomePage";
import Prodavito from "./components/Prodavito/Prodavito";
import Meeting from "./components/Meeting/Meeting";
import {Home} from "./components/Home";
import {ChatRoom} from "./components/ChatRoom";
import axios from "axios";
import Chat from "./components/Chat/Chat";

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true



function App() {
  return (
    <div>
    <Router>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/prodavito" component={Prodavito}/>
        <Route exact path="/meeting" component={Meeting}/>
        <Route exact path="/apishka" component={PlacemarkDemo}/>
        <Route exact path="/apishka/:roomId" component={ChatRoom}/>
    </Router>
    </div>
  );
}

export default App;
