import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

export const TableWrapper = styled.div`
    max-height: 80vh;
    overflow: auto;
`;

export const ProductsTable = styled.table`
    padding: 16px;
    border-collapse: collapse;
    border: solid 1px #7F8487;
    width: 1020px;

    td, th {
        text-align: left;
        padding: 12px;
        font-weight: normal;
        border: none;
    }

    th {
        color: #fff;
        background-color: #2C3333;
        border: solid 1px #2C3333;
    }
    
    tr {
        padding: 8px;
        &:nth-child(even){
            background-color: #ddd;
        }
    }
`;

export const TableCaption = styled.div`
    border: solid 1px #7F8487;
    padding: 16px;
    margin-top: 32px;
    width: 1020px;
    box-sizing: border-box;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Button = styled.button`
    padding: 8px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
`;

export const AddButton = styled(Button)`
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #3466AA;
`;

export const DeleteButton = styled(Button)`
    background-color: #EB1D36;
`;

export const EditButton = styled(Button)`
    background-color: #FFD24C;
`;