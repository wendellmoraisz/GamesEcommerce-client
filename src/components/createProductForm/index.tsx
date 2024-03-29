import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useAdminToken from "../../hooks/useAdminToken";
import useProduct from "../../hooks/useProduct";
import createProduct from "../../api/createProduct";
import updateProduct from "../../api/updateProduct";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

    const resetInput = () => {
        changeVisibility(!isVisible);
        setRequestResponseMessage("");
    }

    const [requestResponseMessage, setRequestResponseMessage] = useState("");

    return (
        <>
            {
                isVisible ?
                    <S.Container>
                        <S.FormWrapper >
                            <S.CloseButton onClick={() => resetInput()}>
                                <FontAwesomeIcon icon={faXmark} />
                            </S.CloseButton>
                            <p>Nome</p>
                            <input type="text" value={productName} onChange={e => { setProductName(e.target.value) }} />
                            <p>Preço</p>
                            <input type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
                            <p>URL da imagem</p>
                            <input type="text" value={productImgUrl} onChange={e => setProductImgUrl(e.target.value)} />

                            <p>Estoque</p>
                            <input type="number" value={productStock} onChange={e => setProductStock(e.target.value)} />

                            <S.FormActionsWrapper>
                                <p>{requestResponseMessage}</p>
                                <div>

                                    <S.ConfirmButton onClick={async () => {
                                        const response = await productAction(authToken, bodyRequest, getProducts, id)
                                        setRequestResponseMessage(response ? "Solicitação efetuada com sucesso!" : "Algo deu errado");
                                    }}>
                                        Confirmar
                                    </S.ConfirmButton>
                                    <S.CancelButton onClick={() => resetInput()}>Cancelar</S.CancelButton>
                                </div>
                            </S.FormActionsWrapper>
                        </S.FormWrapper >
                    </S.Container>
                    :
                    null
            }
        </>
    )
}

export default CreateProductForm;