import { Grid, Input, Button, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import ProfileNav from "../ProfileNav/ProfileNav";
// import MyDog from "../MyDogs/MyDogs";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  const history = useHistory;
  const { currUser } = useSelector((state) => state);
  console.log(currUser);

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Input />
        <Button>Search</Button>
      </div>
      <hr />
      <Grid item xs={12} md={9}>
        <ProfileNav />
      </Grid>
    </>
  );
};

export default Profile;
