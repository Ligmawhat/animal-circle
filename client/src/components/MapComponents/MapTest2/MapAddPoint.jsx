import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { addNewPoint } from "../../redux/ac/mapAc";
import "./style.css";
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

function MapAddPoint({ setPoint, point, cords, modal, setModal }) {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const classes = useStyles();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewPoint(cords, title, desc, file));
    setFile("");
    setTitle("");
    setDesc("");
    setPoint("");
    setModal(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          onSubmit={(e) => submitHandler(e)}
          className={classes.form}
          method="post"
          enctype="multipart/form-data"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={title}
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Название площадки"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={desc}
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Описание площадки"
                type="text"
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="url"
                type="file"
                name="file"
                onChange={(e) => onFileChange(e)}
              /> */}
              <div class="file-input">
                <input
                  fullWidth
                  required
                  onChange={(e) => onFileChange(e)}
                  type="file"
                  id="file"
                  class="file"
                />
                <label for="file">
                  Select file
                  <p class="file-name"></p>
                </label>
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Отправить метку
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default MapAddPoint;
