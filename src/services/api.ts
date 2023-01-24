import axios from "axios";
import { Props } from "../components/PokemonList";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const PokemonsPerPage = 21;

export const getListPokemon = async (currentPage: number): Promise<Props[]> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: {
      limit: PokemonsPerPage,
      offset: currentPage,
    },
  });

  const pokemonList = await data.results.map(
    async (pokemonResult: { name: string; url: string; count: number }) => {
      const { data } = await axios.get(pokemonResult.url);

      return {
        name: pokemonResult.name,
        url: pokemonResult.url,
        count: pokemonResult.count,
        image: data.sprites.other["official-artwork"].front_default,
      };
    }
  );
  return await Promise.all(pokemonList);
};

export default api;
