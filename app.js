const getPokemons = async() => {
    const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150");
    const pokemonsJson = await pokemonData.json();
    const AllPokemons = pokemonsJson.results.map((nombre, imagen) => ({
        name: nombre.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imagen+1}.svg`,
    }));

    paintPokemons(AllPokemons);
}

const list = document.querySelector(".pokemons");

const paintPokemons = AllPokemons =>{
    const pokePaint = AllPokemons.map((element) => 
        `<li>
        <h3>${element.name}</h3>
        <img src="${element.img}" alt="${element.name}"</li>`
    ).join('');
    list.innerHTML = pokePaint;
}

getPokemons();