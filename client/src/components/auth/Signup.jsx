import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCurrUser } from "../redux/ac/currUserAc";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

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

export default function SignUp() {
  const [regLogin, setRegLogin] = useState("");
  const [regPass, setRegPass] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault(e);
    axios({
      method: "post",
      data: {
        login: regLogin,
        password: regPass,
      },
      withCredentials: true,
      url: "/user/signup",
    }).then((res) => {
      if (res.data.id) {
        return (
          localStorage.setItem("user", JSON.stringify(res.data)),
          history.replace("/"),
          dispatch(getCurrUser(res.data.id, res.data.log, res.data.userType))
        );
      } else {
        history.push("/failed");
      }
    });
  };

  //   {localStorage.setItem('user', JSON.stringify(res.data))})
  // }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="login"
                name="login"
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Login"
                autoFocus
                onChange={(e) => setRegLogin(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setRegPass(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => register(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/user/login" className={classes.underline} variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
