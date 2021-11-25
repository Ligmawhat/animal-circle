import { Input, Button, Grid, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import { getWhoLikedMyDog, setWhoLikedMyDog } from "../../redux/ac/tinderAc";
import ProfileNav from "../ProfileNav/ProfileNav";

const Likes = () => {
  const { whoLikedMyDog, currUser } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWhoLikedMyDog(currUser.id));
    return () => {
      dispatch(setWhoLikedMyDog([]));
    };
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
          {whoLikedMyDog.length > 0 &&
            whoLikedMyDog.map((el) => (
              <Card
                sx={{ maxWidth: 300, height: 500 }}
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}
              >
                <p>
                  Вы({el.whoLiked}) лайкнули собаку по имени {el.name}, её порода: {el.breed}, её id{" "}
                  {el.id}. Она содержится в приюте: {el.authorAnimal}, их id: {el.authorAnimal_id}
                </p>
                <CardMedia component="img" height="194" image={el.url} alt="Paella dish" />
              </Card>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Likes;
