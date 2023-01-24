type PokemonDescriptions = {
  name: string;
  image: string;
  height: number;
  weight: number;
  abilities: {
    name: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  };
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