import React from "react";
import "../Styles/Veterinarios.css";
import Imgsalud from "../Img/veterinario.png";
const Veterinarios = () => {
  return (
    <div>
      <div className="eq-tr">         
       <div class="container-tit-salud">
            <h2 className="titulo-salud">Nuestros equipos de Trabajo</h2>
          </div>
        <div className="dogtor" id="salud">

          <div class="container">
            <div class="oval-box">
              <img src={Imgsalud} alt="" className="ic-salud" />
              <div class="overlay">
                <p class="name">
                  <strong>Rosario Herrera</strong>
                </p>
                <p class="profession">Veterinaria</p>
              </div>
            </div>
            <div class="oval-box2">
              <img src={Imgsalud} alt="" className="ic-salud" />
              <div class="overlay">
                <p class="name">
                  <strong>Antonella Farias</strong>
                </p>
                <p class="profession">Quinesiologo</p>
              </div>
            </div>
            <div class="oval-box3">
              <img src={Imgsalud} alt="" className="ic-salud" />
              <div class="overlay">
                <p class="name">
                  <strong>Esteban Andrada</strong>
                </p>
                <p class="profession">Auxiliar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veterinarios;
