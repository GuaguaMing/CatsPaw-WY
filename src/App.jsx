import { lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// 首頁直接載入，其他頁面切成獨立檔案，進入該頁才下載
const Story = lazy(() => import("./pages/Story"));
const Guide = lazy(() => import("./pages/Guide"));
const Character = lazy(() => import("./pages/Character"));
const Scene = lazy(() => import("./pages/Scene"));
const Designtoy = lazy(() => import("./pages/Designtoy"));

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/character" element={<Character />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/designtoy" element={<Designtoy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
