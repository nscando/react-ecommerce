import React, { Component } from 'react'
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';



export default class Detalles extends Component {

     render() {
          return (
               <ProductConsumer>
                    {(value) => {
                         const { id, company, title, img, info, price, inCart } = value.detailProduct
                         return (
                              <div className="container py-5">
                                   {/**titulo */}
                                   <div className="row">
                                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                             <h1>{title}</h1>
                                        </div>
                                   </div>
                                   {/**termina titulo */}
                                   {/**info del producto */}
                                   <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                             <img src={img} className="img-fluid" alt="producto" />
                                        </div>
                                        {/**info del producto */}

                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                             <h2>modelo : {title} </h2>
                                             <h4 className=" text-title text-uppercase text-muted mt-3 mb-2">
                                                  by : <span className="text-uppercase">{company}</span>
                                             </h4>
                                             <h4 className="text-blue">
                                                  <strong>
                                                       precio : <span>$</span> {price}
                                                  </strong>
                                             </h4>
                                             <p className="text-uppercase font-weight-bold mt-3 mb-0">
                                                  detalles del producto :
                                             </p>
                                             <p className="text-muted lead">{info}</p>
                                             {/**botones  */}
                                             <div>
                                                  <Link to='/'>
                                                       <ButtonContainer> <span className="mr-2">
                                                            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                                       </span> productos

                                                  </ButtonContainer>
                                                  </Link>
                                                  <ButtonContainer cart disable={inCart ? true : false} onClick={() => {
                                                       value.addToCart(id);
                                                       value.openModal(id);
                                                  }}>
                                                       {inCart ? "ya esta en tu carro" : <span className="mr-2">
                                                            <i className="fas fa-cart-plus" /> agregar!</span>}
                                                  </ButtonContainer>
                                             </div>

                                        </div>
                                   </div>
                              </div>
                         )
                    }}
               </ProductConsumer>
          )
     }
}
