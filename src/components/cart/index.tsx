import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const Cart = () => {

    return (

        <S.CartContainer>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>R$120,00</p>
        </S.CartContainer>

    );
}

export default Cart;