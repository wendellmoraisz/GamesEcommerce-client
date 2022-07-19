import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {

    const { products } = useCart();
    let totalValue = 0;
    if (products.length > 0)
        totalValue = products.map(product => product.price).reduce((price, nextPrice) => price + nextPrice);

    return (

        <S.CartContainer>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{formatPrice(totalValue)}</p>
        </S.CartContainer>

    );
}

export default Cart;