import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/logueo.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Logueo = () => {
  return (
    <div>
      <div className="loguear">
        <Header />
        <NavBar />
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form className="form-logueo">
          <h3>Ingresa aquí</h3>

          <label className="label-logueo" for="username">
            Usuario
          </label>
          <input
            type="text"
            placeholder="Correo o Teléfono"
            id="username"
          />
          <label className="label-logueo" for="password">
            Contraseña
          </label>
          <input type="password" placeholder="Contraseña" id="password" />
          <ul className="btn-loguear">
            <li>
              <Link to="/inicio" className="link-logueo">
                <button id="btn-login">Ingresar</button>
              </Link>
            </li>
          </ul>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Logueo;
