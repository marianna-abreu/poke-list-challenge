import { Favorite } from "@mui/icons-material";
import PokeList from "../../components/PokemonList";
import { FavButton, HomeWrapper, Link, Logo } from "./styles";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <HomeWrapper>
      <Logo src={logo} />
      <Link href={`/my-favs`}>
        <FavButton
          variant="outlined"
          startIcon={<Favorite />}
          color="secondary"
        >
          Favoritos
        </FavButton>
      </Link>
      <PokeList />
    </HomeWrapper>
  );
};

export default Home;
