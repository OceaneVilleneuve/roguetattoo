import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Merch3 from "../../assets/IMG_5258.PNG";


const MerchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedPicture = styled.img`
  object-fit: cover;
  filter: opacity(25%);
  position: absolute;
  zIndex: -3,
  left: 50%;
  transform: translateX(-50%);

`;

const MerchTitle = styled.h2`
  color: white;
  text-align: center;
  color: white;
  z-index: 2;
  filter: opacity(100%);
`;

const Name = styled.span`
  color: #70e000;
  font-family: "Metal Vengeance";
  filter: opacity(100%);
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
        minHeight: isMobile ? "63vh" : "103vh",
        marginTop: isMobile ? "-6.5rem" : "0rem",
        marginBottom: isMobile ? "5.5rem" : "10rem",
      }}
    >
            <motion.div
              key={animationKey}
              initial={{ x: +50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              style={!inView ? { visibility: "hidden" } : {}}
            >
    <AnimatedPicture
              style={{
                height: isMobile ? "480px" : "1000px",
                width: isMobile ? "363px" : "700px",
                objectFit: "cover",
                left: "50%",

              }}
              src={Merch3}
              alt="Tshirt"
                      />
              <div
                    style={{
        marginTop: isMobile ? "8rem" : "18rem",
      }}>
                <MerchTitle
                  style={{
                    fontSize: isMobile ? "1.3rem" : "2.5rem",
                  }}
                >
                  VOUS POUVEZ RETROUVER
                  <br />
                  MON MERCH
                  <br/>
                  <br/>
                  EN CLIQUANT SUR LE LIEN
                  <br />
                  DE LA BOUTIQUE :
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
            </motion.div>
    </MerchContainer>
  );
};

export default Merch;
