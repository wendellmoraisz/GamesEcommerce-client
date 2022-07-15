import * as S from "./styles";

interface Props {
    name: string
    imgSRC: string
    price: number
}

const Product = ({ name, imgSRC, price }: Props) => {

    const formatedPrice = `R$${price.toString().replace(".", ",")}`;
    
    return (
        <S.ProductWrapper>
            <img src={imgSRC} alt={`${name} - Capa`} />
            <S.ProductName>{name}</S.ProductName>
            <S.ProductPrice>{formatedPrice}</S.ProductPrice>
            <S.AddToCartButton>Adicionar ao carrinho</S.AddToCartButton>
        </S.ProductWrapper>
    );
}

export default Product;