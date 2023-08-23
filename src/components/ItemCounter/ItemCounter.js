import React, { useState } from 'react'

const ItemCounter = () => {
    const [counter, setCounter] = useState(0);
    const stock = 10;
    const incrementarContador = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    };
    const decrementarContador = () => {
        if(counter > 0){
            setCounter(counter - 1);
        };
    };

  return (
    <div className='flex'>
        <button onClick={decrementarContador} className='text-violet-400 border-violet-400 border-solid border-2 p-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white'>-</button>
        <p className='text-'>{counter}</p>
        <button onClick={incrementarContador} className='text-violet-400 border-violet-400 border-solid border-2 p-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white'>+</button>
    </div>
  )
}

export default ItemCounter