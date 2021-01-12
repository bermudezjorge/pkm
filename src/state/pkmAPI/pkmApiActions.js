import { LOAD_DATA, ERROR_API } from '../actionTypes.js'

export const loadDataFromAPI = data => ({
	type: LOAD_DATA,
	payload: {
		name: data.name,
		id: data.id,
		sprite: data.sprite,
	}
})

export const errorFromAPI = err => ({
	type: ERROR_API,
	payload: {
		message: err
	}
})