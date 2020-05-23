import React, { Component } from 'react'
import Title from './../Title';
import CarritoColumnas from './CarritoColumnas'
import CarritoVacio from './CarritoVacio';
import { ProductConsumer } from '../../Componentes/context'
import CarritoTotal from './CarritoTotal';
import ListaCarrito from './ListaCarrito';






export default class Carrito extends Component {
     render() {
          return (
               <section>
                    <ProductConsumer>
                         {value => {
                              const { cart } = value;
                              if (cart.length > 0) {
                                   return (
                                        <React.Fragment>
                                             <Title name="tu" title="carrito" />
                                             <CarritoColumnas />
                                             <ListaCarrito value={value} />
                                             <CarritoTotal value={value} />
                                        </React.Fragment>
                                   )
                              } else {
                                   return <CarritoVacio />

                              }
                         }

                         }
                    </ProductConsumer>


                    {/**en construccion */}
               </section>

          )
     }
}
