import { useState } from "react";
import "./App.css";
import PokemonCard from "./Components/pokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "précédent" && pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    } else if (
      direction === "suivant" &&
      pokemonIndex < pokemonList.length - 1
    ) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button
        type="button"
        onClick={() => handleClick("précédent")}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>
      <button
        type="button"
        onClick={() => handleClick("suivant")}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
