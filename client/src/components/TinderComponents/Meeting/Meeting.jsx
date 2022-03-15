import React, { useEffect } from "react";
import NavBar from "../../Navbar/Navbar";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getOneDog } from "../../redux/ac/tinderAc";
import MeetingCard from "../MeetingCard/MeetingCard";


const Meeting = () => {
  const { oneDog } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneDog());
  }, []);
  return (
      <>
          <NavBar />
          <MeetingCard dog={oneDog} />
      </>
  );
};

export default Meeting;
