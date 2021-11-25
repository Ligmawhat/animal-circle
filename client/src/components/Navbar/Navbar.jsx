import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/ac/currUserAc";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles({
  button: {
    margin: "1em",
    fontSize: "100px",
  },
});

export default function NavBar() {
  const currUser = useSelector((state) => state.currUser);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const dispatch = useDispatch();

  let history = useHistory();

  const logHandler = (e) => {
    e.preventDefault();
    axios("/user/logout").then((res) => {
      if (res.data === "logout") {
        return (
          dispatch(logoutUser()),
          localStorage.clear(),
          sessionStorage.clear(),
          history.push("/user/login")
        );
      } else {
        console.log("ne vishel");
      }
    });
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <div>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem to="/users" component={Link}>
                            Users
                          </MenuItem>
                          {currUser.id ? (
                            <MenuItem to="/topics" component={Link}>
                              Topics
                            </MenuItem>
                          ) : (
                            ""
                          )}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </IconButton>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo/PetProject
          </Typography> */}

          {currUser.id ? (
            <>
              <Typography className="navName" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Привет, {currUser.login}!
              </Typography>
              <Button
                sx={{ mr: "1em" }}
                className={classes.butto}
                // component={Link}
                // to="/user/logout"
                variant="outlined"
                color="inherit"
                onClick={(e) => logHandler(e)}
              >
                Logout
              </Button>

              <Button
                sx={{ mr: "1em" }}
                className={classes.butto}
                component={Link}
                to="/user/profile"
                variant="outlined"
                color="inherit"
              >
                Личный кабинет
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{ mr: "1em" }}
                className={classes.butto}
                component={Link}
                to="/user/signup"
                variant="outlined"
                color="inherit"
                // style={{margin: '1em' }}
              >
                Sign Up
              </Button>

              <Button
                sx={{ mr: "1em" }}
                className={classes.butto}
                component={Link}
                to="/user/login"
                variant="outlined"
                color="inherit"
              >
                Login
              </Button>
            </>
          )}
          <Button
            sx={{ mr: "1em" }}
            className={classes.butto}
            variant="outlined"
            color="inherit"
            onClick={() => history.push("/")}
          >
            main
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
