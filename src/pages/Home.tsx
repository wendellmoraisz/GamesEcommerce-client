import Carrousel from "../components/carrousel";
import Footer from "../components/footer";
import Header from "../components/header";
import OrderProduct from "../components/orderProduct";
import ProductsContainer from "../components/productsContainer";

const Home = () => {

    return (
        <>
            <Header />
            <Carrousel />
            <OrderProduct />
            <ProductsContainer />
            <Footer />
        </>
    );
}

export default Home;