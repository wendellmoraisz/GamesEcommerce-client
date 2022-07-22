import * as S from "./styles";
import useProduct from "../../hooks/useProduct";
import CreateProductForm from "../createProductForm";
import { useState } from "react";
import Product from "../../providers/types/Product";
import deleteProduct from "../../api/deleteProduct";
import useAdminToken from "../../hooks/useAdminToken";
import createProduct from "../../api/createProduct";
import updateProduct from "../../api/updateProduct";

const AdminTable = () => {

    const { products, getProducts } = useProduct();
    const { authToken } = useAdminToken();

    const [isVisible, setIsVisible] = useState(false);

    const handleCreateProductFormVisibility = () => {
        setIsVisible(!isVisible);
    }

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
            <h1>gerenciamento de estoque</h1>
            <button onClick={() => showForm(resetInputValue, createProduct)}>adicionar novo produto</button>
            <S.ProductsTable>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>estoque</th>
                        <th>preço</th>
                        <th>url da imagem</th>
                        <th>ações</th>
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
                                <td>{price}</td>
                                <td>{imgSRC}</td>
                                <td>
                                    <button onClick={() => showForm({ id, name, imgSRC, stockQuantity, price, quantityInCart: 0 }, updateProduct)}>editar</button>
                                    <button onClick={() => deleteProduct(product.id, authToken, getProducts)}>deletar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </S.ProductsTable>

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