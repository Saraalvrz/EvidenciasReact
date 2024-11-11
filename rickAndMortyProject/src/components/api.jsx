export async function restApi() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results.map(character => ({
            name: character.name,
            species: character.species,
            status: character.status,
            image: character.image,
            gender: character.gender
        }));
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        return [];
    }
}
