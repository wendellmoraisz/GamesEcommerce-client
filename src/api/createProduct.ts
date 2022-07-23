import baseURL from "../utils/apiBaseURL";
import BodyRequest from "./types/BodyRequestType";

const createProduct = async (
    authToken: string,
    bodyRequest: BodyRequest,
    callback: (param: string) => Promise<void>): Promise<boolean> => {

    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest),
    });

    if (!response.ok) return false;
    callback("");
    return true;
}

export default createProduct;