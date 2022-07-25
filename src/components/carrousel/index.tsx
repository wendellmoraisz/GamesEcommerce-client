import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.webp";
import img3 from "../../assets/img/img3.jpg";
import * as S from "./styles";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Carrousel = () => {

    const slides = [
        <S.ImageWrapper key={0}><img src={img1} alt="" /></S.ImageWrapper>,
        <S.ImageWrapper key={1}><img src={img2} alt="" /></S.ImageWrapper>,
        <S.ImageWrapper key={2}><img src={img3} alt="" /></S.ImageWrapper>
    ]

    const [actualSlide, setActualSlide] = useState(0);
    const [initialAnimationPosition, setInitialAnimationPosition] = useState(0);
    const [finalAnimationPosition, setFinalAnimationPosition] = useState(0);


    const setPreviousSlide = () => {
        if (actualSlide === 0) {
            setInitialAnimationPosition(0);
            setFinalAnimationPosition(-2048);
            setActualSlide(slides.length - 1);
            return;
        }
        if (actualSlide === 1) {
            setInitialAnimationPosition(-1024);
            setFinalAnimationPosition(0);
        } else {
            setInitialAnimationPosition(initialAnimationPosition - 1024);
            setFinalAnimationPosition(finalAnimationPosition + 1024);
        }
        setActualSlide(actualSlide - 1);
    }

    const setNextSlide = () => {
        if (actualSlide === 0) {
            setInitialAnimationPosition(0);
        } else {
            setInitialAnimationPosition(initialAnimationPosition - 1024);
        }
        if (actualSlide === slides.length - 1) {
            setFinalAnimationPosition(0);
            setActualSlide(0);
            return;
        }
        setFinalAnimationPosition(finalAnimationPosition - 1024);
        setActualSlide(actualSlide + 1);
    }

    const moveBanner = keyframes`
        0% {
            margin-left: ${initialAnimationPosition}px;
        }
    
        100%{
            margin-left: ${finalAnimationPosition}px;
        }
    `;

    const Slides = styled.div`
        width: 5120px;
        height: 350px;
        display: flex;
    
        & div:nth-child(${1}){
            margin-left: ${finalAnimationPosition}px;
            animation: ${moveBanner} 3s normal;
        }
    `;

    const Balls = styled.div`
        position: absolute;
        top: 70%;
        width: 1024px;
        display: flex;
        justify-content: center;

        & div:nth-child(${actualSlide + 1}){
            background-color: #fff;
        }
    
        div {
            border: 3px solid #fff;
            padding: 6px;
            border-radius: 50%;
            margin-right: 15px;
        }
    `;

    return (
        <S.CarrouselWrapper>

            <S.Slide>
                <S.BackButton onClick={setPreviousSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </S.BackButton>
                <S.NextButton onClick={setNextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </S.NextButton>
                <Slides>
                    {slides.map(e => e)}
                </Slides>
            </S.Slide>

            <Balls>
                {slides.map(() => <div></div>)}
            </Balls>
        </S.CarrouselWrapper>
    )
}


export default Carrousel;