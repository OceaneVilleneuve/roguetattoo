import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../../assets/IMG_6.PNG";
import Logo from "../../assets/IMG_3077.PNG";
import Logoname from "../../assets/IMG_1807.PNG";
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
  font-size: 17px;
`;

const PictureContainer = styled.div`
  justify-content: center;
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
    <CgvContainer id="terms" ref={ref}>
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
          <PictureContainer
            ref={ref}
            style={{ paddingTop: isMobile ? "9rem" : "2rem" }}
          >
            <img
              src={Me}
              alt="me"
              style={{
                height: isMobile ? "10rem" : "10rem",
                width: isMobile ? "10rem" : "10rem",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
          </PictureContainer>
          <PictureContainer ref={ref}>
            <img
              src={Logoname}
              alt="me"
              style={{
                height: "12rem",
                marginTop: "-4.5rem",
                zIndex: "1",
                paddingRight : "22px",
              }}
            />
          </PictureContainer>
          <Title>‌✧  A VAMPIRE TATTOO ARTIST FASCINATED BY NATURE AND DARK CREATURES.  ✧</Title>
        </div>
      </motion.div>
    </CgvContainer>
  );
};

export default Links;
