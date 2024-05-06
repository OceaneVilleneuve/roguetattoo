import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const Picture = styled(motion.img)`
object-fit: contain;
width: 42rem;
height: 26rem;
`;

const Title = styled.div`
  font-family: "Ade Display";
`;

const Cards = ({ index, entreprise, text, image, site }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = image;
      img.onload = () => setImageLoaded(true);
    } else {
      setImageLoaded(false);
    }
  }, [inView, image]);

  // Genere une clé unique basé sur l'index du carousel et l'ancre de la page
  const uniqueKey = `${index}_${inView ? "inView" : "notInView"}`;

  let pictureWidth, pictureHeight

  if (isMobile) {
    pictureWidth =  "21rem";
    pictureHeight = "13rem";
  }

  return (
    <Container
      key={uniqueKey}
      style={{
        flexDirection: "column",
        width: isMobile ? "100%" : null,
      }}
    >
      <div ref={ref}>
        <Picture
          $isMobile={isMobile}
          src={image}
          alt={`Image for ${entreprise}`}
          loaded={imageLoaded.toString()}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: imageLoaded ? 1 : 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          style={{
            width: pictureWidth,
            height: pictureHeight,
          }}
        />
      </div>
      <div ref={ref}></div>
      <div
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
        animate={{
          x: 0, // Move to the center of the screen
          opacity: imageLoaded ? 1 : 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <Title
          style={{
            fontSize: isMobile ? "35px" : "25px",
            textAlign: 'center',
          }}
        >
          {entreprise}
        </Title>
      </div>
    </Container>
  );
};

export default Cards;
