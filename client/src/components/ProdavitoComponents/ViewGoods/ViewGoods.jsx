import { Grid, Paper } from "@mui/material";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import { styled } from "@mui/material/styles";
import MyModal from "../../MyModal/MyModal";
import {useState} from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ViewGoods = ({ goods }) => {

const [modal, setModals] = useState(false);
const [card, setCard] = useState('')

  return (
      <>
      <MyModal visible={modal} setVisible={setModals} >
          <ProdavitoItem el={card}/>
      </MyModal>
    <Grid container spacing={2}>
      {goods?.length > 0 &&
        goods?.map((el) => (
          <Grid key={el.id} item xs={6} md={4}>
            <Item onClick={() => (setCard(el), setModals(true))}>
              <ProdavitoItem el={el} />
            </Item>
          </Grid>
        ))}
    </Grid>
      </>
  );
};

export default ViewGoods;
