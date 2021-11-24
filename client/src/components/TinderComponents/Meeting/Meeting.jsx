import React, { useEffect } from "react";
import NavBar from "../../Navbar/Navbar";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getOneDog } from "../../redux/ac/tinderAc";
import MeetingCard from "../MeetingCard/MeetingCard";
import TinderSelect from "../TinderSelect/TinderSelect";

const Meeting = () => {
  const { oneDog } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneDog());
  }, []);
      {/*<NavBar />*/}
      {/*<Grid container spacing={2} sx={{ mt: 5 }}>*/}
        {/*<Grid item xs={12} md={3}>*/}
        {/*  <TinderSelect />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={9}>*/}
        {/*</Grid>*/}
      {/*</Grid>*/}
  return (
      <>
          <NavBar />
          <MeetingCard dog={oneDog} />
      </>
  );
};

export default Meeting;
