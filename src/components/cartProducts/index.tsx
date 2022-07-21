import Product from "../../providers/types/Product";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface Props extends Product { }

const CartProducts = ({ id, name, imgSRC, price, quantityInCart }: Props) => {

    const { addToCart, decrementProductQuantity, removeFromCart } = useCart();

    return (
        <>
            <td>
                <img src={imgSRC} alt={`${name} - Capa`} />
            </td>
            <td>
                <S.AlterQuantity>
                    <button onClick={() => quantityInCart > 1 ? decrementProductQuantity(id) : null}>-</button>
                    <span>{quantityInCart}</span>
                    <button onClick={() => addToCart({ name: name, id: id, imgSRC: imgSRC, price: price, quantityInCart: quantityInCart })}>+</button>
                </S.AlterQuantity>
                <S.RemoveButton onClick={() => removeFromCart(id)}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                    {" Remover"}
                    </S.RemoveButton>
            </td>
            <td>
                <p>{formatPrice(price * quantityInCart)}</p>
            </td>
        </>
    )
}

export default CartProducts;