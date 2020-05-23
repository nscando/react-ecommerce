import React from 'react'
import ItemCarrito from './ItemCarrito'


export default function ListaCarrito({ value }) {
     const { cart } = value;
     console.log(value, cart);


     return (
          <div className="container-fluid">
               {cart.map(item => {
                    return <ItemCarrito key={item.id} item={item} value={value} />
               })}


          </div>
     )
}
