import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from "./components/AuthComponents/Login";
import SignUp from "./components/AuthComponents/Signup";
import Logout from "./components/AuthComponents/Logout";
import PlacemarkDemo from "./components/MapComponents/MapTest2/MapTest2";
import axios from "axios";
import HomePage from "./components/HomePageComponents/HomePage/HomePage";
import Prodavito from "./components/ProdavitoComponents/Prodavito/Prodavito";
import Meeting from "./components/TinderComponents/Meeting/Meeting";
import ProdavitoCategories from "./components/ProdavitoComponents/ProdavitoCategories/ProdavitoCategories";

import Chat from "./components/ChatComponents/Chat/Chat";
import MyDogs from "./components/ProfileComponents/MyDogs/MyDogs";
import MyGoods from "./components/ProfileComponents/MyGoods/MyGoods";
import Profile from "./components/ProfileComponents/Profile/Profile";
import UserInfo from "./components/ProfileComponents/UserInfo/UserInfo";
import Likes from "./components/ProfileComponents/Likes/Likes";
import PostCardDemo, { SocialCardDemo } from "./components/ProfileComponents/Likes/Likes";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {


  return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/signup" component={SignUp} />
        <Route exact path="/user/logout" component={Logout} />
        <Route exact path="/prodavito" component={Prodavito} />
        <Route exact path="/prodavito/category/:id" component={ProdavitoCategories} />
        <Route exact path="/meeting" component={Meeting} />
        <Route exact path="/apishka" component={PlacemarkDemo} />
        <Route exact path="/apishka/:roomId" component={Chat} />
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/user/profile/info" component={UserInfo} />
        <Route exact path="/user/profile/myDogs" component={MyDogs} />
        <Route exact path="/user/profile/myGoods" component={MyGoods} />
        <Route exact path="/user/profile/likes" component={PostCardDemo} />
      </Router>
  );
}

export default App;
