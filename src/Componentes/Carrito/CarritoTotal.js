import React from 'react'
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton'

export default function CarritoTotal({ value, history }) {
     const { cartSubtotal, cartTax, cartTotal, clearCart } = value;


     return (
          <>
               <div className="container">
                    <div className="row">
                         <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                              <Link to="/">
                                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                        limpiar carrito
                    </button>
                              </Link>
                              <h5>
                                   <span className="text-title">
                                        subtotal :
                    <strong>$ {cartSubtotal}</strong>
                                   </span>
                              </h5>
                              <h5>
                                   <span className="text-title">
                                        impuestos :
                    <strong>$ {cartTax}</strong>
                                   </span>
                              </h5>
                              <h5>
                                   <span className="text-title">
                                        total :
                    <strong>$ {cartTotal}</strong>
                                   </span>
                              </h5>
                              <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                         </div>
                    </div>
               </div>

          </>
     )
}
