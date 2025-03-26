import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authors from "./pages/Authors";
import Audios from "./pages/Audios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/authors" />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/audios" element={<Audios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
