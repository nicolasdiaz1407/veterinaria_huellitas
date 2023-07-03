import React from "react";
import "../Styles/Servicios.css";
import Inyeccion from "../Img/inyeccion (1).png";
import Estetica from "../Img/tabla.png";
import Salud from "../Img/mascota.png";

const Servicios = () => {
  return (
    <div>
      <div className="container-servicios" id="servicios">
        <div className="box">
          <img src={Inyeccion} alt="Imagen pequeña" />
          <p className="large-paragraph">
            <strong>Vacunas</strong>
          </p>
          <p className="small-paragraph">
            Las vacunas son esenciales para proteger a tu mejor amigo peludo y
            son parte de la tenencia responsable. Estas lo ayudan a desarrollar
            su sistema inmune y a defenderse de mejor forma de algunas
            enfermedades, las cuales podrían ser mortales.
          </p>
        </div>
        <div className="box">
          <img src={Salud} alt="Imagen pequeña" />
          <p className="large-paragraph">
            <strong>Tratamiento de mascotas</strong>
          </p>
          <p className="small-paragraph">
            La medicina preventiva es la mejor manera de proteger y cuidar la
            salud de tu mascota.El veterinario no se ocupa sólo de curar
            enfermedades también se encarga de evitar, en la medida de lo
            posible, que aparezcan o se agraven. Los chequeos rutinarios son
            fundamentales sobre todo a partir de una determinada edad para poder
            realizar tratamientos precoces antes de que la enfermedad se
            instaure.
          </p>
        </div>
        <div className="box">
          <img src={Estetica} alt="Imagen pequeña" />
          <p className="large-paragraph">
            <strong>Estética</strong>
          </p>
          <p className="small-paragraph">
            Además de cuidar y mantener el buen estado de salud, la higiene y la
            apariencia estética de nuestras mascotas, la estética canina también
            puede ayudarnos a detectar a tiempo cualquier tipo de anomalías o
            infecciones en una de las revisiones al centro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
