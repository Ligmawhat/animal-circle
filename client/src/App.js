import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { Maps } from './components/Maps/Mapx';
import IconCustomImage, { MyPlacemark } from './components/MapTest2/MapTest2';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Logout from './components/auth/Logout';



function App() {
  return (
    
    <Router>


<Route exact path="/maps" component={MyPlacemark} />
{/* <Route exact path="/maps2" component={MyPlacemark} /> */}
<Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />




    </Router>
  );
}

export default App;
