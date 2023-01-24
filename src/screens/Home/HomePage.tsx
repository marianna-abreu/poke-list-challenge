import { Favorite } from "@mui/icons-material";
import PokeList from "../../components/PokemonList";
import { GoToFavsButton, HomeWrapper, GoToFavs, Logo } from "./styles";
import logo from "../../assets/logo.png";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Logo src={logo} />
      <GoToFavs href={`/my-favs`}>
        <GoToFavsButton
          variant="outlined"
          startIcon={<Favorite />}
          color="secondary"
        >
          Favoritos
        </GoToFavsButton>
      </GoToFavs>
      <PokeList />
    </HomeWrapper>
  );
};

export default HomePage;
