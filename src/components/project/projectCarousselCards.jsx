import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

const InformationProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 30rem 2rem 0rem 0rem;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Picture = styled(motion.img)`
  object-fit: contain;
  width: 42rem;
  height: 26rem;
  padding: 13rem 4rem 0rem 7rem;
`;

const Title = styled.div`
  font-family: ${(props) =>
    props.$isAlexa
      ? "'Italianno', cursive"
      : props.$isFerd
      ? "Yahren"
      : "Ade Display"};
`;

const Site = styled.a`
text-decoration: none;
color: white;
padding-top: 5px;
`

const Cards = ({ index, entreprise, text, image, site }) => {
  const isAlexa = entreprise === "Alexa Studio Création";
  const isFerd = entreprise === "Ferd";
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

  let pictureWidth, pictureHeight, picturePadding, contentPadding, textAlign;

  if (isMobile) {
    pictureWidth =  "21rem";
    pictureHeight = "13rem";
    picturePadding = "6rem 2.5rem 0rem";
    textAlign = "center";
    contentPadding = "5rem 0rem 2rem 0rem";
  }

  return (
    <Container
      key={uniqueKey}
      style={{
        flexDirection: isMobile ? "column" : null,
        width: isMobile ? "100%" : null,
      }}
    >
      <div ref={ref}>
        <Picture
          $isAlexa={isAlexa}
          $isFerd={isFerd}
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
            padding: picturePadding,
          }}
        />
      </div>
      <div ref={ref}></div>
      <InformationProjectContainer
        style={{
          padding: contentPadding,
          width: isMobile ? "100%" : "100%",
          textAlign: textAlign,
        }}
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
        animate={{
          x: 0, // Move to the center of the screen
          opacity: imageLoaded ? 1 : 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <Title
          $isAlexa={isAlexa}
          $isFerd={isFerd}
          style={{
            fontSize: isMobile ? "35px" : "45px",
          }}
        >
          {entreprise}
        </Title>
        <TextContainer>
  <Site href={site} target="_blank" rel="noopener noreferrer">
    {site}
  </Site>
  <p>{text}</p>
</TextContainer>
      </InformationProjectContainer>
    </Container>
  );
};

export default Cards;
