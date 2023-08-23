import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getElementById } from '../../Promesa';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getElementById(itemId)
    .then(response => {
      setProductos(response);
    })
    .catch(error => {
      console.log(error);
    }) 
  }, [itemId] ) 
  return (
    <div>

      <ItemDetail {...productos} />
    </div>
  );
}

export default ItemDetailContainer