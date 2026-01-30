import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, HashRouter } from "react-router-dom";
import MoonshotGA from "./pages/MoonshotGA";
import WaffleKing from "./pages/WaffleKing";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/moonshotga" element={<MoonshotGA />} />
          <Route path="/waffleking" element={<WaffleKing />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
