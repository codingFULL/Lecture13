import './signUp.css';

import React, { useState } from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
  },
}));

function SignUp() {
  const [textName, setTextName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textAge, setTextAge] = useState(0);
  const [textEmail, setTextEmail] = useState('');
  const [textcheckbox, setTextCheckBox] = useState(false);
  const [textpassword, setTextPassword] = useState('');
  const [textverifyPassword, setTextVerifyPassword] = useState('');
  const [error, setError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const clasess = useStyles();

  const onChangeName = (event) => {
    setTextName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setTextLastName(event.target.value);
  };

  const onChangeAge = (event) => {
    setTextAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setTextEmail(event.target.value);
  };

  const onChangeCheckBox = (event) => {
    setError(!error);
    console.log(event.target.checked);
    setTextCheckBox(event.target.checked);
  };

  const onChangePassword = (event) => {
    setTextPassword(event.target.value);
  };
  const onChangeVerifyPassword = (event) => {
    setTextVerifyPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowVerifyPassword = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!textcheckbox) {
      window.alert('Debe aceptar terminos y condiciones');
    } else {
      if (textpassword !== textverifyPassword) {
        window.alert('Los campos de contraseña no coinciden');
      } else {
        await axios.post('http://localhost:8080/user', {
          name: textName,
          lastName: textLastName,
          age: textAge,
          email: textEmail,
          password: textpassword,
        });
      }
    }
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
          required
        />
        <br />
        <TextField
          type="text"
          className={clasess.root}
          id="Apellido"
          label="Apellido"
          variant="outlined"
          onChange={onChangeLastName}
          required
        />
        <br />
        <TextField
          type="number"
          className={clasess.root}
          id="edad"
          label="Edad"
          variant="outlined"
          onChange={onChangeAge}
          required
        />
        <br />

        <TextField
          type="email"
          className={clasess.root}
          id="email"
          label="Correo electrónico"
          variant="outlined"
          onChange={onChangeEmail}
          required
        />
        <br />

        <TextField
          type={showPassword ? 'text' : 'password'}
          className={clasess.root}
          id="password"
          label="Contraseña"
          variant="outlined"
          onChange={onChangePassword}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          type={showVerifyPassword ? 'text' : 'password'}
          className={clasess.root}
          id="verifyPassword"
          label="Verificar contraseña"
          variant="outlined"
          onChange={onChangeVerifyPassword}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowVerifyPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showVerifyPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControl required error={error} component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={textcheckbox}
                  onChange={onChangeCheckBox}
                  name="textcheckbox"
                />
              }
              label="Aceptar terminos y condiciones..."
            />
          </FormGroup>
          <FormHelperText hidden={!error}>
            Debe aceptar terminos y condiciones
          </FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
