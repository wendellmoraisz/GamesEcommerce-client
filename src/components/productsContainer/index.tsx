import Product from "../product";
import * as S from "./styles";
import useProduct from "../../hooks/useProduct";

const ProductsContainer = () => {

    const { products } = useProduct();

    return (
        <S.Container>
            {products.map(product => {
                return (
                    <Product
                        key={product.id}
                        name={product.name}
                        imgSRC={product.imgSRC}
                        price={product.price}
                    />
                )
            })}
        </S.Container>
    );
}

export default ProductsContainer;