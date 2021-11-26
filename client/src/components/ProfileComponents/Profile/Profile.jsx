import { Grid, Input, Button, Paper } from "@mui/material";
import React from "react";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import ProfileNav from "../ProfileNav/ProfileNav";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  return (
    <>
      <NavBar />
      <Grid item xs={12} md={3}>
        <ProfileNav />
      </Grid>
    </>
  );
};

export default Profile;
