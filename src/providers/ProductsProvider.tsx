import { createContext, useCallback, useState } from "react";
import ProductsContextType from "./types/ProductType";
import ContextChildrenType from "./types/ContextChildrenType";

const ProductsContext = createContext<ProductsContextType>({
    products: [{
        name: "",
        imgSRC: "",
        price: 0,
    }],
    getProducts: async () => { },
});

const ProductsProvider = ({children}: ContextChildrenType) => {
    const [productsState, setProductsState] = useState([{
        name: "",
        imgSRC: "",
        price: 0,
    }]);

    const getProducts = async () => {
        const results = await fetch("http://:3333/products");
        const json = await results.json();
        setProductsState(json.results);
    }

    const contextValue = {
        products: productsState,
        getProducts: useCallback(() => getProducts(), []),
    }

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;