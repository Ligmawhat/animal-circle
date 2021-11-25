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
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Input />
        <Button>Search</Button>
      </div>
      <hr />
      <Grid item xs={12} md={3}>
        <ProfileNav />
      </Grid>
    </>
  );
};

export default Profile;
