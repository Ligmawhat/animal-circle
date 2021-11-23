import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyDogs } from "../../redux/ac/tinderAc";
import MeetingCard from "../../TinderComponents/MeetingCard/MeetingCard";
import { Grid, Input, Button, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import ProfileNav from "../ProfileNav/ProfileNav";
import ViewGoods from "../../ProdavitoComponents/ViewGoods/ViewGoods";
import AddMyGood from "./AddMyGood";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyGoods = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Input />
        <Button>Search</Button>
      </div>
      <hr />

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={9}>
          <ProfileNav />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Box sx={{ ml: 40 }}>{/* <AddMyDog /> */}</Box>
            <Box sx={{ ml: 40 }}>
              {/* {myDogs.length > 0 && myDogs.map((el) => <MeetingCard dog={el} />)} */}
              <AddMyGood />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyGoods;
