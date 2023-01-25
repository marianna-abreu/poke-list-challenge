type PokemonDescriptions = {
  name: string;
  id: string;
  image: string;
  height: number;
  weight: number;
  abilities: string[];
  stats: Array<{ base_stat: number; name: string }>;
};

interface PokemonProps {
  id: string;
  name: string;
  image: string;
  count: number;
}

type ApiResult = {
  pokemons: Array<PokemonProps>;
  count: number;
};
