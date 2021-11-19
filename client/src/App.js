import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { MyPlacemark } from "./components/MapTest2/MapTest2";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Logout from "./components/auth/Logout";

<<<<<<< HEAD
import PlacemarkDemo from './components/MapTest2/MapTest2';
=======
// import MapBasics from './components/MapTest2/MapTest2';
import PlacemarkDemo from "./components/MapTest2/MapTest2";
>>>>>>> ee8404deedc4517101968c8df39e5913518c0933

import HomePage from "./components/HomePage/HomePage";
import Prodavito from "./components/Prodavito/Prodavito";
import Meeting from "./components/Meeting/Meeting";
<<<<<<< HEAD
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";


=======
import Apishka from "./components/Apishka/Apishka";
import ProdavitoCategories from "./components/ProdavitoCategories/ProdavitoCategories";
>>>>>>> ee8404deedc4517101968c8df39e5913518c0933

function App() {

    const dispatch = useDispatch()

    const url = 'ws://localhost:3001';

    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket(url)
    }, [])



  return (
    <div>
<<<<<<< HEAD
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
=======
      <Router>
        {/* <Route exact path="/maps" component={MyPlacemark} /> */}
        {/* <Route exact path="/maps2" component={MyPlacemark} /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/signup" component={SignUp} />
        <Route exact path="/user/logout" component={Logout} />

        <Route exact path="/prodavito" component={Prodavito} />
        <Route exact path="/prodavito/category/:id" component={ProdavitoCategories} />

        <Route exact path="/meeting" component={Meeting} />
        <Route exact path="/apishka" component={PlacemarkDemo} />
      </Router>
>>>>>>> ee8404deedc4517101968c8df39e5913518c0933
    </div>
  );
}

export default App;
