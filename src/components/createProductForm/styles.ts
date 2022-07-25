import styled, { keyframes } from "styled-components";
import { Button } from "../adminTable/styles";

export const Container = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .7);
`;

const moveElement = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-32px);
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const FormWrapper = styled.div`
    width: 500px;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-color: #fff;
    animation: ${moveElement} .7s normal;

    p {
        margin-top: 16px;
    }

    input {
        height: 32px;
        padding: 0 8px;
        font-size: 1.2rem;
        outline: none
    }
`;

export const FormActionsWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const CloseButton = styled(Button)`
    background-color: transparent;
    color: #000;
    font-size: 1.2rem;
    position: absolute;
    top: 1%;
    left: 93%;
`;

export const ConfirmButton = styled(Button)`
    background-color: #3CCF4E;
    margin-top: 16px;
`;

export const CancelButton = styled(Button)`
    background-color: #DA1212;
    margin-left: 16px;
    margin-top: 16px;
`;