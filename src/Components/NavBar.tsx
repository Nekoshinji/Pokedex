interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {

  return (
    <div>
      <button
        type="button"
        onClick={() => setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : 0)}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>
      <button
        type="button"
        onClick={() => setPokemonIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonList.length - 1)}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
};

export default NavBar;

