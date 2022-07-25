import baseURL from "../utils/apiBaseURL";

const deleteProduct = async (
    productId: number,
    authToken: string,
    callback: (param: string) => Promise<void>): Promise<boolean> => {

    const response = await fetch(baseURL, {
        method: "DELETE",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }),
    });

    if (!response.ok) return false;
    callback("");
    return true;
}

export default deleteProduct;