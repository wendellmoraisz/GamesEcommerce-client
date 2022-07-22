import baseURL from "../utils/apiBaseURL";
import BodyRequest from "./types/BodyRequestType";

const createProduct = async (
    authToken: string,
    bodyRequest: BodyRequest,
    callback: (param: string) => Promise<void>): Promise<void> => {

    const result = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest),
    });

    const json = await result.json();
    console.log(json);
    callback("");

    //if (!result.ok) return console.log('erro aaaa');
}

export default createProduct;