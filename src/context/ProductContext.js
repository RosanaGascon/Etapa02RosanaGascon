import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Chicken Burger', price: 115, image: 'menu1.jpg', description: 'Delicious chicken burger' },
    { id: 2, name: 'Cheese Pizza', price: 120, image: 'menu2.jpg', description: 'Cheesy pizza' },
    // Agrega más productos según sea necesario
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
