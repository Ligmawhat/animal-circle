import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getCurrUser } from '../../redux/ac/currUserAc'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewPoint } from '../../redux/ac/mapAc'

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  underline: {
    textDecoration: 'none',
  },
}))


function MapAddPoint({ setPoint, point, cords }) {
  const [title, setTitle] = useState('')

  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const classes = useStyles()

  const pointHandler = (e) => {
    e.preventDefault()
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addNewPoint(cords, title, desc, url))

    setTitle('')
    setDesc('')
    setUrl('')
    setPoint('')
  }

  console.log('ADDPOINT RENDERED')

  console.log(cords, 'CORDS FORM')
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
  
        <form
          onSubmit={(e) => submitHandler(e)}
          className={classes.form}
          noValidate
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
              <TextField
                value={url}
                variant="outlined"
                required
                fullWidth
                name="url"
                label="Фото площадки"
                type="text"
                id="url"

                onChange={(e) => setUrl(e.target.value)}
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
            Отправить метку
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default MapAddPoint
