const API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

export const getPkm = async () => {
	try {
		const response = await fetch(API_URL).json()

		const filteredResponse = {
			name: response.name, 
			id: response.id,
			sprite: response.sprite.front_default,
		}

		console.log(filteredResponse)

		return filteredResponse
		
	} catch (err) {
		return {
			name: `Error: ${err}, reload page.`,
			id: 0,
			sprite: ''
		}
	}
}