import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import './style.css'

const Walk = () => {
  return (
    <div class="walk_card_container">
      <div class="walk_content">
        <h1>SnoopWalk</h1>
        <h3>Прогулки</h3>
      </div>
      <div class="walk_flap"></div>
    </div>
  );
};

export default Walk;
