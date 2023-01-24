import { useState } from "react";
import { removeFavorite } from "../../services/favsHelper";

// create favorite page
export const FavsPage: React.FC = () => {
  // get favorite pokemons list from localStorage and save on state

  const [listFavorites, setListFavorites] = useState(
    JSON.parse(localStorage.getItem("favsPokemons") ?? "[]")
  );

  return (
    <>
      {listFavorites.map((favPokemon: PokemonDescriptions) => (
        <>
          <span>{favPokemon.name}</span>
          <button
            onClick={() => {
              setListFavorites(removeFavorite(favPokemon));
            }}
          >
            remove favorito
          </button>
        </>
      ))}
    </>
  );
};

export default FavsPage;
