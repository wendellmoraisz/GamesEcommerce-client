import Product from "../../providers/types/Product";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

interface Props extends Product { }

const CartProducts = ({ id, name, imgSRC, price, quantityInCart }: Props) => {

    const { products, addToCart, decrementProductQuantity, removeFromCart } = useCart();

    return (
        <>
            <td>
                <img src={imgSRC} alt={`${name} - Capa`} />
            </td>
            <td>
                <div>
                    <button onClick={() => quantityInCart > 1 ? decrementProductQuantity(id) : null}>-</button>
                    <span>{quantityInCart}</span>
                    <button onClick={() => addToCart({ name: name, id: id, imgSRC: imgSRC, price: price, quantityInCart: quantityInCart })}>+</button>
                </div>
                <button onClick={() => removeFromCart(id)}>remover</button>
            </td>
            <td>
                <p>{formatPrice(price * quantityInCart)}</p>
            </td>
        </>
    )
}

export default CartProducts;