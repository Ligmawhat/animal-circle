import { Input, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
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
              <p>
                Вас лайкнул:{el.whoLiked}, его id {el.whoLiked_id}
              </p>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Likes;
