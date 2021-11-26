import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Button, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import ProfileNav from "../ProfileNav/ProfileNav";
import AddMyGood from "./AddMyGood";
import { getMyGoods } from "../../redux/ac/itemsProdavitoAc";
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
  // console.log(myGoods);
  useEffect(() => {
    dispatch(getMyGoods(id));
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
              <ul>
                {/* {myGoods?.length > 0 && myGoods?.map((el) => <MyGoodsItem key={el.id} el={el} />)} */}
                {myGoods?.length > 0 && myGoods?.map((el) => <li key={el.id}>{el.title}</li>)}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyGoods;
