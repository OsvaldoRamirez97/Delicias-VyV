import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList';
import { Promesa, getProductsByCategory } from '../../Promesa';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
 
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : Promesa
   asyncFunc(categoryId)
   .then(response => {
    setProductos(response);
   })
   .catch(error => {
    console.log(error);
   })
  }, [categoryId])
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer