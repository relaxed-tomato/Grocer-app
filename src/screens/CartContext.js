import React, { useContext, useState } from "react";

export const AddCartContext = React.createContext();
export const AddSavedContext = React.createContext();
export const AddPagedContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [saved, setSaved] = useState([]);
  const [paged, setPaged] = useState([]);

  const cartContext = {
    cart,
    updateCart: ({ name, price, image }) => {
      const updatedCart = [...cart];
      updatedCart.push({ name, count: 1, price, image });
      setCart(updatedCart);
    },
    removeFromCart: ({ name }) => {
      //remove an item from
      // const updatedCart = [...cart];
      const updatedCart = cart.filter(item => item.name !== name);
      // updatedCart.pop();
      // setCart(updatedCart);
      // const indexOfCartItemToRemove = updatedCart.findIndex
      // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

      // array of items, filter to remove the specific item
      setCart(updatedCart);
    }
  };

  const savedContext = {
    saved,
    updateSaved: ({ name, price, image, description }) => {
      const updatedSaved = [...saved];
      updatedSaved.push({ name, price, image, description });
      setSaved(updatedSaved);
    },
    removeFromSaved: ({ name, price, image, description }) => {}
  };

  const PageContext = {
    paged,
    updatePaged: ({ name, price, image, description }) => {
      const updatedPaged = [...paged];
      updatedPaged.push({ name, price, image, description });
      setPaged(updatedPaged);
    }
  };

  return (
    <AddPagedContext.Provider value={PageContext}>
      <AddCartContext.Provider value={cartContext}>
        <AddSavedContext.Provider value={savedContext}>
          {children}
        </AddSavedContext.Provider>
      </AddCartContext.Provider>
    </AddPagedContext.Provider>
  );
}
