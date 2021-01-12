import { LOAD_DATA } from '../actionTypes.js'

export const loadDataFromAPI = data => ({
  type: LOAD_DATA,
  payload: {
    name: data.name,
    id: data.id,
    sprite: data.sprite,
  }
})