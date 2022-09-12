import React from 'react';
import { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import Administrador from './Administrador';

function Login() {

  const [miLogin] = useState('false')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('los campos no pueden estar vacíos');
      return;
    }
    if (username !== '' && !regexEmail.test(username)) {
      alert('debes escribir una dirección de correo electrónico válida');
      return;
    }
    if (username !== 'administrador@quick.com' || password !== 'Quick') {
      alert('Credenciales inválidas');
      return;

    }


    axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json', { username, password })
      .then(res => {
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        history.push('/administrador')
      })
  }

  let token = localStorage.getItem('token');

  return (

    <section className="vh-100">

      {token && <Redirect to="/administrador" />}

      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://statathlon.com/wp-content/uploads/2018/01/rio-de-janeiro-2016-summer-olympics-e1467812135773.png"
              className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" >Email address</label>
                <input type="email" id="txtusu" onChange={e => setUsername(e.target.value)} value={username} className="form-control form-control-lg"
                  placeholder="Enter a valid email address" />

              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Password</label>
                <input type="password" id="txtpas" onChange={e => setPassword(e.target.value)} value={password} className="form-control form-control-lg"
                  placeholder="Enter password" />

              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
            </form>
{miLogin === "true" && <Administrador username={username}/>}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Login