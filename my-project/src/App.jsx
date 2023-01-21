import "./App.css";
import Navbar from "./layout/Navbar";
import { ThemeContext } from "./store/theme-context";
import Home from "./layout/Home";
import Country from "./layout/Country";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const ctx = useContext(ThemeContext);
  return (
    <>
      <Navbar ctx={ctx} />
      <Routes>
        <Route path="/" element={<Home theme={ctx.theme} />} />
        <Route path="/:name" element={<Country theme={ctx.theme} />} />
      </Routes>
    </>
  );
}

export default App;
