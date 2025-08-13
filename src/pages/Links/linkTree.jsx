import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../../assets/IMG_3077.PNG";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";


const CgvContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 1rem;
  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;


const Links = () => {
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
    <CgvContainer
      id="terms"
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
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              height: isMobile ? "5rem" : "9rem",
            }}
          />

          <Title>Links</Title>
          </div>
      </motion.div>
    </CgvContainer>
  );
};

export default Links;
