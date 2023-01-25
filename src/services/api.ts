import axios from "axios";

const pokemonsPerPage = 21;

// make api request for get pokemon list
export const getListPokemon = async (
  currentPage: number
): Promise<ApiResult> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    // params of limit pokemons per page and pagination
    params: {
      limit: pokemonsPerPage,
      offset: currentPage,
    },
  });

  // make second api request for get more information each pokemon
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

// make an api request for get details each pokemon for descriptions screens
export const getPokemonInfo = async (
  name: string
): Promise<PokemonDescriptions> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
    name: data.name,
    id: data.id,
    image: data.sprites.other["official-artwork"].front_default,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map(
      (a: { ability: { name: string } }) => a.ability.name
    ),
    stats: data.stats.map(
      (s: { base_stat: number; stat: { name: string } }) => ({
        base_stat: s.base_stat,
        name: s.stat.name,
      })
    ),
  };
};
