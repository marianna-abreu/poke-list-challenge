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

const PokeList: React.FC = () => {
  //pagination config
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonsPerPage] = useState(21);
  const [totalPokemon, setTotalPokemon] = useState<number>(1);

  const onPaginationClick = (event: any, value: any) => {
    setCurrentPage(value * pokemonsPerPage - pokemonsPerPage);
  };

  const totalPage = Math.ceil(totalPokemon / pokemonsPerPage);

  // get pokemons for api and saving state
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const handlePokemonList = useCallback(async () => {
    const { pokemons, count } = await getListPokemon(currentPage);
    setPokemons(pokemons);
    setTotalPokemon(count);
  }, [currentPage]);

  useEffect(() => {
    handlePokemonList();
  }, [currentPage, handlePokemonList]);

  return (
    <Wrapper>
      <DisplayList>
        {pokemons.map((pokemon) => {
          return (
            <Link href={`/pokemon/${pokemon.name}`}>
              <CardPokemon>
                <PokemonImage src={pokemon.image} alt="Pokemon Image" />
                <PokemonName>{pokemon.name}</PokemonName>
              </CardPokemon>
            </Link>
          );
        })}
      </DisplayList>
      <CountPages count={totalPage} onChange={onPaginationClick} />
    </Wrapper>
  );
};

export default PokeList;
