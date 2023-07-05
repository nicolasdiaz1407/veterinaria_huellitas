import React from "react";
import "../Styles/MuestraVenta.css";
import Fotocom from "../Img/descarga (8).jpeg";
import Fotojug from "../Img/1 pieza Juguete para masticar mascotas de color aleatorio con forma de dinosaurio, juguete con sonido para perros, juguete para entrenamiento de perros.jpeg";
import Fotoart from "../Img/Sudadera de mascota de color combinado.jpeg";
import { Link } from "react-router-dom";
const MuestraVenta = () => {
  return (
    <div>
      <div id="productos">
        <div className="con-vent">
          <div class="containeer" id="venta">
            <div class="boox">
              <img src={Fotocom} alt="Imagen 1" />
              <h3>Alimentos</h3>
              <p>
                Descubre nuestra mejor selección de alimentos especialmente para
                tus mascotas.
              </p>
              <div class="view-more">
                <ul className="ver-pro">
                  <li>
                    <Link to="/alimentos">
                      <button className="button-verpro">Ver mas</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="boox">
              <img src={Fotojug} alt="Imagen 2" />
              <h3>Jugueteria</h3>
              <p>
                Encuentra una variedad de juguetes divertidos para mantener a tu
                mascota entretenida.
              </p>
              <div class="view-more">
                <ul className="ver-pro">
                  <li>
                    <Link to="/juguetes">
                      <button className="button-verpro">Ver mas</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="boox">
              <img src={Fotoart} alt="Imagen 3" />
              <h3>Art. varios</h3>
              <p>
                Explora nuestra variedad de accesorios y productos para el
                cuidado de tu mascota.
              </p>
              <div class="view-more">
                <ul className="ver-pro">
                  <li>
                    <Link to="/artvarios">
                      <button className="button-verpro">Ver mas</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MuestraVenta;
