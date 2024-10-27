interface pokelistProps {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: pokelistProps[];
}

const NavBar = ({ setPokemonIndex, pokemonList }: NavBarProps) => {
  return (
    <div>
      {pokemonList.map((pokemon, id) => (
        <button type="button" key={pokemon.name} onClick={() => setPokemonIndex(id)}>
          <h2>
            {pokemon.name}
          </h2>
        </button>
      ))}
    </div>
  );
};

export default NavBar;