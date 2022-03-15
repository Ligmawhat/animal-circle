import { useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../../Navbar/Navbar";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoodsForOneCategories } from "../../redux/ac/itemsProdavitoAc";
import CategoriesList from "../CategoriesList/CategoriesList";
import ViewGoods from "../ViewGoods/ViewGoods";
import { setAllGoodsForOneCategories } from "../../redux/ac/itemsProdavitoAc";

const ProdavitoCategories = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { goodsForOneCategories } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllGoodsForOneCategories(+id));
    return () => {
      dispatch(setAllGoodsForOneCategories([]));
    };
  }, [id]);

  return (
    <>
      <NavBar />
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={3}>
          <CategoriesList />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <ViewGoods goods={goodsForOneCategories} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProdavitoCategories;
