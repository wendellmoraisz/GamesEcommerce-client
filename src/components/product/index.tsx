import * as S from "./styles";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

interface Props {
    id: number
    name: string
    imgSRC: string
    price: number
}

const Product = ({ name, imgSRC, price, id }: Props) => {

    const { addToCart } = useCart();

    return (
        <S.ProductWrapper>
            <img src={imgSRC} alt={`${name} - Capa`} />
            <S.ProductName>{name}</S.ProductName>
            <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
            <S.AddToCartButton
                onClick={() => addToCart({ name, imgSRC, price, id })}>
                Adicionar ao carrinho
            </S.AddToCartButton>
        </S.ProductWrapper>
    );
}

export default Product;