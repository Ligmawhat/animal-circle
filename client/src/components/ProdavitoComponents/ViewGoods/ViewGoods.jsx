import { Grid, Paper } from "@mui/material";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ViewGoods = ({ goods }) => {
  return (
    <Grid container spacing={2}>
      {goods.length &&
        goods?.map((el) => (
          <Grid key={el.id} item xs={6} md={4}>
            <Item>
              <ProdavitoItem el={el} />
            </Item>
          </Grid>
        ))}
    </Grid>
  );
};

export default ViewGoods;
