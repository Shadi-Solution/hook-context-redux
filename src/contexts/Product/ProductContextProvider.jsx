import PropTypes from "prop-types";
import ProductContext from "./ProductContext";
import PRODUCTS from "./data";

const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext value={{ products: PRODUCTS }}>{children}</ProductContext>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContextProvider;
