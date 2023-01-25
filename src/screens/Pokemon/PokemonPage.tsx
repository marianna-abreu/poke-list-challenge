import { Favorite, Home } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../services/api";
import { addFavorite } from "../../services/favsHelper";
import {
  BackToHome,
  BackToHomeButton,
  Descriptions,
  PokeCard,
  PokemonDetails,
  PokemonImage,
  WrapperPokemonPage,
} from "./styles";

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

  // const teste = pokemonDetails.abilities.name.map();

  console.log(pokemonDetails.abilities.name);
  return (
    <WrapperPokemonPage>
      <PokeCard>
        <PokemonImage src={pokemonDetails?.image} />
        <Descriptions>
          <PokemonDetails>Name: {pokemonDetails.name}</PokemonDetails>
          <PokemonDetails>Height: {pokemonDetails.height / 10}</PokemonDetails>
          <PokemonDetails>Weight: {pokemonDetails.weight / 10}</PokemonDetails>
          {/* <PokemonDetails>{pokemonDetails.abilities.name.map(a: ability: { name: ability.name})}</PokemonDetails> */}
          <PokemonDetails>{pokemonDetails.stats.base_stat}</PokemonDetails>
          {/* <PokemonDetails>{pokemonDetails.stats.stat.name}</PokemonDetails> */}
        </Descriptions>
        <Tooltip title="Add Favorite">
          <IconButton
            onClick={() => {
              addFavorite(pokemonDetails);
            }}
          >
            <Favorite />
          </IconButton>
        </Tooltip>
      </PokeCard>
      <BackToHome href={`/`}>
        <BackToHomeButton
          variant="outlined"
          startIcon={<Home />}
          color="secondary"
        >
          Volta para Home
        </BackToHomeButton>
      </BackToHome>
    </WrapperPokemonPage>
  );
};

export default PokemonPage;
