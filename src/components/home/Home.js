import React from 'react';

import { Link } from 'react-router-dom';

function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>{'Hola desde la página de inicio :)'}</h1>
      <ol>
        <li>
          <Link to="/signIn">{'Página de ingreso'}</Link>
        </li>
        <li>
          <Link to="/signUp">{'Página de registro'}</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
