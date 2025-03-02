import React from 'react';



function Header(){
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><i className="fa-solid fa-house"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/arte_ambiental">Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link "  href="/educacion_ambiental">Educación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/participacion_ciudadana">Participación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/talleres_sustentables">Taller</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    )
};

export default Header;
