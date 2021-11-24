
import { ADD_NEW_POINT, GET_ALL_POINTS } from '../types/mapType'
import axios from 'axios'

export function addNewPoint(cords, title, desc, file) {
  return async (dispatch) => {
    console.log(cords, title, desc, file, 'IMAGE AC MAP')
    const data = new FormData()
    data.append('file', file)
    data.append('cordsZero', cords.lat)
    data.append('cordsOne', cords.lon)
    data.append('title', title)
    data.append('desc', desc)
    const response = await fetch('http://localhost:3001/map/new', {
      method: 'POST',
      body: data,
      files: file,
      credentials: 'include'
    })
    const result = await response.json()
    dispatch(addPoint(result))
  }
}

export const addPoint = (data) => ({
  type: ADD_NEW_POINT,
  payload: data,
})

export function getAllPoints() {
  return async (dispatch) => {
    const response = await axios('/map')
dispatch(allPoints(response.data))
  }
}

export const allPoints = (data) => ({
type: GET_ALL_POINTS,
payload: data
})