import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyDogs, setMyDogs } from "../../redux/ac/tinderAc";
import MeetingCard from "../../TinderComponents/MeetingCard/MeetingCard";
import AddMyDog from "./AddMyDog";
import { Grid, Input, Button, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import ProfileNav from "../ProfileNav/ProfileNav";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MyDogs() {
  const { id } = useSelector((state) => state.currUser);
  const { myDogs } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyDogs(id));
    return () => {
      dispatch(setMyDogs([]));
    };
  }, []);


console.log(myDogs , 'MYDOGS ')


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
              <AddMyDog />
            </Grid>
            <Grid item xs={12} md={9}>
              <ul>
              {myDogs?.length > 0 && myDogs?.map((el) => <li key={el.id}> {el.name} </li> )}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyDogs;
