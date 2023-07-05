import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Inicio from "./Components/Inicio";
import MuestraVenta from "./Components/MuestraVenta";
import ProductosAlimenticios from "./Pages/ProductosAlimenticios";
import Juguetes from "./Pages/Juguetes";
import ArtVarios from "./Pages/ArtVarios";
import Logueo from "./Pages/Logueo";
import Ingresar from "./Pages/Ingresar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Ingresar/>}></Route>
        <Route path="/inicio" Component={ () => (
          <>
          <Inicio/>
          </>
        )}
        ></Route>
        <Route></Route>
        <Route></Route>
        <Route path="/muestraventa" element={<MuestraVenta/>}></Route>
        <Route path="/alimentos" element={<ProductosAlimenticios/>}></Route>
        <Route path="/juguetes" element={<Juguetes/>}></Route>
        <Route path="/artvarios" element={<ArtVarios/>}></Route>
        <Route path="/logueo" element={<Logueo/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
