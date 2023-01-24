import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../services/api";
import { addFavorite } from "../../services/favsHelper";

const Pokemon: React.FC = () => {
  const { name = "" } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState<PokemonDescriptions>();
  const pokemonInfo = useCallback(async () => {
    setPokemonDetails(await getPokemonInfo(name));
  }, [name]);

  useEffect(() => {
    pokemonInfo();
  }, [name, pokemonInfo]);

  if (!pokemonDetails) return null;

  return (
    <>
      <img src={pokemonDetails?.image}></img>
      <button
        onClick={() => {
          addFavorite(pokemonDetails);
        }}
      >
        adiciona favorito
      </button>
    </>
  );
};

export default Pokemon;
