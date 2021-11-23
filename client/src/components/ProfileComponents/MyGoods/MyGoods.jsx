import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Button, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import ProfileNav from "../ProfileNav/ProfileNav";
import ViewGoods from "../../ProdavitoComponents/ViewGoods/ViewGoods";
import AddMyGood from "./AddMyGood";
import { getMyGoods, setMyGoods } from "../../redux/ac/itemsProdavitoAc";
import ProdavitoItem from "../../ProdavitoComponents/ProdavitoItem/ProdavitoItem";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyGoods = () => {
  const { id } = useSelector((state) => state.currUser);
  const { myGoods } = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(myGoods);
  useEffect(() => {
    dispatch(getMyGoods(id));
    return () => {
      dispatch(setMyGoods([]));
    };
  }, []);
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
        <Grid item xs={12} md={9} sx={{ ml: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <AddMyGood />
            </Grid>
            <Grid item xs={12} md={9}>
              {myGoods?.length > 0 && myGoods?.map((el) => <ProdavitoItem key={el.id} el={el} />)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyGoods;
