import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardHeader, IconButton, Avatar, CardActions} from "@mui/material";
import { deleteGood } from "../../redux/ac/itemsProdavitoAc";

const ProdavitoItem = ({ el }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(deleteGood(el.id));
  // }, []);
  const deleteHandler = () => {
    dispatch(deleteGood(el.id));
  };



  return (
    <div>
      <Card
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}
        sx={{ maxWidth: 300, height: 500 }}
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">qq</Avatar>}
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
              bob
            </IconButton>
          }
          // title={el.title}
          subheader={el?.createdAt}
        />
        <CardMedia component="img" height="194" image={`http://localhost:3001/items/${el?.url}`} alt="Paella dish" />
        <CardContent>
          <Typography color="text.secondary">{el?.title}</Typography>
          <Typography color="text.secondary">{el?.description}</Typography>
        </CardContent>
        <CardActions style={{ display: "grid" }} disableSpacing>
          <Typography variant="body2" color="text.secondary">
            Цена: {el?.price}₽
          </Typography>
          {/*{currUser.login === el.login ?*/}
          {/*<Button aria-label="add to favorites" onClick={() => deleteHandler()}>*/}
          {/* udalit*/}
          {/*</Button> : '' }*/}

        </CardActions>
      </Card>
    </div>
  );
};

export default ProdavitoItem;
