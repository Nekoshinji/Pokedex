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
  const handleClick = (id: number, name: string) => {
    setPokemonIndex(id);
    if (name.toLowerCase() === 'pikachu') {
      alert("Pika Pika, Pikachu !!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, id) => (
        <button type="button" key={pokemon.name} onClick={() => handleClick(id, pokemon.name)}>
          <h2>
            {pokemon.name}
          </h2>
        </button>
      ))}
    </div>
  );
};

export default NavBar;