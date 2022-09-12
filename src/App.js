//Libraries
import { Switch, Route } from 'react-router-dom';

//Imports

import Login from './componentes/Login.jsx';
import Header from './componentes/Header.jsx';
import Administrador from './componentes/Administrador.jsx';

//Estilos
import './App.css';
import "./estilos/bootstrap.min.css"


function App() {
  return (
    <>
    <Header/>
    <div className='container mt-3'>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/administrador" component={Administrador} />
    </Switch>
    </div>
    </>
    
  );
}

export default App;
