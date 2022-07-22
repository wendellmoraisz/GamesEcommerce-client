import { useContext } from "react";
import { AuthTokenContext } from "../providers/UserTokenProvider";

const useAdminToken = () => {
    const { authToken, updateAuthToken } = useContext(AuthTokenContext);
    return { authToken, updateAuthToken };
}

export default useAdminToken;