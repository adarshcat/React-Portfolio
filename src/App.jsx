import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MoonshotGA from "./pages/MoonshotGA";
import WaffleKing from "./pages/WaffleKing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/moonshotga" element={<MoonshotGA />} />
          <Route path="/waffleking" element={<WaffleKing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
