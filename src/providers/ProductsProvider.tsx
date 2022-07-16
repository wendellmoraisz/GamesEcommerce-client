import { createContext, useCallback, useState, useEffect, useMemo } from "react";
import ProductsContextType from "./types/ProductType";
import ContextChildrenType from "./types/ContextChildrenType";

export const ProductsContext = createContext<ProductsContextType>({
    products: [{
        id: 0,
        name: "",
        imgSRC: "",
        price: 0,
    }],
    getProducts: async (urlparam: string = "") => {},
    changeUrlParam: () => {}
});

const ProductsProvider = ({ children }: ContextChildrenType) => {
    const [productsState, setProductsState] = useState([]);

    const getProducts = async (urlParams: string = "") => {
        console.log(urlParams);
        const results = await fetch(`http://localhost:3333/products${urlParams}`);
        const json = await results.json();
        setProductsState(json.results);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const changeUrlParam = (param: string) => {
        getProducts(param);
    }

    const contextValue = {
        changeUrlParam,
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