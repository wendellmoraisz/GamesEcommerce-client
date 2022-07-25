import styled from "styled-components";

export const CarrouselWrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Slide = styled.div`
    width: 1024px;
    height: 350px;
    overflow: hidden;
    transition: all .4s;
`;

export const ImageWrapper = styled.div`
    width: 1024px;
    height: 475px;
    transition: all 3s;
`;

export const Button = styled.div`
    position: absolute;
    padding: 10px;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .4s;
    font-size: 1.7em;
    top: 50%;
    z-index: 999;

    &:hover{
        transform: scale(1.5);
    }
`;

export const BackButton = styled(Button)`
    left: 15%;
`;

export const NextButton = styled(Button)`
    right: 15%;
`;