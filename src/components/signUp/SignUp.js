import './signUp.css';

import React, { useState } from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
  },
}));

function SignUp() {
  const [textName, setTextName] = useState('');
  const [textLastName, setTextLastName] = useState('');

  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(textName, textLastName);

    await axios.post('http://localhost:8080/user', {
      name: textName,
      lastName: textLastName,
    });
  };

  const onChangeName = (event) => {
    setTextName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setTextLastName(event.target.value);
  };

  return (
    <div className="mainDiv">
      <h1> registro de datos del usuario</h1>
      <form onSubmit={onSubmit}>
        <TextField
          type="text"
          className={clasess.root}
          id="Nombre"
          label="Nombre"
          variant="outlined"
          onChange={onChangeName}
        />
        <br />
        <TextField
          type="text"
          className={clasess.root}
          id="Apellido"
          label="Apellido"
          variant="outlined"
          onChange={onChangeLastName}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
