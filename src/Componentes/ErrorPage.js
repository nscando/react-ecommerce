import React, { Component } from 'react'

export default class Default extends Component {

     render() {
          console.log(this.props);
          return (


               <>
                    <div className="container">
                         <div className="row">
                              <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                                   <h1 className="display-3">
                                        ups!
                              </h1>
                                   <h1 className="display-3">
                                        error!
                              </h1>

                                   <h3>la url<span className="text-danger">
                                        <strong>{this.props.location.pathname}</strong>
                                   </span> a la que intentas acceder no existe!</h3>

                              </div>
                         </div>
                    </div>
               </>
          )
     }
}
