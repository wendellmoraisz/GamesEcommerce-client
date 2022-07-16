import { useContext } from "react";
import { ProductsContext } from "../providers/ProductsProvider";

const useProduct = () => {
    const { products, getProducts, changeUrlParam } = useContext(ProductsContext);
    return { products, getProducts, changeUrlParam };
}

export default useProduct;