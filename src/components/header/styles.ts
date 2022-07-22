import styled from "styled-components";

export const Container = styled.header`
    padding: 0 16px;
    height: 112px;
    display: flex;
    background-color: #1c1c1c;
    align-items: center;
    justify-content: space-evenly;
    gap: 32px;
    margin-bottom: 48px;

    a {
        color: #3466AA;
        font-size: 2rem;
        transition: all .3s;
    }
`;

export const Logo = styled.h1`
    font-family: 'Press Start 2P', sans-serif;
    color: #3466AA;
    display: flex;
    align-items: center;
    gap: 8px;
`;