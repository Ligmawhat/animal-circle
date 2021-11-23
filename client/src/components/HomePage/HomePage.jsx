import React from "react";
import Sale from "../Sale/Sale";
import Tinder from "../Tinder/Tinder";
import Walk from "../Walk/Walk";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Logo</h1>
      <div className="Card">
        <Link to="/prodavito">
          <Sale />
        </Link>
        <Link to="/meeting">
          <Tinder />
        </Link>
        <Link to="/apishka">
          <Walk />
        </Link>
      </div>
      <Button onClick={() => history.push(`/user/profile/myGoods`)}>Список моих товаров</Button>
      <Button onClick={() => history.push(`/user/profile/myDogs`)}>Список моих собак </Button>
    </div>
  );
};

export default HomePage;
