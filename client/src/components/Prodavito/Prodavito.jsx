import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import { Button, Input, Stack, Divider, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardItems } from "../redux/ac/itemsProdavitoAc";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import ProdavitoCategory from "../ProdavitoCategory/ProdavitoCategory";

import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Prodavito = () => {
  const dispatch = useDispatch();

  const { allCategoryFromBack, allAGoodsFromBack } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getAllCardItems());
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
        <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
          {allCategoryFromBack?.map((el) => (
            <Grid item>
              <Item>
                <ProdavitoCategory el={el} />
              </Item>
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ fontSize: "10" }} container spacing={2} xs={8} md={9} sx={{ ml: 35 }}>
          {allAGoodsFromBack?.map((el) => (
            <Grid item xs={6} md={4}>
              <Item>
                <ProdavitoItem el={el} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Prodavito;
