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
        quantityInCart: 0,
    }],
    addToCart: () => { },
    decrementProductQuantity: () => {},
    removeFromCart: () => {},
});

const CartProvider = ({ children }: ContextChildrenType) => {

    const [cartState, setCartState] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        const hasId = cartState.filter(e => e.id === product.id).length > 0;

        if (cartState.length > 0 && hasId) {
            const newCartState = cartState.map(e => {
                if (e.id === product.id) e.quantityInCart += 1;
                return e;
            });
            setCartState(newCartState);
        } else {
            product.quantityInCart = 1;
            setCartState([...cartState, product]);
        }
    }

    const decrementProductQuantity = (productId: number) => {
        const newCartState = cartState.map(e => {
            if (e.id === productId) e.quantityInCart -= 1;
            return e;
        });
        setCartState(newCartState);
    }

    const removeFromCart = (productId: number) => {
        const newCartState = cartState.filter(e => e.id !== productId);
        setCartState(newCartState);
    }

    const contextValue = {
        products: cartState,
        addToCart,
        decrementProductQuantity,
        removeFromCart,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;