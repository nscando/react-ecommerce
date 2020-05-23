import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import facebook from './Social/facebook.png'
import instagram from './Social/instagram.png'
import twitter from './Social/twitter.png'


export default class Footer extends Component {
     render() {
          return (
               <>
                    <FooterNav className="navbar navbar-expands-sm  navbar-dark px-sm-5 nav-footer">
                         <Link to='/'>
                              <img src={logo} alt="store" className="navbar-b" />
                         </Link>


                         <div className="container">

                              <h4>Seguinos en redes sociales </h4>
                         </div>




                         <a href="https://facebook.com/" className="mr-4">
                              <img src={facebook} alt="facebook" />
                         </a>




                         <a href="https://instagram.com/" className="mr-4">
                              <img src={instagram} alt="instagram" />
                         </a>





                         <a href="https://twitter.com/" className="mr-4">
                              <img src={twitter} alt="twitter" />
                         </a>



                    </FooterNav>


               </>

          )
     }



}



const FooterNav = styled.nav`
background: var(--mainGrey);
color: var(--mainWhite);

.nav-footer{
     color: var(--mainYellow) !important;
     font-size: 2rem;
     text-transform: capitalize;
     position: absolute;
     bottom: 0;
     width: 100%;
     height: 40px;

}

`