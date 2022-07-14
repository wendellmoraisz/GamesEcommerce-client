import styled from "styled-components";

export const Container = styled.header`
    font-family: sans-serif;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 32px;

    a {
        color: #3466AA;
        font-size: 2rem;
        transition: all .3s;
    }
`;

export const Logo = styled.h1`
    color: #808080;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    gap: 8px;
`;