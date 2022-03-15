import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { addNewPoint } from '../../redux/ac/mapAc'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { addNewDog, getAllBreed, getAllSex } from '../../redux/ac/tinderAc'

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

function AddMyDog() {
  const { breed, sex, currUser } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSex())
  }, [])

  useEffect(() => {
    dispatch(getAllBreed())
  }, [])

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)

  const [onebreed, setOnebreed] = useState('')
  const [onesex, setOnesex] = useState('')

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const classes = useStyles()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addNewDog(name, desc, file, onebreed, onesex, currUser.id))
    console.log(name, desc, file, onebreed, onesex, currUser.id, 'ADD DOG')
    setName('')
    setDesc('')
    setFile(null)
    setOnebreed('')
    setOnesex('')
  }

  return (
    <Container sx={{ ml: 40 }} component="main" maxWidth="xs">
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
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Кличка животного"
                autoFocus
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="desc"
                label="Описание собаки"
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
                id="url"
                type="file"
                name="file"
                onChange={(e) => onFileChange(e)}
              />
            </Grid>
          </Grid>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ my: 2 }} id="demo-simple-select-label">
                Порода
              </InputLabel>
              <Select
                sx={{ my: 2 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Порода"
                onChange={(e) => setOnebreed(e.target.value)}
              >
                {breed?.length &&
                  breed?.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el.breed_title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Пол</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Пол"
                onChange={(e) => setOnesex(e.target.value)}
              >
                {sex?.length &&
                  sex?.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el.sex}
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
            Добавить собаку
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddMyDog
