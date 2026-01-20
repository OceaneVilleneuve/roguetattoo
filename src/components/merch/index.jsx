import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Merch1 from "../../assets/IMG_5508.JPG";
import Merch2 from "../../assets/IMG_5509.JPG";
import Merch3 from "../../assets/IMG_5510.JPG";


const MerchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MerchTitle = styled.h2`
  padding: 2rem 5rem;
  color: white;
  text-align: center;
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
        height: isMobile ? "80vh" : "100vh",
        marginTop: isMobile ? "3rem" : "20rem",
        textAlign: "center",
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
            href="https://merch.rogue.tattoo"
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
