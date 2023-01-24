import "./App.css";
import ScreensRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import pokeball from "./assets/pokeball.svg";

function App() {
  return (
    <Router>
      <ScreensRoutes />
    </Router>
  );
}

export default App;
