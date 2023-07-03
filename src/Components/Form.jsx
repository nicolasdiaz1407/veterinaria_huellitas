import React from "react";
import "../Styles/Form.css";
const Form = () => {
  return (
    <div>
      <div className="container-form" id="contacto">
        <div className="left-box-form"></div>
        <div className="right-box-form">
          <form>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              id="firstName"
              required
            />

            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              placeholder="Ingrese su apellido"
              id="lastName"
              required
            />

            <label htmlFor="city">Ciudad:</label>
            <select id="city" required>
              <option value="" id="ciudad">
                Selecciona una ciudad
              </option>
              <option value="ciudad1">Aguilares</option>
              <option value="ciudad2">Concepción</option>
              <option value="ciudad3">Monteros</option>
            </select>

            <label htmlFor="message">Mensaje:</label>

            <textarea
              placeholder="Escriba un mensaje"
              id="message"
              required
            ></textarea>
            <div className="boton-form">
              <button type="submit" className="button-form">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
