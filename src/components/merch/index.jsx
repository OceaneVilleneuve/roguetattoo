import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Merch3 from "../../assets/IMG_5511.PNG";


const MerchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedPicture = styled.img`
  object-fit: cover;
  filter: opacity(25%);
  zIndex: -3,

`;

const MerchTitle = styled.h2`
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Name = styled.span`
  color: #70e000;
  font-family: "Metal Vengeance";
`;
const SocialLink = styled.a`
  text-decoration: none;
  color: #70e000;
  font-family: "Metal Vengeance";
  &:hover {
  text-shadow: 2px 2px 10px #fff;

    filter: dropshadow(color=#fff, offx=2, offy=2);
  }
`;

const Merch = () => {
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
    <MerchContainer
      id="merchPage"
      ref={ref}
      style={{
        minHeight: isMobile ? "65vh" : "96vh",
        marginTop: isMobile ? "4.5rem" : "0rem",
      }}
    >
            <motion.div
              key={animationKey}
              initial={{ x: +50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              style={!inView ? { visibility: "hidden" } : {}}
            >
              <div>
                <MerchTitle
                  style={{
                    fontSize: isMobile ? "1.2rem" : "2.5rem",
                  }}
                >
                  VOUS POUVEZ RETROUVER MON MERCH
                  <br/>
                  <br/>
                  EN CLIQUANT SUR LE LIEN DE LA BOUTIQUE :
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                <SocialLink
            style={{
              paddingBottom: "4rem",
            }}
            href="https://countess-rogue.printify.me"
          >
            ❱ <Name>LA BOUTIQUE</Name> ❰
          </SocialLink>
                </MerchTitle>
              </div>
              <AnimatedPicture
              key={animationKey}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              style={{
                zIndex: -3,
                height: isMobile ? "300px" : "900px",
                width: isMobile ? "300px" : "900px",
                top: "19rem",
                left: "1rem",
              }}
              src={Merch3}
              alt="Tshirt"
                      />
            </motion.div>
    </MerchContainer>
  );
};

export default Merch;
