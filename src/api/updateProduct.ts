import BodyRequest from "./types/BodyRequestType";
import baseURL from "../utils/apiBaseURL";

const updateProduct = async (
    authToken: string,
    bodyRequest: BodyRequest,
    callback: (param: string) => Promise<void>,
    productId: number): Promise<void> => {

    const result = await fetch(`${baseURL}/${productId}`, {
        method: "PUT",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
    });

    const json = await result.json();
    console.log(json);

    callback("");
}

export default updateProduct;