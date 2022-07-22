import baseURL from "../utils/apiBaseURL";

const deleteProduct = async (
    productId: number,
    authToken: string,
    callback: (param: string) => Promise<void>): Promise<void> => {

    const result = await fetch(baseURL, {
        method: "DELETE",
        headers: {
            "Authorization": authToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }),
    });

    if (!result.ok) return console.log("erro aqui :(((");
    const json = result.json();
    console.log(json);
    await callback("");
}

export default deleteProduct;