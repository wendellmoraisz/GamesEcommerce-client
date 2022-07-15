import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border: solid 1px #eee;
    border-radius: 8px;
    transition: all .2s ease-in-out;

    &:hover{
        border: solid 1px #1c1c1c;
        transform: translateY(-5px);
    }

    img{
        width: 100%;
    }
`;

export const ProductName = styled.p`
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
`;

export const ProductPrice = styled.p`
    font-size: 1.2rem;
    margin: 0;
    color: #3466AA;
    font-weight: bold;
`;

export const AddToCartButton = styled.button`
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: #fff;
    background-color: #3466AA;
    transition: all .3s ;

    &:hover {
        background-color: #114084;
    }
`;