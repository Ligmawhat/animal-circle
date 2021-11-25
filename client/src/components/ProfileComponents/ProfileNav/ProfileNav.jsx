import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Input, Button, Paper } from "@mui/material";
import { useHistory } from "react-router";
import {useSelector} from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ProfileNav = () => {
  const history = useHistory();

  const {currUser} = useSelector((state) => state)

  return (
    <>
      { currUser.usertype === 'user' ?  ( <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/info`)}>Личная информация</Button>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/myGoods`)}>
              Добавить товар
            </Button>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/likes`)}>Избранное</Button>
          </Item>
        </Grid>
      </Grid> )  :  ( <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
            <Grid item xs={12} md={3}>
              <Item>
                <Button onClick={() => history.push(`/user/profile/info`)}>Личная информация</Button>
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item>
                <Button onClick={() => history.push(`/user/profile/myDogs`)}> Добавить собаку </Button>
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item>
                <Button onClick={() => history.push(`/user/profile/likes`)}> Потенциальные опекуны </Button>
              </Item>
            </Grid>
          </Grid> )}


    </>
  );
};

export default ProfileNav;
