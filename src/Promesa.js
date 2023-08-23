import productos from './Productos.json';

export const Promesa = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 500);
  })
};

export const getElementById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500);
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.category === categoryId))
        }, 500);
    })
};