import { Favorite, Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../services/api";
import { addFavorite } from "../../services/favsHelper";
import {
  AddFavButton,
  BackToHome,
  BackToHomeButton,
  Descriptions,
  PokeCard,
  PokemonText,
  PokemonImage,
  Progress,
  WrapperPokemonPage,
  PokemonStats,
  StatName,
  Pokemon,
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

  return (
    <WrapperPokemonPage>
      <PokeCard>
        <Pokemon>
          <PokemonImage src={pokemonDetails?.image} />
          <Descriptions>
            <PokemonText>
              <strong>Name: </strong>
              {pokemonDetails.name}
            </PokemonText>
            <PokemonText>
              <strong>Height: </strong>
              {pokemonDetails.height / 10} m
            </PokemonText>
            <PokemonText>
              <strong>Weight:</strong> {pokemonDetails.weight / 10} kg
            </PokemonText>
            <PokemonText>
              <strong>Id:</strong> #{pokemonDetails.id}
            </PokemonText>
            {pokemonDetails.abilities.map((ability: string) => (
              <PokemonText>
                <strong>Ability:</strong> {ability}
              </PokemonText>
            ))}
          </Descriptions>
          <PokemonStats>
            {pokemonDetails.stats.map((stat) => (
              <PokemonText>
                <StatName>{stat.name}</StatName>
                <Progress variant="determinate" value={stat.base_stat} />
                {stat.base_stat}
              </PokemonText>
            ))}
          </PokemonStats>
        </Pokemon>
        <AddFavButton
          onClick={() => {
            addFavorite(pokemonDetails);
          }}
          startIcon={<Favorite />}
        >
          Add Favorite
        </AddFavButton>
      </PokeCard>
      <BackToHome href={`/`}>
        <BackToHomeButton
          variant="outlined"
          startIcon={<Home />}
          color="secondary"
        >
          Back to Home
        </BackToHomeButton>
      </BackToHome>
    </WrapperPokemonPage>
  );
};

export default PokemonPage;
