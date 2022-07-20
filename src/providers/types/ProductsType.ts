import Product from "./Product";

interface ProductsContextType {
    products: Product[],
    getProducts: (param: string) => Promise<void>
    changeUrlParam: (param: string) => void
}

export default ProductsContextType;