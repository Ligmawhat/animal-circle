import React from "react";
import { Grid, Input, Button, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import ProfileNav from "../ProfileNav/ProfileNav";
import UserInfoForm from "./UserInfoForm";
import UserInfoText from "./UserInfoText";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserInfo = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Input />
        <Button>Search</Button>
      </div>
      <hr />

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={4} md={3}>
          <ProfileNav />
        </Grid>
        <Grid item xs={12} md={9} sx={{ ml: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <UserInfoForm />
            </Grid>
            <Grid item xs={12} md={9}>
              <UserInfoText />
            </Grid>
            <Grid item xs={12} md={9}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserInfo;
