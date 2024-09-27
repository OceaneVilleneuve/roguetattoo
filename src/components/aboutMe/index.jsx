import React, { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "../../assets/IMG_0751-removebg-preview.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMeContainer = styled.div`
  min-height: 96vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;
`;

const AboutMeTitle = styled.h2`
  padding: 2rem 5rem;
  font-size: 2.5rem;
  color: white;
  text-align: center;
`;

const Name = styled.span`
  color: #70e000;
  font-family: "Metal Vengeance";
`;

const AboutMe = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
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
    <AboutMeContainer id="aboutMePage" ref={ref}>
      <motion.div
        key={animationKey}
        initial={{ x: +50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <div
          style={{
            paddingBottom: "6rem",
            textAlign: "center",
          }}
        >
          <img src={Logo} alt="logo" />

          <AboutMeTitle>
            JE M'APPELLE <Name>ROGUE</Name> JE SUIS UNE TATOUEUSE DEBUTANTE
            SITUEE A NANTES EN FRANCE. JE SOUHAITE ME SPECIALISER DANS LE HEAVYBLACK
            WORK ORNEMENTAL MAIS JE RESTE OUVERTE A TOUTE DEMANDE.{" "}
          </AboutMeTitle>
        </div>
      </motion.div>
    </AboutMeContainer>
  );
};

export default AboutMe;
