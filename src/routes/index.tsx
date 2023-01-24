import { Route, Routes } from "react-router-dom";
import FavsPage from "../screens/Favs/FavsPage";
import HomePage from "../screens/Home/HomePage";
import PokemonPage from "../screens/Pokemon/PokemonPage";

const ScreensRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pokemon/:name" element={<PokemonPage />} />
    <Route path="/my-favs" element={<FavsPage />} />
  </Routes>
);

export default ScreensRoutes;
