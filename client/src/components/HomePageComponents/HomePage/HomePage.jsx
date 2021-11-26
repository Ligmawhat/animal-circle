import React from "react";
import Sale from "../Sale/Sale";
import Walk from "../Walk/Walk";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Tinder from "../Tinder/Tinder";

const HomePage = () => {
  const history = useHistory();
  return (
    <div className="first_home_page">
      {/* <h1 style={{ textAlign: "center" }}>Logo</h1> */}
      <div className="Card">
        <div>
          <Link to="/prodavito">
            <Sale />
          </Link>
        </div>
        <div>
          <Link to="/meeting">
            <Tinder />
          </Link>
        </div>
        <div>
          <Link to="/apishka">
            <Walk />
          </Link>
        </div>
      </div>
      <div className="first_home_page_logo ">
        Snoopy
      </div>
    </div>
  );
};

export default HomePage;
