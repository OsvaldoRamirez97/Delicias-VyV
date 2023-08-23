import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price1 }) => {
  return (
    <div className="flex flex-row" key={id}>
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} className="h-52 w-52 object-cover" />
        <h3>Precio: ${price1}</h3>
        <Link to={`/item/${id}`}>
          <button className='text-violet-400 border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white p-2'>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
