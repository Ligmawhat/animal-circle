import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { currGoogleUser, getCurrUser } from "../redux/ac/currUserAc";
import { useDispatch } from "react-redux";
import './style.css'
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  underline: {
    textDecoration: "none",
  },
}));

const Login = () => {
  const dispatch = useDispatch();

  let history = useHistory();

  const [logLogin, setLogLogin] = useState("");
  const [logPass, setLogPass] = useState("");
  const [userType, setUserType] = useState("");


  const loginWithGoogle =  (e) => {
    e.preventDefault();
// axios('/user/google')




    // window.open(`${process.env.REACT_APP_API_URL}/user/signIn`, "_self")
    window.open(`${process.env.REACT_APP_API_URL}/user/google`, "_self")
    // window.open('http://localhost:3001/user/google')
dispatch(currGoogleUser())



      }


    //   const checkAuth = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_API_URL}/user/checkAuth`, {
    //       credentials: 'include'
    //     });
    //     const currentuser = await response.json();
    //     dispatch(getCurrentUser(currentuser))
  
    // }



  const login = (e) => {
    e.preventDefault(e);
    axios({
      method: "post",
      data: {
        login: logLogin,
        password: logPass,
      },
      withCredentials: true,
      url: "/user/login",
      // }).then((res) => console.log(res.data,'DATA FROM LOGIN'))}
    }).then((res) => {
      if (res.data.id) {
        return (
          // localStorage.setItem('user', JSON.stringify(res.data)),
          history.replace("/"), dispatch(getCurrUser(res.data.id, res.data.log, res.data.userType))
        );
      } else {
        history.push("/failed");
      }
    });
  };

  const classes = useStyles();

  return (
    <div className="sign_home_page">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  name="login"
                  autoComplete="login"
                  autoFocus
                  onChange={(e) => setLogLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setLogPass(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => login(e)}
            >
              Login
            </Button>
            <Button
              onClick={loginWithGoogle}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Авторизируйтесь через google
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/user/signup" className={classes.underline} underline="none">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
