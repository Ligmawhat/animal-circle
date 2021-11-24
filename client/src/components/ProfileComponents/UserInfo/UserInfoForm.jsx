import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addNewGood, getAllCategories } from "../../redux/ac/itemsProdavitoAc";
import { addUserInfo } from "../../redux/ac/userInfoAc";

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

function UserInfoForm() {
  const dispatch = useDispatch();

  const { currUser } = useSelector((state) => state);
  const { userInfo } = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [mobile_phone, setMobilePhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [first_name, setFirstName] = useState(0);
  const [last_name, setLastName] = useState("");
  const classes = useStyles();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUserInfo(email, mobile_phone, avatar, first_name, last_name, currUser.id));
  };

  return (
    <>
      {userInfo ? (
        <>вы уже заполняли профиль</>
      ) : (
        <>
          <>вы не заполняли профиль</>
          <Container sx={{ ml: 80 }} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form onSubmit={(e) => submitHandler(e)} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="first_name"
                      label="Имя"
                      autoFocus
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Фамилия"
                      type="text"
                      id="last_name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="email"
                      type="text"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Мобильный телефон"
                      type="text"
                      id="mobile_phone"
                      onChange={(e) => setMobilePhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Ваш аватар"
                      type="text"
                      id="avatar"
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Добавить описание
                </Button>
              </form>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default UserInfoForm;
