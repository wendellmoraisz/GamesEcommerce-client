import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const useCart = () => {
    const { products, addToCart } = useContext(CartContext);
    return { products, addToCart };
}

export default useCart;