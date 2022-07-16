import styled from "styled-components";

export const SelectWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;

export const Select = styled.select`
    font-size: 1.2rem;
    font-weight: lighter;
    padding: 4px 8px;
    
    option{
        box-shadow: none;
        font-weight: lighter;
        background-color: #fff;
    }
`;