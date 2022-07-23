import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Admin from './pages/Admin';
import App from './App';
import CartCheckout from './pages/CartCheckout';
import useAdminToken from "./hooks/useAdminToken";
import ContextChildrenType from "../src/providers/types/ContextChildrenType";

const PrivateRoute = ({ children }: ContextChildrenType) => {
    const { authToken } = useAdminToken();
    return (
        <>
            {authToken !== "" ? children : <Navigate to="/admin" />}
        </>
    )
}

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<CartCheckout />} />
                <Route path="/admin" element={<Login />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;