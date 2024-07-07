import { createContext, useContext } from "react";

const CartContext = createContext({
  cartItems: [],
  // eslint-disable-next-line no-unused-vars
  addItemToCart: (data) => {},
});

export const useCart = () => useContext(CartContext);

export default CartContext.Provider;
