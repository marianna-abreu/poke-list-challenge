import { useState } from "react";
import { removeFavorite } from "../../services/favsHelper";

export const Favs: React.FC = () => {
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
