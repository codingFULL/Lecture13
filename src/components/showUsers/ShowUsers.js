import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';

function ShowUsers() {
  const [textValue, setTextValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [statusFlag, setStatusFlag] = useState(false);

  useEffect(() => {
    if (!statusFlag) {
      axios
        .get(
          'https://oq2fb3j51g.execute-api.us-east-2.amazonaws.com/dev/lib/user'
        )
        .then((response) => {
          console.log(response);
          setUserData(response);
          setStatusFlag(true);
        })
        .catch((error) => {});
    }
  });

  const a = (event) => {
    console.log(event.target.value);
  };

  const printData = (params) => {
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={a}
        />
        {userData.data.map((val) => (
          <p key={val.userid}>{JSON.stringify(val)}</p>
        ))}
      </div>
    );
  };

  const arr = ['andres', 'pedro', 'maria', 'camilo'];
  return (
    <div>
      <h1> Hola desde los usuarios</h1>
      {userData === null ? null : printData()}
    </div>
  );
}

export default ShowUsers;
