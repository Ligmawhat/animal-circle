import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const MeetingCard = ({ dog }) => {
  return (
    <div>
      <Card
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}
        sx={{ maxWidth: 600, height: 1000 }}
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
          // subheader={dog.createdAt}
        />
        <CardMedia
          component="img"
          //  height="500"
          image={dog.url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography color="text.secondary">имя: {dog.name}</Typography>
          <Typography color="text.secondary">описание: {dog.desc}</Typography>
          <Typography color="text.secondary">пол: {dog.sex}</Typography>
        </CardContent>
        <CardActions style={{ display: "grid" }} disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
            купить
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default MeetingCard;
