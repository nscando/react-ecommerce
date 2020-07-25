import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ProductConsumer } from '../Componentes/context'
import { Alert, Container } from 'react-bootstrap';

const mensajeLogin = (context) => {
     setTimeout(() => { context.setNewLogin(false) }, 5000)
}

export default class Navbar extends Component {

     render() {
          return (
               <ProductConsumer>
                    {context => (
                         <>
                              <NavWrapper className="navbar navbar-expands-sm  navbar-dark px-sm-5">
                                   <Link to='/'>
                                        <img src={logo} alt="store" className="navbar-b" />
                                   </Link>
                                   {!context.login &&
                                        <>
                                             <ul className="navbar-nav aling-items-center">
                                                  <li className="nav-item ml-5">
                                                       <Link to="/" className="nav-link">
                                                            Productos
                                                       </Link>

                                                  </li>

                                             </ul>
                                             <ul className="navbar-nav aling-items-center">
                                                  <li className="nav-item ml-5">

                                                       <Link to="/registro" className="nav-link">
                                                            Registro
                                             </Link>
                                                  </li>
                                             </ul>
                                             <ul className="navbar-nav aling-items-center">
                                                  <li className="nav-item ml-5">
                                                       <Link to="/login" className="nav-link">
                                                            Login
                                             </Link>
                                                  </li>
                                             </ul>
                                        </>
                                   }
                                   {context.login &&
                                        <>
                                             <Link to="" onClick={context.logout} className="nav-link">
                                                  logout
                                        </Link>

                                             <Link to="/" className="nav-link">
                                                  productos
                                        </Link>
                                        </>

                                   }

                                   <Link to='/carrito' className="ml-auto">
                                        <ButtonContainer>
                                             <span className="mr-1">
                                                  <i className="fas fa-cart-plus" /> </span>
                                                   mi carrito

                                        </ButtonContainer>
                                   </Link>
                              </NavWrapper>

                              <Container>

                                   {context.newLogin &&
                                        <>
                                             <Alert variant={'info'}>
                                                  Bienvenido/a
                                             </Alert>
                                             {mensajeLogin(context)}
                                        </>
                                   }

                              </Container>

                         </>

                    )}
               </ProductConsumer>

          )
     }
}

const NavWrapper = styled.nav`
background: var(--mainGrey);
.nav-link{
     color: var(--mainWhite) !important;
     font-size: 1.rem;
     text-transform: capitalize;

}

`
