import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ProfilPicture from "../../assets/IMG_0748.JPG";
import "./infiniteScolling.css";
import "./glitch.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeightPage = styled.div`
  min-height: 100vh;
`;
const TitleWebsite = styled.h1`
  font-weight: lighter;
  font-family: "Metal Vengeance";
  position: absolute; /* Modifier cette ligne */
  z-index: -2;
  color: #70e000;
`;

const SubTitleWebsiteWeb = styled.h1`
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDeveloper = styled.h1`
  font-weight: lighter;
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDesigner = styled.h1`
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
        paddingTop: isMobile ? "1rem" : "1rem",
        minHeight: isMobile ? "75vh" : "100vh",
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
              fontSize: isMobile ? "30px" : "75px",
              padding: isMobile ? "30px 33px" : "0px 293px",
            }}
          >
            COUNTESS
            <br />
            ROGUE
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
              padding: isMobile ? "24rem 4.9rem" : "16rem 16rem",
            }}
          >
            TATOUEUSE
          </SubTitleWebsiteWeb>
          <SubTitleWebsiteDeveloper
            style={{
              fontSize: isMobile ? "30px" : "50px",
              padding: isMobile ? "26rem 2rem" : "20rem 5rem",
            }}
          >
          ABSTRACT BLACKOUT
          </SubTitleWebsiteDeveloper>
          <SubTitleWebsiteDesigner
            style={{
              fontSize: isMobile ? "30px" : "50px",
              padding: isMobile ? "28rem 1.9rem" : "24rem 13rem",
            }}
          >
            ORNEMENTAL
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
            padding: isMobile ? "32rem 0px 0px 33px" : " 18rem 0px 0px 85px",
          }}
        >
          <SocialLink
            style={{ fontSize: isMobile ? "10px" : "25px" }}
            href="https://www.instagram.com/countess_rogue/"
            target="_blank"
          >
            INSTAGRAM
          </SocialLink>
          <br />
          <SocialLink
            href="https://www.tiktok.com/@countess_rogue?_t=8m113AW3SaH&_r=1"
            target="_blank"
            style={{ fontSize: isMobile ? "10px" : "25px" }}
          >
            TIKTOK
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
            height: isMobile ? "230px" : "420px",
            width: isMobile ? "230px" : "420px",
          }}
          src={ProfilPicture}
          alt="Rogue"
        />
      </PictureContainer>
      <div style={{ paddingTop: isMobile ? "18rem" : "7rem" }}>
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <OpenToWorkContainer>
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS •
              </OpenToWorkContainer>
            </div>
          </div>
        </div>
      </div>
    </HeightPage>
  );
};

export default Home;
