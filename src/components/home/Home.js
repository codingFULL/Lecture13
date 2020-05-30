import './home.css';

import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

function Home(props) {
  return (
    <div>
      <h1>{'Bienvenid@ a nuestra aplicación'}</h1>
      <div>
        <img src={logo} alt="ejemplo logo" className="imagen1" />
      </div>

      <div>
        <img
          src="https://www.coca-cola.com.co/content/dam/brands/lc/coca-cola/images/Logotipo-CocaCola-Colombia.png"
          alt="ejemplo logo"
          className="imagen1"
        />
      </div>

      <ol>
        <li>
          <Link to="/signIn">{'Página de ingreso'}</Link>
        </li>
        <li>
          <Link to="/signUp">{'Página de registro'}</Link>
        </li>
        <li>
          <Link to="/showUsers">{'Mostrar usuarios'}</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
