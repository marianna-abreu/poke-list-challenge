import { useCallback, useEffect, useState } from "react";
import { getListPokemon } from "../../services/api";
import {
  CardPokemon,
  DisplayList,
  PokemonImage,
  PokemonName,
  CountPages,
  Wrapper,
  Link,
} from "./styles";

export interface Props {
  id: string;
  name: string;
  image: string;
}

const PokeList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Props[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [PokemonsPerPage] = useState(21);

  const onPaginationClick = (event: any, value: any) => {
    setCurrentPage(value * PokemonsPerPage - PokemonsPerPage);
  };

  const handlePokemonList = useCallback(async () => {
    setPokemons(await getListPokemon(currentPage));
  }, [currentPage]);

  useEffect(() => {
    handlePokemonList();
  }, [currentPage]);

  console.log(pokemons);

  return (
    <Wrapper>
      <DisplayList>
        {pokemons.map((pokemon) => {
          return (
            <Link href={`/pokemon/${pokemon.name}`}>
              <CardPokemon>
                <PokemonImage src={pokemon.image} />
                <PokemonName variant="h5">{pokemon.name}</PokemonName>
              </CardPokemon>
            </Link>
          );
        })}
      </DisplayList>
      <CountPages count={46} onChange={onPaginationClick} />
    </Wrapper>
  );
};

export default PokeList;
