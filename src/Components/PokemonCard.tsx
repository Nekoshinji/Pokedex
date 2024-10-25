interface PokemonCardProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({imgSrc, name}: PokemonCardProps ) {
  return (
    <figure>
      {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
