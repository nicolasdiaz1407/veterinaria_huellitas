import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <p className="nom-vet"></p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              id="ul-nav"
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/inicio">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#servicios">
                  Servicios
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nuestro personal
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#salud">
                      Salud
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#estetica">
                      Estética
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#productos">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#galeria">
                  Galeria
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
