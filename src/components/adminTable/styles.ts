import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    flex-direction: column;
    align-items: center;
`

export const ProductsTable = styled.table`
    padding: 16px;
    border: 1px solid #000;

    td, th {
        text-align: left;
        padding: 8px 16px;
    }
`;