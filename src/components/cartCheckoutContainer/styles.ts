import styled from "styled-components";

export const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 32px 0;

    h1 {
        font-weight: normal;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: #3466AA;
    }
`;

export const CheckoutWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ProductsContainer = styled.table`
    width: 800px;
    margin-top: 16px;
    border-top: 1px solid #7F8487;
`;

export const ProductWrapper = styled.tr`
    display: flex; 
    align-items: center;
    width: 100%;
    margin: 16px 0;
    
    td {
        height: 150px;
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;

        img {
            height: 100%;
        }
    }
`;

export const indexValues = styled.th`
    height: 32px;
    font-weight: normal;
    color: #7F8487;    
    width: 33%;
    display: flex;
    justify-content: center;
`;

export const ResumeWrapper = styled.div`
    height: 300px;
    align-self: flex-start;
    margin-top: 40px;
    background-color: #EAF6F6;
    width: 200px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
        font-size: 1rem;
        border: none;
        padding: 8px;
        cursor: pointer;
        color: #fff;
        background-color: #3466AA;
        transition: all .3s ease-in-out;

    &:hover {
        background-color: #114084;
    }
    }

    h2 {
        text-align: center;
        font-weight: normal;
    }

    p {
    display: flex;
    justify-content: space-between;

        span {
        color: #7F8487;  
    }
    }
`;

export const TotalValue = styled.p`
    border-top: 1px solid #7F8487;
    padding: 16px 0;
    margin-bottom: -24px;
`;