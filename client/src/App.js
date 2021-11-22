import "./App.css";
import {ChatRoom} from "./components/ChatRoom";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// import { MyPlacemark } from "./components/MapTest2/MapTest2";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Logout from "./components/auth/Logout";

// import MapBasics from './components/MapTest2/MapTest2';
import PlacemarkDemo from "./components/MapComponents/MapTest2/MapTest2";
import axios from "axios";
import HomePage from "./components/HomePage/HomePage";
import Prodavito from "./components/ProdavitoComponents/Prodavito/Prodavito";
import Meeting from "./components/TinderComponents/Meeting/Meeting";
import Apishka from "./components/MapComponents/Apishka/Apishka";
import ProdavitoCategories from "./components/ProdavitoComponents/ProdavitoCategories/ProdavitoCategories";
import Profile from "./components/Profile/Profile";

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
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

        <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/apishka/:roomId" component={ChatRoom}/>
      </Router>
    </div>
  );
}

export default App;
