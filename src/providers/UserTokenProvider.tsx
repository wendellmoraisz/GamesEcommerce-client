import { createContext, useState } from "react";
import ContextChildrenType from "./types/ContextChildrenType";
import UserAuthToken from "./types/UserAuthToken";

export const AuthTokenContext = createContext<UserAuthToken>({
    authToken: "",
    updateAuthToken: () => { },
});

const UserTokenProvider = ({ children }: ContextChildrenType) => {

    const [userAuthToken, setUserAuthToken] = useState("");

    const updateAuthToken = (token: string) => {
        setUserAuthToken(token);
    }

    const contextValue = {
        authToken: userAuthToken,
        updateAuthToken,
    }

    return (
        <AuthTokenContext.Provider value={contextValue}>
            {children}
        </AuthTokenContext.Provider>
    )
}

export default UserTokenProvider;