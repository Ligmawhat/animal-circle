import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'


import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

const useStyles = makeStyles({
  butto: {
    margin: '1em',
    fontSize: '100px',
  },
})

export default function NavBar() {
  const currUser = useSelector((state) => state.currUser)
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <div>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
              >
                <MenuIcon />
              </Button>
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
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom',
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
                            ''
                          )}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Forum
          </Typography>

          {currUser.id ? (
            <Button
              sx={{ mr: '1em' }}
              className={classes.butto}
              component={Link}
              to="/logout"
              variant="outlined"
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                sx={{ mr: '1em' }}
                className={classes.butto}
                component={Link}
                to="/signup"
                variant="outlined"
                color="inherit"
                // style={{margin: '1em' }}
              >
                Sign Up
              </Button>

              <Button
                sx={{ mr: '1em' }}
                className={classes.butto}
                component={Link}
                to="/login"
                variant="outlined"
                color="inherit"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
