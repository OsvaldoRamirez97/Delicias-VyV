import React from 'react'
import { BsCart } from 'react-icons/bs'

function CartWidget() {
  return (
    <div className='grid grid-cols-2'>
        <BsCart className='mx-auto'/>
        <p className='start-0'>1 Item</p>
    </div>
  )
}

export default CartWidget