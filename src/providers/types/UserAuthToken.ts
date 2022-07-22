interface UserAuthToken {
    authToken: string
    updateAuthToken: (token: string) => void
}

export default UserAuthToken;