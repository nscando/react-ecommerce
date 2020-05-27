import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Componentes/Navbar';
import ProductList from './Componentes/ProductList';
import Detalles from './Componentes/Detalles';
import Carrito from './Componentes/Carrito';

import Modal from './Componentes/Modal';
import Registro from './Componentes/Registro';
import Login from './Componentes/Login';





function App() {
  return (
    <>
      <Navbar />


      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detalles" component={Detalles} />
        <Route path="/carrito" component={Carrito} />
        <Modal />

      </Switch>

      <Switch>
        <Route path="/registro" exact component={Registro} />
        <Route path="/login" exact component={() => <Login title={'test'} />} />
      </Switch>



    </>
  );
}

export default App;
