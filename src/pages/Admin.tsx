import { useEffect } from "react";
import AdminTable from "../components/adminTable";
import useProduct from "../hooks/useProduct";


const Admin = () => {

    const { getProducts } = useProduct();
    useEffect(() => {
        getProducts("");
    }, []);

    return (
        <AdminTable />
    )
}

export default Admin;