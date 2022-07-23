import styled from "styled-components";
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

export const FormWrapper = styled.div`
    width: 500px;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-color: #fff;
    animation: moveForm .7s normal;

    @keyframes moveForm {
        0%{
            opacity: 0;
            transform: translateY(-32px);
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }

    p {
        margin-top: 16px;
    }

    input {
        height: 32px;
        padding: 0 8px;
        font-size: 1.2rem;
        outline: none
    }

    div {
        display: flex;
        justify-content: flex-end;
    }
`;

export const CloseButton = styled(Button)`
    background-color: transparent;
    color: #000;
    font-size: 1.2rem;
    position: absolute;
    top: 2%;
    left: 90%;
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