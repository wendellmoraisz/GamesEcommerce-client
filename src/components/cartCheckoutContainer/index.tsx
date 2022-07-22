import * as S from "./styles";
import CartProducts from "../cartProducts";
import useCart from "../../hooks/useCart";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const CartCheckoutContainer = () => {

    const { products } = useCart();
    let totalValue = 0;
    if (products.length > 0) {
        totalValue = products.map(product =>
            product.price * product.quantityInCart).reduce((price, nextPrice) =>
                price + nextPrice);
    }

    return (
        <S.CartWrapper>

            <S.Container>
                {products.length > 0 ?
                    <>
                        <h1>Carrinho</h1>
                        <S.CheckoutWrapper>
                            <S.ProductsContainer>
                                <S.ProductWrapper>
                                    <S.indexValues>Produto</S.indexValues>
                                    <S.indexValues>Quantidade</S.indexValues>
                                    <S.indexValues>Valor</S.indexValues>
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
                                <h2>Resumo</h2>
                                <p><span>Itens: </span>{products.length}</p>
                                <p>
                                    <span>Frete:</span>
                                    R$0,00
                                </p>
                                <S.TotalValue>
                                    <span>Total:</span>{formatPrice(totalValue)}
                                </S.TotalValue>
                                <button>Finalizar compra</button>
                            </S.ResumeWrapper>
                        </S.CheckoutWrapper>
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faLeftLong} />
                            {"  Continuar comprando"}
                        </Link>
                    </>
                    :
                    <S.EmptyCartWrapper>
                        <h1>Seu carrinho está vazio :(</h1>
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faLeftLong} />
                            {"  Continuar comprando"}
                        </Link>
                    </ S.EmptyCartWrapper>
                }
            </S.Container>
        </S.CartWrapper>
    )
}

export default CartCheckoutContainer;