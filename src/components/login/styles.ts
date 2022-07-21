import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #0C2340;
`;

export const Container = styled.div`
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffff;
    
    h1 {
        text-align: center;
        font-size: 4rem;
        font-weight: 300;
    }
    
    input, button{
        font-size: 1.3rem;
        padding: 10px;
        color: #ffff;
    }
    
    input {
        background: transparent;
        border: 0;
        outline: 0;
        &::placeholder{
            color: #fff;
        }
        &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 40px #224957 inset;
        -webkit-text-size-adjust: 1.2rem;
        -webkit-text-fill-color: #fff;
        }
    }
    a {
        text-decoration: none;
        color: #20DF7F;
        margin: 25px 0;
    }
`;

export const formWrapper = styled.div`
    width: 320px;
    margin-bottom: 20px;
`

export const IconSpan = styled.span`
    font-size: 1.3rem;
    background: transparent;
    border: 0;
`;
    
export const ShowPasswordButton = styled(IconSpan)`
    cursor: pointer;
    margin-left: -44px;
`;

export const LoginButton = styled.button`
    width: 100%;
    border: 0;
    background: #3457D5;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 3px 10px 0px #000;
    }
    transition: all .3s ease;
`;

export const InputWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    align-items: center;
    background: #002235;
    padding: 0 8px;
    margin: 30px 0;
`;