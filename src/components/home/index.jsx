import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ProfilPicture from "../../assets/IMG_8626.JPG";
import Logoname from "../../assets/IMG_1807.PNG";
import "./infiniteScolling.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeightPage = styled.div`
  min-height: 100vh;
`;
const TitleWebsite = styled(motion.img)`
  position: absolute; /* Modifier cette ligne */
  z-index: -5;
`;

const SubTitleWebsiteWeb = styled.h2`
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDeveloper = styled.h2`
  font-weight: lighter;
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDesigner = styled.h2`
  font-weight: lighter;
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const AnimatedPicture = styled(motion.img)`
  border-radius: 100%;
  object-fit: cover;
`;

const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const OpenToWorkContainer = styled.h1`
  word-spacing: 1rem;
  font-weight: lighter;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-family: "Ade Display", serif;
  color: white;
  &:hover {
    text-shadow: 2px 2px 10px #fff;
    filter: dropshadow(color=#fff, offx=2, offy=2);
  }
`;

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
      // Réinitialise hasHovered à false lorsque l'ancre est revisitée
    }
  }, [inView]);
  return (
    <HeightPage
      id="homePage"
      style={{
        paddingTop: isMobile ? "2rem" : "1rem",
        minHeight: isMobile ? "60vh" : "100vh",
      }}
    >
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <TitleWebsite
            className="glitch"
            style={{
              padding: isMobile ? "30px 10px" : "0px 140px", // Ajuste le padding pour centrer
            zIndex: 1,
            height: isMobile ? "230px" : "330px",
          }}
          src={Logoname}
          alt="Rogue"
          >
          </TitleWebsite>
        </motion.div>
      </div>
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{ position: "relative" }}
        >
          <SubTitleWebsiteWeb
            style={{
              fontSize: isMobile ? "30px" : "50px",
              padding: isMobile ? "20rem 2rem" : "16rem 16rem", // Ajuste le padding pour centrer
              textAlign: "center", // Centre le texte
            }}
          >
            TATOUEUSE
          </SubTitleWebsiteWeb>
          <SubTitleWebsiteDeveloper
            style={{
              fontSize: isMobile ? "30px" : "50px",
              padding: isMobile ? "22rem 2rem" : "20rem 7rem", // Ajuste le padding pour centrer
              textAlign: "center", // Centre le texte
            }}
          >
            DARK BLACKWORK
          </SubTitleWebsiteDeveloper>
          <SubTitleWebsiteDesigner
            style={{
              fontSize: isMobile ? "30px" : "50px",
              padding: isMobile ? "24rem 2rem" : "24rem 12rem", // Ajuste le padding pour centrer
              textAlign: "center", // Centre le texte
            }}
          >
            WHIPSHADING
          </SubTitleWebsiteDesigner>
        </motion.div>
      </div>
      <motion.div
        key={animationKey}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            padding: isMobile ? "30rem 0px 0px 33px" : " 23rem 0px 0px 85px",
          }}
        >
          <SocialLink
            style={{ fontSize: isMobile ? "15px" : "25px" }}
            href="https://www.instagram.com/countess_rogue/"
            target="_blank"
          >
            INSTAGRAM
          </SocialLink>
          <br />
          <SocialLink
            href="https://www.tiktok.com/@countess_rogue?_t=8m113AW3SaH&_r=1"
            target="_blank"
            style={{ fontSize: isMobile ? "15px" : "25px" }}
          >
            TIKTOK
          </SocialLink>
          <br />
          <br />
          <SocialLink
            href="https://merch.rogue.tattoo"
            target="_blank"
            style={{ fontSize: isMobile ? "15px" : "25px" }}
          >
            BOUTIQUE DE MERCH
          </SocialLink>
        </div>
      </motion.div>
      <PictureContainer
        ref={ref}
        style={{ paddingTop: isMobile ? "9rem" : "2rem" }}
      >
        <AnimatedPicture
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{
            zIndex: -3,
            height: isMobile ? "220px" : "420px",
            width: isMobile ? "220px" : "420px",
          }}
          src={ProfilPicture}
          alt="Rogue"
        />
      </PictureContainer>
      <div style={{ paddingTop: isMobile ? "15rem" : "7rem" }}>
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <OpenToWorkContainer>
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •.
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN •BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
                  BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN
                • BOOKING OPEN • BOOKING OPEN • BOOKING OPEN •
              </OpenToWorkContainer>
            </div>
          </div>
        </div>
      </div>
    </HeightPage>
  );
};

export default Home;
