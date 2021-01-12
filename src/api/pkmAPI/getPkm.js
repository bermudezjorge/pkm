const API_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu'

export const getPkm = async () => {
	const response = await fetch(API_URL)

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const pkm = await response.json()

	const filteredData = {
		name: pkm.name, 
		id: pkm.id,
		sprite: pkm.sprites.front_default,
	}

	return filteredData
}