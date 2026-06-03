import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import MonteHabitat from "./pages/MonteHabitat";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";

import Aprenda from "./pages/Aprenda";
import AprendaAves from "./pages/AprendaAves";
import AprendaMeioAmbiente from "./pages/AprendaMeioAmbiente";

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* CATEGORIAS */}
        <Route
          path="/categoria/:categoria"
          element={<Produtos />}
        />

        {/* SUBCATEGORIAS */}
        <Route
          path="/categoria/:categoria/:subcategoria"
          element={<Produtos />}
        />

        {/* MONTE SEU HABITAT */}
        <Route
          path="/monte-seu-habitat"
          element={<MonteHabitat />}
        />

        {/* APRENDA */}
        <Route
          path="/aprenda"
          element={<Aprenda />}
        />

        <Route
          path="/aprenda/aves"
          element={<AprendaAves />}
        />

        <Route
          path="/aprenda/meio-ambiente"
          element={<AprendaMeioAmbiente />}
        />

        {/* OUTRAS PÁGINAS */}
        <Route
          path="/produtos"
          element={<Produtos />}
        />

        <Route
          path="/carrinho"
          element={<Carrinho />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

    </>
  );
}