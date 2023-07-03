import React from 'react'
import Header from "../Components/Header"
import jgat from "../Img/Juguetes/Mi proyecto (16).png";
import jgat2 from "../Img/Juguetes/Mi proyecto (17).png";
import jgat3 from "../Img/Juguetes/Mi proyecto (18).png";
import jgat4 from "../Img/Juguetes/Mi proyecto (19).png";
import jcan from "../Img/Juguetes/Mi proyecto (20).png";
import jcan2 from "../Img/Juguetes/Mi proyecto (21).png";
import jcan3 from "../Img/Juguetes/Mi proyecto (22).png";
import jcan4 from "../Img/Juguetes/Mi proyecto (23).png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const Juguetes = () => {
  return (
    <div>
        <div className="prod-gral">    <Header/>
    <NavBar/>
      <div class="product-container">
        <div class="product-box">
          <img src={jgat} alt="Producto 1" />
          <h3>Raton eléctrico</h3>
          <p>Precio: $2.000</p>
        </div>
        <div class="product-box">
          <img src={jgat2} alt="Producto 2" />
          <h3>Pelotas</h3>
          <p>Precio: $400</p>
        </div>
        <div class="product-box">
          <img src={jgat3} alt="Producto 3" />
          <h3>Laser ratón</h3>
          <p>Precio: $1.500</p>
        </div>
        <div class="product-box">
          <img src={jgat4} alt="Producto 4" />
          <h3>Lorem</h3>
          <p>Precio: $1.950</p>
        </div><div class="product-box">
          <img src={jcan} alt="Producto 1" />
          <h3>Hueso</h3>
          <p>Precio: $750</p>
        </div>
        <div class="product-box">
          <img src={jcan2} alt="Producto 2" />
          <h3>Pato lana</h3>
          <p>Precio: $1.320</p>
        </div>
        <div class="product-box">
          <img src={jcan3} alt="Producto 3" />
          <h3>Cuerda</h3>
          <p>Precio: $500</p>
        </div>
        <div class="product-box">
          <img src={jcan4} alt="Producto 4" />
          <h3>Ptas. Goma</h3>
          <p>Precio: $900</p>
        </div>
        <div class="product-box">
          <img src={jgat3} alt="Producto 3" />
          <h3>Laser ratón</h3>
          <p>Precio: $1.500</p>
        </div>
      </div>
    </div>
      
      <Footer/>
    </div>
  )
}

export default Juguetes