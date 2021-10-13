const getPokemons = async() => {
    const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150");
    const pokemonsJson = await pokemonData.json();
    const AllPokemons = pokemonsJson.results.map((nombre, imagen) => ({
        name: nombre.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imagen+1}.png`,
        shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${imagen+1}.png`,
    }));

    paintPokemons(AllPokemons);
}

const list = document.querySelector(".pokemons");

const paintPokemons = AllPokemons =>{
    const pokePaint = AllPokemons.map((element) => 
        `<li class="poke-contain">
        <h3>${element.name}</h3>
        <img src="${element.img}" alt="${element.name}" id="${element.name}" onmouseout = "cambiarNormal('${element.name}', '${element.img}')" onMouseOver = "cambiarImagen('${element.name}', '${element.shiny}')"/>
        `
    ).join('');
    list.innerHTML = pokePaint;
    
}

function cambiarImagen(nombre, shiny){
    let imagenPoke = document.getElementById(nombre);
    let fondo = document.getElementById("fondo");
    imagenPoke.src = shiny;
}

function cambiarNormal(nombre, imagen){
    let imagenPoke = document.getElementById(nombre);
    imagenPoke.src = imagen;
    console.log(imagenPoke)
}






getPokemons();

