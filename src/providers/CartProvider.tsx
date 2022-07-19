import { createContext, useState } from "react";
import CartContextType from "./types/CartContextType";
import Product from "./types/Product";
import ContextChildrenType from "./types/ContextChildrenType";

export const CartContext = createContext<CartContextType>({
    products: [{
        id: 0,
        name: "",
        imgSRC: "",
        price: 0,
    }],
    addToCart: () => {}
});

const CartProvider = ({ children }: ContextChildrenType) => {

    const [cartState , setCartState] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        //console.log(cartState);
        if(cartState.length > 0){
            setCartState([...cartState, product]);
        } else {
            setCartState([product]);
        }
        //x'console.log(cartState);
    }

    const contextValue = {
        products: cartState,
        addToCart,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;