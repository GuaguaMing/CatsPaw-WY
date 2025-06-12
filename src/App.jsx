import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CatRow from "./components/CatRow";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Guide from "./pages/Guide";
import Character from "./pages/Character";
import Scene from "./pages/Scene";
import Designtoy from "./pages/Designtoy";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><CatRow /><Footer /></>} />
        <Route path="/story" element={<><div className="w-full flex justify-center"><Nav /></div><Story /><CatRow /><Footer /></>} />
        <Route path="/guide" element={<><div className="w-full flex justify-center"><Nav /></div><Guide /><CatRow /><Footer /></>} />
        <Route path="/character" element={<><div className="w-full flex justify-center"><Nav /></div><Character /><CatRow /><Footer /></>} />
        <Route path="/scene" element={<><div className="w-full flex justify-center"><Nav /></div><Scene /><CatRow /><Footer /></>} />
        <Route path="/designtoy" element={<><div className="w-full flex justify-center"><Nav /></div><Designtoy /><CatRow /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
