import React from "react";
import "../Styles/ArtVarios.css";
import Header from "../Components/Header";
import argat from "../Img/ArtVarios/Mi proyecto (24).png";
import argat2 from "../Img/ArtVarios/Mi proyecto (25).png";
import argat3 from "../Img/ArtVarios/Mi proyecto (26).png";
import argat4 from "../Img/ArtVarios/Mi proyecto (27).png";
import arcan from "../Img/ArtVarios/Mi proyecto (28).png";
import arcan2 from "../Img/ArtVarios/Mi proyecto (29).png";
import arcan3 from "../Img/ArtVarios/Mi proyecto (30).png";
import arcan4 from "../Img/ArtVarios/Mi proyecto (31).png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ArtVarios = () => {
  return (
    <div>
      <div className="prod-gral">
        <Header />
        <NavBar />
        <div class="product-container">
          <div class="product-box">
            <img src={argat} alt="Producto 1" />
            <h3>Comedero</h3>
            <p>Precio: $1.200</p>
          </div>
          <div class="product-box">
            <img src={argat2} alt="Producto 2" />
            <h3>Arenero</h3>
            <p>Precio: $4.250</p>
          </div>
          <div class="product-box">
            <img src={argat3} alt="Producto 3" />
            <h3>Cepillo</h3>
            <p>Precio: $1.800</p>
          </div>
          <div class="product-box">
            <img src={argat4} alt="Producto 4" />
            <h3>Cama</h3>
            <p>Precio: $6.800</p>
          </div>
          <div class="product-box">
            <img src={arcan} alt="Producto 1" />
            <h3>Cama</h3>
            <p>Precio: $5.900</p>
          </div>
          <div class="product-box">
            <img src={arcan2} alt="Producto 2" />
            <h3>Comedero</h3>
            <p>Precio: $1.850</p>
          </div>
          <div class="product-box">
            <img src={arcan3} alt="Producto 3" />
            <h3>Correa</h3>
            <p>Precio: $3.150</p>
          </div>
          <div class="product-box">
            <img src={arcan4} alt="Producto 4" />
            <h3>Pinza</h3>
            <p>Precio: $2.100</p>
          </div>
          <div class="product-box">
            <img src={argat4} alt="Producto 4" />
            <h3>Cama</h3>
            <p>Precio: $6.800</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtVarios;
