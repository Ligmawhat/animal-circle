import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './style.css'
const Tinder = () => {
  return (
    <div class="tinder_card_container">
      <div class="tinder_content">
        <h1> SnoopInder</h1>
        <h3>Найди себе собаку</h3>
      </div>
      <div class="tinder_flap"></div>
    </div>
  );
};

export default Tinder;
