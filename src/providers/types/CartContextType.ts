import Product from "./Product"

interface CartContextType {
    products: Product[]
    addToCart: (product: Product) => void
    decrementProductQuantity: (productId: number) => void
    removeFromCart: (productId: number) => void
}

export default CartContextType;