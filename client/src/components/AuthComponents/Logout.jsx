import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/ac/currUserAc";

function Logout() {
  const dispatch = useDispatch();

  let history = useHistory();

  const logHandler = (e) => {
    e.preventDefault();
    axios("/user/logout").then((res) => {
      if (res.data === "logout") {
        return (
          dispatch(logoutUser()),
          localStorage.clear(),
          sessionStorage.clear(),
          history.push("/user/login")
        );
      } else {
        console.error("ne vishel");
      }
    });
  };

  return <Button onClick={(e) => logHandler(e)}> Logout </Button>;
}

export default Logout;
