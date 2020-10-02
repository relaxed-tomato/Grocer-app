import React, { useContext, useState } from "react";

export const AddCartContext = React.createContext();
// export const AddSavedContext = React.createContext();

// export function useCart() {
//   return useContext(AddCartContext);
// }

// export function useSaved() {
//   return useContext(AddSavedContext);
// }

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  //   const [saved, setSaved] = useState([]);

  const cartContext = {
    cart,
    updateCart: item => {
      // Problem is cart is a number, not an array
      console.log(21, cart);
      const updatedCart = [...cart];
      updatedCart.push(item);
      setCart(updatedCart);
    }
  };

  console.log("cart", cart);

  return (
    <AddCartContext.Provider value={cartContext}>
      {/* <AddSavedContext.Provider value={[saved, setSaved]}> */}
      {children}
      {/* </AddSavedContext.Provider> */}
    </AddCartContext.Provider>
  );
}
