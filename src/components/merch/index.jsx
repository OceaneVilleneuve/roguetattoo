import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


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
                  ❱ <Name>LA BOUTIQUE</Name> ❰
                </MerchTitle>
              </div>
            </motion.div>
    </MerchContainer>
  );
};

export default Merch;
