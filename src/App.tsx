import { useState } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button
        type="button"
        onClick={() => setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : 0)}
        disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        type="button"
        onClick={() =>
          setPokemonIndex(
            pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonList.length - 1,)}
        disabled={pokemonIndex === pokemonList.length - 1}>
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
