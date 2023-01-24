import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../services/api";
import { addFavorite } from "../../services/favsHelper";

const PokemonPage: React.FC = () => {
  // get name of pokemon choose from url
  const { name = "" } = useParams();

  // get details of pokemon from api and save state
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDescriptions>();
  const pokemonInfo = useCallback(async () => {
    setPokemonDetails(await getPokemonInfo(name));
  }, [name]);

  // atualize page
  useEffect(() => {
    pokemonInfo();
  }, [name, pokemonInfo]);

  // garanted have a pokemon
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

export default PokemonPage;
