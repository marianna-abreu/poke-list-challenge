// get favorites from localStorage
const favString = localStorage.getItem("favsPokemons") ?? "[]";

// function to add pokemon in favorite list
export function addFavorite(pokemon: PokemonDescriptions) {
  // convert string to Array to add new pokemon
  const currentFavs = JSON.parse(favString) ?? [];
  currentFavs.push(pokemon);
  // convert Array to string and save in localStorage
  localStorage.setItem("favsPokemons", JSON.stringify(currentFavs));
}

// function to remove pokemon from localStorage
export function removeFavorite(pokemon: PokemonDescriptions) {
  // convert string to Array to remove new pokemon
  const currentFavs = JSON.parse(favString) ?? [];
  const newFavList = currentFavs.filter(
    (fav: PokemonDescriptions) => fav.name !== pokemon.name
  );

  //convert Array to string and save new list
  localStorage.setItem("favsPokemons", JSON.stringify(newFavList));
  return newFavList;
}
