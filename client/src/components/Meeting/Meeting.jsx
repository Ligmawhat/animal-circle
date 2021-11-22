import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import { Grid } from "@mui/material";

import TinderSelect from "../TinderSelect/TinderSelect";
import { useDispatch, useSelector } from "react-redux";
import { getOneDog, setOneDog } from "../redux/ac/tinderAc";
import MeetingCard from "./MeetingCard/MeetingCard";

const Meeting = () => {
  const { oneDog } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneDog());
  }, []);
  return (
    <>
      <NavBar />
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={3}>
          <TinderSelect />
        </Grid>
        <Grid item xs={12} md={9}>
          <MeetingCard dog={oneDog} />
        </Grid>
      </Grid>
    </>
  );
};

export default Meeting;
