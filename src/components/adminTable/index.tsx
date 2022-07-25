import * as S from "./styles";
import useProduct from "../../hooks/useProduct";
import CreateProductForm from "../createProductForm";
import { useState } from "react";
import Product from "../../providers/types/Product";
import deleteProduct from "../../api/deleteProduct";
import useAdminToken from "../../hooks/useAdminToken";
import createProduct from "../../api/createProduct";
import updateProduct from "../../api/updateProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import formatPrice from "../../utils/formatPrice";

const AdminTable = () => {

    const { products, getProducts } = useProduct();
    const { authToken } = useAdminToken();

    const [isVisible, setIsVisible] = useState(false);

    const resetInputValue = {
        name: "",
        imgSRC: "",
        price: 0,
        stockQuantity: 0,
        quantityInCart: 0,
        id: 0,
    }

    const [productAction, setProductAction] = useState<typeof createProduct | typeof updateProduct>(() => createProduct);

    const [editInputValues, setEditInputValues] = useState<Product>(resetInputValue);

    const showForm = ({ name, imgSRC, price, stockQuantity, id, quantityInCart }: Product, submitCallback: typeof createProduct | typeof updateProduct) => {
        setEditInputValues({
            name,
            imgSRC,
            price,
            stockQuantity,
            id,
            quantityInCart
        });
        setProductAction(() => submitCallback);
        setIsVisible(!isVisible);
    }

    return (
        <S.Container>
            <S.TableCaption>
                <div>
                    <h3>Gerenciamento de Estoque</h3>
                    <S.AddButton onClick={() => showForm(resetInputValue, createProduct)}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        Adicionar Produto
                    </S.AddButton>
                </div>
            </S.TableCaption>
            <S.TableWrapper>
                <S.ProductsTable>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Estoque</th>
                            <th>Preço</th>
                            <th>URL da imagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            const { id, name, imgSRC, price, stockQuantity } = product;
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{stockQuantity}</td>
                                    <td>{formatPrice(price)}</td>
                                    <td>{imgSRC}</td>
                                    <td>
                                        <S.EditButton onClick={() => showForm({ id, name, imgSRC, stockQuantity, price, quantityInCart: 0 }, updateProduct)}>
                                            <FontAwesomeIcon icon={faPencil} />
                                        </S.EditButton>
                                        <S.DeleteButton onClick={() => deleteProduct(product.id, authToken, getProducts)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </S.DeleteButton>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </S.ProductsTable>
            </S.TableWrapper>

            <CreateProductForm
                productAction={productAction}
                name={editInputValues.name}
                id={editInputValues.id}
                price={editInputValues.price}
                stockQuantity={editInputValues.stockQuantity ?? 0}
                imgSRC={editInputValues.imgSRC}
                isVisible={isVisible}
                changeVisibility={setIsVisible}
            />

        </S.Container>
    )
}

export default AdminTable;