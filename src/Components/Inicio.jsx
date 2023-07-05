import React, { useEffect } from 'react';
import "../Styles/Inicio.css";
import Mascotas from "../Img/Mi proyecto2.png"
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Servicios from './Servicios';
import ServiciosProf from './ServiciosProf';
import Cajasesp from './Cajasesp';
import Veterinarios from './Veterinarios';
import PEstetica from './PEstetica';
import Galeria from './Galeria';
import Form from './Form'
import MuestraVenta from './MuestraVenta';
const Inicio = () => {
  useEffect(() => {
    const handleScroll = () => {
      const boxes = document.querySelectorAll('.box');
      const triggerOffset = window.innerHeight - 100;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerOffset) {
          box.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>        
        <div className="secttion">
        <Header />
        <NavBar />
          <div class="container-inicio">
          <div class="left-section">
            <h1>
              Not only people
              <br />
              need a house
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Vestibulum finibus, risus <br /> ac eleifend
              varius.Cras nec mauris ac erostere <br />
              sed tincidunt felis luctus sed mirte posa requier.
            </p>
          </div>
        </div>
        </div>
        <Cajasesp/>
        <ServiciosProf/>
      <Servicios/>
      <Veterinarios/>
      <PEstetica/>
      <MuestraVenta/>
      <Galeria/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Inicio;
