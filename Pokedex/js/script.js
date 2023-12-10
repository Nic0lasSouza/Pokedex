const fetchPokemon =  async (pokemon) => {
        const APIresponsive = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await APIresponsive.json();
        return data;
}
const renderPokemon =  async (pokemon)=> {
    const data = await fetchPokemon(pokemon);
    
}