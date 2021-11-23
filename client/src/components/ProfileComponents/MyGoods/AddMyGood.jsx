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

function AddMyGood() {
  const dispatch = useDispatch();

  const { categories, currUser } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const [good_title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCat] = useState("");

  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewGood(good_title, description, url, price, category, currUser.id));
  };

  return (
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
                id="name"
                label="Название товара"
                autoFocus
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Описание товара"
                type="text"
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Фото товара"
                type="text"
                id="url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Цена товара"
                type="text"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ my: 2 }} id="demo-simple-select-label">
                Категория товара
              </InputLabel>
              <Select
                sx={{ my: 2 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Категория товара"
                onChange={(e) => setCat(e.target.value)}
              >
                {categories?.length &&
                  categories?.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el.category_title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Добавить товар
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddMyGood;
