import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 0 0 8px;
    width: 500px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    border: solid 1px #eee;
`;

export const SearchButton = styled.button`
    background-color: transparent;
    font-size: 1.2rem;
    padding: 8px;
    //margin-right: -2px;
    border: none;
    cursor: pointer;
    /* border-radius: 8px; */
    transition: all .3s ease;

    &:hover{
        background-color: #3466AA;
        color: #fff;
    }
`;

export const InputSearch = styled.input`
    height: 35px;
    font-size: 1.2rem;
    width: 100%;
    outline: none;
    border: none;
`;