import React, {useEffect, useState} from "react";
import NavBar from "../../Navbar/Navbar";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoods, setAllGoods } from "../../redux/ac/itemsProdavitoAc";
import CategoriesList from "../CategoriesList/CategoriesList";
import ViewGoods from "../ViewGoods/ViewGoods";

const Prodavito = () => {
  const dispatch = useDispatch();

  const { goods } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllGoods());
    return () => {
      dispatch(setAllGoods([]));
    };
  }, [dispatch]);

  return (
    <>
      <NavBar />
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
