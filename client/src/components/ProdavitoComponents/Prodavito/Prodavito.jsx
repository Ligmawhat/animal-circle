import React, { useEffect } from "react";
import NavBar from "../../Navbar/Navbar";
import { Button, Input, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoods, setAllGoods } from "../../redux/ac/itemsProdavitoAc";
import CategoriesList from "../CategoriesList/CategoriesList";
import ViewGoods from "../ViewGoods/ViewGoods";

const Prodavito = () => {
  const dispatch = useDispatch();

  const { goods } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllGoods());
    // console.log(goods, "goods");
    return () => {
      dispatch(setAllGoods([]));
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
        <Grid item xs={12} md={3}>
          <CategoriesList />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <ViewGoods goods={goods} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Prodavito;
