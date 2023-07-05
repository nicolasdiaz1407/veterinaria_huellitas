import React from "react";
import "../Styles/PEstetica.css";
import Imgestetica from "../Img/secadora.png";
const PEstetica = () => {
  return (
    <div>
      <div className="dogdental" id="estetica">
        <div class="container">
          <div class="oval-boxx">
            <img src={Imgestetica} alt="" className="ic-estetica" />
            <div class="overlay">
              <p class="name">
                <strong>
                  Florencia Veliz 
                </strong>
              </p>
              <p class="profession">Estética</p>
            </div>
          </div>
          <div class="oval-boxx2">
            <img src={Imgestetica} alt="" className="ic-estetica" />
            <div class="overlay">
              <p class="name">
                <strong>Mariana Caceres</strong>
              </p>
              <p class="profession">Estética</p>
            </div>
          </div>
          <div class="oval-boxx3">
            <img src={Imgestetica} alt="" className="ic-estetica" />
            <div class="overlay">
              <p class="name">
                <strong>Agustina Miranda</strong>
              </p>
              <p class="profession">Estética</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PEstetica;
