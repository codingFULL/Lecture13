import './home.css';

import React from 'react';

import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>{'Bienvenid@ a nuestra aplicación'}</h1>
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
