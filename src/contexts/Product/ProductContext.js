import { createContext, useContext } from "react";

const ProductContext = createContext({
  products: [],
});

export const useProduct = () => useContext(ProductContext);

export default ProductContext.Provider;
