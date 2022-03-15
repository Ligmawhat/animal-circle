import React from "react";
import Sale from "../Sale/Sale";
import Walk from "../Walk/Walk";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Tinder from "../Tinder/Tinder";

const HomePage = () => {
  return (
    <div className="first_home_page">
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
