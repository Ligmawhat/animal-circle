import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Input, Button, Paper } from "@mui/material";
import { useHistory } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ProfileNav = () => {
  const history = useHistory();

  return (
    <>
      <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/info`)}>Личная информация</Button>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/myDogs`)}>Список моих собак </Button>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/myGoods`)}>
              Список моих товаров
            </Button>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Button onClick={() => history.push(`/user/profile/likes`)}>кто меня лайкнул</Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileNav;
