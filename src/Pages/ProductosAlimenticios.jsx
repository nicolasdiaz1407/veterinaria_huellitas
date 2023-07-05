import React from "react";
import "../Styles/ProductosAlimenticios.css";
import Header from "../Components/Header";
import algat from "../Img/Alimentos/Mi proyecto (8).png";
import algat2 from "../Img/Alimentos/Mi proyecto (10).png";
import algat3 from "../Img/Alimentos/Mi proyecto (13).png";
import algat4 from "../Img/Alimentos/Mi proyecto (14).png";
import alcan from "../Img/Alimentos/Mi proyecto (11).png";
import alcan2 from "../Img/Alimentos/Mi proyecto (12).png";
import alcan3 from "../Img/Alimentos/Mi proyecto (15).png";
import alcan4 from "../Img/Alimentos/Mi proyecto (7).png";
import NavBar from "../Components/NavBar";

const ProductosAlimenticios = () => {
  return (
    <div>
      <div className="prod-gral">
        {" "}
        <Header />
        <NavBar />
        <div class="product-container">
          <div class="product-box">
            <img src={algat} alt="Producto 1" />
            <h3>Science Diet</h3>
            <p>Precio: $5.000</p>
          </div>
          <div class="product-box">
            <img src={algat2} alt="Producto 2" />
            <h3>Pro Plan</h3>
            <p>Precio: $6.500</p>
          </div>
          <div class="product-box">
            <img src={algat3} alt="Producto 3" />
            <h3>Royale Canin</h3>
            <p>Precio: $8.000</p>
          </div>
          <div class="product-box">
            <img src={algat4} alt="Producto 4" />
            <h3>Whiskas</h3>
            <p>Precio: $6.800</p>
          </div>
          <div class="product-box">
            <img src={alcan} alt="Producto 1" />
            <h3>Pedigree</h3>
            <p>Precio: $5.900</p>
          </div>
          <div class="product-box">
            <img src={alcan2} alt="Producto 2" />
            <h3>Royale Canin</h3>
            <p>Precio: $7.100</p>
          </div>
          <div class="product-box">
            <img src={alcan3} alt="Producto 3" />
            <h3>PremieR</h3>
            <p>Precio: $8.200</p>
          </div>
          <div class="product-box">
            <img src={alcan4} alt="Producto 4" />
            <h3>Dog Chow</h3>
            <p>Precio: $6.950</p>
          </div>
          <div class="product-box">
            <img src={algat4} alt="Producto 4" />
            <h3>Whiskas</h3>
            <p>Precio: $6.800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosAlimenticios;
