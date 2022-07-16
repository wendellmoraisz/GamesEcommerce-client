import * as S from "./styles";
import useProduct from "../../hooks/useProduct";

const OrderProduct = () => {

    const { changeUrlParam } = useProduct();

    return (
        <S.SelectWrapper>
        <S.Select onChange={e => changeUrlParam(e.target.value)} name="Ordenar por">
            <option disabled selected>Ordenar por</option>
            <option value="/HighestPrice">Maior preço</option>
            <option value="/LowestPrice">Menor preço</option>
        </S.Select>
        </S.SelectWrapper>
    )
}

export default OrderProduct;