import { Grid, Input, Button, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import CategoriesList from "../../ProdavitoComponents/CategoriesList/CategoriesList";
import { styled } from "@mui/material/styles";
import ProdavitoCategory from "../../ProdavitoComponents/ProdavitoCategory/ProdavitoCategory";
import { useHistory } from "react-router";
import ProfileNav from "../ProfileNav/ProfileNav";
// import MyDog from "../MyDogs/MyDogs";
import ViewGoods from "../../ProdavitoComponents/ViewGoods/ViewGoods";

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

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={9}>
          <ProfileNav />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {/* <MyDog /> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
