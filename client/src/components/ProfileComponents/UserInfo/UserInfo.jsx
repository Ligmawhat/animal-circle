import { Grid, Paper } from "@mui/material";
import NavBar from "../../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import ProfileNav from "../ProfileNav/ProfileNav";
import UserInfoForm from "./UserInfoForm";
import UserInfoText from "./UserInfoText";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserInfo = () => {
  const {userInfo} = useSelector(state => state)
  return (
    <>
      <NavBar />
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={4} md={3}>
          <ProfileNav />
        </Grid>
        <Grid style={{ margin: "0" }} item xs={12} md={9} sx={{ ml: 40 }}>
          <Grid style={{ margin: "0" }} container spacing={2}>
            {userInfo ? (
              <Grid item xs={12} md={9}>
                <UserInfoText />
              </Grid>
            ) : (
              <Grid item xs={12} md={9}>
                <UserInfoForm />
              </Grid>
            )}
            <Grid item xs={12} md={9}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserInfo;
