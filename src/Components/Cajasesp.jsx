import React from "react";
import "../Styles/Cajasesp.css";
const Cajasesp = () => {
  return (
    <div>
      <div class="caja">
        <h1 class="titulo">Bienvenidos a nuestro website Huellitas</h1>
        <p class="frase">
          "Las mascotas son seres que llenan nuestros días de amor incondicional
          y alegría, convirtiéndose en compañeros fieles que iluminan nuestras
          vidas con su lealtad y ternura."
        </p>
      </div>
      <div className="cont-caja">
        <div className="cont-padre">
          <div className="container">
            <div className="left-box">
              <h2>Mascotas Felices</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, lectus non aliquet tristique, felis
                turpis lacinia neque, at faucibus nulla velit id tortor. Mauris
                eu efficitur arcu. Fusce ut maximus dolor. Sed tristique semper
                ex, non rutrum nisl consectetur ut. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam tempus ipsum vitae diam malesuada, at posuere
                elit tristique. Ut quis elit et urna posuere convallis nec sed
                quam.{" "}
              </p>
              <button className="borde-btn">Leer más</button>
            </div>
            <div className="right-box"></div>
          </div>

          <div className="container">
            <div className="left-box2">
              <h2>Equipo Moderno</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, lectus non aliquet tristique, felis
                turpis lacinia neque, at faucibus nulla velit id tortor. Mauris
                eu efficitur arcu. Fusce ut maximus dolor. Sed tristique semper
                ex, non rutrum nisl consectetur ut. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam tempus ipsum vitae diam malesuada, at posuere
                elit tristique. Ut quis elit et urna posuere convallis nec sed
                quam.
              </p>
              <button className="borde-btn">Leer más</button>
            </div>
            <div className="right-box2"></div>
          </div>

          <div className="container">
            <div className="left-box3">
              <h2>La mejor atención</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, lectus non aliquet tristique, felis
                turpis lacinia neque, at faucibus nulla velit id tortor. Mauris
                eu efficitur arcu. Fusce ut maximus dolor. Sed tristique semper
                ex, non rutrum nisl consectetur ut. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam tempus ipsum vitae diam malesuada, at posuere
                elit tristique. Ut quis elit et urna posuere convallis nec sed
                quam.{" "}
              </p>
              <button className="borde-btn">Leer más</button>
            </div>
            <div className="right-box3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cajasesp;
