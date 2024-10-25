import "./App.css";
import PokemonCard from "./Components/PokemonCard";

function App() {
  return (
    <div>
      <PokemonCard imgSrc={pokemonList[0].imgSrc} name={pokemonList[0].name} />
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
    name: "mew",
  },
];

export default App;