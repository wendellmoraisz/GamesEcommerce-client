import * as S from "./styles";
import CartProducts from "../cartProducts";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

const CartCheckoutContainer = () => {

    const { products } = useCart();
    const totalValue = products.map(product =>
        product.price * product.quantityInCart).reduce((price, nextPrice) =>
            price + nextPrice);

    return (
        <S.Container>
            <h1>Carrinho</h1>
            <S.CheckoutWrapper>
                <S.ProductsContainer>
                    <S.ProductWrapper>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </S.ProductWrapper>
                    {products.map(product => (
                        <S.ProductWrapper>
                            <CartProducts
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                imgSRC={product.imgSRC}
                                price={product.price}
                                quantityInCart={product.quantityInCart}
                            />
                        </S.ProductWrapper>
                    ))}
                </S.ProductsContainer>
                <S.ResumeWrapper>
                    <h1>Resumo</h1>
                    <p>Produtos: {products.length}</p>
                    <p>
                        Total: {formatPrice(totalValue)}
                    </p>
                    <button>Finalizar compra</button>
                </S.ResumeWrapper>
            </S.CheckoutWrapper>
            <Link to={"/"}>continuar comprando</Link>
        </S.Container>
    )
}

export default CartCheckoutContainer;