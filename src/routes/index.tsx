import { Route, Routes } from "react-router-dom";
import Favs from "../screens/Favs/Favs";
import Home from "../screens/Home/Home";
import Pokemon from "../screens/Pokemon/Pokemon";

const ScreensRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon/:name" element={<Pokemon />} />
    <Route path="/my-favs" element={<Favs />} />
  </Routes>
);

export default ScreensRoutes;
