import React, { useContext, useState } from "react";

export const AddCartContext = React.createContext();
export const AddSavedContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [saved, setSaved] = useState([]);

  const cartContext = {
    cart,
    updateCart: ({ name }) => {
      // Problem is cart is a number, not an array
      // console.log({ cart });
      const updatedCart = [...cart];
      updatedCart.push({ name, count: 1 });
      // TODO: Adding the same item
      // TODO: If you add the same item, you just increase the count
      setCart(updatedCart);
    },
    removeFromCart: ({ name }) => {
      // TODO: remove item from cart
    }
  };

  // console.log("cart", cart);

  const savedContext = {
    saved,
    updateSaved: item => {
      // Problem is cart is a number, not an array
      // console.log({ saved });
      const updatedSaved = [...saved];
      updatedSaved.push(item);
      setSaved(updatedSaved);
    }
  };

  // console.log("saved", saved);

  return (
    <AddCartContext.Provider value={cartContext}>
      <AddSavedContext.Provider value={savedContext}>
        {children}
      </AddSavedContext.Provider>
    </AddCartContext.Provider>
  );
}
