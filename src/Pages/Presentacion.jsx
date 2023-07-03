import React from "react";
import "../Styles/Presentacion.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar"
import Section from "../Components/Section";
import Footer from "../Components/Footer";

const Presentacion = () => {
  return (
    <div>
      <div className="presentacion">
        <Header />
        <NavBar/>
        <Section/>
      </div> 
      <Footer/>
    </div>
  );
};

export default Presentacion;
