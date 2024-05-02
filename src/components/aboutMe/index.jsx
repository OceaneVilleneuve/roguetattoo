import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import ProfilPicture from "../../assets/IMG_0146.JPG";
import PictureFrame from "../../assets/2.PNG";
// import './scrollingText.css';
const AboutMeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
`;

const AboutMeTitle = styled.h1`
  position: absolute;
  top: 100px;
  font-size: 2rem;
  color: #333;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  text {
    font-family: 'Helvetica Neue';
    font-size: 70px;
    font-weight: 600;
  }
`;


const ProfilPictureFrame = styled.img`
  position: absolute;
`;

const ProfilPictureAboutMe = styled.img`
  object-fit: cover;
  border-radius: 153px;
`;

const Description = styled.p`
  padding-top: 8rem;
`;


const AboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
<AboutMeContainer id="aboutMePage">
      <ProfilPictureAboutMe
      src={ProfilPicture} alt="Oceane"
      style={{
        height: isMobile ? "23rem" : "27rem",
        width: isMobile ? "15rem" : "20rem",
      }}/>
      <ProfilPictureFrame
      src={PictureFrame} alt="Frame"
      style={{
        height: isMobile ? "34rem" : "42rem",
        width: isMobile ? "24rem" : "32rem",
        top: isMobile ? "10px": "52px",
      }}/>
      <AboutMeTitle>
    {/* A PROPOS DE MOI A PROPOS DE MOI */}
</AboutMeTitle>


      <Description
        style={{
          height: isMobile ? "230px" : null,
          width: isMobile ? "270px" : null,
        }}>
          Je m'appelle Océane. Je suis développeuse web et designeur web. J'ai 1 an d'expérience et deux projets à mon actif.</Description>
    </AboutMeContainer>
  );
};

export default AboutMe;
