import "./App.css";
import ScreensRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <header>
      <Router>
        <ScreensRoutes />
      </Router>
    </header>
  );
}

export default App;
