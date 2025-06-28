import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "../../assets/IMG_3077.PNG";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;
`;

const AboutMeTitle = styled.h2`
  padding: 2rem 5rem;
  color: white;
  text-align: center;
`;

const Name = styled.span`
  color: #70e000;
  font-family: "Metal Vengeance";
`;

const AboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <AboutMeContainer
      id="aboutMePage"
      ref={ref}
      style={{
        minHeight: isMobile ? "65vh" : "96vh",
      }}
    >
      <motion.div
        key={animationKey}
        initial={{ x: +50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img src={Logo} alt="logo"
          style={{
              height: isMobile ? "10rem" : "20rem",
            }} />

          <AboutMeTitle
            style={{
              fontSize: isMobile ? "1.2rem" : "2.5rem",
            }}
          >
            JE SUIS <Name>ROGUE</Name>, UNE TATOUEUSE SITUEE A NANTES EN
            FRANCE. JE SUIS SPECIALISEE DANS LE BLACKWORK.
            <br/>
            <br/>
            J'AIME PARTICULIEREMENT TATOUER LES ANIMAUX, PLANTES, MONSTRES ET CREATURES DE L'OMBRE.
            <br />
            <br />
            JE VOUS ACCUEILLE DANS MON ATELIER PRIVE UNIQUEMENT SUR RENDEZ-VOUS.
          </AboutMeTitle>
        </div>
      </motion.div>
    </AboutMeContainer>
  );
};

export default AboutMe;
