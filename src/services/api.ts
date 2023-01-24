import axios from "axios";

const pokemonsPerPage = 21;

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

export const getPokemonInfo = async (
  name: string
): Promise<PokemonDescriptions> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map(
      (a: { ability: { name: string } }) => a.ability.name
    ),
    stats: data.stats.map(
      (s: { base_stat: number; stat: { name: string } }) => ({
        base_stat: s.base_stat,
        stat: s.stat.name,
      })
    ),
  };
};
