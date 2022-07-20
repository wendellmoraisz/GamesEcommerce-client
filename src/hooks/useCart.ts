import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const useCart = () => {
    const { products, addToCart, decrementProductQuantity, removeFromCart } = useContext(CartContext);
    return { products, addToCart, decrementProductQuantity, removeFromCart };
}

export default useCart;