import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderRounded from "@material-ui/icons/FavoriteBorderRounded";
import Share from "@material-ui/icons/Share";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import { approveSelectedDogs, getWhoLikedMyDog, setWhoLikedMyDog } from "../../redux/ac/tinderAc";
import ProfileNav from "../ProfileNav/ProfileNav";
import { Input, Button, Grid } from "@mui/material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
}));

export const PostCardDemo = React.memo(function PostCard() {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  const { whoLikedMyDog, currUser, oneDog } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWhoLikedMyDog(currUser.id));
    // return () => {
    //   dispatch(setWhoLikedMyDog([]))
    // }
  }, []);

  console.log(whoLikedMyDog, "WHO");
  const deleteHandler = () => {
    //logika udaenia
  };
  const func = () => {
    for (let i = 0; i < oneDog.length; i++) {
      for (let j = 0; j < whoLikedMyDog?.length; j++) {
        if (oneDog[i]?.id === whoLikedMyDog[j]?.id) {
          oneDog?.splice(i, 1);
        }
      }
    }
    return oneDog;
  };
  func();
  console.log(func(oneDog));

  const sendHandler = (id) => {
    dispatch(approveSelectedDogs(id));
  };

  return (
    <>
      <NavBar />
      <Grid item xs={12} md={9}>
        <ProfileNav />
      </Grid>

      {currUser.usertype === "user"
        ? whoLikedMyDog.length > 0 &&
          whoLikedMyDog.map((el) => (
            <Card sx={{ my: "50px" }} className={cx(cardStyles.root, shadowStyles.root)}>
              <CardMedia classes={mediaStyles} image={`http://localhost:3001/dogs/${el.url}`} />
              {/* <Avatar className={cardStyles.avatar} src={'https://i.pravatar.cc/300'} /> */}
              <CardContent className={cardStyles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  heading={el.breed}
                  body={`Собака содержится в приюте: ${el.authorAnimal} `}
                />
              </CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton>
                  <UnsubscribeIcon onClick={() => deleteHandler()} />
                </IconButton>

                {el?.status ? (
                  <IconButton disabled>
                    <ForwardToInboxIcon onClick={() => sendHandler(el.id)} />
                  </IconButton>
                ) : (
                  <IconButton>
                    <ForwardToInboxIcon onClick={() => sendHandler(el.id)} />
                  </IconButton>
                )}
              </Box>
            </Card>
          ))
        : whoLikedMyDog.length > 0 &&
          whoLikedMyDog.map((el) => (
            <Card sx={{ my: "50px" }} className={cx(cardStyles.root, shadowStyles.root)}>
              <CardMedia classes={mediaStyles} image={`http://localhost:3001/dogs/${el.url}`} />
              <Avatar className={cardStyles.avatar} src={"https://i.pravatar.cc/300"} />
              <CardContent className={cardStyles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  heading={el.name}
                  body={`Потенциальный опекун: ${el.whoLiked}\n
           Электронная почта пользователя: ${el.user_email}\n
           Контактный номер пользователя: ${el.user_mobile_phone}`}
                />
              </CardContent>
              <Box px={2} pb={2} mt={-1}>
                {/* <IconButton>
                  <Share />
                </IconButton>
                <IconButton>
                  <FavoriteBorderRounded />
                </IconButton> */}
              </Box>
            </Card>
          ))}
    </>
  );
});

export default PostCardDemo;
