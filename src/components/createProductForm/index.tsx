import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useAdminToken from "../../hooks/useAdminToken";
import useProduct from "../../hooks/useProduct";
import createProduct from "../../api/createProduct";
import updateProduct from "../../api/updateProduct";
import * as S from "./styles";

interface Props {
    id: number
    name: string
    imgSRC: string
    price: number
    stockQuantity: number
    isVisible: boolean
    changeVisibility: Dispatch<SetStateAction<boolean>>
    productAction: typeof createProduct | typeof updateProduct
}

const CreateProductForm = ({ id, name, imgSRC, price, stockQuantity, isVisible, changeVisibility, productAction }: Props) => {

    const { authToken } = useAdminToken();
    const { getProducts } = useProduct();

    const [productName, setProductName] = useState<string>(name);
    const [productPrice, setProductPrice] = useState<string>(imgSRC);
    const [productImgUrl, setProductImgUrl] = useState<string>(price.toString());
    const [productStock, setProductStock] = useState<string>(stockQuantity.toString());

    const bodyRequest = {
        name: productName,
        imgSRC: productImgUrl,
        stockQuantity: productStock,
        price: productPrice,
    }

    useEffect(() => {
        setProductName(name);
        setProductPrice(price.toString());
        setProductImgUrl(imgSRC);
        setProductStock(stockQuantity.toString());
    }, [isVisible]);

    return (
        <>
            {
                isVisible ?
                    <S.FormContainer >
                        <input type="text" value={productName} placeholder="nome" onChange={e => { setProductName(e.target.value) }} />
                        <input type="number" value={productPrice} placeholder="preço" onChange={e => setProductPrice(e.target.value)} />
                        <input type="text" value={productImgUrl} placeholder="url da imagem" onChange={e => setProductImgUrl(e.target.value)} />
                        <input type="number" value={productStock} placeholder="estoque" onChange={e => setProductStock(e.target.value)} />
                        <div>
                            <button onClick={() => {productAction(authToken, bodyRequest, getProducts, id)}}>confirmar</button>
                            <button onClick={() => changeVisibility(!isVisible)}>cancelar</button>
                        </div>
                    </S.FormContainer >
                    :
                    null
            }
        </>
    )
}

export default CreateProductForm;