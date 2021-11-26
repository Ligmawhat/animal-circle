import { useEffect } from "react";
import { Button, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/ac/itemsProdavitoAc";
import ProdavitoCategory from "../ProdavitoCategory/ProdavitoCategory";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";
import './style.css'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CategoriesList = () => {
  const history = useHistory();
  const { categories } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
      <nav>
      <ul>

      {categories?.length &&
        categories?.map((el) => (

              <ProdavitoCategory el={el} />

        ))}
      </ul>
      </nav>
  );
};

export default CategoriesList;
