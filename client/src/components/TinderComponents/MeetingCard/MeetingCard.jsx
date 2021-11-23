import {
  Avatar, Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
import {useDispatch} from "react-redux";
import {changeDog, changeDogAndGetId} from "../../redux/ac/tinderAc";

const MeetingCard = ({ dog }) => {

  const dispatch = useDispatch()

  const onDeleteHandler = (id) => {
    dispatch(changeDog(id))
  }



  const onDeleteHandlerOnLike = (id) => {
    dispatch(changeDogAndGetId(id))
  }

  return (
    <div >
      <div
          onDragOver={(e)=>console.log(e.target,'lll')}
          style={{position: "absolute",
            zIndex:'-1',
            display: "flex",
            width: "100%",
            height: "800px",
            flexDirection: "row",
          }}
      >
      <div
          onDragOver={(e)=>console.log(e.target,'llfffffl')}
          style={{
            width: "50%",
            height: "500px"}}
          className='kill'>
        fdf
      </div>
      <div
          style={{
            zIndex:'-1',
            width: "50%",
            height: "500px"}}
          className='add'>
        fff
      </div>
      </div>
      {dog.length === 0 ? 'ВСЕГО Х О Р О Ш Е Г О !! !! !! ' :
      <Card
          draggable={true}
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" ,zIndex:'5'}}
        sx={{ maxWidth: 400, height: 600 }}
      >
        <CardHeader
            draggable={false}
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
            onDragOver={(e)=>console.log(e.dataTransfer)}
            draggable={false}
          component="img"
           height="350"
          image={dog[0]?.url}
          alt="Paella dish"
        />
        <CardActions style={{ display: "grid" }} disableSpacing>
          <Box sx={{ display: 'flex',
            justifyContent: "space-between"}} >
          <IconButton aria-label="add to favorites">
            <ClearIcon onClick={() => onDeleteHandler(dog[0]?.id)}/>
          </IconButton>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={() => onDeleteHandlerOnLike(dog[0]?.id)}/>
          </IconButton>
          </Box>
        </CardActions>
        <CardContent>
          <Typography color="text.secondary">имя: {dog[0]?.name}</Typography>
          <Typography color="text.secondary">описание: {dog[0]?.desc}</Typography>
          <Typography color="text.secondary">пол: {dog[0]?.sex}</Typography>
        </CardContent>
      </Card>
      }
    </div>
  );
};

export default MeetingCard;
