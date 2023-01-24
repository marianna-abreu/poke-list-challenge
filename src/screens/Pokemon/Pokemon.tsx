import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { name } = useParams();

  return <div> {name} aqui vai ser o pokemon</div>;
};

export default Pokemon;
