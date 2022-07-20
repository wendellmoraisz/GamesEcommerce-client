import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0;
`;

export const CheckoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductsContainer = styled.table`
    width: 800px; 
`;

export const ProductWrapper = styled.tr`
    display: flex; 
    align-items: center;
    height: 150px;
    width: 100%;
    margin: 16px 0;

    td, th {
        height: 100%;
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

export const ResumeWrapper = styled.div`
    height: 300px;
    align-self: flex-start;
    margin-top: 150px;
    width: 200px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #000;

    h1 {
        text-align: center
    }
`;