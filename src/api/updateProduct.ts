import BodyRequest from "./types/BodyRequestType";
import baseURL from "../utils/apiBaseURL";

const updateProduct = async (
    authToken: string,
    bodyRequest: BodyRequest,
    callback: (param: string) => Promise<void>,
    productId: number): Promise<boolean> => {

    const response = await fetch(`${baseURL}/${productId}`, {
        method: "PUT",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
    });

    if (!response.ok) return false;
    callback("");
    return true;
}

export default updateProduct;