import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Ingresar.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const Ingresar = () => {
  return (
    <div>
      <div className="ingresar">
        <Header />
        <NavBar />
        <div class="button-container">
            <ul className="is">
                <li>
                    <Link to="/logueo"><button class="bottom-border-button">Iniciar Sesión</button></Link>
                </li>
            </ul>
            <ul className="is">
                <li>
                    <Link><button class="bottom-border-button">Registrarse</button></Link>
                </li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ingresar;
