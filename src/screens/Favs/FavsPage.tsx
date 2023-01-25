import { HeartBroken, Home } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { removeFavorite } from "../../services/favsHelper";
import {
  BackToHome,
  BackToHomeButton,
  CardPokemon,
  DisplayList,
  FavsPageWrapper,
  Link,
  PokemonImage,
  PokemonName,
  RemoveButton,
  TitlePage,
} from "./styles";

// create favorite page
export const FavsPage: React.FC = () => {
  // get favorite pokemons list from localStorage and save on state

  const [listFavorites, setListFavorites] = useState(
    JSON.parse(localStorage.getItem("favsPokemons") ?? "[]")
  );

  return (
    <FavsPageWrapper>
      <TitlePage>FAVORITOS</TitlePage>
      <BackToHome href={`/`}>
        <BackToHomeButton
          variant="outlined"
          startIcon={<Home />}
          color="secondary"
        >
          Volta para Home
        </BackToHomeButton>
      </BackToHome>
      <DisplayList>
        {listFavorites.map((favPokemon: PokemonDescriptions) => (
          <CardPokemon>
            <Link href={`/pokemon/${favPokemon.name}`}>
              <PokemonImage src={favPokemon.image} />
              <PokemonName>{favPokemon.name}</PokemonName>
            </Link>
            <Tooltip title="Remove favorite">
              <RemoveButton
                startIcon={<HeartBroken />}
                variant="outlined"
                onClick={() => {
                  setListFavorites(removeFavorite(favPokemon));
                }}
              >
                remove favorito
              </RemoveButton>
            </Tooltip>
          </CardPokemon>
        ))}
      </DisplayList>
    </FavsPageWrapper>
  );
};

export default FavsPage;
