import axios from "axios";
import { Props } from "../components/PokemonList";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const pokemonsPerPage = 21;

type ApiResult = {
  pokemons: Array<Props>;
  count: number;
};

export const getListPokemon = async (
  currentPage: number
): Promise<ApiResult> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: {
      limit: pokemonsPerPage,
      offset: currentPage,
    },
  });

  const pokemonList = await data.results.map(
    async (pokemonResult: { name: string; url: string }) => {
      const { data } = await axios.get(pokemonResult.url);

      return {
        name: pokemonResult.name,
        url: pokemonResult.url,
        image: data.sprites.other["official-artwork"].front_default,
      };
    }
  );
  return { pokemons: await Promise.all(pokemonList), count: data.count };
};

export default api;
