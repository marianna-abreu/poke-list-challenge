// obtém os favoritos do localStorage em string (obrigatório) e converte para um array
const favString = localStorage.getItem("favsPokemons") ?? "[]";

export function addFavorite(pokemon: PokemonDescriptions) {
  const currentFavs = JSON.parse(favString) ?? [];
  currentFavs.push(pokemon);
  localStorage.setItem("favsPokemons", JSON.stringify(currentFavs));
  console.log(currentFavs);
}

export function removeFavorite(pokemon: PokemonDescriptions) {
  const currentFavs = JSON.parse(favString) ?? [];
  const newFavList = currentFavs.filter(
    (fav: PokemonDescriptions) => fav.name !== pokemon.name
  );
  localStorage.setItem("favsPokemons", JSON.stringify(newFavList));
  return newFavList;
}
