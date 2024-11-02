import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product, quantity) => {
    const parsedQuantity = parseInt(quantity);
    const productTotal = product.price * parsedQuantity;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + parsedQuantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: parsedQuantity }];
    });

    // Update the total price
    setTotal((prevTotal) => prevTotal + productTotal);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
