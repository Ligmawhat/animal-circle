import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { MyPlacemark } from './components/MapTest2/MapTest2';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Logout from './components/auth/Logout';
// import MapBasics from './components/MapTest2/MapTest2';
// import PlacemarkDemo from './components/MapTest2/MapTest2';
import HomePage from "./components/HomePage/HomePage";
import Prodavito from "./components/Prodavito/Prodavito";
import Meeting from "./components/Meeting/Meeting";
import Apishka from "./components/Apishka/Apishka";



function App() {
  return (
    <div>
    <Router>
        <Route exact path="/maps" component={MyPlacemark} />
        {/* <Route exact path="/maps2" component={MyPlacemark} /> */}
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/prodavito" component={Prodavito}/>
        <Route exact path="/meeting" component={Meeting}/>
        <Route exact path="/apishka" component={Apishka}/>
    </Router>
    </div>
  );
}

export default App;
