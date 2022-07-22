import { createContext, useCallback, useState, useEffect } from "react";
import ProductsContextType from "./types/ProductsType";
import ContextChildrenType from "./types/ContextChildrenType";
import Product from "./types/Product";

export const ProductsContext = createContext<ProductsContextType>({
    products: [{
        id: 0,
        name: "",
        imgSRC: "",
        price: 0,
        quantityInCart: 0,
        stockQuantity: 0,
    }],
    getProducts: async (urlparam: string = "") => {},
    changeUrlParam: () => {}
});

const ProductsProvider = ({ children }: ContextChildrenType) => {
    const [productsState, setProductsState] = useState([]);

    const getProducts = async (urlParams: string = "") => {
        const results = await fetch(`http://localhost:3333/products${urlParams}`);
        const json = await results.json();
        setProductsState(json.results.map((product: Product) => (
            {
                id: product.id,
                name: product.name,
                imgSRC: product.imgSRC,
                price: product.price,
                quantityInCart: 0,
                stockQuantity: product.stockQuantity,
            }
        )));
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