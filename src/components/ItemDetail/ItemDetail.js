import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

export const ItemDetail = ({ id, name, image, price1 }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} className="h-52 w-52 object-cover" />
      <h3>Precio: ${price1}</h3>
      <ItemCounter />
    </div>
  );
};
