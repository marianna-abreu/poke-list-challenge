import { Favorite } from "@mui/icons-material";
import PokeList from "../../components/PokemonList";
import { FavButton, HomeWrapper, Link, Title } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Title>PokeList</Title>
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
