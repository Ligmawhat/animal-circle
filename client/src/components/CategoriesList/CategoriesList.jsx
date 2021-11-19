import { useEffect } from "react";
import { Button, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/ac/itemsProdavitoAc";
import ProdavitoCategory from "../ProdavitoCategory/ProdavitoCategory";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";

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
    <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
      <Grid item>
        <Item>
          <Button onClick={() => history.push(`/prodavito`)}>Все категории</Button>
        </Item>
      </Grid>
      {categories?.map((el) => (
        <Grid item>
          <Item>
            <ProdavitoCategory el={el} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoriesList;
