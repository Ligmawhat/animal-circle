import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './style.css'
const Sale = () => {
  return (
    <div class="home_card_container">
      <div class="home_content">
        <h1>SnoopIto</h1>
        <h3>Магазин</h3>
      </div>
      <div class="home_flap"></div>
    </div>
  );
};

export default Sale;
