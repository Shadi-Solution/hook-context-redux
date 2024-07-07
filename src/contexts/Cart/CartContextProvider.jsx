import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = useCallback(
    (data) => {
      setCartItems([...cartItems, data]);
    },
    [cartItems]
  );

  return (
    <CartContext value={{ cartItems, addItemToCart }}>{children}</CartContext>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CartContextProvider;
