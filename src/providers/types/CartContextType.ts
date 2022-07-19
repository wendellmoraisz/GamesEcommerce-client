import Product from "./Product"

interface CartContextType {
    products: {
        id: number
        name: string
        imgSRC: string
        price: number
    }[]
    addToCart: (product: Product) => void
}

export default CartContextType;