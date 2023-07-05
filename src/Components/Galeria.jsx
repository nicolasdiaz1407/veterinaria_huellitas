import React, { useState } from "react";
import "../Styles/Galeria.css";
import icalbum from "../Img/album-de-mascotas (1).png";
import exp1 from "../Img/exp1.jpeg";
import exp2 from "../Img/exp2.jpeg";
import exp3 from "../Img/exp3.jpeg";
import exp4 from "../Img/exp4.jpeg";
import exp5 from "../Img/exp5.jpeg";
import exp6 from "../Img/exp6.jpeg";
import exp7 from "../Img/exp7.jpeg";
import exp8 from "../Img/exp8.jpeg";

const Galeria = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (imageId) => {
    if (expandedImage === imageId) {
      setExpandedImage(null);
    } else {
      setExpandedImage(imageId);
    }
  };
  return (
    <div>
      <div id="galeria">
        <div class="container-tit-album">
          <img src={icalbum} alt="" />
          <h1 className="titulo-album">Galeria de Fotos de Mascotas</h1>
        </div>
        <div className="image-container">
          <div
            className={`image-box ${expandedImage === 1 ? "expanded" : ""}`}
            onClick={() => handleImageClick(1)}
          >
            <img src={exp1} alt="Imagen 1" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 2 ? "expanded" : ""}`}
            onClick={() => handleImageClick(2)}
          >
            <img src={exp2} alt="Imagen 2" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 3 ? "expanded" : ""}`}
            onClick={() => handleImageClick(3)}
          >
            <img src={exp3} alt="Imagen 3" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 4 ? "expanded" : ""}`}
            onClick={() => handleImageClick(4)}
          >
            <img src={exp4} alt="Imagen 4" className="image" />
          </div>
        </div>

        <div className="image-container">
          <div
            className={`image-box ${expandedImage === 5 ? "expanded" : ""}`}
            onClick={() => handleImageClick(5)}
          >
            <img src={exp5} alt="Imagen5" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 6 ? "expanded" : ""}`}
            onClick={() => handleImageClick(6)}
          >
            <img src={exp6} alt="Imagen 6" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 7 ? "expanded" : ""}`}
            onClick={() => handleImageClick(7)}
          >
            <img src={exp7} alt="Imagen 7" className="image" />
          </div>
          <div
            className={`image-box ${expandedImage === 8 ? "expanded" : ""}`}
            onClick={() => handleImageClick(8)}
          >
            <img src={exp8} alt="Imagen 8" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
