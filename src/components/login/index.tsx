import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [showPasswordIcon, setShowPasswordIcon] = useState(faEye);
    const [inputType, setInputType] = useState("password");

    const handlePasswordInputIcon = () => {
        const newIcon = showPasswordIcon === faEye ? faEyeSlash : faEye;
        setShowPasswordIcon(newIcon);
        const newInputType = inputType === "password" ? "text" : "password";
        setInputType(newInputType);
    }

    const [invalidLoginOpacity, setInvalidLoginOpacity] = useState("0");
    const ShowLoginErrorMessage = () => setInvalidLoginOpacity("1");

    const sendLogin = async () => {
        const bodyRequest = { user: userEmail, password: userPassword };
        const result = await fetch("http://localhost:3333/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyRequest),
        });

        if (!result.ok) ShowLoginErrorMessage();
    }

    const LoginError = styled.div`
    padding: 16px;
    background-color: #EB4747;
    opacity: ${invalidLoginOpacity};
    `;

    return (
        <S.Wrapper>

            <S.Container>
                <h1>Login</h1>
                <S.formWrapper>
                    <S.InputWrapper>
                        <S.IconSpan><FontAwesomeIcon icon={faAt} /></S.IconSpan>
                        <input type="email" name="email" placeholder="Usuário" onChange={e => setUserEmail(e.target.value)} />
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.IconSpan><FontAwesomeIcon icon={faKey} /></S.IconSpan>
                        <input type={inputType} name="password" placeholder="Senha" onChange={e => setUserPassword(e.target.value)} />
                        <S.ShowPasswordButton onClick={handlePasswordInputIcon}><FontAwesomeIcon icon={showPasswordIcon} /></S.ShowPasswordButton>
                    </S.InputWrapper>

                    <S.LoginButton onClick={sendLogin}>Login</S.LoginButton>
                </S.formWrapper>
                <LoginError>Login inválido</LoginError>
            </S.Container>

        </S.Wrapper>
    )
}

export default Login;