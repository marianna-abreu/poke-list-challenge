import { Favorite } from "@mui/icons-material";
import PokeList from "../../components/PokemonList";
import {
  GoToFavsButton,
  HomeWrapper,
  GoToFavs,
  Logo,
  Animation,
} from "./styles";
import logo from "../../assets/logo.png";

//Main Page

const HomePage = () => {
  return (
    <HomeWrapper>
      <Animation>
        <Logo src={logo} />
      </Animation>
      <GoToFavs href={`/my-favs`}>
        <GoToFavsButton
          variant="outlined"
          startIcon={<Favorite />}
          color="secondary"
        >
          Seus Favoritos
        </GoToFavsButton>
      </GoToFavs>
      <PokeList />
    </HomeWrapper>
  );
};

export default HomePage;
