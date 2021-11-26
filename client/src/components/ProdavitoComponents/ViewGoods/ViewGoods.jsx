import { Grid, Paper } from "@mui/material";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import { styled } from "@mui/material/styles";
import MyModal from "../../MyModal/MyModal";
import {useState} from "react";
import './style.css'
import ProdavitoInModal from "../ProdavitoInModal/ProdavitoInModal";

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
          <ProdavitoInModal el={card}/>
      </MyModal>
<div className='container'>

          <div className="card-grid">
      {goods?.length > 0 &&
        goods?.map((el) => (
              <ProdavitoItem setCard={setCard} setModals={setModals} el={el} />

        ))}
          </div>

</div>
      </>
  );
};

export default ViewGoods;
