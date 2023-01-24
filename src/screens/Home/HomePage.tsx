import { Favorite } from "@mui/icons-material";
import PokeList from "../../components/PokemonList";
import { GoToFavsButton, HomeWrapper, GoToFavs, Logo, Teste } from "./styles";
import logo from "../../assets/logo.png";
import { Fade, Grow } from "@mui/material";

//Main Page

const HomePage = () => {
  return (
    <HomeWrapper>
      <Teste>
        <Logo src={logo} />
      </Teste>
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
