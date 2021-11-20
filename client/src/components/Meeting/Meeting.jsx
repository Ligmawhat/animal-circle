import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import TinderSelect from "../TinderSelect/TinderSelect";

const Meeting = () => {
  return (
    <>
      <NavBar />
      <div>Дивчик с фото и описанием</div>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={3}>
          <TinderSelect />
        </Grid>
        <Grid item xs={12} md={9}>
          card
        </Grid>
      </Grid>
    </>
  );
};

export default Meeting;
